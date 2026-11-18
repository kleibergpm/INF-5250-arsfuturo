import { motion } from "framer-motion";
import { FileDown, Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Pago, Proveedor, Servicio } from "../api/adapters";
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
import type { Notify, PagoInput } from "./contracts";
export function PagosTab({
	servicios,
	pagos,
	proveedores,
	onEmitirPago,
	addNotification,
}: {
	pagos: Pago[];
	servicios: Servicio[];
	proveedores: Proveedor[];
	onEmitirPago: (input: PagoInput) => Promise<Pago | null>;
	addNotification: Notify;
}) {
	const [open, setOpen] = useState(false);
	const [filtroProveedor, setFiltroProveedor] = useState("todos");

	const pagosFiltrados = useMemo(() => {
		return pagos.filter(
			(p) =>
				filtroProveedor === "todos" ||
				String(p.proveedorId) === String(filtroProveedor),
		);
	}, [pagos, filtroProveedor]);

	const exportar = () => {
		const rows: unknown[][] = [
			[
				"Fecha",
				"Proveedor",
				"Servicio",
				"Monto",
				"Estado",
				"Referencia",
				"Método",
			],
		];
		pagosFiltrados.forEach((p) => {
			const pr = proveedores.find((x) => x.id === p.proveedorId);
			rows.push([
				formatDate(p.fecha),
				pr?.nombre || "-",
				String(p.servicioId),
				p.monto,
				p.estado,
				p.referenciaBanco,
				p.metodo,
			]);
		});
		exportCsv("pagos.csv", rows);
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
						aria-label="Filtrar pago por proveedor"
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
						<Wallet className="w-4 h-4 mr-1" /> Emitir pago
					</Button>
				</div>
			</div>

			<Card>
				<div className="overflow-x-auto">
					<table className="data-table w-full text-sm min-w-[900px]">
						<thead>
							<tr className="text-left text-[var(--text-muted)] border-b">
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
							{pagosFiltrados.map((p) => {
								const pr = proveedores.find((x) => x.id === p.proveedorId);
								const servicio = servicios.find((s) => s.id === p.servicioId);
								return (
									<tr key={p.id} className="border-b last:border-0">
										<td className="py-2 pr-2">{formatDate(p.fecha)}</td>
										<td className="py-2 pr-2">{pr?.nombre}</td>
										<td className="py-2 pr-2">
											{servicio
												? `${servicio.descripcion} (${servicio.id})`
												: p.servicioId}
										</td>
										<td className="py-2 pr-2">{currency(p.monto)}</td>
										<td className="py-2 pr-2">
											<Badge
												color={p.estado === "Procesado" ? "green" : "amber"}
											>
												{p.estado}
											</Badge>
										</td>
										<td className="py-2 pr-2">{p.referenciaBanco}</td>
										<td className="py-2 pr-2">{p.metodo}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Card>

			{open && (
				<EmitirPagoModal
					open={open}
					onClose={() => setOpen(false)}
					servicios={servicios}
					proveedores={proveedores}
					onEmitirPago={onEmitirPago}
					addNotification={addNotification}
				/>
			)}
		</motion.div>
	);
}

function EmitirPagoModal({
	open,
	onClose,
	servicios,
	proveedores,
	onEmitirPago,
	addNotification,
}: {
	open: boolean;
	onClose: () => void;
	servicios: Servicio[];
	proveedores: Proveedor[];
	onEmitirPago: (input: PagoInput) => Promise<Pago | null>;
	addNotification: Notify;
}) {
	const pendientes = servicios.filter((s) => s.elegiblePago);
	const [servicioId, setServicioId] = useState(
		pendientes[0]?.id ? String(pendientes[0].id) : "",
	);
	const servicioSel = pendientes.find((s) => String(s.id) === servicioId);
	const proveedorSel = proveedores.find(
		(p) => p.id === servicioSel?.proveedorId,
	);
	const monto = servicioSel?.montoPagable ?? 0;
	const [referenciaBanco, setReferenciaBanco] = useState("");
	const [metodo, setMetodo] = useState("Transferencia");
	const [emitiendo, setEmitiendo] = useState(false);

	useEffect(() => {
		setReferenciaBanco(
			servicioId ? `ORD-${new Date().getFullYear()}-${servicioId}` : "",
		);
	}, [servicioId]);

	const emitir = async () => {
		setEmitiendo(true);
		try {
			const pago = await onEmitirPago({
				servicioId,
				monto,
				referenciaBanco,
				metodo,
			});
			if (!pago) return;
			addNotification({
				id: Date.now(),
				type: "success",
				title: "Pago emitido",
				message: `Se emitió pago a ${proveedorSel?.nombre} por ${currency(monto)}.`,
			});
			onClose();
		} catch (error) {
			addNotification({
				type: "error",
				title: "No se pudo emitir el pago",
				message: error.response?.data?.message || "Intenta de nuevo.",
			});
		} finally {
			setEmitiendo(false);
		}
	};

	return (
		<Modal open={open} onClose={onClose} title="Emitir pago a proveedor">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void emitir();
				}}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div className="sm:col-span-2">
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="emitir-pago-a-proveedor-servicio-pendiente"
						>
							Servicio pendiente
						</label>
						<Select
							id="emitir-pago-a-proveedor-servicio-pendiente"
							value={servicioId}
							onChange={setServicioId}
						>
							{pendientes.map((s) => (
								<option
									key={s.id}
									value={String(s.id)}
								>{`${s.id} - ${s.descripcion} (${formatDate(s.fecha)})`}</option>
							))}
						</Select>
						{!pendientes.length && (
							<p role="status">No hay servicios elegibles para pago.</p>
						)}
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="emitir-pago-a-proveedor-proveedor"
						>
							Proveedor
						</label>
						<Input
							id="emitir-pago-a-proveedor-proveedor"
							value={proveedorSel?.nombre || ""}
							onChange={() => {}}
							readOnly
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="emitir-pago-a-proveedor-monto"
						>
							Monto
						</label>
						<Input
							id="emitir-pago-a-proveedor-monto"
							value={currency(monto)}
							onChange={() => {}}
							readOnly
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="emitir-pago-a-proveedor-referencia-bancaria"
						>
							Referencia bancaria
						</label>
						<Input
							id="emitir-pago-a-proveedor-referencia-bancaria"
							value={referenciaBanco}
							onChange={setReferenciaBanco}
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="emitir-pago-a-proveedor-metodo"
						>
							Método
						</label>
						<Select
							id="emitir-pago-a-proveedor-metodo"
							value={metodo}
							onChange={setMetodo}
						>
							<option>Transferencia</option>
							<option>ACH</option>
							<option>Cheque</option>
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
							emitiendo || !servicioSel || referenciaBanco.trim().length < 3
						}
					>
						Emitir pago
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
