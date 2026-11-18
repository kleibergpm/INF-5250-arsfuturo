import {
	type ClaimStatus,
	type PolicyStatus,
	Prisma,
} from "../lib/generated/client/index.js";
import { prisma } from "../lib/prisma.js";
import {
	type NotificationService,
	notificationService,
} from "../services/notifications.service.js";

const dateOnly = (date: Date) => date.toISOString().slice(0, 10);
export const policyDatesInOrder = ({
	startDate,
	endDate,
}: {
	startDate: Date;
	endDate: Date;
}) => dateOnly(startDate) <= dateOnly(endDate);

const missingRecord = (error: unknown) =>
	error instanceof Prisma.PrismaClientKnownRequestError &&
	(error as { code: string }).code === "P2025";

const claimConflict = (res) =>
	res.status(409).json({
		error: "CONFLICT",
		message: "El reclamo ya fue decidido",
	});

export class BusinessController {
	constructor(
		private readonly database = prisma,
		private readonly notifications: NotificationService = notificationService,
	) {}

	private coverageFor(coverage, procedure) {
		const normalizedProcedure = procedure.toLowerCase();
		if (normalizedProcedure.includes("consulta")) return coverage.consultas;
		if (normalizedProcedure.includes("laborat")) return coverage.laboratorio;
		if (normalizedProcedure.includes("odont")) return coverage.odontologia;
		if (
			normalizedProcedure.includes("psico") ||
			normalizedProcedure.includes("mental")
		)
			return coverage.saludMental;
		if (
			normalizedProcedure.includes("rayos") ||
			normalizedProcedure.includes("imagen")
		)
			return coverage.emergencias || coverage.hospitalizacion;
		return true;
	}

	private today() {
		return new Date();
	}

	createAuthorization = async (req, res) => {
		const { insuredId, providerId, procedure } = req.body;
		const [insured, provider] = await Promise.all([
			this.database.insured.findUnique({
				where: { id: insuredId },
				include: { plan: true },
			}),
			this.database.provider.findUnique({ where: { id: providerId } }),
		]);

		if (!insured || !provider)
			return res.status(422).json({
				error: "VALIDATION_ERROR",
				message: "Afiliado o proveedor inexistente",
			});

		const eligible =
			insured.status === "ACTIVE" &&
			this.coverageFor(insured.plan.coverage, procedure);
		const row = await this.database.authorization.create({
			data: {
				insuredId,
				providerId,
				procedure,
				copay: eligible ? insured.plan.consultationCopay : 0,
				status: eligible ? "APPROVED" : "PENDING",
			},
			include: { insured: true, provider: true },
		});
		await this.notifications.create({
			type: "info",
			title: "Autorización creada",
			message: `La autorización ${row.id} está ${row.status}.`,
		});
		res.status(201).json(row);
	};

	decideAuthorization = (status) => async (req, res) => {
		const row = await this.database.$transaction(async (transaction) => {
			const authorization = await transaction.authorization.update({
				where: { id: req.params.id },
				data: { status },
			});
			await this.notifications.create(
				{
					type: status === "APPROVED" ? "success" : "error",
					title: "Autorización procesada",
					message: `Autorización ${authorization.id}: ${status}.`,
				},
				transaction,
			);
			return authorization;
		});
		res.json(row);
	};

	decideClaim =
		(status: Exclude<ClaimStatus, "UNDER_REVIEW">) => async (req, res) => {
			const id = req.params.id;
			const claim = await this.database.$transaction(async (transaction) => {
				const updated = await transaction.claim.updateMany({
					where: { id, status: "UNDER_REVIEW" },
					data: { status },
				});
				const row = await transaction.claim.findUniqueOrThrow({
					where: { id },
				});
				if (updated.count) {
					await this.notifications.create(
						{
							type: status === "APPROVED" ? "success" : "error",
							title: "Reclamo procesado",
							message: `Reclamo ${row.id}: ${status}.`,
						},
						transaction,
					);
				}
				return row;
			});
			if (claim.status !== status) return claimConflict(res);
			res.json(claim);
		};

