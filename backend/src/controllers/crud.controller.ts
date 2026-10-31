import { prisma } from "../lib/prisma.ts";

export class CrudController {
	constructor(
		private readonly database,
		private readonly model,
		private readonly include,
	) {}

	list = async (req, res) =>
		res.json(
			await this.database[this.model].findMany({
				include: this.include,
				orderBy: { createdAt: "desc" },
			}),
		);

	get = async (req, res) => {
		const row = await this.database[this.model].findUnique({
			where: { id: req.params.id },
			include: this.include,
		});
		if (!row)
			return res
				.status(404)
				.json({ error: "NOT_FOUND", message: "Recurso no encontrado" });
		res.json(row);
	};

	create = async (req, res) =>
		res.status(201).json(
			await this.database[this.model].create({
				data: req.body,
				include: this.include,
			}),
		);

	update = async (req, res) =>
		res.json(
			await this.database[this.model].update({
				where: { id: req.params.id },
				data: req.body,
				include: this.include,
			}),
		);

	remove = async (req, res) => {
		await this.database[this.model].delete({ where: { id: req.params.id } });
		res.status(204).end();
	};
}

export const crud = (model, include) =>
	new CrudController(prisma, model, include);
