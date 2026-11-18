import { motion } from "framer-motion";
import { FileDown, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import type {
	Afiliado,
	Autorizacion,
	Proveedor,
	Servicio,
} from "../api/adapters";
import {
	Badge,
	Button,
	Card,
	Input,
	Modal,
	ModalActions,
	Select,
} from "../components/ui";
import { currency, exportCsv, formatDate } from "../lib/formatters";
import type { Notify, ServicioInput } from "./contracts";
export function ServiciosTab({
	servicios,
	afiliados,
	proveedores,
	autorizaciones,
	onRegistrar,
	addNotification,
}: {
	servicios: Servicio[];
	afiliados: Afiliado[];
	proveedores: Proveedor[];
	autorizaciones: Autorizacion[];
	onRegistrar: (input: ServicioInput) => Promise<Servicio>;
	addNotification: Notify;
}) {
	const [open, setOpen] = useState(false);
	const [filtroProveedor, setFiltroProveedor] = useState("todos");
	const [filtroEstado, setFiltroEstado] = useState("todos");

	const serviciosFiltrados = useMemo(() => {
		return servicios.filter((s) => {
			if (
				filtroProveedor !== "todos" &&
				String(s.proveedorId) !== String(filtroProveedor)
			)
				return false;
			if (filtroEstado !== "todos" && s.estado !== filtroEstado) return false;
			return true;
		});
	}, [servicios, filtroProveedor, filtroEstado]);

	const exportar = () => {
		const rows: unknown[][] = [
			[
				"Fecha",
				"Afiliado",
				"Proveedor",
				"Descripción",
				"Costo",
				"Copago",
				"Estado",
				"Autorización",
			],
		];
		serviciosFiltrados.forEach((s) => {
			const af = afiliados.find((a) => a.id === s.afiliadoId);
			const pr = proveedores.find((p) => p.id === s.proveedorId);
			rows.push([
				formatDate(s.fecha),
				af?.nombre || "-",
				pr?.nombre || "-",
				s.descripcion,
				s.costo,
				s.copago ?? 0,
				s.estado,
				s.autorizacionId ? String(s.autorizacionId) : "-",
			]);
		});
		exportCsv("servicios.csv", rows);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="space-y-4"
		>
			<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
				<div className="flex items-center gap-2">
					<Select
						aria-label="Filtrar servicio por proveedor"
						value={filtroProveedor}
						onChange={setFiltroProveedor}
						className="w-48"
					>
						<option value="todos">Todos los proveedores</option>
						{proveedores.map((p) => (
							<option key={p.id} value={String(p.id)}>
								{p.nombre}
							</option>
						))}
					</Select>
					<Select
						aria-label="Filtrar servicio por estado"
						value={filtroEstado}
						onChange={setFiltroEstado}
						className="w-40"
					>
						<option value="todos">Todos los estados</option>
						<option value="Pendiente de Pago">Pendiente de Pago</option>
						<option value="Pagado">Pagado</option>
					</Select>
				</div>
				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						onClick={exportar}
						className="flex items-center"
					>
						<FileDown className="w-4 h-4 mr-1" /> Exportar CSV
					</Button>
					<Button
						variant="primary"
						onClick={() => setOpen(true)}
						className="flex items-center"
					>
						<Plus className="w-4 h-4 mr-1" /> Registrar servicio
					</Button>
				</div>
			</div>

			<Card>
				<div className="overflow-x-auto">
					<table className="data-table w-full text-sm min-w-[900px]">
						<thead>
							<tr className="text-left text-[var(--text-muted)] border-b">
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
							{serviciosFiltrados.map((s) => {
								const af = afiliados.find((a) => a.id === s.afiliadoId);
								const pr = proveedores.find((p) => p.id === s.proveedorId);
								return (
									<tr key={s.id} className="border-b last:border-0">
										<td className="py-2 pr-2">{formatDate(s.fecha)}</td>
										<td className="py-2 pr-2">{af?.nombre}</td>
										<td className="py-2 pr-2">{pr?.nombre}</td>
										<td className="py-2 pr-2">{s.descripcion}</td>
										<td className="py-2 pr-2">{currency(s.costo)}</td>
										<td className="py-2 pr-2">{currency(s.copago ?? 0)}</td>
										<td className="py-2 pr-2">
											<Badge color={s.estado === "Pagado" ? "green" : "amber"}>
												{s.estado}
											</Badge>
											{s.estadoPago === "Rechazado" && (
												<span className="ml-2">Pago rechazado</span>
											)}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Card>

			{open && (
				<RegistrarServicioModal
					open={open}
					onClose={() => setOpen(false)}
					afiliados={afiliados}
					proveedores={proveedores}
					autorizaciones={autorizaciones}
					onRegistrar={onRegistrar}
					addNotification={addNotification}
				/>
			)}
		</motion.div>
	);
}

function RegistrarServicioModal({
	open,
	onClose,
	afiliados,
	proveedores,
	autorizaciones,
	onRegistrar,
	addNotification,
}: {
	open: boolean;
	onClose: () => void;
	afiliados: Afiliado[];
	proveedores: Proveedor[];
	autorizaciones: Autorizacion[];
	onRegistrar: (input: ServicioInput) => Promise<Servicio>;
	addNotification: Notify;
}) {
	const [afiliadoId, setAfiliadoId] = useState(
		afiliados[0]?.id ? String(afiliados[0].id) : "",
	);
	const [proveedorId, setProveedorId] = useState(
		proveedores[0]?.id ? String(proveedores[0].id) : "",
	);
	const [descripcion, setDescripcion] = useState("Consulta general");
	const [costo, setCosto] = useState("1000");
	const [autorizacionId, setAutorizacionId] = useState("");
	const [registrando, setRegistrando] = useState(false);

	const autorizDelAfiliado = useMemo(() => {
		return autorizaciones.filter(
			(a) =>
				String(a.afiliadoId) === afiliadoId &&
				String(a.proveedorId) === proveedorId &&
				a.estado === "Aprobada",
		);
	}, [autorizaciones, afiliadoId, proveedorId]);

	const registrar = async () => {
		setRegistrando(true);
		try {
			const nuevo = await onRegistrar({
				afiliadoId,
				proveedorId,
				descripcion,
				costo,
				autorizacionId: autorizacionId || undefined,
			});
			if (!nuevo) return;
			addNotification({
				type: "success",
				title: "Servicio registrado",
				message: `Se registró servicio para afiliado ${afiliados.find((a) => String(a.id) === afiliadoId)?.nombre}.`,
			});
			onClose();
		} catch (error) {
			addNotification({
				type: "error",
				title: "No se pudo registrar el servicio",
				message: error.response?.data?.message || "Intenta de nuevo.",
			});
		} finally {
			setRegistrando(false);
		}
	};

	return (
		<Modal open={open} onClose={onClose} title="Registrar servicio médico">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void registrar();
				}}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="registrar-servicio-medico-afiliado"
						>
							Afiliado
						</label>
						<Select
							id="registrar-servicio-medico-afiliado"
							value={afiliadoId}
							onChange={(id) => {
								setAfiliadoId(id);
								setAutorizacionId("");
							}}
						>
							{afiliados.map((a) => (
								<option key={a.id} value={String(a.id)}>
									{a.nombre}
								</option>
							))}
						</Select>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="registrar-servicio-medico-proveedor"
						>
							Proveedor
						</label>
						<Select
							id="registrar-servicio-medico-proveedor"
							value={proveedorId}
							onChange={(id) => {
								setProveedorId(id);
								setAutorizacionId("");
							}}
						>
							{proveedores.map((p) => (
								<option key={p.id} value={String(p.id)}>
									{p.nombre}
								</option>
							))}
						</Select>
					</div>
					<div className="sm:col-span-2">
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="registrar-servicio-medico-descripcion"
						>
							Descripción
						</label>
						<Input
							id="registrar-servicio-medico-descripcion"
							value={descripcion}
							onChange={setDescripcion}
							placeholder="Ej. Consulta general"
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="registrar-servicio-medico-costo"
						>
							Costo
						</label>
						<Input
							id="registrar-servicio-medico-costo"
							type="number"
							value={costo}
							onChange={setCosto}
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="registrar-servicio-medico-autorizacion-opcional"
						>
							Autorización (opcional)
						</label>
						<Select
							id="registrar-servicio-medico-autorizacion-opcional"
							value={autorizacionId}
							onChange={setAutorizacionId}
						>
							<option value="">Sin autorización</option>
							{autorizDelAfiliado.map((a) => (
								<option key={a.id} value={String(a.id)}>
									{a.id} - {a.procedimiento}
								</option>
							))}
						</Select>
					</div>
				</div>
				<ModalActions>
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>
					<Button
						variant="primary"
						type="submit"
						disabled={
							registrando || !afiliadoId || !proveedorId || !(Number(costo) > 0)
						}
					>
						Registrar
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