	private async mutatePendingClaim<T>(
		id: string,
		res,
		mutate: (where: { id: string; status: "UNDER_REVIEW" }) => Promise<T>,
	) {
		try {
			return await mutate({ id, status: "UNDER_REVIEW" });
		} catch (error) {
			if (!missingRecord(error)) throw error;
			const claim = await this.database.claim.findUnique({ where: { id } });
			if (!claim) throw error;
			claimConflict(res);
		}
	}

	editPendingClaim = async (req, res) => {
		const claim = await this.mutatePendingClaim(req.params.id, res, (where) =>
			this.database.claim.update({
				where,
				data: req.body,
				include: { insured: true, provider: true },
			}),
		);
		if (claim) res.json(claim);
	};

	removePendingClaim = async (req, res) => {
		const claim = await this.mutatePendingClaim(req.params.id, res, (where) =>
			this.database.claim.delete({ where }),
		);
		if (claim) res.status(204).end();
	};

	updatePolicy = async (req, res) => {
		const id = req.params.id;
		const { startDate, endDate } = req.body;
		let where: Prisma.PolicyWhereUniqueInput = { id };
		if (startDate || endDate) {
			const current = await this.database.policy.findUniqueOrThrow({
				where,
				select: { startDate: true, endDate: true },
			});
			if (
				!policyDatesInOrder({
					startDate: startDate ?? current.startDate,
					endDate: endDate ?? current.endDate,
				})
			) {
				return res.status(422).json({
					error: "VALIDATION_ERROR",
					message: "El fin de vigencia debe ser igual o posterior al inicio",
				});
			}
			// Ensure a concurrent change to either date cannot invalidate this check.
			where = { id, ...current };
		}
		try {
			const policy = await this.database.policy.update({
				where,
				data: req.body,
				include: { plan: true },
			});
			res.json(policy);
		} catch (error) {
			if (!(startDate || endDate) || !missingRecord(error)) throw error;
			return res.status(409).json({
				error: "CONFLICT",
				message:
					"La vigencia cambió durante la edición. Vuelve a consultar la póliza.",
			});
		}
	};

	createService = async (req, res) => {
		const { insuredId, providerId, authorizationId } = req.body;
		const [insured, provider, authorization] = await Promise.all([
			this.database.insured.findUnique({
				where: { id: insuredId },
				include: { plan: true },
			}),
			this.database.provider.findUnique({ where: { id: providerId } }),
			authorizationId
				? this.database.authorization.findUnique({
						where: { id: authorizationId },
					})
				: null,
		]);
		if (
			!insured ||
			!provider ||
			insured.status !== "ACTIVE" ||
			(authorizationId && authorization?.status !== "APPROVED")
		) {
			return res.status(422).json({
				error: "VALIDATION_ERROR",
				message: "Servicio no elegible o autorización no aprobada",
			});
		}
		res.status(201).json(
			await this.database.medicalService.create({
				data: { ...req.body, copay: insured.plan.consultationCopay },
			}),
		);
	};

	issuePayment = async (req, res) => {
		const { serviceId, amount, bankReference, method } = req.body;
		const result = await this.database.$transaction(async (transaction) => {
			const service = await transaction.medicalService.findUnique({
				where: { id: serviceId },
			});
			if (!service || service.status === "PAID") {
				const error = Object.assign(
					new Error("Servicio inexistente o ya pagado"),
					{ status: 422 },
				);
				throw error;
			}
			const payment = await transaction.providerPayment.create({
				data: {
					serviceId,
					providerId: service.providerId,
					amount,
					bankReference,
					method,
				},
			});
			await transaction.medicalService.update({
				where: { id: serviceId },
				data: { status: "PAID" },
			});
			return payment;
		});
		await this.notifications.create({
			type: "success",
			title: "Pago procesado",
			message: `Pago ${result.id} registrado.`,
		});
		res.status(201).json(result);
	};

