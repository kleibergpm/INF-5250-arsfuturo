import { prisma } from "../lib/prisma.js";
import {
	type NotificationService,
	notificationService,
} from "../services/notifications.service.js";

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
		const row = await this.database.authorization.update({
			where: { id: req.params.id },
			data: { status },
		});
		await this.notifications.create({
			type: status === "APPROVED" ? "success" : "error",
			title: "Autorización procesada",
			message: `Autorización ${row.id}: ${status}.`,
		});
		res.json(row);
	};

	decideClaim = (status) => async (req, res) => {
		const row = await this.database.claim.update({
			where: { id: req.params.id },
			data: { status },
		});
		await this.notifications.create({
			type: status === "APPROVED" ? "success" : "error",
			title: "Reclamo procesado",
			message: `Reclamo ${row.id}: ${status}.`,
		});
		res.json(row);
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
				(!authorization || authorization.status !== "APPROVED"))
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
		const invoice = await this.database.$transaction(async (transaction) => {
			const invoiceRow = await transaction.invoice.update({
				where: { id: req.params.id },
				data: {
					status: "PAID",
					paidAt: this.today(),
					reference: req.body.reference,
				},
			});
			await transaction.policy.update({
				where: { id: invoiceRow.policyId },
				data: { status: "ACTIVE" },
			});
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
		const invoice = await this.database.invoice.update({
			where: { id: req.params.id },
			data: { status: "IN_GRACE" },
		});
		await this.database.policy.update({
			where: { id: invoice.policyId },
			data: { status: "IN_GRACE" },
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
		await this.database.policy.update({
			where: { id: invoice.policyId },
			data: { status: "SUSPENDED" },
		});
		res.status(204).end();
	};

	dashboard = async (req, res) => {
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
