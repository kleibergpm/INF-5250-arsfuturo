import { Prisma } from "../lib/generated/client/index.js";
import { log } from "../lib/logger.js";
import { CedulaValidationUnavailableError } from "../Servicios/cedulaValidation.service.js";
export function notFound(_req, res) {
	res
		.status(404)
		.json({ error: "NOT_FOUND", message: "Recurso no encontrado" });
}

export function errorHandler(err, _req, res, next) {
	log("error", "http.error", { requestId: res.locals.requestId });
	if (res.headersSent)
		return next(new Error("Error después de enviar cabeceras"));
	if (err instanceof BusinessRuleError)
		return res.status(err.status).json({
			error: err.status === 409 ? "CONFLICT" : "VALIDATION_ERROR",
			message: err.message,
		});
	if (
		err instanceof Prisma.PrismaClientKnownRequestError &&
		err.code === "P2002"
	)
		return res.status(409).json({
			error: "CONFLICT",
			message: "Ya existe un registro con ese valor único",
		});
	if (
		err instanceof Prisma.PrismaClientKnownRequestError &&
		err.code === "P2025"
	)
		return res
			.status(404)
			.json({ error: "NOT_FOUND", message: "Recurso no encontrado" });
	if (err.name === "ZodError")
		return res
			.status(422)
			.json({ error: "VALIDATION_ERROR", details: err.flatten() });
	if (err instanceof CedulaValidationUnavailableError)
		return res.status(err.status).json({
			error: "EXTERNAL_SERVICE_UNAVAILABLE",
			message: err.message,
		});
	return res
		.status(err.status || 500)
		.json({ error: "INTERNAL_ERROR", message: err.message || "Error interno" });
}
export const asyncHandler = (fn) => (req, res, next) =>
	Promise.resolve(fn(req, res, next)).catch(next);

import { BusinessRuleError } from "../lib/business-rule-error.js";
