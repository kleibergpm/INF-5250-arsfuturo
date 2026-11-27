import jwt from "jsonwebtoken";
import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

const database = vi.hoisted(() => ({
	$transaction: vi.fn(),
	medicalService: {
		updateMany: vi.fn(),
		findUniqueOrThrow: vi.fn(),
		findMany: vi.fn(),
	},
	providerPayment: { create: vi.fn() },
	notification: { create: vi.fn() },
	policy: { findMany: vi.fn(), updateMany: vi.fn() },
	invoice: {
		createMany: vi.fn(),
		findMany: vi.fn(),
		updateMany: vi.fn(),
		findUniqueOrThrow: vi.fn(),
	},
}));
vi.mock("../src/lib/prisma.js", () => ({ prisma: database }));

import app from "../src/app.js";
import { env } from "../src/lib/env.js";
import { Prisma } from "../src/lib/generated/client/index.js";

const id = "cbda596d-7751-4284-a71a-7ec0bd64d368";
const auth = (role: string) =>
	`Bearer ${jwt.sign({ sub: "test-user", role }, env.jwtSecret)}`;
const payload = {
	serviceId: id,
	amount: 89.99,
	bankReference: "TEST-REF",
	method: "ACH",
};
const payment = {
	id,
	...payload,
	amount: new Prisma.Decimal("89.99"),
	status: "PROCESSED",
};

beforeEach(() => {
	vi.resetAllMocks();
	database.$transaction.mockImplementation((operation) => operation(database));
});

const issue = (body = payload) =>
	request(app)
		.post("/api/pagos")
		.set("Authorization", auth("ADMINISTRATOR"))
		.send(body);
const invoicePath = (action: string) => `/api/facturas/${id}/${action}`;

describe("SCRUM-40 y SCRUM-42 · Servicios y pagos", () => {
	it("expone el saldo exacto y la elegibilidad de servicios, incluidos rechazos previos", async () => {
		const service = {
			id,
			status: "PENDING_PAYMENT",
			cost: new Prisma.Decimal("100.10"),
			copay: new Prisma.Decimal("10.11"),
		};
		database.medicalService.findMany.mockResolvedValue([
			{ ...service, payment: null },
			{ ...service, payment: { status: "REJECTED" } },
			{ ...service, copay: service.cost, payment: null },
		]);
		const { body } = await request(app)
			.get("/api/servicios")
			.set("Authorization", auth("AGENT"))
			.expect(200);
		expect(body).toMatchObject([
			{ paymentEligible: true, payableAmount: "89.99", paymentStatus: null },
			{
				paymentEligible: false,
				payableAmount: "89.99",
				paymentStatus: "REJECTED",
			},
			{ paymentEligible: false, payableAmount: "0.00", paymentStatus: null },
		]);
	});

	it("valida el importe y devuelve el pago existente en un reintento idéntico", async () => {
		database.medicalService.updateMany
			.mockResolvedValueOnce({ count: 1 })
			.mockResolvedValueOnce({ count: 1 })
			.mockResolvedValue({ count: 0 });
		const service = {
			status: "PAID",
			cost: new Prisma.Decimal("100.10"),
			copay: new Prisma.Decimal("10.11"),
			providerId: "provider",
		};
		database.medicalService.findUniqueOrThrow
			.mockResolvedValueOnce({ ...service, payment: null })
			.mockResolvedValueOnce({ ...service, payment: null })
			.mockResolvedValue({ ...service, payment });
		database.providerPayment.create.mockResolvedValue(payment);
		await issue({ ...payload, amount: 90 }).expect(422);
		await issue().expect(201);
		await issue().expect(200);
		await issue({ ...payload, bankReference: "OTHER" }).expect(409);
		expect(database.providerPayment.create).toHaveBeenCalledTimes(1);
		expect(database.notification.create).toHaveBeenCalledTimes(1);
		expect(database.medicalService.updateMany).toHaveBeenCalledWith({
			where: { id, status: "PENDING_PAYMENT" },
			data: { status: "PAID" },
		});
	});

	it("bloquea la reemisión automática de un pago rechazado", async () => {
		database.medicalService.updateMany.mockResolvedValue({ count: 1 });
		database.medicalService.findUniqueOrThrow.mockResolvedValue({
			payment: { ...payment, status: "REJECTED" },
		});
		await issue().expect(409);
		expect(database.providerPayment.create).not.toHaveBeenCalled();
	});
});

describe("SCRUM-43 · Facturación", () => {
	const generate = (period: string) =>
		request(app)
			.post("/api/facturas/generar")
			.set("Authorization", auth("ADMINISTRATOR"))
			.send({ period });

	it("usa el mes solicitado, incluye un febrero bisiesto y conserva facturas ya generadas", async () => {
		database.policy.findMany.mockResolvedValue([
			{ id: "QA", monthlyPremium: 1500 },
		]);
		database.invoice.createMany
			.mockResolvedValueOnce({ count: 1 })
			.mockResolvedValue({ count: 0 });
		const invoice = {
			policyId: "QA",
			period: "2024-02",
			dueDate: new Date("2024-02-10"),
			status: "OVERDUE",
		};
		database.invoice.findMany.mockResolvedValue([invoice]);

		await generate("2024-13").expect(422);
		await generate("2024-02").expect(201);
		await generate("2024-02").expect(200);
		expect(database.policy.findMany).toHaveBeenCalledWith(
			expect.objectContaining({
				where: {
					status: { in: ["ACTIVE", "IN_GRACE"] },
					startDate: { lte: new Date("2024-02-29") },
					endDate: { gte: new Date("2024-02-01") },
				},
			}),
		);
		expect(database.invoice.createMany).toHaveBeenCalledWith({
			skipDuplicates: true,
			data: [
				expect.objectContaining({
					dueDate: new Date("2024-02-10"),
					status: "OVERDUE",
				}),
			],
		});
	});

	it("protege una factura pagada contra gracia, suspensión y cambios de referencia", async () => {
		database.invoice.updateMany.mockResolvedValue({ count: 0 });
		database.invoice.findUniqueOrThrow.mockResolvedValue({
			id,
			status: "PAID",
			reference: "ALREADY-PAID",
		});
		const token = auth("ADMINISTRATOR");
		await request(app)
			.patch(invoicePath("gracia"))
			.set("Authorization", token)
			.expect(409);
		await request(app)
			.patch(invoicePath("suspender"))
			.set("Authorization", token)
			.expect(409);
		await request(app)
			.patch(invoicePath("pagar"))
			.set("Authorization", token)
			.send({ reference: "OTHER" })
			.expect(409);
		await request(app)
			.patch(invoicePath("pagar"))
			.set("Authorization", token)
			.send({ reference: "ALREADY-PAID" })
			.expect(200);
		expect(database.policy.updateMany).not.toHaveBeenCalled();
	});
});
