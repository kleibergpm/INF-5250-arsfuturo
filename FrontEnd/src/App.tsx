import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  FileDown,
  RefreshCw,
  Stethoscope,
  Users,
  FileText,
  Coins,
  HeartPulse,
  CheckCircle2,
  XCircle,
  Building2,
  Phone,
  Mail,
  Filter,
  Wallet,
  Loader2,
  Home,
  LogOut,
  User,
  Lock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";
import { authApi, mutationsApi, resourcesApi } from "./api/client";
import {
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
  toAuthorizationPayload,
  toClaimPayload,
  toInsuredPayload,
  toInsuredUpdatePayload,
  toPaymentPayload,
  toServicePayload,
} from "./api/adapters";
import { Badge, Button, Card, Divider, Input, Modal, NotificationContainer, Select, cls } from "./components/ui";

const currency = (n) => new Intl.NumberFormat("es-DO", { style: "currency", currency: "DOP" }).format(n);
const formatDate = (d) => new Intl.DateTimeFormat("es-DO").format(new Date(d));
// La cobertura por procedimiento ahora la decide solo el backend (createAuthorization);
// esto es un simple lookup de presentación, no una regla de negocio.
const getPlanById = (plans, planId) =>
  plans.find((p) => String(p.id) === String(planId)) || { id: planId, nombre: "Plan no disponible" };
