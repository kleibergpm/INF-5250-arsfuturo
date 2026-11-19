import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, FileDown, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { Afiliado, Proveedor, Reclamo } from "../api/adapters";
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
import { currency, exportCsv, formatDate } from "../lib/formatters";
import type { Tema } from "../lib/theme";
import { graficaDe } from "../lib/theme";
import type { Notify, ReclamoInput } from "./contracts";
export function ReclamosTab({
	reclamaciones,
	afiliados,
	proveedores,
	onRegistrar,
	onDecidir,
	canRegister,
	canDecide,
	addNotification,
	tema,
}: {
	reclamaciones: Reclamo[];
	afiliados: Afiliado[];
	proveedores: Proveedor[];
	onRegistrar: (input: ReclamoInput) => Promise<void>;
	onDecidir: (id: string, accion: "aprobar" | "rechazar") => Promise<void>;
	canRegister: boolean;
	canDecide: boolean;
	addNotification: Notify;
	tema: Tema;
}) {
	const [estado, setEstado] = useState("Todos");
	const [q, setQ] = useState("");
	const [open, setOpen] = useState(false);
	const [decision, setDecision] = useState<{
		reclamo: Reclamo;
		accion: "aprobar" | "rechazar";
	} | null>(null);
	const rechazar = decision?.accion === "rechazar";
	const g = graficaDe(tema);

	const data = useMemo(() => {
		return reclamaciones
			.filter((r) => (estado === "Todos" ? true : r.estado === estado))
			.filter(
				(r) =>
					!q ||
					r.afiliadoNombre?.toLowerCase().includes(q.toLowerCase()) ||
					String(r.id).includes(q),
			);
	}, [reclamaciones, estado, q]);
	const { rows, pagination } = usePagination(data, JSON.stringify([estado, q]));

	const total = useMemo(() => data.reduce((s, r) => s + r.monto, 0), [data]);
	const aprobacionRechazo = useMemo(
		() => [
			{
				name: "Aprobadas",
				value: data.filter((d) => d.estado === "Aprobada").length,
			},
			{
				name: "Rechazadas",
				value: data.filter((d) => d.estado === "Rechazada").length,
			},
		],
		[data],
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
		>
			<div className="grid grid-cols-1 gap-4">
				<Card>
					<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 mb-3">
						<Select
							aria-label="Estado del reclamo"
							value={estado}
							onChange={setEstado}
							className="w-full sm:w-[180px]"
						>
							<option>Todos</option>
							<option>En revisión</option>
							<option>Aprobada</option>
							<option>Rechazada</option>
						</Select>
						<div className="relative w-full mobile-l:w-80 lg:w-96">
							<Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)]" />
							<Input
								aria-label="Buscar reclamo por nombre o ID"
								value={q}
								onChange={setQ}
								placeholder="Buscar por nombre o ID"
								className="pl-9"
							/>
						</div>
						<div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
							{canRegister && (
								<Button
									className="flex items-center justify-center flex-1 sm:flex-initial"
									onClick={() => setOpen(true)}
								>
									<Plus className="w-4 h-4 mr-1" /> Registrar reclamo
								</Button>
							)}
							<Button
								variant="ghost"
								className="flex items-center justify-center flex-1 sm:flex-initial"
								onClick={() =>
									exportCsv("Reclamos", [
										["ID", "Afiliado", "Proveedor", "Monto", "Estado", "Fecha"],
										...data.map((r) => [
											r.id,
											r.afiliadoNombre,
											r.proveedorNombre,
											r.monto,
											r.estado,
											formatDate(r.fecha),
										]),
									])
								}
							>
								<FileDown className="w-4 h-4 mr-2" /> Exportar
							</Button>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="data-table w-full text-sm min-w-[700px]">
							<thead>
								<tr className="text-left text-[var(--text-muted)] border-b">
									<th className="py-2 pr-2 min-w-[60px]">#</th>
									<th className="py-2 pr-2 min-w-[150px]">Afiliado</th>
									<th className="py-2 pr-2 min-w-[150px]">Proveedor</th>
									<th className="py-2 pr-2 min-w-[100px]">Monto</th>
									<th className="py-2 pr-2 min-w-[80px]">Estado</th>
									<th className="py-2 pr-2 min-w-[80px]">Fecha</th>
									{canDecide && <th className="py-2 pr-2">Acciones</th>}
								</tr>
							</thead>
							<tbody>
								{data.length === 0 && (
									<tr>
										<td
											colSpan={canDecide ? 7 : 6}
											className="py-4 text-center"
										>
											No hay reclamos para los filtros seleccionados.
										</td>
									</tr>
								)}
								{rows.map((r) => (
									<tr key={r.id} className="border-b last:border-0">
										<td className="py-2 pr-2">{r.id}</td>
										<td className="py-2 pr-2 font-medium">
											{r.afiliadoNombre}
										</td>
										<td className="py-2 pr-2">{r.proveedorNombre}</td>
										<td className="py-2 pr-2">{currency(r.monto)}</td>
										<td className="py-2 pr-2">
											<Badge
												color={
													r.estado === "Aprobada"
														? "green"
														: r.estado === "En revisión"
															? "amber"
															: "red"
												}
											>
												{r.estado}
											</Badge>
										</td>
										<td className="py-2 pr-2">{formatDate(r.fecha)}</td>
										{canDecide && (
											<td className="py-2 pr-2">
												{r.estado === "En revisión" && (
													<div className="flex flex-wrap gap-2">
														<Button
															onClick={() =>
																setDecision({ reclamo: r, accion: "aprobar" })
															}
														>
															Aprobar
														</Button>
														<Button
															variant="ghost"
															onClick={() =>
																setDecision({ reclamo: r, accion: "rechazar" })
															}
														>
															Rechazar
														</Button>
													</div>
												)}
											</td>
										)}
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<Pagination {...pagination} />
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<Card>
						<h3 className="font-semibold mb-2">Resumen</h3>
						<div className="space-y-2 text-sm">
							<div className="flex justify-between">
								<span>Reclamos en vista:</span>
								<span className="font-medium">{data.length}</span>
							</div>
							<div className="flex justify-between">
								<span>Monto total:</span>
								<span className="font-medium">{currency(total)}</span>
							</div>
						</div>
					</Card>

					<Card>
						<h4 className="font-medium mb-2">Aprobación vs Rechazo</h4>
						<ResponsiveContainer width="100%" height={180}>
							<PieChart>
								<Pie
									dataKey="value"
									data={aprobacionRechazo}
									outerRadius={70}
									label
								>
									{aprobacionRechazo.map((sector, i) => (
										<Cell
											key={sector.name}
											fill={g?.sectores[i % g.sectores.length]}
										/>
									))}
								</Pie>
								<Tooltip contentStyle={g?.tooltip} />
							</PieChart>
						</ResponsiveContainer>
					</Card>
				</div>
			</div>

			<ActionConfirmation
				open={decision !== null}
				onClose={() => setDecision(null)}
				title={rechazar ? "Rechazar reclamo" : "Aprobar reclamo"}
				label={rechazar ? "Rechazar" : "Aprobar"}
				variant={rechazar ? "danger" : "success"}
				onConfirm={async () => {
					if (decision) await onDecidir(decision.reclamo.id, decision.accion);
				}}
			>
				¿Confirmas que quieres {decision?.accion} este reclamo
				{decision?.reclamo.afiliadoNombre
					? ` de ${decision.reclamo.afiliadoNombre}`
					: ""}
				?
			</ActionConfirmation>
			<AnimatePresence>
				{canRegister && open && (
					<RegistrarReclamoModal
						open={open}
						onClose={() => setOpen(false)}
						afiliados={afiliados}
						proveedores={proveedores}
						onRegistrar={onRegistrar}
						addNotification={addNotification}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

function RegistrarReclamoModal({
	open,
	onClose,
	afiliados,
	proveedores,
	onRegistrar,
	addNotification,
}: {
	open: boolean;
	onClose: () => void;
	afiliados: Afiliado[];
	proveedores: Proveedor[];
	onRegistrar: (input: ReclamoInput) => Promise<void>;
	addNotification: Notify;
}) {
	const [afiliadoId, setAfiliadoId] = useState(afiliados[0]?.id ?? "");
	const [proveedorId, setProveedorId] = useState(proveedores[0]?.id ?? "");
	const [monto, setMonto] = useState(500);
	const [enviando, setEnviando] = useState(false);

	const submit = async () => {
		setEnviando(true);
		try {
			await onRegistrar({ afiliadoId, proveedorId, monto: Number(monto) });
			onClose?.();
			addNotification({
				type: "success",
				title: "Reclamo registrado",
				message: "El reclamo está en revisión.",
			});
		} catch (error) {
			addNotification({
				type: "error",
				title: "No se pudo registrar el reclamo",
				message: error.response?.data?.message || "Intenta de nuevo.",
			});
		} finally {
			setEnviando(false);
		}
	};

	return (
		<Modal open={open} onClose={onClose} title="Registrar reclamo">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void submit();
				}}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="registrar-reclamo-afiliado"
						>
							Afiliado
						</label>
						<Select
							id="registrar-reclamo-afiliado"
							value={afiliadoId}
							onChange={setAfiliadoId}
						>
							{afiliados.map((a) => (
								<option key={a.id} value={a.id}>
									{a.nombre}
								</option>
							))}
						</Select>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="registrar-reclamo-proveedor"
						>
							Proveedor
						</label>
						<Select
							id="registrar-reclamo-proveedor"
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
					<div>
						<label
							className="text-xs text-[var(--text-body)]"
							htmlFor="registrar-reclamo-monto"
						>
							Monto
						</label>
						<Input
							id="registrar-reclamo-monto"
							type="number"
							value={monto}
							onChange={(value) => setMonto(Number(value) || 0)}
						/>
					</div>
				</div>
				<ModalActions>
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>
					<Button
						variant="primary"
						className="flex items-center justify-center"
						type="submit"
						disabled={enviando || !afiliadoId || !proveedorId || monto <= 0}
					>
						<CheckCircle2 className="w-4 h-4 mr-1" />
						Guardar
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
