import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../lib/env.js";
import { prisma } from "../lib/prisma.js";
import { validateCedula } from "../Servicios/cedulaValidation.service.js";

export class AuthController {
	constructor(
		private readonly database = prisma,
		private readonly configuration = env,
	) {}

	login = async (req, res) => {
		const user = await this.database.user.findUnique({
			where: { username: req.body.username },
		});
		if (
			!user ||
			!(await bcrypt.compare(req.body.password, user.passwordHash))
		) {
			return res.status(401).json({
				error: "INVALID_CREDENTIALS",
				message: "Usuario o contraseña incorrectos",
			});
		}

		const token = jwt.sign(
			{ sub: user.id, username: user.username, role: user.role },
			this.configuration.jwtSecret,
			{ expiresIn: "8h" },
		);
		res.json({
			token,
			user: {
				id: user.id,
				username: user.username,
				name: user.name,
				role: user.role,
			},
		});
	};

	register = async (req, res) => {
		const { username, password, name, nationalId } = req.body;
		if (!(await validateCedula(nationalId))) {
			return res
				.status(400)
				.json({ error: "INVALID_CEDULA", message: "La cédula no es válida" });
		}
		const existing = await this.database.user.findFirst({
			where: { OR: [{ username }, { nationalId }] },
		});
		if (existing)
			return res.status(409).json({
				error: "USER_EXISTS",
				message: "El usuario o la cédula ya están registrados",
			});
		try {
			const user = await this.database.user.create({
				data: {
					username,
					name,
					nationalId,
					passwordHash: await bcrypt.hash(password, 12),
					role: "INSURED",
				},
				select: { id: true, username: true, name: true, role: true },
			});
			return res.status(201).json(user);
		} catch (error) {
			if (error.code === "P2002")
				return res.status(409).json({
					error: "USER_EXISTS",
					message: "El usuario o la cédula ya están registrados",
				});
			throw error;
		}
	};

	myAuthorizations = async (req, res) => {
		const user = await this.database.user.findUnique({
			where: { id: req.user.sub },
			select: { nationalId: true },
		});
		if (!user?.nationalId)
			return res.status(403).json({
				error: "FORBIDDEN",
				message: "La cuenta no tiene una cédula asociada",
			});
		const authorizations = await this.database.authorization.findMany({
			where: {
				insured: {
					nationalId: {
						in: [
							user.nationalId,
							user.nationalId.replace(/^(\d{3})(\d{7})(\d)$/, "$1-$2-$3"),
						],
					},
				},
			},
			select: {
				id: true,
				procedure: true,
				status: true,
				date: true,
				copay: true,
				provider: { select: { name: true } },
			},
			orderBy: { date: "desc" },
		});
		return res.json(authorizations);
	};

	me = async (req, res) => {
		const user = await this.database.user.findUnique({
			where: { id: req.user.sub },
			select: { id: true, username: true, name: true, role: true },
		});
		res.json(user);
	};
}

export const authController = new AuthController();
