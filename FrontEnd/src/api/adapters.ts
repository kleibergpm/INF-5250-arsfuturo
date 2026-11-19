import type { ApiRecord, ApiUser } from "./client";

export type Plan = {
	id: string;
	nombre: string;
	copagoConsulta?: number;
	cobertura: Record<string, boolean>;
};

// --- Traducción de entrada: contrato en inglés del backend -> modelo interno en español ---
// El backend (schema.prisma / routes/index.ts) usa nombres de modelo, campos y enums en
// inglés. El resto del frontend sigue construido sobre nombres en español (a.nombre,
// a.estado, a.afiliadoId, etc.), así que esta es la única capa que conoce ambos vocabularios.

const roleLabels: Record<string, string> = {
	ADMINISTRATOR: "Administrador",
	AGENT: "Agente",
	SUPERVISOR: "Supervisor",
	INSURED: "Afiliado",
};

// Cada entidad tiene su propio enum de estado en el backend (aunque algunos comparten el
// mismo valor en inglés, p.ej. "ACTIVE" o "PAID"), así que cada una necesita su propio
// diccionario para no perder matices de género/dominio en el texto mostrado.
const insuredStatusLabels: Record<string, string> = {
	ACTIVE: "Activo",
	SUSPENDED: "Suspendido",
	INACTIVE: "Inactivo",
};
const authorizationStatusLabels: Record<string, string> = {
	PENDING: "En revisión",
	APPROVED: "Aprobada",
	REJECTED: "Rechazada",
};
const claimStatusLabels: Record<string, string> = {
	UNDER_REVIEW: "En revisión",
	APPROVED: "Aprobada",
	REJECTED: "Rechazada",
};
const policyStatusLabels: Record<string, string> = {
	ACTIVE: "Vigente",
	IN_GRACE: "En periodo de gracia",
	SUSPENDED: "Suspendida",
	EXPIRED: "Vencida",
};
const invoiceStatusLabels: Record<string, string> = {
	PENDING: "Pendiente",
	PAID: "Pagada",
	OVERDUE: "Atrasada",
	IN_GRACE: "En periodo de gracia",
};
const serviceStatusLabels: Record<string, string> = {
	PENDING_PAYMENT: "Pendiente de Pago",
	PAID: "Pagado",
};
const paymentStatusLabels: Record<string, string> = {
	PROCESSED: "Procesado",
	REJECTED: "Rechazado",
};

const label =
	(dict: Record<string, string>) =>
	(value: unknown): string | undefined =>
		typeof value === "string" ? dict[value] || value : undefined;
const displayInsuredStatus = label(insuredStatusLabels);
const displayAuthorizationStatus = label(authorizationStatusLabels);
const displayClaimStatus = label(claimStatusLabels);
const displayPolicyStatus = label(policyStatusLabels);
const displayInvoiceStatus = label(invoiceStatusLabels);
const displayServiceStatus = label(serviceStatusLabels);
const displayPaymentStatus = label(paymentStatusLabels);

const text = (value: unknown) => (typeof value === "string" ? value : "");
const id = (value: unknown) => String(value ?? "");
// Los montos llegan como Decimal serializado (string) desde Prisma; sin este cast,
// sumarlos en la UI concatena texto en vez de sumar números.
const money = (value: unknown): number => (value == null ? 0 : Number(value));

export const adaptUser = (user: ApiUser) => ({
	id: user.id,
	usuario: user.username,
	nombre: user.name,
	rol: roleLabels[user.role] || user.role,
});

export const adaptPlan = (plan: ApiRecord): Plan => ({
	id: id(plan.id),
	nombre: String(plan.name || ""),
	copagoConsulta:
		plan.consultationCopay != null ? money(plan.consultationCopay) : undefined,
	cobertura: (plan.coverage || {}) as Record<string, boolean>,
});

export const adaptAfiliado = (item: ApiRecord) => ({
	id: id(item.id),
	nombre: text(item.name),
	cedula: text(item.nationalId),
	plan: id((item.plan as ApiRecord | undefined)?.id || item.planId),
	polizaId: id((item.policy as ApiRecord | undefined)?.id || item.policyId),
	estado: displayInsuredStatus(item.status),
	desde: text(item.startDate),
	nacimiento: text(item.birthDate),
	telefono: text(item.phone),
	correo: text(item.email),
	dependientes: Number(item.dependents ?? 0),
});

export const adaptProveedor = (item: ApiRecord) => ({
	id: id(item.id),
	nombre: text(item.name),
	tipo: text(item.type),
	ciudad: text(item.city),
	telefono: text(item.phone),
});

export const adaptAutorizacion = (item: ApiRecord) => ({
	id: id(item.id),
	afiliadoId: id(item.insuredId || (item.insured as ApiRecord | undefined)?.id),
	proveedorId: id(
		item.providerId || (item.provider as ApiRecord | undefined)?.id,
	),
	proveedorNombre: text((item.provider as ApiRecord | undefined)?.name),
	procedimiento: text(item.procedure),
	copago: item.copay != null ? money(item.copay) : undefined,
	estado: displayAuthorizationStatus(item.status),
	fecha: text(item.date),
});

export const adaptReclamo = (item: ApiRecord) => ({
	id: id(item.id),
	afiliadoId: id(item.insuredId || (item.insured as ApiRecord | undefined)?.id),
	proveedorId: id(
		item.providerId || (item.provider as ApiRecord | undefined)?.id,
	),
	afiliadoNombre: text((item.insured as ApiRecord | undefined)?.name),
	proveedorNombre: text((item.provider as ApiRecord | undefined)?.name),
	monto: money(item.amount),
	estado: displayClaimStatus(item.status),
	fecha: text(item.date),
});

