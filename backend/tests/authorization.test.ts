import jwt from "jsonwebtoken";
import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { database, transaction } = vi.hoisted(() => ({
	database: { $transaction: vi.fn() },
	transaction: {
		authorization: { update: vi.fn() },
		notification: { create: vi.fn() },
	},
}));
vi.mock("../src/lib/prisma.js", () => ({ prisma: database }));

import app from "../src/app.js";
import { env } from "../src/lib/env.js";
import { Prisma } from "../src/lib/generated/client/index.js";

const id = "cbda596d-7751-4284-a71a-7ec0bd64d368";
const endpoint = `/api/autorizaciones/${id}/rechazar`;
const bearer = (role: string) =>
	`Bearer ${jwt.sign({ sub: "test-user", role }, env.jwtSecret)}`;

beforeEach(() => {
	vi.resetAllMocks();
	database.$transaction.mockImplementation((operation) =>
		operation(transaction),
	);
});

describe("rechazo de autorizaciones", () => {
	it("devuelve el estado rechazado y registra su notificación en la misma transacción", async () => {
		transaction.authorization.update.mockResolvedValue({
			id,
			status: "REJECTED",
		});

		const response = await request(app)
			.patch(endpoint)
			.set("Authorization", bearer("SUPERVISOR"));

		expect(response.status).toBe(200);
		expect(response.body).toMatchObject({ id, status: "REJECTED" });
		expect(transaction.authorization.update).toHaveBeenCalledWith({
			where: { id },
			data: { status: "REJECTED" },
		});
		expect(transaction.notification.create).toHaveBeenCalledWith({
			data: expect.objectContaining({
				type: "error",
				message: expect.stringContaining(id),
			}),
		});
	});

	it("devuelve 404 si la autorización no existe", async () => {
		transaction.authorization.update.mockRejectedValue(
			new Prisma.PrismaClientKnownRequestError("Registro inexistente", {
				code: "P2025",
				clientVersion: "test",
			}),
		);

		const response = await request(app)
			.patch(endpoint)
			.set("Authorization", bearer("ADMINISTRATOR"));

		expect(response.status).toBe(404);
		expect(transaction.notification.create).not.toHaveBeenCalled();
	});

	it("propaga el fallo de notificación a la transacción sin confirmar el rechazo", async () => {
		transaction.authorization.update.mockResolvedValue({
			id,
			status: "REJECTED",
		});
		transaction.notification.create.mockRejectedValue(
			new Error("No se pudo guardar la notificación"),
		);

		const response = await request(app)
			.patch(endpoint)
			.set("Authorization", bearer("ADMINISTRATOR"));

		expect(response.status).toBe(500);
		expect(response.body.error).toBe("INTERNAL_ERROR");
	});

	it("rechaza solicitudes sin autenticación, sin permiso o con ID inválido", async () => {
		expect((await request(app).patch(endpoint)).status).toBe(401);
		expect(
			(await request(app).patch(endpoint).set("Authorization", bearer("AGENT")))
				.status,
		).toBe(403);
		expect(
			(
				await request(app)
					.patch("/api/autorizaciones/invalida/rechazar")
					.set("Authorization", bearer("ADMINISTRATOR"))
			).status,
		).toBe(422);
		expect(database.$transaction).not.toHaveBeenCalled();
	});
});
