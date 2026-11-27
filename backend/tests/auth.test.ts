import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import request from "supertest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const database = vi.hoisted(() => ({
	user: { findFirst: vi.fn(), findUnique: vi.fn(), create: vi.fn() },
	authorization: { findMany: vi.fn() },
}));
vi.mock("../src/lib/prisma.js", () => ({ prisma: database }));

import app from "../src/app.js";
import { env } from "../src/lib/env.js";

const input = {
	username: "afiliado",
	password: "clave123",
	name: "Usuario prueba",
	nationalId: "000-0000000-0",
};
const bearer = (role = "INSURED") =>
	`Bearer ${jwt.sign({ sub: "test-user", role }, env.jwtSecret)}`;
beforeEach(() => {
	vi.resetAllMocks();
	database.user.findFirst.mockResolvedValue(null);
	vi.stubGlobal(
		"fetch",
		vi.fn().mockResolvedValue(new Response(JSON.stringify({ valid: true }))),
	);
});
afterEach(() => vi.unstubAllGlobals());

describe("registro de afiliados", () => {
	it("crea únicamente el rol INSURED, normaliza cédula y cifra contraseña", async () => {
		database.user.create.mockResolvedValue({
			id: "test-user",
			username: input.username,
			name: input.name,
			role: "INSURED",
		});
		const response = await request(app)
			.post("/api/auth/register")
			.send({ ...input, role: "ADMINISTRATOR" });
		expect(response.status).toBe(201);
		const data = database.user.create.mock.calls[0][0].data;
		expect(data).toMatchObject({ nationalId: "00000000000", role: "INSURED" });
		expect(await bcrypt.compare(input.password, data.passwordHash)).toBe(true);
		expect(response.body.passwordHash).toBeUndefined();
	}, 20_000);
	it.each([400, 200])(
		"rechaza cédula inválida con respuesta externa %s",
		async (status) => {
			vi.stubGlobal(
				"fetch",
				vi
					.fn()
					.mockResolvedValue(
						new Response(JSON.stringify({ valid: false }), { status }),
					),
			);
			const response = await request(app)
				.post("/api/auth/register")
				.send(input);
			expect(response.status).toBe(400);
			expect(response.body.error).toBe("INVALID_CEDULA");
			expect(database.user.create).not.toHaveBeenCalled();
		},
	);
	it("rechaza payload inválido antes de consultar el servicio", async () => {
		expect(
			(
				await request(app)
					.post("/api/auth/register")
					.send({ ...input, nationalId: "abc" })
			).status,
		).toBe(422);
		expect(fetch).not.toHaveBeenCalled();
	});
	it("rechaza cuentas duplicadas", async () => {
		database.user.findFirst.mockResolvedValue({ id: "existing" });
		expect(
			(await request(app).post("/api/auth/register").send(input)).status,
		).toBe(409);
		expect(database.user.create).not.toHaveBeenCalled();
	});
	it("responde 503 si falla el servicio externo", async () => {
		vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
		expect(
			(await request(app).post("/api/auth/register").send(input)).status,
		).toBe(503);
		expect(database.user.create).not.toHaveBeenCalled();
	});
});
describe("consulta propia de autorizaciones", () => {
	it("filtra por la cédula de la cuenta aunque se solicite otra", async () => {
		database.user.findUnique.mockResolvedValue({ nationalId: "00000000000" });
		database.authorization.findMany.mockResolvedValue([]);
		const response = await request(app)
			.get("/api/mis-autorizaciones?nationalId=11111111111")
			.set("Authorization", bearer());
		expect(response.status).toBe(200);
		expect(database.authorization.findMany).toHaveBeenCalledWith(
			expect.objectContaining({
				where: {
					insured: { nationalId: { in: ["00000000000", "000-0000000-0"] } },
				},
			}),
		);
	});
	it("exige autenticación", async () => {
		expect((await request(app).get("/api/mis-autorizaciones")).status).toBe(
			401,
		);
	});
	it("rechaza otros roles y cuentas sin cédula", async () => {
		expect(
			(
				await request(app)
					.get("/api/mis-autorizaciones")
					.set("Authorization", bearer("AGENT"))
			).status,
		).toBe(403);
		database.user.findUnique.mockResolvedValue({ nationalId: null });
		expect(
			(
				await request(app)
					.get("/api/mis-autorizaciones")
					.set("Authorization", bearer())
			).status,
		).toBe(403);
		expect(database.authorization.findMany).not.toHaveBeenCalled();
	});
	it.each(["/api/autorizaciones", "/api/afiliados", "/api/dashboard/resumen"])(
		"rechaza acceso operativo a %s",
		async (path) => {
			expect(
				(await request(app).get(path).set("Authorization", bearer())).status,
			).toBe(403);
		},
	);
	it("impide crear autorizaciones", async () => {
		expect(
			(
				await request(app)
					.post("/api/autorizaciones")
					.set("Authorization", bearer())
					.send({})
			).status,
		).toBe(403);
	});
});
