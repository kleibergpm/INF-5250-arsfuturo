import { Router } from "express";
import { z } from "zod";
import { authController } from "../controllers/auth.controller.js";
import {
	businessController,
	policyDatesInOrder,
} from "../controllers/business.controller.js";
import { crud } from "../controllers/crud.controller.js";
import { allow, authenticate } from "../middleware/auth.js";
import { asyncHandler } from "../middleware/errors.js";
import { validate } from "../middleware/validate.js";
import { validateCedula } from "../Servicios/cedulaValidation.service.js";

const r = Router();
const uuid = z.object({ id: z.string().uuid() });
const stringId = z.object({ id: z.string().min(2) });
const roles = {
	admin: ["ADMINISTRATOR"],
	staff: ["ADMINISTRATOR", "AGENT"],
	review: ["ADMINISTRATOR", "SUPERVISOR"],
	claimReaders: ["ADMINISTRATOR", "AGENT", "SUPERVISOR"],
};
const authBody = z.object({
	username: z.string().min(3),
	password: z.string().min(6),
});
const nationalId = z
	.string()
	.trim()
	.transform((value) => value.replace(/-/g, ""))
	.pipe(z.string().regex(/^\d{11}$/, "La cédula debe tener 11 dígitos"));
const policyDate = z
	.union([z.iso.date(), z.iso.datetime({ offset: true })])
	.pipe(z.coerce.date());
const schemas = {
	insured: z.object({
		name: z.string().trim().min(2),
		nationalId,
		planId: z.string().trim().min(1),
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
		city: z.string().trim().min(2),
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
		startDate: policyDate,
		endDate: policyDate,
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
		amount: z.coerce.number().positive().max(999_999_999_999.99),
		bankReference: z.string().trim().min(3),
		method: z.string().trim().min(3),
	}),
};
r.post("/auth/login", validate(authBody), asyncHandler(authController.login));
r.post(
	"/auth/register",
	validate(
		authBody.extend({
			name: z.string().trim().min(2).max(120),
			nationalId,
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
	{
		readAccess = access,
		createSchema = schema,
		beforeCreate = undefined,
		list = undefined,
		get = undefined,
		update = undefined,
		remove = undefined,
	} = {},
) => {
	const c = crud(model, include);
	r.get(path, authenticate, allow(...readAccess), asyncHandler(list ?? c.list));
	r.get(
		`${path}/:id`,
		authenticate,
		allow(...readAccess),
		validate(idSchema, "params"),
		asyncHandler(get ?? c.get),
	);
	r.post(
		path,
		authenticate,
		allow(...access),
		validate(createSchema),
		...(beforeCreate ? [asyncHandler(beforeCreate)] : []),
		asyncHandler(c.create),
	);
	r.patch(
		`${path}/:id`,
		authenticate,
		allow(...access),
		validate(idSchema, "params"),
		validate(schema.partial()),
		asyncHandler(update ?? c.update),
	);
	r.delete(
		`${path}/:id`,
		authenticate,
		allow(...access),
		validate(idSchema, "params"),
		asyncHandler(remove ?? c.remove),
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
	{
		createSchema: schemas.policy.refine(
			({ startDate, endDate }) =>
				startDate && endDate && policyDatesInOrder({ startDate, endDate }),
			{
				path: ["endDate"],
				message: "El fin de vigencia debe ser igual o posterior al inicio",
			},
		),
		update: businessController.updatePolicy,
	},
);
resource(
	"/afiliados",
	"insured",
	schemas.insured,
	{ plan: true, policy: true },
	roles.staff,
	uuid,
	{
		beforeCreate: async (req, res, next) => {
			if (!(await validateCedula(req.body.nationalId)))
				return res.status(422).json({
					error: "INVALID_CEDULA",
					message: "La cédula indicada no es válida",
				});
			next();
		},
	},
);
const claimRelations = { insured: true, provider: true };
const fullClaim = crud("claim", claimRelations);
const claimSummary = crud("claim", {
	insured: { select: { id: true, name: true } },
	provider: { select: { id: true, name: true } },
});
const readClaim = (operation: "list" | "get") => (req, res) =>
	(req.user.role === "SUPERVISOR" ? claimSummary : fullClaim)[operation](
		req,
		res,
	);
resource(
	"/reclamos",
	"claim",
	schemas.claim,
	claimRelations,
	roles.staff,
	uuid,
	{
		readAccess: roles.claimReaders,
		list: readClaim("list"),
		get: readClaim("get"),
		update: businessController.editPendingClaim,
		remove: businessController.removePendingClaim,
	},
);
r.patch(
	"/reclamos/:id/aprobar",
	authenticate,
	allow(...roles.review),
	validate(uuid, "params"),
	asyncHandler(businessController.decideClaim("APPROVED")),
);
r.patch(
	"/reclamos/:id/rechazar",
	authenticate,
	allow(...roles.review),
	validate(uuid, "params"),
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
	validate(uuid, "params"),
	asyncHandler(businessController.decideAuthorization("APPROVED")),
);
r.patch(
	"/autorizaciones/:id/rechazar",
	authenticate,
	allow(...roles.review),
	validate(uuid, "params"),
	asyncHandler(businessController.decideAuthorization("REJECTED")),
);
r.get(
	"/servicios",
	authenticate,
	allow(...roles.staff),
	asyncHandler(businessController.listServices),
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
	asyncHandler(businessController.listInvoices),
);
r.post(
	"/facturas/generar",
	authenticate,
	allow(...roles.admin),
	validate(
		z.object({
			period: z
				.string()
				.regex(/^(?!0000)\d{4}-(0[1-9]|1[0-2])$/)
				.optional(),
		}),
	),
	asyncHandler(businessController.generateInvoices),
);
r.patch(
	"/facturas/:id/pagar",
	authenticate,
	allow(...roles.admin),
	validate(uuid, "params"),
	validate(z.object({ reference: z.string().trim().min(3) })),
	asyncHandler(businessController.payInvoice),
);
r.patch(
	"/facturas/:id/recordatorio",
	authenticate,
	allow(...roles.admin),
	validate(uuid, "params"),
	asyncHandler(businessController.remindInvoice),
);
r.patch(
	"/facturas/:id/gracia",
	authenticate,
	allow(...roles.admin),
	validate(uuid, "params"),
	asyncHandler(businessController.graceInvoice),
);
r.patch(
	"/facturas/:id/suspender",
	authenticate,
	allow(...roles.admin),
	validate(uuid, "params"),
	asyncHandler(businessController.suspendInvoice),
);
r.get(
	"/dashboard/resumen",
	authenticate,
	allow("ADMINISTRATOR", "AGENT", "SUPERVISOR"),
	asyncHandler(businessController.dashboard),
);
export default r;