function exportCsv(filename, rows) {
  const csv = rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function ARS_Futuro_App() {
  const [tab, setTab] = useState("dashboard");

  // Estados de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ usuario: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [planes, setPlanes] = useState([]);
  const [afiliados, setAfiliados] = useState([]);
  const [autorizaciones, setAutorizaciones] = useState([]);
  const [reclamaciones, setReclamaciones] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [polizas, setPolizas] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [pagos, setPagos] = useState([]);
  const [facturas, setFacturas] = useState([]);

  // Nota: no hay un input conectado a este filtro en la pestaña de afiliados hoy
  // (setQ nunca se llama); se deja de solo lectura para no tocar comportamiento existente.
  const [q] = useState("");
  const [loading, setLoading] = useState(false);
  const [openNuevoAfiliado, setOpenNuevoAfiliado] = useState(false);

  // Estado para notificaciones
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("arsfuturo_token");
    if (!token) return;
    authApi.me().then((user) => {
      const authenticatedUser = adaptUser(user);
      setCurrentUser(authenticatedUser);
      setIsAuthenticated(true);
    }).catch(() => {
      localStorage.removeItem("arsfuturo_token");
    });
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return undefined;
    setLoading(true);
    const isAdmin = currentUser?.rol === "Administrador";
    Promise.all([
      resourcesApi.planes(),
      resourcesApi.afiliados(),
      resourcesApi.autorizaciones(),
      resourcesApi.reclamos(),
      resourcesApi.proveedores(),
      isAdmin ? resourcesApi.polizas() : Promise.resolve([]),
      resourcesApi.servicios(),
      isAdmin ? resourcesApi.pagos() : Promise.resolve([]),
      isAdmin ? resourcesApi.facturas() : Promise.resolve([]),
    ]).then(([planes, afiliadosData, autorizacionesData, reclamosData, proveedoresData, polizasData, serviciosData, pagosData, facturasData]) => {
      setPlanes(adaptCollection(planes, adaptPlan));
      setAfiliados(adaptCollection(afiliadosData, adaptAfiliado));
      setAutorizaciones(adaptCollection(autorizacionesData, adaptAutorizacion));
      setReclamaciones(adaptCollection(reclamosData, adaptReclamo));
      setProveedores(adaptCollection(proveedoresData, adaptProveedor));
      setPolizas(adaptCollection(polizasData, adaptPoliza));
      setServicios(adaptCollection(serviciosData, adaptServicio));
      setPagos(adaptCollection(pagosData, adaptPago));
      setFacturas(adaptCollection(facturasData, adaptFactura));
    }).catch(() => {
      addNotification({ type: "error", title: "Error de conexión", message: "No fue posible cargar los datos del backend." });
    }).finally(() => setLoading(false));
  }, [isAuthenticated, currentUser?.rol]);

  const afiliadosFiltrados = useMemo(() => {
    return afiliados.filter((a) => a.nombre.toLowerCase().includes(q.toLowerCase()) || a.cedula.includes(q));
  }, [afiliados, q]);

  const kpis = useMemo(() => {
    const activos = afiliados.filter((a) => a.estado === "Activo").length;
    const pendRecl = reclamaciones.filter((r) => r.estado === "En revisión").length;
    const hoy = new Date().toISOString().slice(0, 10);
    const autHoy = autorizaciones.filter((a) => a.fecha === hoy).length;
    const totalMes = reclamaciones.filter((r) => new Date(r.fecha).getMonth() === new Date().getMonth()).reduce((s, r) => s + r.monto, 0);
    return { activos, pendRecl, autHoy, totalMes };
  }, [afiliados, reclamaciones, autorizaciones]);

  const chartMes = useMemo(() => {
    // Generar datos de los últimos 6 meses basados en reclamaciones reales
    const meses = [];
    const hoy = new Date();

    for (let i = 5; i >= 0; i--) {
      const fecha = new Date(hoy.getFullYear(), hoy.getMonth() - i, 1);
      const nombreMes = fecha.toLocaleDateString('es-ES', { month: 'short' });
      const mesAno = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}`;

      // Calcular monto real de reclamaciones para ese mes
      const reclamacionesMes = reclamaciones.filter(r => {
        const fechaReclamo = new Date(r.fecha);
        const mesReclamo = `${fechaReclamo.getFullYear()}-${String(fechaReclamo.getMonth() + 1).padStart(2, '0')}`;
        return mesReclamo === mesAno;
      });

      const montoTotal = reclamacionesMes.reduce((sum, r) => sum + r.monto, 0);

      meses.push({
        mes: nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1),
        monto: montoTotal
      });
    }

    return meses;
  }, [reclamaciones, afiliados]);

  const chartAprob = useMemo(() => {
    const porPlan = planes.map((p) => {
      const autosPlan = autorizaciones.filter((a) => (afiliados.find((x) => x.id === a.afiliadoId)?.plan) === p.id);
      const total = autosPlan.length;

      if (total === 0) {
        return { plan: p.id, tasa: 0 };
      }

      const aprob = autosPlan.filter((x) => x.estado === "Aprobada").length;
      return { plan: p.id, tasa: Math.round((aprob / total) * 100) };
    });
    return porPlan;
  }, [autorizaciones, afiliados, planes]);

  const aprobarAut = async (id) => {
    // Solo administradores y supervisores pueden aprobar autorizaciones
    if (!currentUser || !["Administrador", "Supervisor"].includes(currentUser.rol)) {
      alert("No tienes permisos para aprobar autorizaciones");
      return;
    }
    await mutationsApi.aprobarAutorizacion(id);
    setAutorizaciones((prev) => prev.map((a) => a.id === id ? { ...a, estado: "Aprobada" } : a));
  };
  const rechazarAut = async (id) => {
    // Solo administradores y supervisores pueden rechazar autorizaciones
    if (!currentUser || !["Administrador", "Supervisor"].includes(currentUser.rol)) {
      alert("No tienes permisos para rechazar autorizaciones");
      return;
    }
    await mutationsApi.rechazarAutorizacion(id);
    setAutorizaciones((prev) => prev.map((a) => a.id === id ? { ...a, estado: "Rechazada" } : a));
  };

  const registrarReclamo = async ({ afiliadoId, proveedorId, monto }) => {
    const nuevo = adaptReclamo(await mutationsApi.reclamo(toClaimPayload({ afiliadoId, proveedorId, monto: Number(monto) })));
    setReclamaciones((prev) => [nuevo, ...prev]);
  };
//funcion mejorada para que no se cree una autorizacion aprobada por defecto
 const crearAutorizacion = async ({ afiliadoId, proveedorId, procedimiento }) => {
  const af = afiliados.find(
    (a) => String(a.id) === String(afiliadoId)
  );

  if (!af) return null;

  const nueva = adaptAutorizacion(
    await mutationsApi.autorizacion(
      toAuthorizationPayload({
        afiliadoId,
        proveedorId,
        procedimiento
      })
    )
  );

  // Toda autorización nueva comienza como Pendiente
  const nuevaPendiente = {
    ...nueva,
    estado: "Pendiente"
  };

  setAutorizaciones((prev) => [
    nuevaPendiente,
    ...prev
  ]);

  return nuevaPendiente;
};

  // Registrar Servicio Médico (CU07)
  const registrarServicio = async ({ afiliadoId, proveedorId, descripcion, costo, autorizacionId }) => {
    const nuevo = adaptServicio(await mutationsApi.servicio(toServicePayload({ afiliadoId, proveedorId, descripcion, costo, autorizacionId })));
    setServicios(prev => [nuevo, ...prev]);
    return nuevo;
  };

  // Emitir Pago a Proveedor (CU08) — solo Administrador
  const emitirPago = async ({ servicioId, monto, referenciaBanco, metodo = "Transferencia" }) => {
    if (!currentUser || currentUser.rol !== "Administrador") {
      alert("No tienes permisos para emitir pagos");
      return null;
    }
    const nuevo = adaptPago(await mutationsApi.pago(toPaymentPayload({ servicioId, monto, referenciaBanco, metodo })));
    setPagos(prev => [nuevo, ...prev]);
    setServicios(prev => prev.map(s => String(s.id) === String(servicioId) ? { ...s, estado: "Pagado" } : s));
    return nuevo;
  };

  // Crear nuevo afiliado
  const crearAfiliado = async ({ nombre, cedula, plan, estado = "Activo", desde, nacimiento, telefono, correo, dependientes = 0 }) => {
    const nuevo = adaptAfiliado(await mutationsApi.afiliado(toInsuredPayload({ nombre, cedula, plan, estado, desde, nacimiento, telefono, correo, dependientes })));
    setAfiliados(prev => [nuevo, ...prev]);
    addNotification({ type: 'success', title: 'Afiliado creado', message: `${nuevo.nombre} agregado con ID ${nuevo.id}.` });
    return nuevo;
  };

  // Actualizar datos de afiliado (CU10)
  const actualizarAfiliado = async (id, { telefono, correo }) => {
    const actualizado = adaptAfiliado(await mutationsApi.actualizarAfiliado(id, toInsuredUpdatePayload({ telefono, correo })));
    setAfiliados(prev => prev.map(a => a.id === id ? actualizado : a));
  };

  // Facturación de pólizas (Pago de Prima Mensual)
  const generarFacturasMes = async () => {
    const periodo = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
    const yaExisten = facturas.some(f => f.periodo === periodo);
    if (yaExisten) {
      addNotification({ id: Date.now(), type: 'info', title: 'Facturación', message: `Las facturas del periodo ${periodo} ya existen.` });
      return [];
    }
    const nuevas = (await mutationsApi.generarFacturas(periodo)).map(adaptFactura);
    setFacturas(prev => [...nuevas, ...prev]);
    addNotification({ id: Date.now(), type: 'success', title: 'Facturas generadas', message: `Se generaron facturas del periodo ${periodo} para ${nuevas.length} pólizas.` });
    return nuevas;
  };

  const enviarRecordatorioFactura = async (id) => {
    const actualizada = adaptFactura(await mutationsApi.recordarFactura(id));
    setFacturas(prev => prev.map(f => f.id === id ? actualizada : f));
    addNotification({ id: Date.now(), type: 'info', title: 'Recordatorio enviado', message: 'Se envió recordatorio de pago al asegurado.' });
  };

  const registrarPagoPrima = async ({ facturaId, referencia }) => {
    const factura = facturas.find(f => f.id === facturaId);
    if (!factura) return null;
    const actualizada = adaptFactura(await mutationsApi.pagarFactura(facturaId, referencia));
    setFacturas(prev => prev.map(f => f.id === facturaId ? actualizada : f));
    setPolizas(prev => prev.map(p => p.id === factura.polizaId ? { ...p, estado: 'Vigente' } : p));
    addNotification({ id: Date.now(), type: 'success', title: 'Pago de prima registrado', message: `La póliza ${factura.polizaId} quedó vigente.` });
    return actualizada;
  };

  const marcarPeriodoGracia = async (facturaId) => {
    const factura = facturas.find(f => f.id === facturaId);
    if (!factura) return;
    const actualizada = adaptFactura(await mutationsApi.graciaFactura(facturaId));
    setFacturas(prev => prev.map(f => f.id === facturaId ? actualizada : f));
    setPolizas(prev => prev.map(p => p.id === factura.polizaId ? { ...p, estado: 'En periodo de gracia' } : p));
    addNotification({ id: Date.now(), type: 'warning', title: 'Periodo de gracia', message: `La póliza ${factura.polizaId} está en periodo de gracia.` });
  };

  const suspenderPolizaPorFactura = async (facturaId) => {
    const factura = facturas.find(f => f.id === facturaId);
    if (!factura) return;
    await mutationsApi.suspenderFactura(facturaId);
    setPolizas(prev => prev.map(p => p.id === factura.polizaId ? { ...p, estado: 'Suspendida' } : p));
    addNotification({ id: Date.now(), type: 'error', title: 'Póliza suspendida', message: `Se suspendió la póliza ${factura.polizaId} por falta de pago.` });
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
  const handleLogin = async (e) => {
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
      setLoginError(error.response?.data?.message || error.message || "No fue posible iniciar sesión");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("arsfuturo_token");
    setIsAuthenticated(false);
    setCurrentUser(null);
    setTab("dashboard");
    // Resetear datos al cerrar sesión
    clearSessionData();
  };

  // Funciones para manejar notificaciones
  const addNotification = (notificationData) => {
    const id = Date.now();
    let notification;

    // Manejar tanto objetos como strings
    if (typeof notificationData === 'string') {
      notification = { id, message: notificationData, type: 'success', timestamp: new Date() };
    } else {
      notification = {
        id,
        message: notificationData.message,
        type: notificationData.type || 'success',
        title: notificationData.title,
        timestamp: new Date()
      };
    }

    setNotifications(prev => [notification, ...prev]);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const TabButton = ({ id, icon: Icon, label }) => (
    <button onClick={() => setTab(id)} className={cls(
      "flex items-center gap-2 rounded-xl px-3 py-2 transition-colors",
      tab === id ? "bg-sky-600 text-white" : "text-slate-700 hover:bg-slate-100"
    )}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  // Si no está autenticado, mostrar pantalla de login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-sm mx-auto mb-4">
              <img
                src="/logo_ars.png"
                alt="ARS Futuro Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">ARS Futuro</h1>
            <p className="text-slate-600">Iniciar Sesión</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Usuario</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  value={loginForm.usuario}
                  onChange={(value) => setLoginForm(prev => ({ ...prev, usuario: value }))}
                  placeholder="Ingrese su usuario"
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(value) => setLoginForm(prev => ({ ...prev, password: value }))}
                  placeholder="Ingrese su contraseña"
                  className="pl-9"
                  required
                />
              </div>
            </div>

            {loginError && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-lg">
                {loginError}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loginLoading}>
              {loginLoading ? "Conectando..." : "Iniciar Sesión"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-2 font-medium">Usuarios de demostración:</p>
            <div className="space-y-1 text-xs text-slate-500">
              <div>• admin / admin123 (Administrador)</div>
              <div>• agente / agente123 (Agente ARS)</div>
              <div>• supervisor / super123 (Supervisor)</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-800 flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="h-11 w-11 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/logo_ars.png"
                alt="ARS Futuro Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight">ARS Futuro</h1>
                <Badge color="blue">v1.0</Badge>
              </div>
              <p className="text-xs text-slate-500">Sistema ARS Futuro - afiliados, autorizaciones y reclamaciones</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex-1 relative justify-center items-center min-w-0">

            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white/50 rounded-xl border border-slate-200">
                <User className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">{currentUser?.nombre}</span>
              </div>
              <div className="sm:hidden flex items-center gap-2 px-2 py-2 bg-white/50 rounded-xl border border-slate-200">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <Button onClick={handleLogout} variant="ghost" size="sm" className="flex items-center gap-1">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Salir</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 flex-1">
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
          <TabButton id="dashboard" icon={Home} label="Dashboard" />
          <TabButton id="afiliados" icon={Users} label="Afiliados" />
          <TabButton id="autoriz" icon={Stethoscope} label="Autorizaciones" />
          <TabButton id="reclamos" icon={FileText} label="Reclamaciones" />
          <TabButton id="servicios" icon={HeartPulse} label="Servicios" />
          {/* Solo administradores pueden ver pólizas */}
          {currentUser?.rol === "Administrador" && (
            <TabButton id="polizas" icon={Wallet} label="Pólizas" />
          )}
          {currentUser?.rol === "Administrador" && (
            <TabButton id="pagos" icon={Coins} label="Pagos" />
          )}
          {currentUser?.rol === "Administrador" && (
            <TabButton id="facturas" icon={RefreshCw} label="Facturación" />
          )}
          <TabButton id="proveed" icon={Building2} label="Proveedores" />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24 text-slate-500"><Loader2 className="w-5 h-5 mr-2 animate-spin" />Cargando…</div>
        ) : (
          <AnimatePresence mode="wait">
            {tab === "dashboard" && (
              <motion.div key="dash" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Asegurados activos</p>
                      <p className="text-2xl font-semibold">{kpis.activos}</p>
                    </div>
                    <Users className="w-8 h-8 text-sky-600" />
                  </div>
                </Card>
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Reclamaciones en revisión</p>
                      <p className="text-2xl font-semibold">{kpis.pendRecl}</p>
                    </div>
                    <FileText className="w-8 h-8 text-amber-600" />
                  </div>
                </Card>
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Autorizaciones hoy</p>
                      <p className="text-2xl font-semibold">{kpis.autHoy}</p>
                    </div>
                    <Stethoscope className="w-8 h-8 text-emerald-600" />
                  </div>
                </Card>
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Siniestros del mes</p>
                      <p className="text-2xl font-semibold">{currency(kpis.totalMes)}</p>
                    </div>
                    <Wallet className="w-8 h-8 text-indigo-600" />
                  </div>
                </Card>

                <Card className="col-span-1 sm:col-span-2 lg:col-span-2 h-[300px] pb-9">
                  <h3 className="font-semibold mb-2">Siniestros por mes</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartMes}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="monto" name="Monto" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="col-span-1 sm:col-span-2 lg:col-span-2 h-[300px] pb-9">
                  <h3 className="font-semibold mb-2">Tasa de aprobación por plan</h3>
                  <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={chartAprob}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="plan" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line dataKey="tasa" name="% Aprobación" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </motion.div>
            )}

            {tab === "afiliados" && (
              <motion.div key="afiliados" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                <Card>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{afiliadosFiltrados.length} resultado(s)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="primary" className="flex items-center justify-center pt-1" onClick={() => setOpenNuevoAfiliado(true)}>
                        <Plus className="w-4 h-4 mr-2" /> Nuevo afiliado
                      </Button>
                      <Button variant="ghost" className="flex items-center justify-center pt-1" onClick={() => exportCsv("afiliados.csv", [["ID", "Nombre", "Cédula", "Plan", "Estado", "Desde", "Nacimiento", "Teléfono", "Correo", "Dependientes"], ...afiliadosFiltrados.map(a => [a.id, a.nombre, a.cedula, a.plan, a.estado, formatDate(a.desde), formatDate(a.nacimiento), a.telefono, a.correo, a.dependientes])])}>
                        <FileDown className="w-4 h-4 mr-2" /> <span className="hidden sm:inline">Exportar</span>
                      </Button>
                    </div>
                  </div>
                  <NuevoAfiliadoModal open={openNuevoAfiliado} onClose={() => setOpenNuevoAfiliado(false)} planes={planes} crearAfiliado={crearAfiliado} addNotification={addNotification} />
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm min-w-[800px]">
                      <thead>
                        <tr className="text-left text-slate-500 border-b">
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
                        {afiliadosFiltrados.map((a) => (
                          <tr key={a.id} className="border-b last:border-0">
                            <td className="py-2 pr-2 font-medium">{a.nombre}</td>
                            <td className="py-2 pr-2">{a.cedula}</td>
                            <td className="py-2 pr-2">{getPlanById(planes, a.plan).nombre}</td>
                            <td className="py-2 pr-2">
                              <Badge color={a.estado === "Activo" ? "green" : "amber"}>{a.estado}</Badge>
                            </td>
                            <td className="py-2 pr-2">{formatDate(a.desde)}</td>
                            <td className="py-2 pr-2 text-slate-600">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                <span className="inline-flex items-center gap-1 text-xs"><Phone className="w-3 h-3" />{a.telefono}</span>
                                <span className="inline-flex items-center gap-1 text-xs"><Mail className="w-3 h-3" />{a.correo}</span>
                              </div>
                            </td>
                            <td className="py-2 pr-2">
                              <AfiliadoActions afiliado={a} afiliados={afiliados} proveedores={proveedores} crearAutorizacion={crearAutorizacion} addNotification={addNotification} onEditarAfiliado={actualizarAfiliado} />
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
              <AutorizacionesTab key="autoriz" autorizaciones={autorizaciones} afiliados={afiliados} proveedores={proveedores} aprobarAut={aprobarAut} rechazarAut={rechazarAut} crearAutorizacion={crearAutorizacion} addNotification={addNotification} />
            )}

            {tab === "reclamos" && (
              <ReclamosTab key="reclamos" reclamaciones={reclamaciones} afiliados={afiliados} proveedores={proveedores} onRegistrar={registrarReclamo} addNotification={addNotification} />
            )}

            {tab === "servicios" && (
              <ServiciosTab key="servicios" servicios={servicios} afiliados={afiliados} proveedores={proveedores} autorizaciones={autorizaciones} onRegistrar={registrarServicio} addNotification={addNotification} />
            )}

            {tab === "polizas" && (
              <PolizasTab key="polizas" polizas={polizas} planes={planes} />
            )}

            {tab === "proveed" && (
              <ProveedoresTab key="proveed" proveedores={proveedores} />
            )}

            {tab === "pagos" && currentUser?.rol === "Administrador" && (
              <PagosTab key="pagos" servicios={servicios} pagos={pagos} proveedores={proveedores} onEmitirPago={emitirPago} addNotification={addNotification} />
            )}

            {tab === "facturas" && currentUser?.rol === "Administrador" && (
              <FacturacionTab key="facturas" facturas={facturas} polizas={polizas} onGenerarMes={generarFacturasMes} onRecordatorio={enviarRecordatorioFactura} onRegistrarPago={registrarPagoPrima} onGracia={marcarPeriodoGracia} onSuspender={suspenderPolizaPorFactura} />
            )}
          </AnimatePresence>
        )}
      </main>

      <footer className="mt-auto bg-white/70 backdrop-blur border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between text-xs text-slate-600">
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
      <NotificationContainer notifications={notifications} onRemove={removeNotification} />
    </div>
  );
}

function AfiliadoActions({ afiliado, afiliados, proveedores, crearAutorizacion, addNotification, onEditarAfiliado }) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Button variant="primary" size="sm" className="flex items-center justify-center" onClick={() => setOpen(true)}>
        <Plus className="w-4 h-4 mr-1" /> Nueva autorización
      </Button>
      <Button variant="ghost" size="sm" className="flex items-center justify-center" onClick={() => setOpenEdit(true)}>
        <User className="w-4 h-4 mr-1" /> Editar
      </Button>
      <NuevaAutorizacionModal open={open} onClose={() => setOpen(false)} afiliadoDefault={afiliado} afiliados={afiliados} proveedores={proveedores} crearAutorizacion={crearAutorizacion} addNotification={addNotification} />
      <EditarAfiliadoModal open={openEdit} onClose={() => setOpenEdit(false)} afiliado={afiliado} onGuardar={onEditarAfiliado} addNotification={addNotification} />
    </div>
  );
}

function NuevaAutorizacionModal({ open, onClose, afiliadoDefault = null, afiliados = [], proveedores = [], crearAutorizacion, addNotification }) {
  const [afiliadoId, setAfiliadoId] = useState(afiliadoDefault?.id ? String(afiliadoDefault.id) : "");
  const [proveedorId, setProveedorId] = useState(proveedores[0]?.id ? String(proveedores[0].id) : "");
  const [procedimiento, setProcedimiento] = useState("Consulta general");

  useEffect(() => {
    setAfiliadoId(afiliadoDefault?.id ? String(afiliadoDefault.id) : "");
  }, [afiliadoDefault]);

  const afiliadosAll = afiliados;
  const proveedoresAll = proveedores;

  const crear = async () => {
    if (!afiliadoId || !proveedorId || !procedimiento) return;
    const nueva = await crearAutorizacion({ afiliadoId, proveedorId, procedimiento });
    if (!nueva) return;
    onClose?.();

    // Usar el sistema de notificaciones en lugar de alert
    setTimeout(() => {
      addNotification({
        type: nueva.estado === 'Aprobada' ? 'success' : nueva.estado === 'Rechazada' ? 'error' : 'info',
        title: 'Autorización Creada',
        message: `Autorización #${nueva.id} creada: ${nueva.estado}`
      });
    }, 50);
  };

  return (
    <Modal open={open} onClose={onClose} title="Nueva autorización">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-600">Afiliado</label>
          <Select value={afiliadoId} onChange={setAfiliadoId}>
            <option value="">Seleccione…</option>
            {afiliadosAll.map((a) => (
              <option key={a.id} value={a.id}>{a.nombre} — {a.cedula}</option>
            ))}
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-600">Proveedor</label>
          <Select value={proveedorId} onChange={setProveedorId}>
            {proveedoresAll.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </Select>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs text-slate-600">Procedimiento</label>
          <Input value={procedimiento} onChange={setProcedimiento} placeholder="Ej.: Consulta general / Perfil Lipídico / Rayos X…" />
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="success" className="flex items-center justify-center" onClick={crear}><CheckCircle2 className="w-4 h-4 mr-1" />Crear autorización</Button>
      </div>
    </Modal>
  );
}

