import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, FileDown, Plus, Search, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import type { Afiliado, Autorizacion, Proveedor } from "../api/adapters";
import { Pagination, usePagination } from "../components/Pagination";
import {
	ActionConfirmation,
	Badge,
	Button,
	Card,
	Input,
	Modal,
	ModalActions,
	Select,
} from "../components/ui";
import { exportCsv, formatDate } from "../lib/formatters";
import type { CrearAutorizacion, Notify } from "./contracts";
export function AutorizacionesTab({
	autorizaciones,
	afiliados,
	proveedores,
	aprobarAut,
	rechazarAut,
	crearAutorizacion,
	addNotification,
	puedeDecidir,
}: {
	autorizaciones: Autorizacion[];
	afiliados: Afiliado[];
	proveedores: Proveedor[];
	aprobarAut: (id: string) => Promise<void>;
	rechazarAut: (id: string) => Promise<void>;
	crearAutorizacion: CrearAutorizacion;
	addNotification: Notify;
	puedeDecidir: boolean;
}) {
	const [estado, setEstado] = useState("Todos");
	const [q, setQ] = useState("");
	const [open, setOpen] = useState(false);
	const [decision, setDecision] = useState<{
		autorizacion: Autorizacion;
		accion: "aprobar" | "rechazar";
	} | null>(null);
	const rechazar = decision?.accion === "rechazar";

	const data = useMemo(() => {
		return autorizaciones
			.filter((a) => (estado === "Todos" ? true : a.estado === estado))
			.filter((a) => {
				const af = afiliados.find((x) => x.id === a.afiliadoId);
				return !q
					? true
					: af?.nombre?.toLowerCase().includes(q.toLowerCase()) ||
							af?.cedula.includes(q) ||
							String(a.id).includes(q);
			});
	}, [autorizaciones, afiliados, estado, q]);
	const { rows, pagination } = usePagination(data, JSON.stringify([estado, q]));

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
		>
			<Card>
				<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 mb-3">
					<Select
						aria-label="Estado de autorización"
						value={estado}
						onChange={setEstado}
						className="w-full sm:w-[180px]"
					>
						<option>Todos</option>
						<option>Aprobada</option>
						<option>En revisión</option>
						<option>Rechazada</option>
					</Select>
					<div className="relative w-full sm:w-auto flex-1 sm:flex-initial">
						<Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)]" />
						<Input
							aria-label="Buscar autorización por nombre, cédula o ID"
							value={q}
							onChange={setQ}
							placeholder="Buscar por nombre, cédula o ID"
							className="pl-9"
						/>
					</div>
					<div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
						<Button
							aria-label="Nueva autorización"
							className="flex items-center justify-center flex-1 sm:flex-initial"
							onClick={() => setOpen(true)}
						>
							<Plus className="w-4 h-4 mr-1" /> Nueva
						</Button>
						<Button
							variant="ghost"
							className="flex items-center justify-center flex-1 sm:flex-initial"
							onClick={() =>
								exportCsv("Autorizaciones", [
									[
										"ID",
										"Afiliado",
										"Procedimiento",
										"Proveedor",
										"Estado",
										"Fecha",
										"Copago",
									],
									...data.map((a) => [
										a.id,
										afiliados.find((x) => x.id === a.afiliadoId)?.nombre,
										a.procedimiento,
										proveedores.find((p) => p.id === a.proveedorId)?.nombre,
										a.estado,
										formatDate(a.fecha),
										a.copago,
									]),
								])
							}
						>
							<FileDown className="w-4 h-4 mr-2" /> Exportar
						</Button>
					</div>
				</div>
				<div className="overflow-x-auto">
					<table className="data-table w-full text-sm min-w-[800px]">
						<thead>
							<tr className="text-left text-[var(--text-muted)] border-b">
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
							{rows.map((a) => (
								<tr key={a.id} className="border-b last:border-0">
									<td className="py-2 pr-2">{a.id}</td>
									<td className="py-2 pr-2 font-medium">
										{afiliados.find((x) => x.id === a.afiliadoId)?.nombre}
									</td>
									<td className="py-2 pr-2">{a.procedimiento}</td>
									<td className="py-2 pr-2">
										{proveedores.find((p) => p.id === a.proveedorId)?.nombre}
									</td>
									<td className="py-2 pr-2">
										<Badge
											color={
												a.estado === "Aprobada"
													? "green"
													: a.estado === "En revisión"
														? "amber"
														: "red"
											}
										>
											{a.estado}
										</Badge>
									</td>
									<td className="py-2 pr-2">{formatDate(a.fecha)}</td>
									<td className="py-2 pr-2">
										{puedeDecidir && a.estado === "En revisión" && (
											<div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
												<Button
													size="sm"
													variant="success"
													className="flex items-center justify-center w-full sm:w-auto text-xs"
													onClick={() =>
														setDecision({ autorizacion: a, accion: "aprobar" })
													}
												>
													<CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
													Aprobar
												</Button>
												<Button
													size="sm"
													variant="danger"
													className="flex items-center justify-center w-full sm:w-auto text-xs"
													onClick={() =>
														setDecision({ autorizacion: a, accion: "rechazar" })
													}
												>
													<XCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
													Rechazar
												</Button>
											</div>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<Pagination {...pagination} />
			</Card>

			<ActionConfirmation
				open={decision !== null}
				onClose={() => setDecision(null)}
				title={rechazar ? "Rechazar autorización" : "Aprobar autorización"}
				label={rechazar ? "Rechazar" : "Aprobar"}
				variant={rechazar ? "danger" : "success"}
				onConfirm={async () => {
					if (decision)
						await (rechazar ? rechazarAut : aprobarAut)(
							decision.autorizacion.id,
						);
				}}
			>
				¿Confirmas que quieres {decision?.accion} la autorización para «
				{decision?.autorizacion.procedimiento}»?
			</ActionConfirmation>

			<AnimatePresence>
				{open && (
					<NuevaAutorizacionModal
						open={open}
						onClose={() => setOpen(false)}
						afiliados={afiliados}
						proveedores={proveedores}
						crearAutorizacion={crearAutorizacion}
						addNotification={addNotification}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export function NuevaAutorizacionModal({
	open,
	onClose,
	afiliadoDefault = null,
	afiliados = [],
	proveedores = [],
	crearAutorizacion,
	addNotification,
}: {
	open: boolean;
	onClose: () => void;
	afiliadoDefault?: Afiliado | null;
	afiliados?: Afiliado[];
	proveedores?: Proveedor[];
	crearAutorizacion: CrearAutorizacion;
	addNotification: Notify;
}) {
	const [afiliadoId, setAfiliadoId] = useState(
		afiliadoDefault?.id ? String(afiliadoDefault.id) : "",
	);
	const [proveedorId, setProveedorId] = useState(
		proveedores[0]?.id ? String(proveedores[0].id) : "",
	);
	const [procedimiento, setProcedimiento] = useState("Consulta general");

	const [enviando, setEnviando] = useState(false);
	const [error, setError] = useState("");

	const crear = async () => {
		if (!afiliadoId || !proveedorId || !procedimiento) return;
		setError("");
		setEnviando(true);
		try {
			const nueva = await crearAutorizacion({
				afiliadoId,
				proveedorId,
				procedimiento,
			});
			if (!nueva) return;
			onClose();
			addNotification({
				type:
					nueva.estado === "Aprobada"
						? "success"
						: nueva.estado === "Rechazada"
							? "error"
							: "info",
				title: "Autorización Creada",
				message: `Autorización #${nueva.id} creada: ${nueva.estado}`,
			});
		} catch {
			setError(
				"No se pudo crear la autorización. Verifica los datos y vuelve a intentar.",
			);
		} finally {
			setEnviando(false);
		}
	};

	return (
		<Modal open={open} onClose={onClose} title="Nueva autorización">
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
							htmlFor="nueva-autorizacion-afiliado"
						>
							Afiliado
						</label>
						<Select
							id="nueva-autorizacion-afiliado"
							value={afiliadoId}
							onChange={setAfiliadoId}
						>
							<option value="">Seleccione…</option>
							{afiliados.map((a) => (
								<option key={a.id} value={a.id}>
									{a.nombre} — {a.cedula}
								</option>
							))}
						</Select>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nueva-autorizacion-proveedor"
						>
							Proveedor
						</label>
						<Select
							id="nueva-autorizacion-proveedor"
							value={proveedorId}
							onChange={setProveedorId}
						>
							{proveedores.map((p) => (
								<option key={p.id} value={p.id}>
									{p.nombre}
								</option>
							))}
						</Select>
					</div>
					<div className="md:col-span-2">
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="nueva-autorizacion-procedimiento"
						>
							Procedimiento
						</label>
						<Input
							id="nueva-autorizacion-procedimiento"
							value={procedimiento}
							onChange={setProcedimiento}
							placeholder="Ej.: Consulta general / Perfil Lipídico / Rayos X…"
						/>
					</div>
				</div>
				{error && (
					<p role="alert" className="mt-3 rounded-lg tone-error p-2">
						{error}
					</p>
				)}
				<ModalActions>
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>
					<Button
						variant="success"
						className="flex items-center justify-center"
						type="submit"
						disabled={
							enviando || !afiliadoId || !proveedorId || !procedimiento.trim()
						}
					>
						<CheckCircle2 className="w-4 h-4 mr-1" />
						Crear autorización
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
