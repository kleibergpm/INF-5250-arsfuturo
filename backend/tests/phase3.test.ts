import jwt from "jsonwebtoken";
import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

const database = vi.hoisted(() => ({
	$transaction: vi.fn(),
	claim: {
		findMany: vi.fn(),
		findUnique: vi.fn(),
		findUniqueOrThrow: vi.fn(),
		updateMany: vi.fn(),
		update: vi.fn(),
		delete: vi.fn(),
	},
	insured: { update: vi.fn() },
	provider: { create: vi.fn() },
	policy: {
		create: vi.fn(),
		findUniqueOrThrow: vi.fn(),
		update: vi.fn(),
		updateMany: vi.fn(),
	},
	invoice: { update: vi.fn(), findUnique: vi.fn() },
	notification: { create: vi.fn() },
}));
vi.mock("../src/lib/prisma.js", () => ({ prisma: database }));

import app from "../src/app.js";
import { env } from "../src/lib/env.js";
import { Prisma } from "../src/lib/generated/client/index.js";

const id = "cbda596d-7751-4284-a71a-7ec0bd64d368";
const claims = `/api/reclamos/${id}`;
const policy = {
	id: "PL-01",
	company: "Empresa de prueba",
	planId: "BASICO",
	startDate: "2025-01-01",
	endDate: "2025-12-31",
	monthlyPremium: 1500,
};
const auth = (role: string) =>
	`Bearer ${jwt.sign({ sub: "test-user", role }, env.jwtSecret)}`;
const missing = () =>
	new Prisma.PrismaClientKnownRequestError("Registro inexistente", {
		code: "P2025",
		clientVersion: "test",
	});

beforeEach(() => {
	vi.resetAllMocks();
	database.$transaction.mockImplementation((work) => work(database));
});

describe("SCRUM-38 · Reclamaciones", () => {
	it("permite la consulta al supervisor con una proyección de nombre e ID", async () => {
		database.claim.findMany.mockResolvedValue([]);
		await request(app)
			.get("/api/reclamos")
			.set("Authorization", auth("SUPERVISOR"))
			.expect(200, []);
		expect(database.claim.findMany).toHaveBeenCalledWith(
			expect.objectContaining({
				include: {
					insured: { select: { id: true, name: true } },
					provider: { select: { id: true, name: true } },
				},
			}),
		);
		await request(app)
			.get(claims)
			.set("Authorization", auth("INSURED"))
			.expect(403);
		await request(app)
			.post("/api/reclamos")
			.set("Authorization", auth("SUPERVISOR"))
			.expect(403);
	});

	it("impide decidir sin sesión, con un rol no revisor o con un ID inválido", async () => {
		await request(app).patch(`${claims}/aprobar`).expect(401);
		await request(app)
			.patch(`${claims}/aprobar`)
			.set("Authorization", auth("AGENT"))
			.expect(403);
		await request(app)
			.patch("/api/reclamos/invalido/rechazar")
			.set("Authorization", auth("SUPERVISOR"))
			.expect(422);
		expect(database.$transaction).not.toHaveBeenCalled();
	});

	it("decide una vez y responde de forma idempotente al reintento", async () => {
		database.claim.updateMany
			.mockResolvedValueOnce({ count: 1 })
			.mockResolvedValue({ count: 0 });
		database.claim.findUniqueOrThrow.mockResolvedValue({
			id,
			status: "REJECTED",
		});
		for (const role of ["SUPERVISOR", "ADMINISTRATOR"]) {
			await request(app)
				.patch(`${claims}/rechazar`)
				.set("Authorization", auth(role))
				.expect(200, { id, status: "REJECTED" });
		}
		await request(app)
			.patch(`${claims}/aprobar`)
			.set("Authorization", auth("ADMINISTRATOR"))
			.expect(409);
		expect(database.claim.updateMany).toHaveBeenCalledWith({
			where: { id, status: "UNDER_REVIEW" },
			data: { status: "REJECTED" },
		});
		expect(database.notification.create).toHaveBeenCalledTimes(1);
	});

	it("devuelve 404 si no existe el reclamo y 409 si se intenta editar o borrar uno decidido", async () => {
		database.claim.updateMany.mockResolvedValue({ count: 0 });
		database.claim.findUniqueOrThrow.mockRejectedValue(missing());
		database.claim.findUnique.mockResolvedValue({ id, status: "APPROVED" });
		database.claim.update.mockRejectedValue(missing());
		database.claim.delete.mockRejectedValue(missing());

		await request(app)
			.patch(`${claims}/aprobar`)
			.set("Authorization", auth("ADMINISTRATOR"))
			.expect(404);
		await request(app)
			.patch(claims)
			.set("Authorization", auth("AGENT"))
			.send({ amount: 500 })
			.expect(409);
		await request(app)
			.delete(claims)
			.set("Authorization", auth("ADMINISTRATOR"))
			.expect(409);
		expect(database.claim.update).toHaveBeenCalledWith(
			expect.objectContaining({
				where: { id, status: "UNDER_REVIEW" },
			}),
		);
		expect(database.claim.delete).toHaveBeenCalledWith({
			where: { id, status: "UNDER_REVIEW" },
		});
		expect(database.notification.create).not.toHaveBeenCalled();
	});
});