function EditarAfiliadoModal({ open, onClose, afiliado, onGuardar, addNotification }) {
  const [telefono, setTelefono] = useState(afiliado?.telefono || "");
  const [correo, setCorreo] = useState(afiliado?.correo || "");

  useEffect(() => {
    setTelefono(afiliado?.telefono || "");
    setCorreo(afiliado?.correo || "");
  }, [afiliado]);

  const guardar = async () => {
    await onGuardar?.(afiliado.id, { telefono, correo });
    addNotification({ id: Date.now(), type: 'success', title: 'Afiliado actualizado', message: `Se guardaron los cambios de ${afiliado.nombre}.` });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={`Editar afiliado`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-500">Teléfono</label>
          <Input value={telefono} onChange={setTelefono} placeholder="Ej. +1 809 555 0000" />
        </div>
        <div>
          <label className="text-xs text-slate-500">Correo</label>
          <Input value={correo} onChange={setCorreo} placeholder="correo@ejemplo.do" />
        </div>
      </div>
      <Divider />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={guardar}>Guardar cambios</Button>
      </div>
    </Modal>
  );
}

function NuevoAfiliadoModal({ open, onClose, planes = [], crearAfiliado, addNotification }) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [plan, setPlan] = useState("BASICO");
  const [estado, setEstado] = useState("Activo");
  const [desde, setDesde] = useState(new Date().toISOString().slice(0, 10));
  const [nacimiento, setNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [dependientes, setDependientes] = useState(0);

  const limpiar = () => {
    setNombre("");
    setCedula("");
    setPlan("BASICO");
    setEstado("Activo");
    setDesde(new Date().toISOString().slice(0, 10));
    setNacimiento("");
    setTelefono("");
    setCorreo("");
    setDependientes(0);
  };

  const crear = async () => {
    if (!nombre || !cedula || !plan) return;
    const nuevo = await crearAfiliado({ nombre, cedula, plan, estado, desde, nacimiento, telefono, correo, dependientes });
    if (!nuevo) return;
    onClose?.();
    setTimeout(() => {
      addNotification({ type: 'success', title: 'Afiliado creado', message: `${nuevo.nombre} agregado con ID ${nuevo.id}.` });
    }, 50);
    limpiar();
  };

  return (
    <Modal open={open} onClose={onClose} title="Nuevo afiliado">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-600">Nombre completo</label>
          <Input value={nombre} onChange={setNombre} placeholder="Ej.: Juan Pérez" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Cédula</label>
          <Input value={cedula} onChange={setCedula} placeholder="001-1234567-8" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Plan</label>
          <Select value={plan} onChange={setPlan}>
            {planes.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-600">Estado</label>
          <Select value={estado} onChange={setEstado}>
            <option value="Activo">Activo</option>
            <option value="Suspendido">Suspendido</option>
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-600">Desde</label>
          <Input value={desde} onChange={setDesde} placeholder="YYYY-MM-DD" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Nacimiento</label>
          <Input value={nacimiento} onChange={setNacimiento} placeholder="YYYY-MM-DD" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Teléfono</label>
          <Input value={telefono} onChange={setTelefono} placeholder="+1 809 555 0000" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Correo</label>
          <Input value={correo} onChange={setCorreo} placeholder="correo@ejemplo.do" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Dependientes</label>
          <Input value={dependientes} onChange={val => setDependientes(Number(val) || 0)} placeholder="0" />
        </div>
      </div>
      <Divider />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="success" className="flex items-center justify-center" onClick={crear}><CheckCircle2 className="w-4 h-4 mr-1" />Crear afiliado</Button>
      </div>
    </Modal>
  );
}

function AutorizacionesTab({ autorizaciones, afiliados, proveedores, aprobarAut, rechazarAut, crearAutorizacion, addNotification }) {
  const [estado, setEstado] = useState("Todos");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const data = useMemo(() => {
    return autorizaciones
      .filter((a) => estado === "Todos" ? true : a.estado === estado)
      .filter((a) => {
        const af = afiliados.find((x) => x.id === a.afiliadoId);
        return !q ? true : (af?.nombre?.toLowerCase().includes(q.toLowerCase()) || String(a.id).includes(q));
      });
  }, [autorizaciones, afiliados, estado, q]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
      <Card>
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 mb-3">
          <Select value={estado} onChange={setEstado} className="w-full sm:w-[180px]">
            <option>Todos</option>
            <option>Aprobada</option>
            <option>Pendiente</option>
            <option>Rechazada</option>
          </Select>
          <div className="relative w-full sm:w-auto flex-1 sm:flex-initial">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input value={q} onChange={setQ} placeholder="Buscar por nombre o cedula" className="pl-9" />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
            <Button className="flex items-center justify-center flex-1 sm:flex-initial" onClick={() => setOpen(true)}>
              <Plus className="w-4 h-4 mr-1" /> Nueva
            </Button>
            <Button variant="ghost" className="flex items-center justify-center flex-1 sm:flex-initial" onClick={() => exportCsv("autorizaciones.csv", [["ID", "Afiliado", "Procedimiento", "Proveedor", "Estado", "Fecha", "Copago"], ...data.map(a => [a.id, afiliados.find(x => x.id === a.afiliadoId)?.nombre, a.procedimiento, proveedores.find(p => p.id === a.proveedorId)?.nombre, a.estado, formatDate(a.fecha), a.copago])])}>
              <FileDown className="w-4 h-4 mr-2" /> Exportar
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead>
              <tr className="text-left text-slate-500 border-b">
                <th className="py-2 pr-2 min-w-[60px]">#</th>
                <th className="py-2 pr-2 min-w-[150px]">Afiliado</th>
                <th className="py-2 pr-2 min-w-[120px]">Procedimiento</th>
                <th className="py-2 pr-2 min-w-[150px]">Proveedor</th>
                <th className="py-2 pr-2 min-w-[80px]">Estado</th>
                <th className="py-2 pr-2 min-w-[80px]">Fecha</th>
                <th className="py-2 pr-2 min-w-[200px]">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a) => (
                <tr key={a.id} className="border-b last:border-0">
                  <td className="py-2 pr-2">{a.id}</td>
                  <td className="py-2 pr-2 font-medium">{afiliados.find((x) => x.id === a.afiliadoId)?.nombre}</td>
                  <td className="py-2 pr-2">{a.procedimiento}</td>
                  <td className="py-2 pr-2">{proveedores.find((p) => p.id === a.proveedorId)?.nombre}</td>
                  <td className="py-2 pr-2">
                    <Badge color={a.estado === "Aprobada" ? "green" : a.estado === "Pendiente" ? "amber" : "red"}>{a.estado}</Badge>
                  </td>
                  <td className="py-2 pr-2">{formatDate(a.fecha)}</td>
                  <td className="py-2 pr-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                      <Button size="sm" variant="success" className="flex items-center justify-center w-full sm:w-auto text-xs" onClick={() => aprobarAut(a.id)}><CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />Aprobar</Button>
                      <Button size="sm" variant="danger" className="flex items-center justify-center w-full sm:w-auto text-xs" onClick={() => rechazarAut(a.id)}><XCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />Rechazar</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <NuevaAutorizacionModal open={open} onClose={() => setOpen(false)} afiliados={afiliados} proveedores={proveedores} crearAutorizacion={crearAutorizacion} addNotification={addNotification} />
    </motion.div>
  );
}

function ReclamosTab({ reclamaciones, afiliados, proveedores, onRegistrar, addNotification }) {
  const [estado, setEstado] = useState("Todos");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const data = useMemo(() => {
    return reclamaciones
      .filter((r) => estado === "Todos" ? true : r.estado === estado)
      .filter((r) => {
        const af = afiliados.find((x) => x.id === r.afiliadoId);
        return !q ? true : (af?.nombre?.toLowerCase().includes(q.toLowerCase()) || String(r.id).includes(q));
      });
  }, [reclamaciones, afiliados, estado, q]);

  const total = useMemo(() => data.reduce((s, r) => s + r.monto, 0), [data]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
      <div className="grid grid-cols-1 gap-4">
        <Card>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 mb-3">
            <Select value={estado} onChange={setEstado} className="w-full sm:w-[180px]">
              <option>Todos</option>
              <option>En revisión</option>
              <option>Aprobada</option>
              <option>Rechazada</option>
            </Select>
            <div className="relative w-full sm:w-auto flex-1 sm:flex-initial">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input value={q} onChange={setQ} placeholder="Buscar por nombre o cedula" className="pl-9" />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
              <Button className="flex items-center justify-center flex-1 sm:flex-initial" onClick={() => setOpen(true)}>
                <Plus className="w-4 h-4 mr-1" /> Registrar reclamo
              </Button>
              <Button variant="ghost" className="flex items-center justify-center flex-1 sm:flex-initial" onClick={() => exportCsv("reclamaciones.csv", [["ID", "Afiliado", "Proveedor", "Monto", "Estado", "Fecha"], ...data.map(r => [r.id, afiliados.find(x => x.id === r.afiliadoId)?.nombre, proveedores.find(p => p.id === r.proveedorId)?.nombre, r.monto, r.estado, formatDate(r.fecha)])])}>
                <FileDown className="w-4 h-4 mr-2" /> Exportar
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="text-left text-slate-500 border-b">
                  <th className="py-2 pr-2 min-w-[60px]">#</th>
                  <th className="py-2 pr-2 min-w-[150px]">Afiliado</th>
                  <th className="py-2 pr-2 min-w-[150px]">Proveedor</th>
                  <th className="py-2 pr-2 min-w-[100px]">Monto</th>
                  <th className="py-2 pr-2 min-w-[80px]">Estado</th>
                  <th className="py-2 pr-2 min-w-[80px]">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {data.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-2 pr-2">{r.id}</td>
                    <td className="py-2 pr-2 font-medium">{afiliados.find((x) => x.id === r.afiliadoId)?.nombre}</td>
                    <td className="py-2 pr-2">{proveedores.find((p) => p.id === r.proveedorId)?.nombre}</td>
                    <td className="py-2 pr-2">{currency(r.monto)}</td>
                    <td className="py-2 pr-2">
                      <Badge color={r.estado === "Aprobada" ? "green" : r.estado === "En revisión" ? "amber" : "red"}>{r.estado}</Badge>
                    </td>
                    <td className="py-2 pr-2">{formatDate(r.fecha)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold mb-2">Resumen</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Reclamos en vista:</span><span className="font-medium">{data.length}</span></div>
              <div className="flex justify-between"><span>Monto total:</span><span className="font-medium">{currency(total)}</span></div>
            </div>
          </Card>

          <Card>
            <h4 className="font-medium mb-2">Aprobación vs Rechazo</h4>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie dataKey="value" data={[{ name: "Aprobadas", value: data.filter(d => d.estado === "Aprobada").length }, { name: "Rechazadas", value: data.filter(d => d.estado === "Rechazada").length }]} outerRadius={70} label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      <RegistrarReclamoModal open={open} onClose={() => setOpen(false)} afiliados={afiliados} proveedores={proveedores} onRegistrar={onRegistrar} addNotification={addNotification} />
    </motion.div>
  );
}

function RegistrarReclamoModal({ open, onClose, afiliados, proveedores, onRegistrar, addNotification }) {
  const [afiliadoId, setAfiliadoId] = useState(afiliados[0]?.id ?? "");
  const [proveedorId, setProveedorId] = useState(proveedores[0]?.id ?? "");
  const [monto, setMonto] = useState(500);

  const submit = () => {
    onRegistrar({ afiliadoId, proveedorId, monto: Number(monto) });
    onClose?.();
    addNotification({
      type: "success",
      title: "Reclamo Registrado",
      message: "El reclamo ha sido registrado exitosamente y está en revisión."
    });
  };

  return (
    <Modal open={open} onClose={onClose} title="Registrar reclamo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-600">Afiliado</label>
          <Select value={afiliadoId} onChange={setAfiliadoId}>
            {afiliados.map((a) => (
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-600">Proveedor</label>
          <Select value={proveedorId} onChange={setProveedorId}>
            {proveedores.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-600">Monto</label>
          <Input type="number" value={monto} onChange={(value) => setMonto(Number(value) || 0)} />
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" className="flex items-center justify-center" onClick={submit}><CheckCircle2 className="w-4 h-4 mr-1" />Guardar</Button>
      </div>
    </Modal>
  );
}

function PolizasTab({ polizas, planes }) {
  const [personas, setPersonas] = useState(50);
  const [plan, setPlan] = useState("PLUS");

  const primaEstimada = useMemo(() => {
    const base = plan === "BASICO" ? 1500 : plan === "PLUS" ? 1800 : 2200;
    return personas * base;
  }, [personas, plan]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
      <div className="grid grid-cols-1 gap-4">
        <Card>
          <h3 className="font-semibold mb-3">Pólizas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {polizas.map((p) => (
              <div key={p.id} className="rounded-xl border p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm text-slate-500">{p.id}</div>
                    <div className="font-semibold text-sm sm:text-base">{p.empresa}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge color="blue">{p.plan}</Badge>
                    <Badge color={p.estado === 'Vigente' ? 'green' : p.estado.includes('gracia') ? 'amber' : 'red'}>{p.estado}</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-2">
                  <div>
                    <div className="text-slate-500">Vigencia</div>
                    <div className="text-xs sm:text-sm">{formatDate(p.desde)} — {formatDate(p.hasta)}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Prima mensual</div>
                    <div className="font-medium">{currency(p.primaMensual)}</div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-slate-500">Asegurados</div>
                    <div className="font-medium">{p.asegurados}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">Simulador de prima</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 text-sm">
            <div>
              <label className="text-xs text-slate-600">Plan</label>
              <Select value={plan} onChange={setPlan}>
                {planes.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
              </Select>
            </div>
            <div>
              <label className="text-xs text-slate-600">Personas</label>
              <Input type="number" value={personas} onChange={(v) => setPersonas(Number(v))} />
            </div>
            <Divider className="sm:col-span-2 lg:col-span-1" />
            <div className="flex items-center justify-between sm:col-span-2 lg:col-span-1">
              <span>Prima estimada:</span>
              <span className="text-lg font-semibold">{currency(primaEstimada)}</span>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

function ProveedoresTab({ proveedores }) {
  const [ciudad, setCiudad] = useState("Todas");
  const [tipo, setTipo] = useState("Todos");

  const data = useMemo(() => {
    return proveedores.filter(p => (ciudad === "Todas" || p.ciudad === ciudad) && (tipo === "Todos" || p.tipo === tipo));
  }, [proveedores, ciudad, tipo]);

  const ciudades = useMemo(() => ["Todas", ...Array.from(new Set<string>(proveedores.map(p => p.ciudad)))], [proveedores]);
  const tipos = useMemo(() => ["Todos", ...Array.from(new Set<string>(proveedores.map(p => p.tipo)))], [proveedores]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
      <Card>
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 mb-3">
          <Select value={ciudad} onChange={setCiudad} className="w-full sm:w-[200px]">
            {ciudades.map(c => <option key={c}>{c}</option>)}
          </Select>
          <Select value={tipo} onChange={setTipo} className="w-full sm:w-[200px]">
            {tipos.map(t => <option key={t}>{t}</option>)}
          </Select>
          <div className="w-full sm:w-auto sm:ml-auto text-sm text-slate-600">{data.length} proveedor(es)</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((p) => (
            <div key={p.id} className="rounded-xl border p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm sm:text-base truncate">{p.nombre}</div>
                  <div className="text-xs text-slate-500">{p.ciudad}</div>
                </div>
                <Badge color="slate" className="ml-2 flex-shrink-0">{p.tipo}</Badge>
              </div>
              <div className="text-sm text-slate-600">{p.telefono}</div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function ServiciosTab({ servicios, afiliados, proveedores, autorizaciones, onRegistrar, addNotification }) {
  const [open, setOpen] = useState(false);
  const [filtroProveedor, setFiltroProveedor] = useState("todos");
  const [filtroEstado, setFiltroEstado] = useState("todos");

  const serviciosFiltrados = useMemo(() => {
    return servicios.filter(s => {
      if (filtroProveedor !== "todos" && String(s.proveedorId) !== String(filtroProveedor)) return false;
      if (filtroEstado !== "todos" && s.estado !== filtroEstado) return false;
      return true;
    });
  }, [servicios, filtroProveedor, filtroEstado]);

  const exportar = () => {
    const rows = [["Fecha", "Afiliado", "Proveedor", "Descripción", "Costo", "Copago", "Estado", "Autorización"]];
    serviciosFiltrados.forEach(s => {
      const af = afiliados.find(a => a.id === s.afiliadoId);
      const pr = proveedores.find(p => p.id === s.proveedorId);
      rows.push([
        formatDate(s.fecha),
        af?.nombre || "-",
        pr?.nombre || "-",
        s.descripcion,
        currency(s.costo),
        currency(s.copago ?? 0),
        s.estado,
        s.autorizacionId ? String(s.autorizacionId) : "-",
      ]);
    });
    exportCsv("servicios.csv", rows);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Select value={filtroProveedor} onChange={setFiltroProveedor} className="w-48">
            <option value="todos">Todos los proveedores</option>
            {proveedores.map(p => <option key={p.id} value={String(p.id)}>{p.nombre}</option>)}
          </Select>
          <Select value={filtroEstado} onChange={setFiltroEstado} className="w-40">
            <option value="todos">Todos los estados</option>
            <option value="Pendiente de Pago">Pendiente de Pago</option>
            <option value="Pagado">Pagado</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={exportar} className="flex items-center"><FileDown className="w-4 h-4 mr-1" /> Exportar CSV</Button>
          <Button variant="primary" onClick={() => setOpen(true)} className="flex items-center"><Plus className="w-4 h-4 mr-1" /> Registrar servicio</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="text-left text-slate-500 border-b">
                <th className="py-2 pr-2">Fecha</th>
                <th className="py-2 pr-2">Afiliado</th>
                <th className="py-2 pr-2">Proveedor</th>
                <th className="py-2 pr-2">Descripción</th>
                <th className="py-2 pr-2">Costo</th>
                <th className="py-2 pr-2">Copago</th>
                <th className="py-2 pr-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {serviciosFiltrados.map(s => {
                const af = afiliados.find(a => a.id === s.afiliadoId);
                const pr = proveedores.find(p => p.id === s.proveedorId);
                return (
                  <tr key={s.id} className="border-b last:border-0">
                    <td className="py-2 pr-2">{formatDate(s.fecha)}</td>
                    <td className="py-2 pr-2">{af?.nombre}</td>
                    <td className="py-2 pr-2">{pr?.nombre}</td>
                    <td className="py-2 pr-2">{s.descripcion}</td>
                    <td className="py-2 pr-2">{currency(s.costo)}</td>
                    <td className="py-2 pr-2">{currency(s.copago ?? 0)}</td>
                    <td className="py-2 pr-2"><Badge color={s.estado === 'Pagado' ? 'green' : 'amber'}>{s.estado}</Badge></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <RegistrarServicioModal open={open} onClose={() => setOpen(false)} afiliados={afiliados} proveedores={proveedores} autorizaciones={autorizaciones} onRegistrar={onRegistrar} addNotification={addNotification} />
    </motion.div>
  );
}

function RegistrarServicioModal({ open, onClose, afiliados, proveedores, autorizaciones, onRegistrar, addNotification }) {
  const [afiliadoId, setAfiliadoId] = useState(afiliados[0]?.id ? String(afiliados[0].id) : "");
  const [proveedorId, setProveedorId] = useState(proveedores[0]?.id ? String(proveedores[0].id) : "");
  const [descripcion, setDescripcion] = useState("Consulta general");
  const [costo, setCosto] = useState("1000");
  const [autorizacionId, setAutorizacionId] = useState("");

  const autorizDelAfiliado = useMemo(() => {
    return autorizaciones.filter(a => String(a.afiliadoId) === afiliadoId && a.estado === 'Aprobada');
  }, [autorizaciones, afiliadoId]);

  const registrar = async () => {
    const nuevo = await onRegistrar({ afiliadoId, proveedorId, descripcion, costo, autorizacionId: autorizacionId || undefined });
    if (!nuevo) return;
    addNotification({ id: Date.now(), type: 'success', title: 'Servicio registrado', message: `Se registró servicio para afiliado ${afiliados.find(a => String(a.id) === afiliadoId)?.nombre}.` });
    onClose();
    return nuevo;
  };

  return (
    <Modal open={open} onClose={onClose} title="Registrar servicio médico">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-500">Afiliado</label>
          <Select value={afiliadoId} onChange={setAfiliadoId}>
            {afiliados.map(a => <option key={a.id} value={String(a.id)}>{a.nombre}</option>)}
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-500">Proveedor</label>
          <Select value={proveedorId} onChange={setProveedorId}>
            {proveedores.map(p => <option key={p.id} value={String(p.id)}>{p.nombre}</option>)}
          </Select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs text-slate-500">Descripción</label>
          <Input value={descripcion} onChange={setDescripcion} placeholder="Ej. Consulta general" />
        </div>
        <div>
          <label className="text-xs text-slate-500">Costo</label>
          <Input type="number" value={costo} onChange={setCosto} />
        </div>
        <div>
          <label className="text-xs text-slate-500">Autorización (opcional)</label>
          <Select value={autorizacionId} onChange={setAutorizacionId}>
            <option value="">Sin autorización</option>
            {autorizDelAfiliado.map(a => <option key={a.id} value={String(a.id)}>{a.id} - {a.procedimiento}</option>)}
          </Select>
        </div>
      </div>
      <Divider />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={registrar}>Registrar</Button>
      </div>
    </Modal>
  );
}

function PagosTab({ servicios, pagos, proveedores, onEmitirPago, addNotification }) {
  const [open, setOpen] = useState(false);
  const [filtroProveedor, setFiltroProveedor] = useState("todos");

  const pagosFiltrados = useMemo(() => {
    return pagos.filter(p => filtroProveedor === "todos" || String(p.proveedorId) === String(filtroProveedor));
  }, [pagos, filtroProveedor]);

  const exportar = () => {
    const rows = [["Fecha", "Proveedor", "Servicio", "Monto", "Estado", "Referencia", "Método"]];
    pagosFiltrados.forEach(p => {
      const pr = proveedores.find(x => x.id === p.proveedorId);
      rows.push([formatDate(p.fecha), pr?.nombre || '-', String(p.servicioId), currency(p.monto), p.estado, p.referenciaBanco, p.metodo]);
    });
    exportCsv("pagos.csv", rows);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Select value={filtroProveedor} onChange={setFiltroProveedor} className="w-48">
            <option value="todos">Todos los proveedores</option>
            {proveedores.map(p => <option key={p.id} value={String(p.id)}>{p.nombre}</option>)}
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={exportar} className="flex items-center"><FileDown className="w-4 h-4 mr-1" /> Exportar CSV</Button>
          <Button variant="primary" onClick={() => setOpen(true)} className="flex items-center"><Wallet className="w-4 h-4 mr-1" /> Emitir pago</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="text-left text-slate-500 border-b">
                <th className="py-2 pr-2">Fecha</th>
                <th className="py-2 pr-2">Proveedor</th>
                <th className="py-2 pr-2">Servicio</th>
                <th className="py-2 pr-2">Monto</th>
                <th className="py-2 pr-2">Estado</th>
                <th className="py-2 pr-2">Referencia</th>
                <th className="py-2 pr-2">Método</th>
              </tr>
            </thead>
            <tbody>
              {pagosFiltrados.map(p => {
                const pr = proveedores.find(x => x.id === p.proveedorId);
                const servicio = servicios.find(s => s.id === p.servicioId);
                return (
                  <tr key={p.id} className="border-b last:border-0">
                    <td className="py-2 pr-2">{formatDate(p.fecha)}</td>
                    <td className="py-2 pr-2">{pr?.nombre}</td>
                    <td className="py-2 pr-2">{servicio ? `${servicio.descripcion} (${servicio.id})` : p.servicioId}</td>
                    <td className="py-2 pr-2">{currency(p.monto)}</td>
                    <td className="py-2 pr-2"><Badge color={p.estado === 'Procesado' ? 'green' : 'amber'}>{p.estado}</Badge></td>
                    <td className="py-2 pr-2">{p.referenciaBanco}</td>
                    <td className="py-2 pr-2">{p.metodo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <EmitirPagoModal open={open} onClose={() => setOpen(false)} servicios={servicios} proveedores={proveedores} onEmitirPago={onEmitirPago} addNotification={addNotification} />
    </motion.div>
  );
}

function EmitirPagoModal({ open, onClose, servicios, proveedores, onEmitirPago, addNotification }) {
  const pendientes = servicios.filter(s => s.estado === 'Pendiente de Pago');
  const [servicioId, setServicioId] = useState(pendientes[0]?.id ? String(pendientes[0].id) : "");
  const servicioSel = pendientes.find(s => String(s.id) === servicioId);
  const proveedorSel = proveedores.find(p => p.id === servicioSel?.proveedorId);
  const monto = servicioSel ? Math.max(0, (servicioSel.costo || 0) - (servicioSel.copago || 0)) : 0;
  const [referenciaBanco, setReferenciaBanco] = useState("");
  const [metodo, setMetodo] = useState("Transferencia");

  useEffect(() => {
    const s = pendientes.find(x => String(x.id) === servicioId);
    setReferenciaBanco(s ? `ORD-${new Date().getFullYear()}-${String(s.id).padStart(4, '0')}` : "");
  }, [servicioId]);

  const emitir = async () => {
    const pago = await onEmitirPago({ servicioId, monto, referenciaBanco, metodo });
    if (pago) {
      addNotification({ id: Date.now(), type: 'success', title: 'Pago emitido', message: `Se emitió pago a ${proveedorSel?.nombre} por ${currency(monto)}.` });
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Emitir pago a proveedor">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="sm:col-span-2">
          <label className="text-xs text-slate-500">Servicio pendiente</label>
          <Select value={servicioId} onChange={setServicioId}>
            {pendientes.map(s => <option key={s.id} value={String(s.id)}>{`${s.id} - ${s.descripcion} (${formatDate(s.fecha)})`}</option>)}
          </Select>
        </div>
        <div>
          <label className="text-xs text-slate-500">Proveedor</label>
          <Input value={proveedorSel?.nombre || ''} onChange={() => { }} readOnly />
        </div>
        <div>
          <label className="text-xs text-slate-500">Monto</label>
          <Input value={currency(monto)} onChange={() => { }} readOnly />
        </div>
        <div>
          <label className="text-xs text-slate-500">Referencia bancaria</label>
          <Input value={referenciaBanco} onChange={setReferenciaBanco} />
        </div>
        <div>
          <label className="text-xs text-slate-500">Método</label>
          <Select value={metodo} onChange={setMetodo}>
            <option>Transferencia</option>
            <option>ACH</option>
            <option>Cheque</option>
          </Select>
        </div>
      </div>
      <Divider />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={emitir} disabled={!servicioId || !referenciaBanco}>Emitir pago</Button>
      </div>
    </Modal>
  );
}

function FacturacionTab({ facturas, polizas, onGenerarMes, onRecordatorio, onRegistrarPago, onGracia, onSuspender }) {
  const [filtroPeriodo, setFiltroPeriodo] = useState('todos');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [openPago, setOpenPago] = useState(false);
  const [facturaSel, setFacturaSel] = useState(null);

  const periodos = useMemo(() => Array.from(new Set<string>(facturas.map(f => f.periodo))), [facturas]);

  const facturasFiltradas = useMemo(() => {
    return facturas.filter(f => {
      if (filtroPeriodo !== 'todos' && f.periodo !== filtroPeriodo) return false;
      if (filtroEstado !== 'todos' && f.estado !== filtroEstado) return false;
      return true;
    });
  }, [facturas, filtroPeriodo, filtroEstado]);

  const exportar = () => {
    const rows = [["Periodo", "Póliza", "Empresa", "Emisión", "Vencimiento", "Monto", "Estado", "Fecha Pago", "Referencia", "Recordatorio"]];
    facturasFiltradas.forEach(f => {
      const p = polizas.find(x => x.id === f.polizaId);
      rows.push([f.periodo, f.polizaId, p?.empresa || '-', formatDate(f.emision), formatDate(f.vencimiento), currency(f.monto), f.estado, f.fechaPago ? formatDate(f.fechaPago) : '-', f.referencia || '-', f.recordatorioEnviado ? 'Sí' : 'No']);
    });
    exportCsv('facturas_polizas.csv', rows);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Select value={filtroPeriodo} onChange={setFiltroPeriodo} className="w-40">
            <option value="todos">Todos los periodos</option>
            {periodos.map(per => <option key={per} value={per}>{per}</option>)}
          </Select>
          <Select value={filtroEstado} onChange={setFiltroEstado} className="w-40">
            <option value="todos">Todos los estados</option>
            <option>Pendiente</option>
            <option>Atrasada</option>
            <option>En gracia</option>
            <option>Pagada</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={exportar} className="flex items-center"><FileDown className="w-4 h-4 mr-1" /> Exportar CSV</Button>
          <Button variant="primary" onClick={onGenerarMes} className="flex items-center"><RefreshCw className="w-4 h-4 mr-1" /> Generar facturas del mes</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[1000px]">
            <thead>
              <tr className="text-left text-slate-500 border-b">
                <th className="py-2 pr-2">Periodo</th>
                <th className="py-2 pr-2">Póliza</th>
                <th className="py-2 pr-2">Empresa</th>
                <th className="py-2 pr-2">Emisión</th>
                <th className="py-2 pr-2">Vencimiento</th>
                <th className="py-2 pr-2">Monto</th>
                <th className="py-2 pr-2">Estado</th>
                <th className="py-2 pr-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {facturasFiltradas.map(f => {
                const p = polizas.find(x => x.id === f.polizaId);
                return (
                  <tr key={f.id} className="border-b last:border-0">
                    <td className="py-2 pr-2">{f.periodo}</td>
                    <td className="py-2 pr-2">{f.polizaId}</td>
                    <td className="py-2 pr-2">{p?.empresa}</td>
                    <td className="py-2 pr-2">{formatDate(f.emision)}</td>
                    <td className="py-2 pr-2">{formatDate(f.vencimiento)}</td>
                    <td className="py-2 pr-2">{currency(f.monto)}</td>
                    <td className="py-2 pr-2"><Badge color={f.estado === 'Pagada' ? 'green' : f.estado === 'Pendiente' ? 'blue' : f.estado === 'Atrasada' ? 'amber' : 'amber'}>{f.estado}</Badge></td>
                    <td className="py-2 pr-2">
                      <div className="flex flex-wrap gap-2">
                        {f.estado !== 'Pagada' && (
                          <Button variant="primary" size="sm" onClick={() => { setFacturaSel(f); setOpenPago(true); }}>Registrar pago</Button>
                        )}
                        {f.estado !== 'Pagada' && (
                          <Button variant="ghost" size="sm" onClick={() => onRecordatorio(f.id)}>Recordatorio</Button>
                        )}
                        {f.estado !== 'Pagada' && (
                          <Button variant="warning" size="sm" onClick={() => onGracia(f.id)}>Periodo de gracia</Button>
                        )}
                        {f.estado !== 'Pagada' && (
                          <Button variant="danger" size="sm" onClick={() => onSuspender(f.id)}>Suspender póliza</Button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <RegistrarPagoPrimaModal open={openPago} onClose={() => setOpenPago(false)} factura={facturaSel} onRegistrarPago={onRegistrarPago} />
    </motion.div>
  );
}

function RegistrarPagoPrimaModal({ open, onClose, factura, onRegistrarPago }) {
  const [referencia, setReferencia] = useState('');
  if (!factura) return null;
  const submit = async () => {
    await onRegistrarPago({ facturaId: factura.id, referencia });
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} title={`Registrar pago de ${factura.polizaId}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-500">Periodo</label>
          <Input value={factura.periodo} onChange={() => { }} readOnly />
        </div>
        <div>
          <label className="text-xs text-slate-500">Monto</label>
          <Input value={currency(factura.monto)} onChange={() => { }} readOnly />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs text-slate-500">Referencia bancaria</label>
          <Input value={referencia} onChange={setReferencia} placeholder="Ej. PR-2025-0105-0001" />
        </div>
      </div>
      <Divider />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={submit} disabled={!referencia}>Registrar pago</Button>
      </div>
    </Modal>
  );
}
