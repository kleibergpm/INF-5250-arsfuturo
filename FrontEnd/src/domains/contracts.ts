import type {
	Autorizacion,
	toAuthorizationPayload,
	toClaimPayload,
	toInsuredPayload,
	toInsuredUpdatePayload,
	toPaymentPayload,
	toServicePayload,
} from "../api/adapters";

export type NotificationInput =
	| string
	| { id?: number; message: string; type?: string; title?: string };
export type Notify = (notification: NotificationInput) => void;
export type NuevoAfiliadoInput = Parameters<typeof toInsuredPayload>[0];
export type EditarAfiliadoInput = Parameters<typeof toInsuredUpdatePayload>[0];
export type AutorizacionInput = Parameters<typeof toAuthorizationPayload>[0];
export type ReclamoInput = Parameters<typeof toClaimPayload>[0];
export type ServicioInput = Parameters<typeof toServicePayload>[0];
export type PagoInput = Parameters<typeof toPaymentPayload>[0];
export type PrimaInput = { facturaId: string; referencia: string };
export type CrearAutorizacion = (
	input: AutorizacionInput,
) => Promise<Autorizacion | null>;
export type EditarAfiliado = (
	id: string,
	input: EditarAfiliadoInput,
) => Promise<void>;
