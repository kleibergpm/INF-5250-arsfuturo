import { CheckCircle2, Plus, User } from "lucide-react";
import { useState } from "react";
import type { Afiliado, Plan, Proveedor } from "../api/adapters";
import { Button, Input, Modal, ModalActions, Select } from "../components/ui";
import { NuevaAutorizacionModal } from "./autorizaciones";
import type {
	CrearAutorizacion,
	EditarAfiliado,
	Notify,
	NuevoAfiliadoInput,
} from "./contracts";
export function AfiliadoActions({
	afiliado,
	afiliados,
	proveedores,
	crearAutorizacion,
	addNotification,
	onEditarAfiliado,
}: {
	afiliado: Afiliado;
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
			{openEdit && (
				<EditarAfiliadoModal
					open={openEdit}
					onClose={() => setOpenEdit(false)}
					afiliado={afiliado}
					onGuardar={onEditarAfiliado}
					addNotification={addNotification}
				/>
			)}
		</div>
	);
}

function EditarAfiliadoModal({
	open,
	onClose,
	afiliado,
	onGuardar,
	addNotification,
}: {
	open: boolean;
	onClose: () => void;
	afiliado: Afiliado;
	onGuardar: EditarAfiliado;
	addNotification: Notify;
}) {
	const [telefono, setTelefono] = useState(afiliado?.telefono || "");
	const [correo, setCorreo] = useState(afiliado?.correo || "");

	const guardar = async () => {
		await onGuardar?.(afiliado.id, { telefono, correo });
		addNotification({
			id: Date.now(),
			type: "success",
			title: "Afiliado actualizado",
			message: `Se guardaron los cambios de ${afiliado.nombre}.`,
		});
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose} title={`Editar afiliado`}>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void guardar();
				}}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="editar-afiliado-telefono"
						>
							Teléfono
						</label>
						<Input
							id="editar-afiliado-telefono"
							value={telefono}
							onChange={setTelefono}
							placeholder="Ej. +1 809 555 0000"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="editar-afiliado-correo"
						>
							Correo
						</label>
						<Input
							id="editar-afiliado-correo"
							value={correo}
							onChange={setCorreo}
							placeholder="correo@ejemplo.do"
						/>
					</div>
				</div>
				<ModalActions>
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>
					<Button variant="primary" type="submit">
						Guardar cambios
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}

export function NuevoAfiliadoModal({
	open,
	onClose,
	planes = [],
	crearAfiliado,
	addNotification,
}: {
	open: boolean;
	onClose: () => void;
	planes?: Plan[];
	crearAfiliado: (input: NuevoAfiliadoInput) => Promise<Afiliado>;
	addNotification: Notify;
}) {
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
		const nuevo = await crearAfiliado({
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
		if (!nuevo) return;
		onClose?.();
		setTimeout(() => {
			addNotification({
				type: "success",
				title: "Afiliado creado",
				message: `${nuevo.nombre} agregado con ID ${nuevo.id}.`,
			});
		}, 50);
		limpiar();
	};

	return (
		<Modal open={open} onClose={onClose} title="Nuevo afiliado">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void crear();
				}}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-nombre-completo"
						>
							Nombre completo
						</label>
						<Input
							id="nuevo-afiliado-nombre-completo"
							value={nombre}
							onChange={setNombre}
							placeholder="Ej.: Juan Pérez"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-cedula"
						>
							Cédula
						</label>
						<Input
							id="nuevo-afiliado-cedula"
							value={cedula}
							onChange={setCedula}
							placeholder="001-1234567-8"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-plan"
						>
							Plan
						</label>
						<Select id="nuevo-afiliado-plan" value={plan} onChange={setPlan}>
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
							htmlFor="nuevo-afiliado-estado"
						>
							Estado
						</label>
						<Select
							id="nuevo-afiliado-estado"
							value={estado}
							onChange={setEstado}
						>
							<option value="Activo">Activo</option>
							<option value="Suspendido">Suspendido</option>
						</Select>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-desde"
						>
							Desde
						</label>
						<Input
							id="nuevo-afiliado-desde"
							value={desde}
							onChange={setDesde}
							placeholder="YYYY-MM-DD"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-nacimiento"
						>
							Nacimiento
						</label>
						<Input
							id="nuevo-afiliado-nacimiento"
							value={nacimiento}
							onChange={setNacimiento}
							placeholder="YYYY-MM-DD"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-telefono"
						>
							Teléfono
						</label>
						<Input
							id="nuevo-afiliado-telefono"
							value={telefono}
							onChange={setTelefono}
							placeholder="+1 809 555 0000"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-correo"
						>
							Correo
						</label>
						<Input
							id="nuevo-afiliado-correo"
							value={correo}
							onChange={setCorreo}
							placeholder="correo@ejemplo.do"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nuevo-afiliado-dependientes"
						>
							Dependientes
						</label>
						<Input
							id="nuevo-afiliado-dependientes"
							value={dependientes}
							onChange={(val) => setDependientes(Number(val) || 0)}
							placeholder="0"
						/>
					</div>
				</div>
				<ModalActions>
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>
					<Button
						variant="success"
						className="flex items-center justify-center"
						type="submit"
					>
						<CheckCircle2 className="w-4 h-4 mr-1" />
						Crear afiliado
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
