import { AnimatePresence, motion } from "framer-motion";
import { FileDown, RefreshCw } from "lucide-react";
import { useMemo, useState } from "react";
import type { Factura, Poliza } from "../api/adapters";
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
import type { Notify, PrimaInput } from "./contracts";
export function FacturacionTab({
	facturas,
	polizas,
	onGenerarMes,
	onRecordatorio,
	onRegistrarPago,
	onGracia,
	onSuspender,
	addNotification,
}: {
	facturas: Factura[];
	polizas: Poliza[];
	onGenerarMes: () => Promise<void>;
	onRecordatorio: (id: string) => Promise<void>;
	onRegistrarPago: (input: PrimaInput) => Promise<Factura | null>;
	onGracia: (id: string) => Promise<void>;
	onSuspender: (id: string) => Promise<void>;
	addNotification: Notify;
}) {
	const [filtroPeriodo, setFiltroPeriodo] = useState("todos");
	const [filtroEstado, setFiltroEstado] = useState("todos");
	const [openPago, setOpenPago] = useState(false);
	const [facturaSel, setFacturaSel] = useState<Factura | null>(null);
	const [procesando, setProcesando] = useState(false);

	const ejecutar = async (operacion: () => Promise<unknown>) => {
		setProcesando(true);
		try {
			await operacion();
			return true;
		} catch (error) {
			addNotification({
				type: "error",
				title: "No se pudo confirmar la operación",
				message:
					error.response?.data?.message ||
					"Vuelve a consultar la factura antes de reintentar.",
			});
			return false;
		} finally {
			setProcesando(false);
		}
	};

	const periodos = useMemo(
		() => Array.from(new Set<string>(facturas.map((f) => f.periodo))),
		[facturas],
	);

	const facturasFiltradas = useMemo(() => {
		return facturas.filter((f) => {
			if (filtroPeriodo !== "todos" && f.periodo !== filtroPeriodo)
				return false;
			if (filtroEstado !== "todos" && f.estado !== filtroEstado) return false;
			return true;
		});
	}, [facturas, filtroPeriodo, filtroEstado]);

	const exportar = () => {
		const rows: unknown[][] = [
			[
				"Periodo",
				"Póliza",
				"Empresa",
				"Emisión",
				"Vencimiento",
				"Monto",
				"Estado",
				"Fecha Pago",
				"Referencia",
				"Recordatorio",
			],
		];
		facturasFiltradas.forEach((f) => {
			const p = polizas.find((x) => x.id === f.polizaId);
			rows.push([
				f.periodo,
				f.polizaId,
				p?.empresa || "-",
				formatDate(f.emision),
				formatDate(f.vencimiento),
				f.monto,
				f.estado,
				f.fechaPago ? formatDate(f.fechaPago) : "-",
				f.referencia || "-",
				f.recordatorioEnviado ? "Sí" : "No",
			]);
		});
		exportCsv("Facturacion", rows);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="space-y-4"
		>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex w-full min-w-0 items-center gap-2 mobile-l:w-auto">
					<Select
						aria-label="Filtrar factura por período"
						value={filtroPeriodo}
						onChange={setFiltroPeriodo}
						className="min-w-0 flex-1 sm:w-40"
					>
						<option value="todos">Todos los meses</option>
						{periodos.map((per) => (
							<option key={per} value={per}>
								{per}
							</option>
						))}
					</Select>
					<Select
						aria-label="Filtrar factura por estado"
						value={filtroEstado}
						onChange={setFiltroEstado}
						className="min-w-0 flex-1 sm:w-40"
					>
						<option value="todos">Todos los estados</option>
						<option>Pendiente</option>
						<option>Atrasada</option>
						<option value="En periodo de gracia">En gracia</option>
						<option>Pagada</option>
					</Select>
				</div>
				<div className="flex w-full min-w-0 flex-nowrap items-center gap-2 mobile-l:w-auto">
					<Button
						variant="ghost"
						size="sm"
						onClick={exportar}
						aria-label="Exportar CSV"
						className="flex flex-1 items-center justify-center whitespace-nowrap"
					>
						<FileDown className="mr-1 hidden h-4 w-4 mobile-m:block" />
						<span>
							Exportar<span className="hidden mobile-m:inline"> CSV</span>
						</span>
					</Button>
					<Button
						variant="primary"
						size="sm"
						onClick={() => ejecutar(onGenerarMes)}
						disabled={procesando}
						aria-label="Generar facturas del mes"
						className="flex flex-1 items-center justify-center whitespace-nowrap"
					>
						<RefreshCw className="mr-1 hidden h-4 w-4 mobile-m:block" />
						<span>
							Generar facturas
							<span className="hidden mobile-m:inline"> del mes</span>
						</span>
					</Button>
				</div>
			</div>

			<Card>
				<div className="overflow-x-auto">
					<table className="data-table w-full text-sm min-w-[1000px]">
						<thead>
							<tr className="text-left text-[var(--text-muted)] border-b">
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
							{facturasFiltradas.map((f) => {
								const p = polizas.find((x) => x.id === f.polizaId);
								return (
									<tr key={f.id} className="border-b last:border-0">
										<td className="py-2 pr-2">{f.periodo}</td>
										<td className="py-2 pr-2">{f.polizaId}</td>
										<td className="py-2 pr-2">{p?.empresa}</td>
										<td className="py-2 pr-2">{formatDate(f.emision)}</td>
										<td className="py-2 pr-2">{formatDate(f.vencimiento)}</td>
										<td className="py-2 pr-2">{currency(f.monto)}</td>
										<td className="py-2 pr-2">
											<Badge
												color={
													f.estado === "Pagada"
														? "green"
														: f.estado === "Pendiente"
															? "blue"
															: f.estado === "Atrasada"
																? "amber"
																: "amber"
												}
											>
												{f.estado}
											</Badge>
										</td>
										<td className="py-2 pr-2">
											<div className="flex flex-nowrap gap-2 whitespace-nowrap">
												{f.estado !== "Pagada" && (
													<Button
														variant="primary"
														size="sm"
														onClick={() => {
															setFacturaSel(f);
															setOpenPago(true);
														}}
													>
														Registrar pago
													</Button>
												)}
												{f.estado !== "Pagada" && (
													<Button
														variant="ghost"
														size="sm"
														onClick={() => ejecutar(() => onRecordatorio(f.id))}
														disabled={procesando}
													>
														Recordatorio
													</Button>
												)}
												{f.estado === "Atrasada" && (
													<Button
														variant="warning"
														size="sm"
														onClick={() => ejecutar(() => onGracia(f.id))}
														disabled={procesando}
													>
														Periodo de gracia
													</Button>
												)}
												{(f.estado === "Atrasada" ||
													f.estado === "En periodo de gracia") && (
													<Button
														variant="danger"
														size="sm"
														onClick={() => ejecutar(() => onSuspender(f.id))}
														disabled={procesando}
													>
														Suspender póliza
													</Button>
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

			<AnimatePresence>
				{openPago && (
					<RegistrarPagoPrimaModal
						open={openPago}
						onClose={() => setOpenPago(false)}
						factura={facturaSel}
						onRegistrarPago={(input) => ejecutar(() => onRegistrarPago(input))}
						procesando={procesando}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

function RegistrarPagoPrimaModal({
	open,
	onClose,
	factura,
	onRegistrarPago,
	procesando,
}: {
	open: boolean;
	onClose: () => void;
	factura: Factura | null;
	onRegistrarPago: (input: PrimaInput) => Promise<boolean>;
	procesando: boolean;
}) {
	const [referencia, setReferencia] = useState("");
	if (!factura) return null;
	const submit = async () => {
		if (await onRegistrarPago({ facturaId: factura.id, referencia })) onClose();
	};
	return (
		<Modal
			open={open}
			onClose={onClose}
			title={`Registrar pago de ${factura.polizaId}`}
		>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void submit();
				}}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="pago-prima-periodo"
						>
							Periodo
						</label>
						<Input
							id="pago-prima-periodo"
							value={factura.periodo}
							onChange={() => {}}
							readOnly
						/>
					</div>
					<div>
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="pago-prima-monto"
						>
							Monto
						</label>
						<Input
							id="pago-prima-monto"
							value={currency(factura.monto)}
							onChange={() => {}}
							readOnly
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							className="text-xs text-[var(--text-muted)]"
							htmlFor="pago-prima-referencia-bancaria"
						>
							Referencia bancaria
						</label>
						<Input
							id="pago-prima-referencia-bancaria"
							value={referencia}
							onChange={setReferencia}
							placeholder="Ej. PR-2025-0105-0001"
						/>
					</div>
				</div>
				<ModalActions>
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>
					<Button
						variant="primary"
						type="submit"
						disabled={procesando || referencia.trim().length < 3}
					>
						Registrar pago
					</Button>
				</ModalActions>
			</form>
		</Modal>
	);
}
