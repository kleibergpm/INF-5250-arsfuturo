import { Router } from "express";
import { z } from "zod";
import { authController } from "../controllers/auth.controller.js";
import { businessController } from "../controllers/business.controller.js";
import { crud } from "../controllers/crud.controller.js";
import { allow, authenticate } from "../middleware/auth.js";
import { asyncHandler } from "../middleware/errors.js";
import { validate } from "../middleware/validate.js";
import { validateCedula } from "../Servicios/cedulaValidation.service.js";

const r = Router();
const id = z.string().uuid();
const uuid = z.object({ id });
const stringId = z.object({ id: z.string().min(2) });
const roles = {
	admin: ["ADMINISTRATOR"],
	staff: ["ADMINISTRATOR", "AGENT"],
	review: ["ADMINISTRATOR", "SUPERVISOR"],
};
const authBody = z.object({
	username: z.string().min(3),
	password: z.string().min(6),
});
const schemas = {
	insured: z.object({
		name: z.string().min(2),
		nationalId: z.string().min(8),
		planId: z.string(),
		policyId: z.string().optional().nullable(),
		status: z.enum(["ACTIVE", "SUSPENDED", "INACTIVE"]).optional(),
		startDate: z.coerce.date(),
		birthDate: z.coerce.date().optional().nullable(),
		phone: z.string().optional().nullable(),
		email: z.string().email().optional().nullable(),
		dependents: z.coerce.number().int().min(0).optional(),
	}),
	provider: z.object({
		name: z.string().min(2),
		type: z.string().min(2),
		city: z.string().min(2),
		phone: z.string().min(7),
	}),
	plan: z.object({
		id: z.string().min(2),
		name: z.string(),
		consultationCopay: z.coerce.number().min(0),
		coverage: z.record(z.string(), z.boolean()),
	}),
	policy: z.object({
		id: z.string().min(2),
		company: z.string(),
		planId: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		monthlyPremium: z.coerce.number().positive(),
		insuredCount: z.coerce.number().int().min(0).optional(),
		status: z.enum(["ACTIVE", "IN_GRACE", "SUSPENDED", "EXPIRED"]).optional(),
	}),
	claim: z.object({
		insuredId: z.string().uuid(),
		providerId: z.string().uuid(),
		amount: z.coerce.number().positive(),
		date: z.coerce.date().optional(),
	}),
	authorization: z.object({
		insuredId: z.string().uuid(),
		providerId: z.string().uuid(),
		procedure: z.string().min(3),
	}),
	service: z.object({
		insuredId: z.string().uuid(),
		providerId: z.string().uuid(),
		authorizationId: z.string().uuid().optional().nullable(),
		description: z.string().min(3),
		cost: z.coerce.number().positive(),
	}),
	payment: z.object({
		serviceId: z.string().uuid(),
		amount: z.coerce.number().positive(),
		bankReference: z.string().min(3),
		method: z.string().min(3),
	}),
};
r.post("/auth/login", validate(authBody), asyncHandler(authController.login));
r.post(
	"/auth/register",
	validate(
		authBody.extend({
			name: z.string().trim().min(2).max(120),
			nationalId: z
				.string()
				.trim()
				.transform((value) => value.replace(/-/g, ""))
				.pipe(z.string().regex(/^\d{11}$/, "La cédula debe tener 11 dígitos")),
			password: z.string().min(6).max(72),
		}),
	),
	asyncHandler(authController.register),
);
r.get("/auth/me", authenticate, asyncHandler(authController.me));
r.get(
	"/mis-autorizaciones",
	authenticate,
	allow("INSURED"),
	asyncHandler(authController.myAuthorizations),
);
const resource = (
	path,
	model,
	schema,
	include,
	access = roles.admin,
	idSchema = uuid,
	beforeCreate = undefined,
) => {
	const c = crud(model, include);
	r.get(path, authenticate, allow(...access), asyncHandler(c.list));
	r.get(
		`${path}/:id`,
		authenticate,
		allow(...access),
		validate(idSchema, "params"),
		asyncHandler(c.get),
	);
	r.post(
		path,
		authenticate,
		allow(...access),
		validate(schema),
		...(beforeCreate ? [asyncHandler(beforeCreate)] : []),
		asyncHandler(c.create),
	);
	r.patch(
		`${path}/:id`,
		authenticate,
		allow(...access),
		validate(idSchema, "params"),
		validate(schema.partial()),
		asyncHandler(c.update),
	);
	r.delete(
		`${path}/:id`,
		authenticate,
		allow(...access),
		validate(idSchema, "params"),
		asyncHandler(c.remove),
	);
};
resource("/planes", "plan", schemas.plan, undefined, roles.staff, stringId);
resource("/proveedores", "provider", schemas.provider, undefined, roles.staff);
resource(
	"/polizas",
	"policy",
	schemas.policy,
	{ plan: true },
	roles.admin,
	stringId,
);
resource(
	"/afiliados",
	"insured",
	schemas.insured,
	{ plan: true, policy: true },
	roles.staff,
	uuid,
	async (req, res, next) => {
		if (!(await validateCedula(req.body.nationalId)))
			return res.status(422).json({
				error: "INVALID_CEDULA",
				message: "La cedula indicada no es valida",
			});
		next();
	},
);
resource(
	"/reclamos",
	"claim",
	schemas.claim,
	{ insured: true, provider: true },
	roles.staff,
);
r.patch(
	"/reclamos/:id/aprobar",
	authenticate,
	allow(...roles.review),
	asyncHandler(businessController.decideClaim("APPROVED")),
);
r.patch(
	"/reclamos/:id/rechazar",
	authenticate,
	allow(...roles.review),
	asyncHandler(businessController.decideClaim("REJECTED")),
);
resource(
	"/notificaciones",
	"notification",
	z.object({
		userId: z.string().uuid().optional().nullable(),
		type: z.string(),
		title: z.string().optional().nullable(),
		message: z.string(),
		read: z.boolean().optional(),
	}),
	undefined,
	["ADMINISTRATOR", "AGENT", "SUPERVISOR"],
);
r.get(
	"/autorizaciones",
	authenticate,
	allow(...roles.staff),
	asyncHandler(crud("authorization", { insured: true, provider: true }).list),
);
r.get(
	"/autorizaciones/:id",
	authenticate,
	allow(...roles.staff),
	asyncHandler(crud("authorization", { insured: true, provider: true }).get),
);
r.post(
	"/autorizaciones",
	authenticate,
	allow(...roles.staff),
	validate(schemas.authorization),
	asyncHandler(businessController.createAuthorization),
);
r.patch(
	"/autorizaciones/:id/aprobar",
	authenticate,
	allow(...roles.review),
	asyncHandler(businessController.decideAuthorization("APPROVED")),
);
r.patch(
	"/autorizaciones/:id/rechazar",
	authenticate,
	allow(...roles.review),
	asyncHandler(businessController.decideAuthorization("REJECTED")),
);
r.get(
	"/servicios",
	authenticate,
	allow(...roles.staff),
	asyncHandler(
		crud("medicalService", {
			insured: true,
			provider: true,
			authorization: true,
		}).list,
	),
);
r.post(
	"/servicios",
	authenticate,
	allow(...roles.staff),
	validate(schemas.service),
	asyncHandler(businessController.createService),
);
r.get(
	"/pagos",
	authenticate,
	allow(...roles.admin),
	asyncHandler(crud("providerPayment", { service: true, provider: true }).list),
);
r.post(
	"/pagos",
	authenticate,
	allow(...roles.admin),
	validate(schemas.payment),
	asyncHandler(businessController.issuePayment),
);
r.get(
	"/facturas",
	authenticate,
	allow(...roles.admin),
	asyncHandler(crud("invoice", { policy: true }).list),
);
r.post(
	"/facturas/generar",
	authenticate,
	allow(...roles.admin),
	validate(
		z.object({
			period: z
				.string()
				.regex(/^\d{4}-\d{2}$/)
				.optional(),
		}),
	),
	asyncHandler(businessController.generateInvoices),
);
r.patch(
	"/facturas/:id/pagar",
	authenticate,
	allow(...roles.admin),
	validate(z.object({ reference: z.string().min(3) })),
	asyncHandler(businessController.payInvoice),
);
r.patch(
	"/facturas/:id/recordatorio",
	authenticate,
	allow(...roles.admin),
	asyncHandler(businessController.remindInvoice),
);
r.patch(
	"/facturas/:id/gracia",
	authenticate,
	allow(...roles.admin),
	asyncHandler(businessController.graceInvoice),
);
r.patch(
	"/facturas/:id/suspender",
	authenticate,
	allow(...roles.admin),
	asyncHandler(businessController.suspendInvoice),
);
r.get(
	"/dashboard/resumen",
	authenticate,
	allow("ADMINISTRATOR", "AGENT", "SUPERVISOR"),
	asyncHandler(businessController.dashboard),
);
export default r;
