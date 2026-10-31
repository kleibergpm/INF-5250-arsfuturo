import jwt from "jsonwebtoken";
import { env } from "../lib/env.js";

export function authenticate(req, res, next) {
	const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
	if (!token)
		return res
			.status(401)
			.json({ error: "UNAUTHORIZED", message: "Token requerido" });
	try {
		req.user = jwt.verify(token, env.jwtSecret);
		return next();
	} catch {
		return res
			.status(401)
			.json({ error: "UNAUTHORIZED", message: "Token inválido o vencido" });
	}
}
export const allow =
	(...roles) =>
	(req, res, next) =>
		roles.includes(req.user.role)
			? next()
			: res.status(403).json({
					error: "FORBIDDEN",
					message: "No tienes permisos para esta acción",
				});
