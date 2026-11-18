import { AnimatePresence, motion } from "framer-motion";
import {
	FileDown,
	FileText,
	Filter,
	Loader2,
	Lock,
	Mail,
	Phone,
	Plus,
	Stethoscope,
	User,
	Users,
	Wallet,
} from "lucide-react";
import {
	type FormEvent,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import {
	type Afiliado,
	type Autorizacion,
	adaptAfiliado,
	adaptAutorizacion,
	adaptCollection,
	adaptFactura,
	adaptPago,
	adaptPlan,
	adaptPoliza,
	adaptProveedor,
	adaptReclamo,
	adaptServicio,
	adaptUser,
	type Factura,
	type Pago,
	type Plan,
	type Poliza,
	type Proveedor,
	type Reclamo,
	type Servicio,
	type User as SessionUser,
	toAuthorizationPayload,
	toClaimPayload,
	toInsuredPayload,
	toInsuredUpdatePayload,
	toPaymentPayload,
	toServicePayload,
} from "./api/adapters";
import { authApi, mutationsApi, resourcesApi } from "./api/client";
import { registrationFeedback } from "./api/registration-feedback";
import { AppHeader, AppNavigation } from "./components/AppChrome";
import {
	Badge,
	Button,
	Card,
	Input,
	type Notification,
	NotificationContainer,
} from "./components/ui";
import { AfiliadoActions, NuevoAfiliadoModal } from "./domains/afiliados";
import { AutorizacionesTab } from "./domains/autorizaciones";
import type {
	AutorizacionInput,
	EditarAfiliadoInput,
	NotificationInput,
	NuevoAfiliadoInput,
	PagoInput,
	PrimaInput,
	ReclamoInput,
	ServicioInput,
} from "./domains/contracts";
import { FacturacionTab } from "./domains/facturacion";
import { PagosTab } from "./domains/pagos";
import { PolizasTab } from "./domains/polizas";
import { ProveedoresTab } from "./domains/proveedores";
import { ReclamosTab } from "./domains/reclamos";
import { ServiciosTab } from "./domains/servicios";
import { currency, exportCsv, formatDate } from "./lib/formatters";
import { graficaDe, TEMA_KEY, type Tema } from "./lib/theme";

// La cobertura por procedimiento ahora la decide solo el backend (createAuthorization);
// esto es un simple lookup de presentación, no una regla de negocio.
const getPlanName = (plans: Plan[], planId: string) =>
	plans.find((plan) => plan.id === planId)?.nombre ?? "Plan no disponible";

export default function ARS_Futuro_App() {
	const [selectedTab, setTab] = useState("dashboard");

	// Estados de autenticación
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [currentUser, setCurrentUser] = useState<SessionUser | null>(null);
	const isSupervisor = currentUser?.rol === "Supervisor";
	const tab = isSupervisor ? "reclamos" : selectedTab;
	const [loginForm, setLoginForm] = useState({ usuario: "", password: "" });
	const [loginError, setLoginError] = useState("");
	const [loginLoading, setLoginLoading] = useState(false);
	const [registering, setRegistering] = useState(false);
	const [registerForm, setRegisterForm] = useState({
		usuario: "",
		password: "",
		nombre: "",
		cedula: "",
	});
	const [ownAuthorizations, setOwnAuthorizations] = useState<Autorizacion[]>(
		[],
	);
	const [ownError, setOwnError] = useState("");

	const [planes, setPlanes] = useState<Plan[]>([]);
	const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
	const [autorizaciones, setAutorizaciones] = useState<Autorizacion[]>([]);
	const [reclamaciones, setReclamaciones] = useState<Reclamo[]>([]);
	const [proveedores, setProveedores] = useState<Proveedor[]>([]);
	const [polizas, setPolizas] = useState<Poliza[]>([]);
	const [servicios, setServicios] = useState<Servicio[]>([]);
	const [pagos, setPagos] = useState<Pago[]>([]);
	const [facturas, setFacturas] = useState<Factura[]>([]);
	const [loading, setLoading] = useState(false);
	const [openNuevoAfiliado, setOpenNuevoAfiliado] = useState(false);

	// Estado del tema visual
	const [tema, setTema] = useState<Tema>(() => {
		const guardado = localStorage.getItem(TEMA_KEY);
		return guardado === "oscuro" || guardado === "claro" ? guardado : "claro";
	});

	useEffect(() => {
		document.documentElement.dataset.theme = tema;
		localStorage.setItem(TEMA_KEY, tema);
	}, [tema]);

	const toggleTema = useCallback(() => {
		setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
	}, []);

	// Los gráficos de Recharts traen su propia paleta: en el tema negro hay que
	// explicitar tinta, rejilla y series para que no queden azul y gris claro.
	const g = graficaDe(tema);

	// Estado para notificaciones
	const [notifications, setNotifications] = useState<Notification[]>([]);

	// Funciones para manejar notificaciones
	const removeNotification = useCallback((id: number) => {
		setNotifications((prev) => prev.filter((n) => n.id !== id));
	}, []);

	const addNotification = useCallback(
		(notificationData: NotificationInput) => {
			const id =
				typeof notificationData === "object" && notificationData.id
					? notificationData.id
					: Date.now();
			const base = { id, type: "success" };
			const notification =
				typeof notificationData === "string"
					? { ...base, message: notificationData }
					: {
							...base,
							message: notificationData.message,
							type: notificationData.type || "success",
							title: notificationData.title,
						};

			setNotifications((prev) => [notification, ...prev]);

			// Auto-remover después de 5 segundos
			setTimeout(() => {
				removeNotification(id);
			}, 5000);
		},
		[removeNotification],
	);

	useEffect(() => {
		const token = localStorage.getItem("arsfuturo_token");
		if (!token) return;
		let active = true;
		authApi
			.me()
			.then((user) => {
				if (!active || localStorage.getItem("arsfuturo_token") !== token)
					return;
				const authenticatedUser = adaptUser(user);
				setCurrentUser(authenticatedUser);
				setIsAuthenticated(true);
			})
			.catch(() => {
				if (active && localStorage.getItem("arsfuturo_token") === token)
					localStorage.removeItem("arsfuturo_token");
			});
		return () => {
			active = false;
		};
	}, []);

	useEffect(() => {
		if (!isAuthenticated || !currentUser || currentUser.rol === "Afiliado")
			return;
		let active = true;
		setLoading(true);
		const isAdmin = currentUser?.rol === "Administrador";
		const isStaff = isAdmin || currentUser?.rol === "Agente";
		Promise.all([
			isStaff ? resourcesApi.planes() : Promise.resolve([]),
			isStaff ? resourcesApi.afiliados() : Promise.resolve([]),
			isStaff ? resourcesApi.autorizaciones() : Promise.resolve([]),
			resourcesApi.reclamos(),
			isStaff ? resourcesApi.proveedores() : Promise.resolve([]),
			isAdmin ? resourcesApi.polizas() : Promise.resolve([]),
			isStaff ? resourcesApi.servicios() : Promise.resolve([]),
			isAdmin ? resourcesApi.pagos() : Promise.resolve([]),
			isAdmin ? resourcesApi.facturas() : Promise.resolve([]),
		])
			.then(
				([
					planes,
					afiliadosData,
					autorizacionesData,
					reclamosData,
					proveedoresData,
					polizasData,
					serviciosData,
					pagosData,
					facturasData,
				]) => {
					if (!active) return;
					setPlanes(adaptCollection(planes, adaptPlan));
					setAfiliados(adaptCollection(afiliadosData, adaptAfiliado));
					setAutorizaciones(
						adaptCollection(autorizacionesData, adaptAutorizacion),
					);
					setReclamaciones(adaptCollection(reclamosData, adaptReclamo));
					setProveedores(adaptCollection(proveedoresData, adaptProveedor));
					setPolizas(adaptCollection(polizasData, adaptPoliza));
					setServicios(adaptCollection(serviciosData, adaptServicio));
					setPagos(adaptCollection(pagosData, adaptPago));
					setFacturas(adaptCollection(facturasData, adaptFactura));
				},
			)
			.catch(() => {
				if (!active) return;
				addNotification({
					type: "error",
					title: "Error de conexión",
					message: "No fue posible cargar los datos del backend.",
				});
			})
			.finally(() => {
				if (active) setLoading(false);
			});
		return () => {
			active = false;
		};
	}, [isAuthenticated, currentUser, addNotification]);

	const loadOwnAuthorizations = useCallback(async () => {
		if (!isAuthenticated || currentUser?.rol !== "Afiliado") return;
		const token = localStorage.getItem("arsfuturo_token");
		setLoading(true);
		setOwnError("");
		try {
			const rows = await resourcesApi.misAutorizaciones();
			if (localStorage.getItem("arsfuturo_token") === token)
				setOwnAuthorizations(adaptCollection(rows, adaptAutorizacion));
		} catch (error) {
			const currentToken = localStorage.getItem("arsfuturo_token");
			if (currentToken && currentToken !== token) return;
			setOwnError(
				error.response?.data?.message ||
					"No fue posible consultar tus autorizaciones",
			);
		} finally {
			const currentToken = localStorage.getItem("arsfuturo_token");
			if (!currentToken || currentToken === token) setLoading(false);
		}
	}, [isAuthenticated, currentUser]);
	useEffect(() => {
		loadOwnAuthorizations();
	}, [loadOwnAuthorizations]);

	const kpis = useMemo(() => {
		const activos = afiliados.filter((a) => a.estado === "Activo").length;
		const pendRecl = reclamaciones.filter(
			(r) => r.estado === "En revisión",
		).length;
		const hoy = new Date().toISOString().slice(0, 10);
		const autHoy = autorizaciones.filter((a) => a.fecha === hoy).length;
		const totalMes = reclamaciones
			.filter((r) => new Date(r.fecha).getMonth() === new Date().getMonth())
			.reduce((s, r) => s + r.monto, 0);
		return { activos, pendRecl, autHoy, totalMes };
	}, [afiliados, reclamaciones, autorizaciones]);

	const chartMes = useMemo(() => {
		// Generar datos de los últimos 6 meses basados en reclamaciones reales
		const meses = [];
		const hoy = new Date();

		for (let i = 5; i >= 0; i--) {
			const fecha = new Date(hoy.getFullYear(), hoy.getMonth() - i, 1);
			const nombreMes = fecha.toLocaleDateString("es-ES", { month: "short" });
			const mesAno = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, "0")}`;

			// Calcular monto real de reclamaciones para ese mes
			const reclamacionesMes = reclamaciones.filter((r) => {
				const fechaReclamo = new Date(r.fecha);
				const mesReclamo = `${fechaReclamo.getFullYear()}-${String(fechaReclamo.getMonth() + 1).padStart(2, "0")}`;
				return mesReclamo === mesAno;
			});

			const montoTotal = reclamacionesMes.reduce((sum, r) => sum + r.monto, 0);

			meses.push({
				mes: nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1),
				monto: montoTotal,
			});
		}

		return meses;
	}, [reclamaciones]);

	const chartAprob = useMemo(() => {
		const porPlan = planes.map((p) => {
			const autosPlan = autorizaciones.filter(
				(a) => afiliados.find((x) => x.id === a.afiliadoId)?.plan === p.id,
			);
			const total = autosPlan.length;

			if (total === 0) {
				return { plan: p.id, tasa: 0 };
			}

			const aprob = autosPlan.filter((x) => x.estado === "Aprobada").length;
			return { plan: p.id, tasa: Math.round((aprob / total) * 100) };
		});
		return porPlan;
	}, [autorizaciones, afiliados, planes]);

	const decidirAutorizacion = async (
		id: string,
		accion: "aprobar" | "rechazar",
	) => {
		if (
			!currentUser ||
			!["Administrador", "Supervisor"].includes(currentUser.rol)
		) {
			addNotification({
				type: "error",
				title: "Acción no permitida",
				message: `No tienes permisos para ${accion} autorizaciones.`,
			});
			return;
		}
		const rechazar = accion === "rechazar";
		try {
			const { estado } = adaptAutorizacion(
				await (rechazar
					? mutationsApi.rechazarAutorizacion
					: mutationsApi.aprobarAutorizacion)(id),
			);
			setAutorizaciones((prev) =>
				prev.map((a) => (a.id === id ? { ...a, estado } : a)),
			);
			addNotification({
				type: "success",
				title: rechazar ? "Autorización rechazada" : "Autorización aprobada",
				message: "Se guardó la decisión.",
			});
		} catch (error) {
			addNotification({
				type: "error",
				title: `Error al ${accion} la autorización`,
				message:
					error.response?.data?.message ||
					`No fue posible ${accion} la autorización.`,
			});
		}
	};

	const registrarReclamo = async ({
		afiliadoId,
		proveedorId,
		monto,
	}: ReclamoInput) => {
		const nuevo = adaptReclamo(
			await mutationsApi.reclamo(
				toClaimPayload({ afiliadoId, proveedorId, monto: Number(monto) }),
			),
		);
		setReclamaciones((prev) => [nuevo, ...prev]);
	};

	const decidirReclamo = async (id: string, accion: "aprobar" | "rechazar") => {
		try {
			const { estado } = adaptReclamo(
				await mutationsApi.decidirReclamo(id, accion),
			);
			setReclamaciones((prev) =>
				prev.map((reclamo) =>
					reclamo.id === id ? { ...reclamo, estado } : reclamo,
				),
			);
			addNotification({
				type: "success",
				title: accion === "aprobar" ? "Reclamo aprobado" : "Reclamo rechazado",
				message: "Se guardó la decisión.",
			});
		} catch (error) {
			addNotification({
				type: "error",
				title: "No se pudo procesar el reclamo",
				message: error.response?.data?.message || "Intenta de nuevo.",
			});
		}
	};

	const crearAutorizacion = async ({
		afiliadoId,
		proveedorId,
		procedimiento,
	}: AutorizacionInput) => {
		const af = afiliados.find((a) => String(a.id) === String(afiliadoId));

		if (!af) return null;

		const nueva = adaptAutorizacion(
			await mutationsApi.autorizacion(
				toAuthorizationPayload({
					afiliadoId,
					proveedorId,
					procedimiento,
				}),
			),
		);

		setAutorizaciones((prev) => [nueva, ...prev]);
		return nueva;
	};

	// Registrar Servicio Médico (CU07)
	const registrarServicio = async ({
		afiliadoId,
		proveedorId,
		descripcion,
		costo,
		autorizacionId,
	}: ServicioInput) => {
		const nuevo = adaptServicio(
			await mutationsApi.servicio(
				toServicePayload({
					afiliadoId,
					proveedorId,
					descripcion,
					costo,
					autorizacionId,
				}),
			),
		);
		setServicios((prev) => [nuevo, ...prev]);
		return nuevo;
	};

	// Emitir Pago a Proveedor (CU08) — solo Administrador
	const emitirPago = async ({
		servicioId,
		monto,
		referenciaBanco,
		metodo = "Transferencia",
	}: PagoInput) => {
		if (currentUser?.rol !== "Administrador") {
			alert("No tienes permisos para emitir pagos");
			return null;
		}
		const nuevo = adaptPago(
			await mutationsApi.pago(
				toPaymentPayload({ servicioId, monto, referenciaBanco, metodo }),
			),
		);
		setPagos((prev) => [nuevo, ...prev.filter((p) => p.id !== nuevo.id)]);
		setServicios((prev) =>
			prev.map((s) =>
				s.id === nuevo.servicioId
					? {
							...s,
							estado: "Pagado",
							estadoPago: nuevo.estado,
							elegiblePago: false,
						}
					: s,
			),
		);
		return nuevo;
	};

	// Crear nuevo afiliado
	const crearAfiliado = async ({
		nombre,
		cedula,
		plan,
		estado = "Activo",
		desde,
		nacimiento,
		telefono,
		correo,
		dependientes = 0,
	}: NuevoAfiliadoInput) => {
		const nuevo = adaptAfiliado(
			await mutationsApi.afiliado(
				toInsuredPayload({
					nombre,
					cedula,
					plan,
					estado,
					desde,
					nacimiento,
					telefono,
					correo,
					dependientes,
				}),
			),
		);
		setAfiliados((prev) => [nuevo, ...prev]);
		addNotification({
			type: "success",
			title: "Afiliado creado",
			message: `${nuevo.nombre} agregado con ID ${nuevo.id}.`,
		});
		return nuevo;
	};

	// Actualizar datos de afiliado (CU10)
	const actualizarAfiliado = async (
		id: string,
		{ telefono, correo }: EditarAfiliadoInput,
	) => {
		const actualizado = adaptAfiliado(
			await mutationsApi.actualizarAfiliado(
				id,
				toInsuredUpdatePayload({ telefono, correo }),
			),
		);
		setAfiliados((prev) => prev.map((a) => (a.id === id ? actualizado : a)));
	};

	// Facturación de pólizas (Pago de Prima Mensual)
	const generarFacturasMes = async () => {
		const delPeriodo = (await mutationsApi.generarFacturas()).map(adaptFactura);
		const ids = new Set(delPeriodo.map((f) => f.id));
		setFacturas((prev) => [
			...delPeriodo,
			...prev.filter((f) => !ids.has(f.id)),
		]);
		addNotification({
			type: "info",
			title: "Facturación del mes",
			message: delPeriodo.length
				? `${delPeriodo.length} facturas para ${delPeriodo[0].periodo}.`
				: "No hay pólizas elegibles para el período.",
		});
	};

	const enviarRecordatorioFactura = async (id: string) => {
		const actualizada = adaptFactura(await mutationsApi.recordarFactura(id));
		setFacturas((prev) => prev.map((f) => (f.id === id ? actualizada : f)));
		addNotification({
			id: Date.now(),
			type: "info",
			title: "Recordatorio registrado",
			message: "Se actualizó el indicador de recordatorio de la factura.",
		});
	};

	const refrescarPoliza = async (id: string) => {
		try {
			const actualizada = adaptPoliza(await resourcesApi.poliza(id));
			setPolizas((prev) => prev.map((p) => (p.id === id ? actualizada : p)));
			return actualizada;
		} catch {
			addNotification({
				type: "warning",
				title: "Estado de póliza sin actualizar",
				message:
					"Vuelve a cargar la página para consultar el estado confirmado.",
			});
			return null;
		}
	};

	const registrarPagoPrima = async ({ facturaId, referencia }: PrimaInput) => {
		const factura = facturas.find((f) => f.id === facturaId);
		if (!factura) return null;
		const actualizada = adaptFactura(
			await mutationsApi.pagarFactura(facturaId, referencia),
		);
		setFacturas((prev) =>
			prev.map((f) => (f.id === facturaId ? actualizada : f)),
		);
		const poliza = await refrescarPoliza(factura.polizaId);
		addNotification({
			id: Date.now(),
			type: "success",
			title: "Pago de prima registrado",
			message: poliza
				? `Estado de la póliza ${poliza.id}: ${poliza.estado}.`
				: "El pago quedó registrado.",
		});
		return actualizada;
	};

	const marcarPeriodoGracia = async (facturaId: string) => {
		const factura = facturas.find((f) => f.id === facturaId);
		if (!factura) return;
		const actualizada = adaptFactura(
			await mutationsApi.graciaFactura(facturaId),
		);
		setFacturas((prev) =>
			prev.map((f) => (f.id === facturaId ? actualizada : f)),
		);
		const poliza = await refrescarPoliza(factura.polizaId);
		addNotification({
			id: Date.now(),
			type: "warning",
			title: "Periodo de gracia registrado en la factura",
			message: poliza
				? `Estado de la póliza ${poliza.id}: ${poliza.estado}.`
				: "",
		});
	};

	const suspenderPolizaPorFactura = async (facturaId: string) => {
		const factura = facturas.find((f) => f.id === facturaId);
		if (!factura) return;
		await mutationsApi.suspenderFactura(facturaId);
		const [poliza, actuales] = await Promise.all([
			refrescarPoliza(factura.polizaId),
			resourcesApi.facturas(),
		]);
		setFacturas(adaptCollection(actuales, adaptFactura));
		if (poliza) {
			addNotification({
				type: "info",
				title: "Estado de la póliza",
				message: `La póliza ${poliza.id} figura como ${poliza.estado}.`,
			});
		}
	};

	const clearSessionData = () => {
		setPlanes([]);
		setAfiliados([]);
		setAutorizaciones([]);
		setReclamaciones([]);
		setProveedores([]);
		setPolizas([]);
		setServicios([]);
		setPagos([]);
		setFacturas([]);
	};

	// Funciones de autenticación
	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoginError("");
		setLoginLoading(true);

		try {
			const response = await authApi.login(loginForm);
			if (!response?.token || !response?.user) {
				throw new Error("La API devolvió una respuesta de login incompleta");
			}
			localStorage.setItem("arsfuturo_token", response.token);
			const user = adaptUser(response.user);
			setCurrentUser(user);
			setIsAuthenticated(true);
			setLoginForm({ usuario: "", password: "" });
		} catch (error) {
			setLoginError(
				error.response?.data?.message ||
					error.message ||
					"No fue posible iniciar sesión",
			);
		} finally {
			setLoginLoading(false);
		}
	};

	const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoginError("");
		setLoginLoading(true);
		try {
			await authApi.register(registerForm);
			setLoginForm({ usuario: registerForm.usuario, password: "" });
			setRegisterForm({ usuario: "", password: "", nombre: "", cedula: "" });
			setRegistering(false);
			addNotification({
				type: "success",
				title: "Registro completado",
				message: "Ya puedes iniciar sesión con tu usuario.",
			});
		} catch (error) {
			addNotification({
				type: "error",
				title: "No se pudo completar el registro",
				message: registrationFeedback(
					error,
					"Revisa los datos e inténtalo de nuevo.",
				),
			});
		} finally {
			setLoginLoading(false);
		}
	};

	const handleLogout = () => {
		setOwnAuthorizations([]);
		setOwnError("");
		localStorage.removeItem("arsfuturo_token");
		setIsAuthenticated(false);
		setCurrentUser(null);
		setTab("dashboard");
		// Resetear datos al cerrar sesión
		clearSessionData();
	};

	// Si no está autenticado, mostrar pantalla de login
	if (!isAuthenticated) {
		return (
			<div className="app-shell min-h-screen w-full px-4 flex items-center justify-center">
				<NotificationContainer
					notifications={notifications}
					onRemove={removeNotification}
				/>
				<Card className="w-full max-w-md !border-[var(--border)] !bg-[var(--surface-solid)]/90 p-7 sm:p-9">
					<div className="text-center mb-8">
						<div className="mx-auto mb-5 grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-[var(--accent)] shadow-[0_12px_24px_var(--accent-glow)]">
							<img
								src="/logo_ars.png"
								alt="ARS Futuro Logo"
								className="w-full h-full object-contain"
							/>
						</div>
						<h1 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--text)] mb-2">
							ARS Futuro
						</h1>
						<p className="text-[var(--text-muted)]">
							Tu operación de salud, más clara.
						</p>
					</div>

					{registering ? (
						<form onSubmit={handleRegister} className="space-y-4">
							<h2 className="text-xl font-semibold">Registro de afiliado</h2>
							{(
								[
									{
										key: "nombre",
										label: "Nombre completo",
										type: "text",
										min: 2,
										max: 120,
										autocomplete: "name",
									},
									{
										key: "cedula",
										label: "Cédula",
										type: "text",
										min: 11,
										max: 13,
										autocomplete: "off",
									},
									{
										key: "usuario",
										label: "Usuario",
										type: "text",
										min: 3,
										max: 120,
										autocomplete: "username",
									},
									{
										key: "password",
										label: "Contraseña",
										type: "password",
										min: 6,
										max: 72,
										autocomplete: "new-password",
									},
								] as const
							).map((field) => (
								<div key={field.key}>
									<label
										htmlFor={`registro-${field.key}`}
										className="mb-1 block text-sm font-semibold"
									>
										{field.label}
									</label>
									<Input
										id={`registro-${field.key}`}
										type={field.type}
										value={registerForm[field.key]}
										onChange={(value) =>
											setRegisterForm((prev) => ({
												...prev,
												[field.key]: value,
											}))
										}
										minLength={field.min}
										maxLength={field.max}
										autoComplete={field.autocomplete}
										required
									/>
								</div>
							))}
							{loginError && (
								<div
									role="alert"
									className="rounded-xl border tone-error p-3 text-sm"
								>
									{loginError}
								</div>
							)}
							<Button type="submit" className="w-full" disabled={loginLoading}>
								{loginLoading ? "Validando y registrando..." : "Crear cuenta"}
							</Button>
						</form>
					) : (
						<form onSubmit={handleLogin} className="space-y-4">
							<div>
								<label
									className="mb-1 block text-sm font-semibold text-[var(--text-body)]"
									htmlFor="login-usuario"
								>
									Usuario
								</label>
								<div className="relative">
									<User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)]" />
									<Input
										id="login-usuario"
										autoComplete="username"
										value={loginForm.usuario}
										onChange={(value) =>
											setLoginForm((prev) => ({ ...prev, usuario: value }))
										}
										placeholder="Ingrese su usuario"
										className="pl-9"
										required
									/>
								</div>
							</div>

							<div>
								<label
									className="mb-1 block text-sm font-semibold text-[var(--text-body)]"
									htmlFor="login-contrasena"
								>
									Contraseña
								</label>
								<div className="relative">
									<Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)]" />
									<Input
										id="login-contrasena"
										autoComplete="current-password"
										type="password"
										value={loginForm.password}
										onChange={(value) =>
											setLoginForm((prev) => ({ ...prev, password: value }))
										}
										placeholder="Ingrese su contraseña"
										className="pl-9"
										required
									/>
								</div>
							</div>

							{loginError && (
								<div
									role="alert"
									className="rounded-xl border tone-error p-3 text-center text-sm"
								>
									{loginError}
								</div>
							)}

							<Button type="submit" className="w-full" disabled={loginLoading}>
								{loginLoading ? "Conectando..." : "Iniciar Sesión"}
							</Button>
						</form>
					)}
					<Button
						type="button"
						className="w-full mt-4"
						disabled={loginLoading}
						onClick={() => {
							setRegistering(!registering);
							setLoginError("");
						}}
					>
						{registering
							? "Volver al inicio de sesión"
							: "Registrarse para consultar autorizaciones"}
					</Button>

					<div className="mt-6 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-sunken)] p-4">
						<p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-accent-soft)]">
							Acceso de demostración
						</p>
						<div className="space-y-1 text-xs text-[var(--text-muted)]">
							<div>• admin / admin123 (Administrador)</div>
							<div>• agente / agente123 (Agente ARS)</div>
							<div>• supervisor / super123 (Supervisor)</div>
						</div>
					</div>
				</Card>
			</div>
		);
	}

	if (currentUser?.rol === "Afiliado") {
		return (
			<div className="app-shell min-h-screen text-[var(--text-body)]">
				<AppHeader
					currentUser={currentUser}
					onLogout={handleLogout}
					tema={tema}
					onToggleTema={toggleTema}
				/>
				<main className="mx-auto max-w-5xl p-4 mobile-l:p-8">
					<h1 className="text-3xl font-bold mb-4">Mis autorizaciones</h1>
					<Button onClick={loadOwnAuthorizations} disabled={loading}>
						Actualizar
					</Button>
					{loading ? (
						<p role="status" className="my-4">
							Consultando autorizaciones...
						</p>
					) : ownError ? (
						<p role="alert" className="tone-error my-4 p-3">
							{ownError}
						</p>
					) : ownAuthorizations.length === 0 ? (
						<p className="my-4">No tienes autorizaciones registradas.</p>
					) : (
						<div className="grid gap-4 my-4">
							{ownAuthorizations.map((item) => (
								<Card key={item.id} className="p-4">
									<h2 className="font-semibold">{item.procedimiento}</h2>
									<p>Prestador: {item.proveedorNombre}</p>
									<p>Fecha: {formatDate(item.fecha)}</p>
									<p>Estado: {item.estado}</p>
									<p>Copago: {currency(item.copago ?? 0)}</p>
								</Card>
							))}
						</div>
					)}
				</main>
			</div>
		);
	}

	return (
		<div className="app-shell min-h-screen w-full text-[var(--text-body)] flex flex-col">
			<AppHeader
				currentUser={currentUser}
				onLogout={handleLogout}
				tema={tema}
				onToggleTema={toggleTema}
			/>

			<main className="mx-auto w-full min-w-0 max-w-[90rem] px-4 py-6 lg:px-8 lg:py-8 flex-1">
				<AppNavigation
					tab={tab}
					setTab={setTab}
					isAdmin={currentUser?.rol === "Administrador"}
					isSupervisor={isSupervisor}
				/>

				<div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
							Panel de operaciones
						</p>
						<h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--text)]">
							{
								{
									dashboard: "Resumen general",
									afiliados: "Afiliados",
									autoriz: "Autorizaciones",
									reclamos: "Reclamos",
									servicios: "Servicios médicos",
									polizas: "Pólizas",
									pagos: "Pagos",
									facturas: "Facturación",
									proveed: "Proveedores",
								}[tab]
							}
						</h2>
					</div>
					<p className="max-w-sm text-sm leading-6 text-[var(--text-muted)]">
						Información operativa para tomar decisiones con confianza.
					</p>
				</div>

				{loading ? (
					<div className="flex items-center justify-center py-24 text-[var(--text-muted)]">
						<Loader2 className="w-5 h-5 mr-2 animate-spin" />
						Cargando…
					</div>
				) : (
					<AnimatePresence mode="wait">
						{tab === "dashboard" && (
							<motion.div
								key="dash"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								className="grid grid-cols-1 mobile-m:grid-cols-2 lg:grid-cols-4 gap-4"
							>
								<Card>
									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-[var(--text-muted)]">
												Asegurados activos
											</p>
											<p className="text-2xl font-semibold">{kpis.activos}</p>
										</div>
										<Users className="w-8 h-8 text-[var(--icon-info)]" />
									</div>
								</Card>
								<Card>
									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-[var(--text-muted)]">
												Reclamaciones en revisión
											</p>
											<p className="text-2xl font-semibold">{kpis.pendRecl}</p>
										</div>
										<FileText className="w-8 h-8 text-[var(--icon-warn)]" />
									</div>
								</Card>
								<Card>
									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-[var(--text-muted)]">
												Autorizaciones hoy
											</p>
											<p className="text-2xl font-semibold">{kpis.autHoy}</p>
										</div>
										<Stethoscope className="w-8 h-8 text-[var(--icon-ok)]" />
									</div>
								</Card>
								<Card>
									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-[var(--text-muted)]">
												Siniestros del mes
											</p>
											<p className="text-2xl font-semibold">
												{currency(kpis.totalMes)}
											</p>
										</div>
										<Wallet className="w-8 h-8 text-[var(--icon-alt)]" />
									</div>
								</Card>

								<Card className="col-span-1 sm:col-span-2 lg:col-span-2 h-[300px] pb-9">
									<h3 className="font-semibold mb-2">Siniestros por mes</h3>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart data={chartMes}>
											<CartesianGrid strokeDasharray="3 3" stroke={g?.linea} />
											<XAxis dataKey="mes" tick={g?.eje} stroke={g?.linea} />
											<YAxis tick={g?.eje} stroke={g?.linea} />
											<Tooltip contentStyle={g?.tooltip} />
											<Legend />
											<Bar dataKey="monto" name="Monto" fill={g?.serie} />
										</BarChart>
									</ResponsiveContainer>
								</Card>

								<Card className="col-span-1 sm:col-span-2 lg:col-span-2 h-[300px] pb-9">
									<h3 className="font-semibold mb-2">
										Tasa de aprobación por plan
									</h3>
									<ResponsiveContainer width="100%" height="100%">
										<LineChart data={chartAprob}>
											<CartesianGrid strokeDasharray="3 3" stroke={g?.linea} />
											<XAxis dataKey="plan" tick={g?.eje} stroke={g?.linea} />
											<YAxis
												domain={[0, 100]}
												tick={g?.eje}
												stroke={g?.linea}
											/>
											<Tooltip contentStyle={g?.tooltip} />
											<Legend />
											<Line
												dataKey="tasa"
												name="% Aprobación"
												stroke={g?.serie}
											/>
										</LineChart>
									</ResponsiveContainer>
								</Card>
							</motion.div>
						)}

						{tab === "afiliados" && (
							<motion.div
								key="afiliados"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
							>
								<Card>
									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
										<div className="flex items-center gap-2">
											<Filter className="w-4 h-4 text-[var(--text-faint)]" />
											<span className="text-sm text-[var(--text-body)]">
												{afiliados.length} resultado(s)
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Button
												variant="primary"
												className="flex items-center justify-center pt-1"
												onClick={() => setOpenNuevoAfiliado(true)}
											>
												<Plus className="w-4 h-4 mr-2" /> Nuevo afiliado
											</Button>
											<Button
												variant="ghost"
												className="flex items-center justify-center pt-1"
												onClick={() =>
													exportCsv("Afiliados", [
														[
															"ID",
															"Nombre",
															"Cédula",
															"Plan",
															"Estado",
															"Desde",
															"Nacimiento",
															"Teléfono",
															"Correo",
															"Dependientes",
														],
														...afiliados.map((a) => [
															a.id,
															a.nombre,
															a.cedula,
															a.plan,
															a.estado,
															formatDate(a.desde),
															formatDate(a.nacimiento),
															a.telefono,
															a.correo,
															a.dependientes,
														]),
													])
												}
											>
												<FileDown className="w-4 h-4 mr-2" />{" "}
												<span className="hidden sm:inline">Exportar</span>
											</Button>
										</div>
									</div>
									<NuevoAfiliadoModal
										open={openNuevoAfiliado}
										onClose={() => setOpenNuevoAfiliado(false)}
										planes={planes}
										crearAfiliado={crearAfiliado}
									/>
									<div className="overflow-x-auto">
										<table className="data-table w-full text-sm min-w-[800px]">
											<thead>
												<tr className="text-left text-[var(--text-muted)] border-b">
													<th className="py-2 pr-2 min-w-[150px]">Nombre</th>
													<th className="py-2 pr-2 min-w-[120px]">Cedula</th>
													<th className="py-2 pr-2 min-w-[100px]">Plan</th>
													<th className="py-2 pr-2 min-w-[80px]">Estado</th>
													<th className="py-2 pr-2 min-w-[100px]">Desde</th>
													<th className="py-2 pr-2 min-w-[200px]">Contacto</th>
													<th className="py-2 pr-2 min-w-[120px]">Acciones</th>
												</tr>
											</thead>
											<tbody>
												{afiliados.map((a) => (
													<tr key={a.id} className="border-b last:border-0">
														<td className="py-2 pr-2 font-medium">
															{a.nombre}
														</td>
														<td className="py-2 pr-2">{a.cedula}</td>
														<td className="py-2 pr-2">
															{getPlanName(planes, a.plan)}
														</td>
														<td className="py-2 pr-2">
															<Badge
																color={
																	a.estado === "Activo" ? "green" : "amber"
																}
															>
																{a.estado}
															</Badge>
														</td>
														<td className="py-2 pr-2">{formatDate(a.desde)}</td>
														<td className="py-2 pr-2 text-[var(--text-body)]">
															<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
																<span className="inline-flex items-center gap-1 text-xs">
																	<Phone className="w-3 h-3" />
																	{a.telefono}
																</span>
																<span className="inline-flex items-center gap-1 text-xs">
																	<Mail className="w-3 h-3" />
																	{a.correo}
																</span>
															</div>
														</td>
														<td className="py-2 pr-2">
															<AfiliadoActions
																afiliado={a}
																afiliados={afiliados}
																proveedores={proveedores}
																crearAutorizacion={crearAutorizacion}
																addNotification={addNotification}
																onEditarAfiliado={actualizarAfiliado}
															/>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</Card>
							</motion.div>
						)}

						{tab === "autoriz" && (
							<AutorizacionesTab
								key="autoriz"
								autorizaciones={autorizaciones}
								afiliados={afiliados}
								proveedores={proveedores}
								aprobarAut={(id) => decidirAutorizacion(id, "aprobar")}
								rechazarAut={(id) => decidirAutorizacion(id, "rechazar")}
								puedeDecidir={currentUser?.rol === "Administrador"}
								crearAutorizacion={crearAutorizacion}
								addNotification={addNotification}
							/>
						)}

						{tab === "reclamos" && (
							<ReclamosTab
								key="reclamos"
								reclamaciones={reclamaciones}
								afiliados={afiliados}
								proveedores={proveedores}
								onRegistrar={registrarReclamo}
								onDecidir={decidirReclamo}
								canRegister={!isSupervisor}
								canDecide={isSupervisor || currentUser?.rol === "Administrador"}
								addNotification={addNotification}
								tema={tema}
							/>
						)}

						{tab === "servicios" && (
							<ServiciosTab
								key="servicios"
								servicios={servicios}
								afiliados={afiliados}
								proveedores={proveedores}
								autorizaciones={autorizaciones}
								onRegistrar={registrarServicio}
								addNotification={addNotification}
							/>
						)}

						{tab === "polizas" && (
							<PolizasTab key="polizas" polizas={polizas} planes={planes} />
						)}

						{tab === "proveed" && (
							<ProveedoresTab key="proveed" proveedores={proveedores} />
						)}

						{tab === "pagos" && currentUser?.rol === "Administrador" && (
							<PagosTab
								key="pagos"
								servicios={servicios}
								pagos={pagos}
								proveedores={proveedores}
								onEmitirPago={emitirPago}
								addNotification={addNotification}
							/>
						)}

						{tab === "facturas" && currentUser?.rol === "Administrador" && (
							<FacturacionTab
								key="facturas"
								facturas={facturas}
								polizas={polizas}
								onGenerarMes={generarFacturasMes}
								onRecordatorio={enviarRecordatorioFactura}
								onRegistrarPago={registrarPagoPrima}
								onGracia={marcarPeriodoGracia}
								onSuspender={suspenderPolizaPorFactura}
								addNotification={addNotification}
							/>
						)}
					</AnimatePresence>
				)}
			</main>

			<footer className="mt-auto border-t border-[var(--border-soft)] bg-[var(--surface-solid)]/70 backdrop-blur">
				<div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 text-xs text-[var(--text-muted)] lg:px-8">
					<div className="flex items-center gap-2">
						<img
							src="/logo_ars.png"
							alt="ARS Futuro Logo"
							className="h-5 w-5 object-contain"
						/>
						<span className="font-medium">ARS Futuro — Demo</span>
					</div>
					<div className="flex items-center gap-3">
						<span>Grupo 4 Ing. Software II</span>
						<span>© 2026</span>
					</div>
				</div>
			</footer>

			{/* Sistema de notificaciones */}
			<NotificationContainer
				notifications={notifications}
				onRemove={removeNotification}
			/>
		</div>
	);
}