describe("SCRUM-39, SCRUM-41 y SCRUM-44 · Afiliados, pólizas y proveedores", () => {
	it("mantiene los estados y permisos de edición de afiliados", async () => {
		const path = `/api/afiliados/${id}`;
		await request(app)
			.patch(path)
			.set("Authorization", auth("SUPERVISOR"))
			.send({ status: "ACTIVE" })
			.expect(403);
		await request(app)
			.patch(path)
			.set("Authorization", auth("ADMINISTRATOR"))
			.send({ status: "INVALID" })
			.expect(422);
		expect(database.insured.update).not.toHaveBeenCalled();

		for (const status of ["SUSPENDED", "INACTIVE", "ACTIVE"]) {
			database.insured.update.mockResolvedValueOnce({ id, status });
			await request(app)
				.patch(path)
				.set("Authorization", auth("AGENT"))
				.send({ status })
				.expect(200, { id, status });
			expect(database.insured.update).toHaveBeenLastCalledWith(
				expect.objectContaining({ data: { status } }),
			);
		}
	});

	it("valida la fecha de alta y combina las ediciones parciales con la vigencia guardada", async () => {
		const { startDate, endDate } = policy;
		const stored = {
			startDate: new Date(startDate),
			endDate: new Date(endDate),
		};
		database.policy.findUniqueOrThrow.mockResolvedValue(stored);
		const token = auth("ADMINISTRATOR");

		await request(app)
			.post("/api/polizas")
			.set("Authorization", token)
			.send({ ...policy, endDate: "2024-12-31" })
			.expect(422);
		await request(app)
			.patch(`/api/polizas/${policy.id}`)
			.set("Authorization", token)
			.send({ startDate: "2026-01-01" })
			.expect(422);
		expect(database.policy.create).not.toHaveBeenCalled();
		expect(database.policy.update).not.toHaveBeenCalled();

		database.policy.update.mockResolvedValue({
			id: policy.id,
			endDate: startDate,
		});
		await request(app)
			.patch(`/api/polizas/${policy.id}`)
			.set("Authorization", token)
			.send({ endDate: startDate })
			.expect(200);
		expect(database.policy.update).toHaveBeenCalledWith(
			expect.objectContaining({
				where: { id: policy.id, ...stored },
				data: { endDate: new Date(startDate) },
			}),
		);
		await request(app)
			.patch(`/api/polizas/${policy.id}`)
			.set("Authorization", auth("AGENT"))
			.send({ status: "ACTIVE" })
			.expect(403);
	});

	it("registra el pago aunque la póliza no cumpla las condiciones de reactivación", async () => {
		database.invoice.update.mockResolvedValue({
			id,
			status: "PAID",
			policyId: policy.id,
		});
		database.policy.updateMany.mockResolvedValue({ count: 0 });
		await request(app)
			.patch(`/api/facturas/${id}/pagar`)
			.set("Authorization", auth("ADMINISTRATOR"))
			.send({ reference: "TEST" })
			.expect(200, { id, status: "PAID", policyId: policy.id });
		expect(database.policy.updateMany).toHaveBeenCalledWith({
			where: {
				id: policy.id,
				status: { not: "EXPIRED" },
				startDate: { lte: expect.any(Date) },
				endDate: { gte: expect.any(Date) },
			},
			data: { status: "ACTIVE" },
		});
		expect(database.insured.update).not.toHaveBeenCalled();
	});

	it("conserva city y rechaza una localidad compuesta solo por espacios", async () => {
		const data = {
			name: "Proveedor demo",
			type: "Clínica",
			phone: "0000000000",
		};
		const token = auth("AGENT");
		await request(app)
			.post("/api/proveedores")
			.set("Authorization", token)
			.send({ ...data, city: "   " })
			.expect(422);
		expect(database.provider.create).not.toHaveBeenCalled();
		database.provider.create.mockResolvedValue({ id, city: "Santo Domingo" });
		await request(app)
			.post("/api/proveedores")
			.set("Authorization", token)
			.send({ ...data, city: " Santo Domingo " })
			.expect(201);
		expect(database.provider.create).toHaveBeenCalledWith(
			expect.objectContaining({
				data: { ...data, city: "Santo Domingo" },
			}),
		);
	});
});
