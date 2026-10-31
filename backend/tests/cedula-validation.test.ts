import { afterEach, describe, expect, it, vi } from "vitest";
import { swaggerSpec } from "../src/lib/swagger.js";
import {
	CedulaValidationUnavailableError,
	validateCedula,
} from "../src/Servicios/cedulaValidation.service.js";

afterEach(() => vi.unstubAllGlobals());

describe("validateCedula", () => {
	it("considera una cédula inválida cuando el servicio retorna 400", async () => {
		vi.stubGlobal(
			"fetch",
			vi.fn().mockResolvedValue(new Response(null, { status: 400 })),
		);
		await expect(validateCedula("00000000000")).resolves.toBe(false);
	});
	it("consulta la API oficial y devuelve el resultado de validacion", async () => {
		const fetchMock = vi
			.fn()
			.mockResolvedValue(
				new Response(JSON.stringify({ valid: true }), { status: 200 }),
			);
		vi.stubGlobal("fetch", fetchMock);

		await expect(validateCedula("40225999348")).resolves.toBe(true);
		expect(fetchMock).toHaveBeenCalledWith(
			"https://api.digital.gob.do/v3/cedulas/40225999348/validate",
			expect.objectContaining({
				headers: { accept: "application/json" },
				signal: expect.any(AbortSignal),
			}),
		);
	});

	it("devuelve false cuando la API rechaza la cedula", async () => {
		vi.stubGlobal(
			"fetch",
			vi
				.fn()
				.mockResolvedValue(
					new Response(JSON.stringify({ valid: false }), { status: 200 }),
				),
		);

		await expect(validateCedula("40225999348")).resolves.toBe(false);
	});

	it("expone un error explicito si la API no esta disponible", async () => {
		vi.stubGlobal(
			"fetch",
			vi.fn().mockRejectedValue(new Error("network error")),
		);

		await expect(validateCedula("40225999348")).rejects.toBeInstanceOf(
			CedulaValidationUnavailableError,
		);
	});

	it("rechaza una respuesta que no cumple el contrato documentado", async () => {
		vi.stubGlobal(
			"fetch",
			vi
				.fn()
				.mockResolvedValue(
					new Response(JSON.stringify({ valid: "yes" }), { status: 200 }),
				),
		);

		await expect(validateCedula("40225999348")).rejects.toBeInstanceOf(
			CedulaValidationUnavailableError,
		);
	});
});

describe("Swagger Cedula Validation", () => {
	it("documenta la validacion externa y su uso al crear afiliados", () => {
		expect(swaggerSpec).toMatchObject({
			paths: {
				"/v3/cedulas/{id}/validate": {
					servers: [{ url: "https://api.digital.gob.do" }],
					get: {
						tags: ["validacion-cedula"],
						responses: { 200: expect.any(Object) },
					},
				},
				"/api/afiliados": {
					post: {
						description: expect.stringContaining("Cedula Validation API"),
						responses: { 503: expect.any(Object) },
					},
				},
			},
		});
	});
});
