import { AnimatePresence, motion } from "framer-motion";
import {
	CheckCircle2,
	FileDown,
	Filter,
	Mail,
	Phone,
	Plus,
	User,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { Afiliado, Plan, Proveedor } from "../api/adapters";
import { registrationFeedback } from "../api/registration-feedback";
import { Pagination, usePagination } from "../components/Pagination";
import {
	Badge,
	Button,
	Card,
	Input,
	Modal,
	ModalActions,
	Select,
} from "../components/ui";
import { exportCsv, formatDate } from "../lib/formatters";
import { NuevaAutorizacionModal } from "./autorizaciones";
import type {
	CrearAutorizacion,
	EditarAfiliado,
	Notify,
	NuevoAfiliadoInput,
} from "./contracts";
export function AfiliadosTab({
	afiliados,
	planes,
	proveedores,
	crearAfiliado,
	actualizarAfiliado,
	crearAutorizacion,
	addNotification,
}: {
	afiliados: Afiliado[];
	planes: Plan[];
	proveedores: Proveedor[];
	crearAfiliado: (input: NuevoAfiliadoInput) => Promise<Afiliado>;
	actualizarAfiliado: EditarAfiliado;
	crearAutorizacion: CrearAutorizacion;
	addNotification: Notify;
}) {
	const [openNuevoAfiliado, setOpenNuevoAfiliado] = useState(false);
	const [busqueda, setBusqueda] = useState("");
	const [plan, setPlan] = useState("");
	const [estado, setEstado] = useState("");
	const normalizar = (valor: string) =>
		valor
			.normalize("NFD")
			.replace(/\p{Diacritic}/gu, "")
			.toLowerCase();
	const consulta = normalizar(busqueda.trim());
	const cedula = consulta.replace(/[-\s]/g, "");
	const buscarCedula = /^\d+$/.test(cedula);
	const filtrados = afiliados.filter(
		(item) =>
			(!plan || item.plan === plan) &&
			(!estado || item.estado === estado) &&
			(!consulta ||
				normalizar(item.nombre).includes(consulta) ||
				(buscarCedula && item.cedula.replace(/-/g, "").includes(cedula))),
	);
	const { rows, pagination } = usePagination(
		filtrados,
		JSON.stringify([busqueda, plan, estado]),
	);
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
		>
			<Card>
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
					<div className="flex items-center gap-2">
						<Filter className="w-4 h-4 text-[var(--text-faint)]" />
						<span className="text-sm text-[var(--text-body)]">
							{filtrados.length} resultado(s)
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
							aria-label="Exportar afiliados"
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
									...filtrados.map((a) => [
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
				<AnimatePresence>
					{openNuevoAfiliado && (
						<AfiliadoModal
							open={true}
							onClose={() => setOpenNuevoAfiliado(false)}
							planes={planes}
							onSave={crearAfiliado}
						/>
					)}
				</AnimatePresence>
				<div className="grid gap-2 mb-3 sm:grid-cols-3">
					<Input
						type="search"
						aria-label="Buscar afiliados"
						placeholder="Nombre o cédula"
						value={busqueda}
						onChange={setBusqueda}
					/>
					<Select
						aria-label="Filtrar afiliados por plan"
						value={plan}
						onChange={setPlan}
					>
						<option value="">Todos los planes</option>
						{planes.map((item) => (
							<option key={item.id} value={item.id}>
								{item.nombre}
							</option>
						))}
					</Select>
					<Select
						aria-label="Filtrar afiliados por estado"
						value={estado}
						onChange={setEstado}
					>
						<option value="">Todos los estados</option>
						<option>Activo</option>
						<option>Suspendido</option>
						<option>Inactivo</option>
					</Select>
				</div>
				<div className="overflow-x-auto">
					<table className="data-table w-full text-sm min-w-[800px]">
						<thead>
							<tr className="text-left text-[var(--text-muted)] border-b">
								<th className="py-2 pr-2 min-w-[150px]">Nombre</th>
								<th className="py-2 pr-2 min-w-[120px]">Cédula</th>
								<th className="py-2 pr-2 min-w-[100px]">Plan</th>
								<th className="py-2 pr-2 min-w-[80px]">Estado</th>
								<th className="py-2 pr-2 min-w-[100px]">Desde</th>
								<th className="py-2 pr-2 min-w-[200px]">Contacto</th>
								<th className="py-2 pr-2 min-w-[120px]">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{filtrados.length === 0 && (
								<tr>
									<td
										colSpan={7}
										className="py-4 text-center text-[var(--text-muted)]"
									>
										No se encontraron afiliados.
									</td>
								</tr>
							)}
							{rows.map((a) => (
								<tr key={a.id} className="border-b last:border-0">
									<td className="py-2 pr-2 font-medium">{a.nombre}</td>
									<td className="py-2 pr-2">{a.cedula}</td>
									<td className="py-2 pr-2">
										{planes.find((item) => item.id === a.plan)?.nombre ??
											"Plan no disponible"}
									</td>
									<td className="py-2 pr-2">
										<Badge color={a.estado === "Activo" ? "green" : "amber"}>
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
											planes={planes}
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
				<Pagination {...pagination} />
			</Card>
		</motion.div>
	);
}

function AfiliadoActions({
	afiliado,
	planes,
	afiliados,
	proveedores,
	crearAutorizacion,
	addNotification,
	onEditarAfiliado,
}: {
	afiliado: Afiliado;
	planes: Plan[];
	afiliados: Afiliado[];
	proveedores: Proveedor[];
	crearAutorizacion: CrearAutorizacion;
	addNotification: Notify;
	onEditarAfiliado: EditarAfiliado;
}) {
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	return (
		<div className="flex items-center gap-2">
			<Button
				variant="primary"
				size="sm"
				className="flex items-center justify-center"
				onClick={() => setOpen(true)}
			>
				<Plus className="w-4 h-4 mr-1" /> Nueva autorización
			</Button>
			<Button
				variant="ghost"
				size="sm"
				className="flex items-center justify-center"
				onClick={() => setOpenEdit(true)}
			>
				<User className="w-4 h-4 mr-1" /> Editar
			</Button>
			<AnimatePresence>
				{open && (
					<NuevaAutorizacionModal
						open={open}
						onClose={() => setOpen(false)}
						afiliadoDefault={afiliado}
						afiliados={afiliados}
						proveedores={proveedores}
						crearAutorizacion={crearAutorizacion}
						addNotification={addNotification}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{openEdit && (
					<AfiliadoModal
						open={openEdit}
						onClose={() => setOpenEdit(false)}
						afiliado={afiliado}
						planes={planes}
						onSave={async (input) => {
							await onEditarAfiliado(afiliado.id, input);
							addNotification({
								type: "success",
								title: "Afiliado actualizado",
								message: `Se guardaron los cambios de ${input.nombre}.`,
							});
						}}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}

function AfiliadoModal({
	open,
	onClose,
	planes,
	afiliado,
	onSave,
}: {
	open: boolean;
	onClose: () => void;
	planes: Plan[];
	afiliado?: Afiliado;
	onSave: (input: NuevoAfiliadoInput) => Promise<unknown>;
}) {
	const formId = useId();
	const [nombre, setNombre] = useState(afiliado?.nombre ?? "");
	const [cedula, setCedula] = useState(afiliado?.cedula ?? "");
	const planInicial =
		planes.find((item) => item.id === "BASICO")?.id ?? planes[0]?.id ?? "";
	const [plan, setPlan] = useState(afiliado?.plan ?? planInicial);
	const [estado, setEstado] = useState(afiliado?.estado ?? "Activo");
	const [desde, setDesde] = useState(
		afiliado?.desde.slice(0, 10) ?? new Date().toISOString().slice(0, 10),
	);
	const [nacimiento, setNacimiento] = useState(
		afiliado?.nacimiento.slice(0, 10) ?? "",
	);
	const [telefono, setTelefono] = useState(afiliado?.telefono ?? "");
	const [correo, setCorreo] = useState(afiliado?.correo ?? "");
	const [dependientes, setDependientes] = useState(afiliado?.dependientes ?? 0);
	const [error, setError] = useState("");
	const [guardando, setGuardando] = useState(false);
	const errorRef = useRef<HTMLParagraphElement>(null);
	useEffect(() => {
		if (error) errorRef.current?.focus();
	}, [error]);

	const guardar = async () => {
		if (guardando) return;
		setError("");
		setGuardando(true);
		try {
			await onSave({
				nombre,
				cedula,
				plan,
				estado,
				desde,
				nacimiento,
				telefono,
				correo,
				dependientes,
			});
			onClose();
		} catch (cause) {
			setError(
				registrationFeedback(
					cause,
					"No se pudo guardar el afiliado. Revisa los datos e inténtalo de nuevo.",
				),
			);
		} finally {
			setGuardando(false);
		}
	};

	return (
		<Modal
			open={open}
			onClose={() => {
				if (!guardando) {
					setError("");
					onClose();
				}
			}}
			title={afiliado ? "Editar afiliado" : "Nuevo afiliado"}
		>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void guardar();
				}}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-nombre-completo`}
						>
							Nombre completo
						</label>
						<Input
							id={`${formId}-nombre-completo`}
							value={nombre}
							onChange={setNombre}
							placeholder="Ej.: Juan Pérez"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-cedula`}
						>
							Cédula
						</label>
						<Input
							id={`${formId}-cedula`}
							value={cedula}
							onChange={setCedula}
							readOnly={Boolean(afiliado)}
							aria-describedby={afiliado ? `${formId}-cedula-ayuda` : undefined}
							placeholder="001-1234567-8"
						/>
						{afiliado && (
							<p
								id={`${formId}-cedula-ayuda`}
								className="text-xs text-[var(--text-muted)]"
							>
								La cédula vincula el expediente con la cuenta del afiliado.
							</p>
						)}
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-plan`}
						>
							Plan
						</label>
						<Select id={`${formId}-plan`} value={plan} onChange={setPlan}>
							{plan && !planes.some((item) => item.id === plan) && (
								<option value={plan}>{plan}</option>
							)}
							{planes.map((p) => (
								<option key={p.id} value={p.id}>
									{p.nombre}
								</option>
							))}
						</Select>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-estado`}
						>
							Estado
						</label>
						<Select id={`${formId}-estado`} value={estado} onChange={setEstado}>
							<option value="Activo">Activo</option>
							<option value="Suspendido">Suspendido</option>
							{afiliado && <option value="Inactivo">Inactivo</option>}
						</Select>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-desde`}
						>
							Desde
						</label>
						<Input
							id={`${formId}-desde`}
							value={desde}
							onChange={setDesde}
							type="date"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-nacimiento`}
						>
							Nacimiento
						</label>
						<Input
							id={`${formId}-nacimiento`}
							value={nacimiento}
							onChange={setNacimiento}
							type="date"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-telefono`}
						>
							Teléfono
						</label>
						<Input
							id={`${formId}-telefono`}
							value={telefono}
							onChange={setTelefono}
							placeholder="+1 809 555 0000"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-correo`}
						>
							Correo
						</label>
						<Input
							id={`${formId}-correo`}
							value={correo}
							onChange={setCorreo}
							placeholder="correo@ejemplo.do"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor={`${formId}-dependientes`}
						>
							Dependientes
						</label>
						<Input
							id={`${formId}-dependientes`}
							value={dependientes}
							onChange={(val) => setDependientes(Number(val) || 0)}
							type="number"
							min={0}
							step={1}
						/>
					</div>
				</div>
				{error && (
					<p
						ref={errorRef}
						tabIndex={-1}
						role="alert"
						className="mt-3 rounded-lg tone-error p-3"
					>
						{error}
					</p>
				)}
				<ModalActions>
					<Button
						variant="ghost"
						onClick={() => {
							setError("");
							onClose();
						}}
						disabled={guardando}
					>
						Cancelar
					</Button>
					<Button
						variant="success"
						className="flex items-center justify-center"
						type="submit"
						disabled={guardando}
					>
						<CheckCircle2 className="w-4 h-4 mr-1" />
						{guardando
							? "Guardando…"
							: afiliado
								? "Guardar cambios"
								: "Crear afiliado"}
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