	generateInvoices = async (req, res) => {
		const period = req.body.period || this.today().toISOString().slice(0, 7);
		const existing = await this.database.invoice.count({ where: { period } });
		if (existing)
			return res
				.status(409)
				.json({ error: "CONFLICT", message: `Ya hay facturas para ${period}` });
		const policies = await this.database.policy.findMany({
			where: { status: { in: ["ACTIVE", "IN_GRACE"] } },
		});
		const issuedAt = this.today();
		const dueDate = new Date(issuedAt.getFullYear(), issuedAt.getMonth(), 10);
		const rows = await this.database.$transaction(
			policies.map((policy) =>
				this.database.invoice.create({
					data: {
						policyId: policy.id,
						period,
						issuedAt,
						dueDate,
						amount: policy.monthlyPremium,
					},
				}),
			),
		);
		res.status(201).json(rows);
	};

	payInvoice = async (req, res) => {
		const paidAt = this.today();
		const invoice = await this.database.$transaction(async (transaction) => {
			const invoiceRow = await transaction.invoice.update({
				where: { id: req.params.id },
				data: {
					status: "PAID",
					paidAt,
					reference: req.body.reference,
				},
			});
			await this.setPolicyFromInvoice(
				transaction,
				invoiceRow.policyId,
				"ACTIVE",
				paidAt,
			);
			return invoiceRow;
		});
		res.json(invoice);
	};

	remindInvoice = async (req, res) => {
		const invoice = await this.database.invoice.findUnique({
			where: { id: req.params.id },
		});
		if (!invoice)
			return res
				.status(404)
				.json({ error: "NOT_FOUND", message: "Factura no encontrada" });
		if (invoice.status === "PAID")
			return res
				.status(409)
				.json({ error: "CONFLICT", message: "La factura ya fue pagada" });
		res.json(
			await this.database.invoice.update({
				where: { id: req.params.id },
				data: { reminderSent: true, status: "OVERDUE" },
			}),
		);
	};

	graceInvoice = async (req, res) => {
		const invoice = await this.database.$transaction(async (transaction) => {
			const row = await transaction.invoice.update({
				where: { id: req.params.id },
				data: { status: "IN_GRACE" },
			});
			await this.setPolicyFromInvoice(transaction, row.policyId, "IN_GRACE");
			return row;
		});
		res.json(invoice);
	};

	suspendInvoice = async (req, res) => {
		const invoice = await this.database.invoice.findUnique({
			where: { id: req.params.id },
		});
		if (!invoice)
			return res
				.status(404)
				.json({ error: "NOT_FOUND", message: "Factura no encontrada" });
		await this.setPolicyFromInvoice(
			this.database,
			invoice.policyId,
			"SUSPENDED",
		);
		res.status(204).end();
	};

	private setPolicyFromInvoice(
		database: Pick<Prisma.TransactionClient, "policy">,
		id: string,
		status: Exclude<PolicyStatus, "EXPIRED">,
		operationDate = this.today(),
	) {
		const date = new Date(dateOnly(operationDate));
		return database.policy.updateMany({
			where: {
				id,
				status: { not: "EXPIRED" },
				startDate: { lte: date },
				endDate: { gte: date },
			},
			data: { status },
		});
	}

	dashboard = async (_req, res) => {
		const [activos, reclamosPendientes, autorizacionesHoy, montoReclamos] =
			await Promise.all([
				this.database.insured.count({ where: { status: "ACTIVE" } }),
				this.database.claim.count({ where: { status: "UNDER_REVIEW" } }),
				this.database.authorization.count({
					where: { date: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } },
				}),
				this.database.claim.aggregate({ _sum: { amount: true } }),
			]);
		res.json({
			activos,
			reclamosPendientes,
			autorizacionesHoy,
			montoReclamos: montoReclamos._sum.amount || 0,
		});
	};
}

export const businessController = new BusinessController();
