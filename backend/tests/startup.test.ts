import { execFile, spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { promisify } from "node:util";
import { describe, expect, it, vi } from "vitest";

const run = promisify(execFile);
const serverArgs = ["--import", "tsx", "src/server.ts"];
const settings = {
	...process.env,
	NODE_ENV: "production",
	PORT: "4000",
	DATABASE_URL: "postgresql://demo:fixture-password@localhost:5432/demo",
	JWT_SECRET: "fixture-token",
	CORS_ORIGIN: "https://frontend.example.test:8443",
};

async function availablePort() {
	const probe = createServer().listen(0);
	await once(probe, "listening");
	const address = probe.address();
	if (!address || typeof address === "string")
		throw new Error("Expected TCP port");
	probe.close();
	await once(probe, "close");
	return address.port;
}

describe("arranque y logging de la API", () => {
	it("sirve /health, aplica Helmet y CORS, y correlaciona logs sin datos sensibles", async () => {
		const port = await availablePort();
		const server = spawn(process.execPath, serverArgs, {
			env: { ...settings, PORT: String(port) },
			stdio: ["ignore", "pipe", "pipe"],
		});
		const closed = once(server, "close");
		let stdout = "";
		let stderr = "";
		server.stdout.on("data", (chunk) => {
			stdout += chunk;
		});
		server.stderr.on("data", (chunk) => {
			stderr += chunk;
		});

		try {
			await vi.waitFor(
				() =>
					expect(
						stdout,
						stderr || "El proceso aún no anunció el arranque",
					).toContain('"event":"server.started"'),
				{
					timeout: 20_000,
				},
			);

			const base = `http://localhost:${port}`;
			const health = await fetch(`${base}/health`, {
				headers: { Origin: settings.CORS_ORIGIN },
			});
			expect(health.status).toBe(200);
			expect(await health.json()).toEqual({ status: "ok" });
			expect(health.headers.get("x-powered-by")).toBeNull();
			expect(health.headers.get("x-content-type-options")).toBe("nosniff");
			expect(health.headers.get("access-control-allow-origin")).toBe(
				settings.CORS_ORIGIN,
			);

			const invalid = await fetch(`${base}/api/auth/login?cedula=99900000000`, {
				method: "POST",
				headers: {
					Authorization: "Bearer fixture-token",
					"Content-Type": "application/json",
				},
				body: '{"password":"fixture-password", INVALID',
			});
			expect(invalid.status).toBe(400);
			await invalid.text();

			await vi.waitFor(() => {
				const requestLogs = stdout
					.trim()
					.split("\n")
					.map((line) => JSON.parse(line));
				const request = requestLogs.find((entry) => entry.status === 400);
				const error = JSON.parse(stderr.trim());
				expect(error).toMatchObject({ level: "error", event: "http.error" });
				expect(request).toMatchObject({
					event: "http.request",
					method: "POST",
					requestId: error.requestId,
					durationMs: expect.any(Number),
				});
			});
			expect(stdout + stderr).not.toMatch(
				/99900000000|fixture-token|fixture-password/,
			);
		} finally {
			server.kill();
			await closed;
		}
	}, 30_000);

	it.each([
		["PORT", "1e3"],
		["PORT", "65536"],
		["JWT_SECRET", ""],
		["CORS_ORIGIN", "https://user:fixture-password@example.test/"],
		["CORS_ORIGIN", "https://example.test/path"],
		["DATABASE_URL", "https://user:fixture-password@example.test/db"],
	])(
		"rechaza %s inválido antes de escuchar",
		async (key, value) => {
			await expect(
				run(process.execPath, serverArgs, {
					env: { ...settings, [key]: value },
					timeout: 8_000,
				}),
			).rejects.toMatchObject({
				code: 1,
				stdout: "",
				stderr: expect.stringContaining(`"variables":["${key}"]`),
			});
		},
		10_000,
	);

	it("registra una configuración inválida del seed sin exponer la URL", async () => {
		const failure = await run(
			process.execPath,
			["--import", "tsx", "prisma/seed.ts"],
			{
				env: {
					...settings,
					DATABASE_URL: "https://demo:fixture-password@example.test/db",
				},
				timeout: 8_000,
			},
		).catch((error) => error);

		expect(failure).toMatchObject({ code: 1, stdout: "" });
		expect(JSON.parse(failure.stderr)).toMatchObject({
			event: "config.invalid",
			component: "seed",
			variables: ["DATABASE_URL"],
		});
		expect(failure.stderr).not.toContain("fixture-password");
	}, 10_000);
});
