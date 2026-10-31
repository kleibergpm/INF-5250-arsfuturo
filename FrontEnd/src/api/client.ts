import axios, { type AxiosResponse } from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
	headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("arsfuturo_token");
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401)
			localStorage.removeItem("arsfuturo_token");
		return Promise.reject(error);
	},
);

const unwrap = async <T>(request: Promise<AxiosResponse<T>>) =>
	(await request).data;
const idPath = (id: string) => encodeURIComponent(id);

// Credenciales del formulario de login (nombres locales en español); el
// backend espera { username, password }, por eso se traduce aquí antes de enviar.
export type LoginCredentials = { usuario: string; password: string };
// Forma cruda que devuelve el backend (en inglés). adaptUser (adapters.ts)
// la traduce al modelo interno { id, usuario, nombre, rol } que usa el resto de la app.
export type ApiUser = {
	id: string;
	username: string;
	name: string;
	role: string;
};
export type LoginResponse = { token: string; user: ApiUser };
export type ApiRecord = Record<string, unknown>;

export const authApi = {
	login: (credentials: LoginCredentials) =>
		unwrap<LoginResponse>(
			api.post("/auth/login", {
				username: credentials.usuario,
				password: credentials.password,
			}),
		),
	register: (input: {
		usuario: string;
		password: string;
		nombre: string;
		cedula: string;
	}) =>
		unwrap<ApiUser>(
			api.post("/auth/register", {
				username: input.usuario,
				password: input.password,
				name: input.nombre,
				nationalId: input.cedula,
			}),
		),
	me: () => unwrap<ApiUser>(api.get("/auth/me")),
};

export const resourcesApi = {
	misAutorizaciones: () => unwrap<ApiRecord[]>(api.get("/mis-autorizaciones")),
	planes: () => unwrap<ApiRecord[]>(api.get("/planes")),
	afiliados: () => unwrap<ApiRecord[]>(api.get("/afiliados")),
	proveedores: () => unwrap<ApiRecord[]>(api.get("/proveedores")),
	autorizaciones: () => unwrap<ApiRecord[]>(api.get("/autorizaciones")),
	reclamos: () => unwrap<ApiRecord[]>(api.get("/reclamos")),
	polizas: () => unwrap<ApiRecord[]>(api.get("/polizas")),
	servicios: () => unwrap<ApiRecord[]>(api.get("/servicios")),
	pagos: () => unwrap<ApiRecord[]>(api.get("/pagos")),
	facturas: () => unwrap<ApiRecord[]>(api.get("/facturas")),
	dashboard: () => unwrap<ApiRecord>(api.get("/dashboard/resumen")),
};

export const mutationsApi = {
	afiliado: (payload: ApiRecord) =>
		unwrap<ApiRecord>(api.post("/afiliados", payload)),
	actualizarAfiliado: (id: string, payload: ApiRecord) =>
		unwrap<ApiRecord>(api.patch(`/afiliados/${idPath(id)}`, payload)),
	autorizacion: (payload: ApiRecord) =>
		unwrap<ApiRecord>(api.post("/autorizaciones", payload)),
	aprobarAutorizacion: (id: string) =>
		unwrap<ApiRecord>(api.patch(`/autorizaciones/${idPath(id)}/aprobar`)),
	rechazarAutorizacion: (id: string) =>
		unwrap<ApiRecord>(api.patch(`/autorizaciones/${idPath(id)}/rechazar`)),
	reclamo: (payload: ApiRecord) =>
		unwrap<ApiRecord>(api.post("/reclamos", payload)),
	servicio: (payload: ApiRecord) =>
		unwrap<ApiRecord>(api.post("/servicios", payload)),
	pago: (payload: ApiRecord) => unwrap<ApiRecord>(api.post("/pagos", payload)),
	generarFacturas: (periodo?: string) =>
		unwrap<ApiRecord[]>(
			api.post("/facturas/generar", periodo ? { period: periodo } : {}),
		),
	pagarFactura: (id: string, referencia: string) =>
		unwrap<ApiRecord>(
			api.patch(`/facturas/${idPath(id)}/pagar`, { reference: referencia }),
		),
	recordarFactura: (id: string) =>
		unwrap<ApiRecord>(api.patch(`/facturas/${idPath(id)}/recordatorio`)),
	graciaFactura: (id: string) =>
		unwrap<ApiRecord>(api.patch(`/facturas/${idPath(id)}/gracia`)),
	suspenderFactura: (id: string) =>
		unwrap<ApiRecord>(api.patch(`/facturas/${idPath(id)}/suspender`)),
};

export default api;
