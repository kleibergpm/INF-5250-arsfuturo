import { BusinessRuleError } from "../lib/business-rule-error.js";
import {
	type ClaimStatus,
	type Invoice,
	type MedicalService,
	type PaymentStatus,
	type PolicyStatus,
	Prisma,
} from "../lib/generated/client/index.js";
import { prisma } from "../lib/prisma.js";
import {
	type NotificationService,
	notificationService,
} from "../services/notifications.service.js";

const dateOnly = (date: Date) => date.toISOString().slice(0, 10);
const payableAmount = (service: Pick<MedicalService, "cost" | "copay">) =>
	Prisma.Decimal.max(0, service.cost.minus(service.copay));

function serviceResponse<
	T extends MedicalService & { payment: { status: PaymentStatus } | null },
>({ payment, ...service }: T) {
	const amount = payableAmount(service);
	return {
		...service,
		paymentStatus: payment?.status ?? null,
		paymentEligible:
			service.status === "PENDING_PAYMENT" && !payment && amount.gt(0),
		payableAmount: amount.toFixed(2),
	};
}

function invoiceResponse<T extends Invoice>(invoice: T, now: Date): T {
	return invoice.status === "PENDING" &&
		dateOnly(invoice.dueDate) < dateOnly(now)
		? { ...invoice, status: "OVERDUE" }
		: invoice;
}
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
				status: "PENDING",
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
			(authorizationId &&
				(authorization?.status !== "APPROVED" ||
					authorization.insuredId !== insuredId ||
					authorization.providerId !== providerId))
		) {
			return res.status(422).json({
				error: "VALIDATION_ERROR",
				message: "Servicio no elegible o autorización no aprobada",
			});
		}
		const service = await this.database.medicalService.create({
			data: { ...req.body, copay: insured.plan.consultationCopay },
		});
		res.status(201).json(serviceResponse({ ...service, payment: null }));
	};

	listServices = async (_req, res) => {
		const services = await this.database.medicalService.findMany({
			include: {
				insured: true,
				provider: true,
				authorization: true,
				payment: { select: { status: true } },
			},
			orderBy: { createdAt: "desc" },
		});
		res.json(services.map(serviceResponse));
	};

	issuePayment = async (req, res) => {
		const { serviceId, amount, bankReference, method } = req.body;
		const result = await this.database.$transaction(async (transaction) => {
			// The conditional write serializes attempts for one service and rolls back on failure.
			const updated = await transaction.medicalService.updateMany({
				where: { id: serviceId, status: "PENDING_PAYMENT" },
				data: { status: "PAID" },
			});
			const service = await transaction.medicalService.findUniqueOrThrow({
				where: { id: serviceId },
				include: { payment: true },
			});
			const previous = service.payment;
			if (previous?.status === "REJECTED") {
				throw new BusinessRuleError(
					409,
					"El pago rechazado requiere revisión antes de volver a emitirlo",
				);
			}
			if (
				!updated.count &&
				previous?.status === "PROCESSED" &&
				previous.bankReference === bankReference &&
				previous.method === method &&
				previous.amount.eq(amount)
			) {
				return { payment: previous, created: false };
			}
			if (!updated.count || previous) {
				throw new BusinessRuleError(
					409,
					"El servicio ya tiene un pago registrado",
				);
			}
			const expected = payableAmount(service);
			if (!expected.gt(0) || !expected.eq(amount)) {
				throw new BusinessRuleError(
					422,
					"El importe debe coincidir con el costo menos el copago y ser positivo",
				);
			}
			const payment = await transaction.providerPayment.create({
				data: {
					serviceId,
					providerId: service.providerId,
					amount: expected,
					bankReference,
					method,
				},
			});
			await this.notifications.create(
				{
					type: "success",
					title: "Pago procesado",
					message: `Pago ${payment.id} registrado.`,
				},
				transaction,
			);
			return { payment, created: true };
		});
		res.status(result.created ? 201 : 200).json(result.payment);
	};

	generateInvoices = async (req, res) => {
		const issuedAt = this.today();
		const period = req.body.period ?? issuedAt.toISOString().slice(0, 7);
		const start = new Date(`${period}-01`);
		const end = new Date(start);
		end.setUTCMonth(end.getUTCMonth() + 1, 0);
		const dueDate = new Date(`${period}-10`);
		const result = await this.database.$transaction(async (transaction) => {
			const policies = await transaction.policy.findMany({
				where: {
					status: { in: ["ACTIVE", "IN_GRACE"] },
					startDate: { lte: end },
					endDate: { gte: start },
				},
				select: { id: true, monthlyPremium: true },
				orderBy: { id: "asc" },
			});
			const status =
				dateOnly(dueDate) < dateOnly(issuedAt) ? "OVERDUE" : "PENDING";
			const created = policies.length
				? await transaction.invoice.createMany({
						skipDuplicates: true,
						data: policies.map((policy) => ({
							policyId: policy.id,
							period,
							issuedAt,
							dueDate,
							amount: policy.monthlyPremium,
							status,
						})),
					})
				: { count: 0 };
			const invoices = await transaction.invoice.findMany({
				where: { period },
				orderBy: { policyId: "asc" },
			});
			return { invoices, created: created.count };
		});
		res
			.status(result.created ? 201 : 200)
			.json(
				result.invoices.map((invoice) => invoiceResponse(invoice, issuedAt)),
			);
	};

	listInvoices = async (_req, res) => {
		const now = this.today();
		const invoices = await this.database.invoice.findMany({
			include: { policy: true },
			orderBy: { createdAt: "desc" },
		});
		res.json(invoices.map((invoice) => invoiceResponse(invoice, now)));
	};

	payInvoice = async (req, res) => {
		const paidAt = this.today();
		const id = req.params.id;
		const invoice = await this.database.$transaction(async (transaction) => {
			const updated = await transaction.invoice.updateMany({
				where: { id, status: { not: "PAID" } },
				data: {
					status: "PAID",
					paidAt,
					reference: req.body.reference,
				},
			});
			const invoiceRow = await transaction.invoice.findUniqueOrThrow({
				where: { id },
			});
			if (!updated.count) {
				if (invoiceRow.reference === req.body.reference) return invoiceRow;
				throw new BusinessRuleError(
					409,
					"La factura ya fue pagada con otra referencia",
				);
			}
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
		const id = req.params.id;
		const now = this.today();
		const invoice = await this.database.$transaction(async (transaction) => {
			const updated = await transaction.invoice.updateMany({
				where: { id, status: { not: "PAID" } },
				data: { reminderSent: true },
			});
			if (!updated.count) {
				await transaction.invoice.findUniqueOrThrow({ where: { id } });
				throw new BusinessRuleError(409, "La factura ya fue pagada");
			}
			await transaction.invoice.updateMany({
				where: {
					id,
					status: "PENDING",
					dueDate: { lt: new Date(dateOnly(now)) },
				},
				data: { status: "OVERDUE" },
			});
			return transaction.invoice.findUniqueOrThrow({ where: { id } });
		});
		res.json(invoiceResponse(invoice, now));
	};

	graceInvoice = async (req, res) => {
		res.json(
			await this.changeOverdueInvoice(req.params.id, "IN_GRACE", "IN_GRACE"),
		);
	};

	suspendInvoice = async (req, res) => {
		await this.changeOverdueInvoice(req.params.id, "OVERDUE", "SUSPENDED");
		res.status(204).end();
	};

	private changeOverdueInvoice(
		id: string,
		status: "IN_GRACE" | "OVERDUE",
		policyStatus: "IN_GRACE" | "SUSPENDED",
	) {
		const now = this.today();
		return this.database.$transaction(async (transaction) => {
			const updated = await transaction.invoice.updateMany({
				where: {
					id,
					status: { not: "PAID" },
					dueDate: { lt: new Date(dateOnly(now)) },
				},
				data: { status },
			});
			const invoice = await transaction.invoice.findUniqueOrThrow({
				where: { id },
			});
			if (!updated.count) {
				throw new BusinessRuleError(
					409,
					invoice.status === "PAID"
						? "La factura ya fue pagada"
						: "La factura aún no está vencida",
				);
			}
			await this.setPolicyFromInvoice(
				transaction,
				invoice.policyId,
				policyStatus,
				now,
			);
			return invoice;
		});
	}

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