export const adaptPoliza = (item: ApiRecord) => ({
	id: id(item.id),
	empresa: text(item.company),
	plan: id((item.plan as ApiRecord | undefined)?.id || item.planId),
	desde: text(item.startDate),
	hasta: text(item.endDate),
	primaMensual: money(item.monthlyPremium),
	asegurados: Number(item.insuredCount ?? 0),
	estado: displayPolicyStatus(item.status),
});

export const adaptServicio = (item: ApiRecord) => ({
	id: id(item.id),
	afiliadoId: id(item.insuredId || (item.insured as ApiRecord | undefined)?.id),
	proveedorId: id(
		item.providerId || (item.provider as ApiRecord | undefined)?.id,
	),
	autorizacionId: text(item.authorizationId),
	descripcion: text(item.description),
	costo: money(item.cost),
	copago: money(item.copay),
	fecha: text(item.date),
	estado: displayServiceStatus(item.status),
	elegiblePago: item.paymentEligible === true,
	montoPagable: money(item.payableAmount),
	estadoPago: item.paymentStatus
		? displayPaymentStatus(item.paymentStatus)
		: null,
});

export const adaptPago = (item: ApiRecord) => ({
	id: id(item.id),
	proveedorId: id(
		item.providerId || (item.provider as ApiRecord | undefined)?.id,
	),
	servicioId: id(item.serviceId || (item.service as ApiRecord | undefined)?.id),
	referenciaBanco: text(item.bankReference),
	monto: money(item.amount),
	metodo: text(item.method),
	fecha: text(item.date),
	estado: displayPaymentStatus(item.status),
});

export const adaptFactura = (item: ApiRecord) => ({
	id: id(item.id),
	polizaId: id((item.policy as ApiRecord | undefined)?.id || item.policyId),
	periodo: text(item.period),
	emision: text(item.issuedAt),
	vencimiento: text(item.dueDate),
	monto: money(item.amount),
	estado: displayInvoiceStatus(item.status),
	fechaPago: text(item.paidAt),
	referencia: text(item.reference),
	recordatorioEnviado: item.reminderSent === true,
});

export type Afiliado = ReturnType<typeof adaptAfiliado>;
export type Proveedor = ReturnType<typeof adaptProveedor>;
export type Autorizacion = ReturnType<typeof adaptAutorizacion>;
export type Reclamo = ReturnType<typeof adaptReclamo>;
export type Poliza = ReturnType<typeof adaptPoliza>;
export type Servicio = ReturnType<typeof adaptServicio>;
export type Pago = ReturnType<typeof adaptPago>;
export type Factura = ReturnType<typeof adaptFactura>;
export type User = ReturnType<typeof adaptUser>;

export const adaptCollection = <T>(
	items: ApiRecord[],
	adapter: (item: ApiRecord) => T,
): T[] => (Array.isArray(items) ? items.map(adapter) : []);

// --- Traducción de salida: payloads que arma la UI (español) -> contrato del backend (inglés) ---
// Contraparte de los adaptadores de arriba: App.tsx sigue construyendo los formularios con
// nombres en español; estas funciones traducen justo antes de llamar a mutationsApi.

type InsuredFormInput = {
	nombre?: string;
	cedula?: string;
	plan: string;
	estado?: string;
	desde?: string;
	nacimiento?: string | null;
	telefono?: string | null;
	correo?: string | null;
	dependientes?: number;
};

export const toInsuredUpdatePayload = (input: InsuredFormInput): ApiRecord => ({
	name: input.nombre?.trim(),
	planId: input.plan,
	status:
		Object.keys(insuredStatusLabels).find(
			(status) => insuredStatusLabels[status] === input.estado,
		) ?? "SUSPENDED",
	startDate: input.desde || new Date().toISOString().slice(0, 10),
	birthDate: input.nacimiento || null,
	phone: input.telefono || null,
	email: input.correo || null,
	dependents: Number(input.dependientes) || 0,
});

export const toInsuredPayload = (input: InsuredFormInput): ApiRecord => ({
	...toInsuredUpdatePayload(input),
	nationalId: input.cedula?.trim(),
});

export const toAuthorizationPayload = (input: {
	afiliadoId: string;
	proveedorId: string;
	procedimiento: string;
}): ApiRecord => ({
	insuredId: input.afiliadoId,
	providerId: input.proveedorId,
	procedure: input.procedimiento,
});

export const toClaimPayload = (input: {
	afiliadoId: string;
	proveedorId: string;
	monto: number;
}): ApiRecord => ({
	insuredId: input.afiliadoId,
	providerId: input.proveedorId,
	amount: Number(input.monto),
});

export const toServicePayload = (input: {
	afiliadoId: string;
	proveedorId: string;
	descripcion: string;
	costo: number | string;
	autorizacionId?: string | null;
}): ApiRecord => ({
	insuredId: input.afiliadoId,
	providerId: input.proveedorId,
	description: input.descripcion,
	cost: Number(input.costo),
	authorizationId: input.autorizacionId || null,
});

export const toPaymentPayload = (input: {
	servicioId: string;
	monto: number | string;
	referenciaBanco: string;
	metodo: string;
}): ApiRecord => ({
	serviceId: input.servicioId,
	amount: Number(input.monto),
	bankReference: input.referenciaBanco,
	method: input.metodo,
});
