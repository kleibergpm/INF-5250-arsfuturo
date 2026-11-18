import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Plan, Poliza } from "../api/adapters";
import { Badge, Card, Divider, Input, Select } from "../components/ui";
import { currency, formatDate } from "../lib/formatters";
export function PolizasTab({
	polizas,
	planes,
}: {
	polizas: Poliza[];
	planes: Plan[];
}) {
	const [personas, setPersonas] = useState(50);
	const [plan, setPlan] = useState("PLUS");

	const primaEstimada = useMemo(() => {
		const base = plan === "BASICO" ? 1500 : plan === "PLUS" ? 1800 : 2200;
		return personas * base;
	}, [personas, plan]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
		>
			<div className="grid grid-cols-1 gap-4">
				<Card>
					<h3 className="font-semibold mb-3">Pólizas</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{polizas.map((p) => (
							<div key={p.id} className="rounded-xl border p-3">
								<div className="flex items-center justify-between mb-2">
									<div>
										<div className="text-sm text-[var(--text-muted)]">
											{p.id}
										</div>
										<div className="font-semibold text-sm sm:text-base">
											{p.empresa}
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Badge color="blue">{p.plan}</Badge>
										<Badge
											color={
												p.estado === "Vigente"
													? "green"
													: p.estado.includes("gracia")
														? "amber"
														: "red"
											}
										>
											{p.estado}
										</Badge>
									</div>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-2">
									<div>
										<div className="text-[var(--text-muted)]">Vigencia</div>
										<div className="text-xs sm:text-sm">
											{formatDate(p.desde)} — {formatDate(p.hasta)}
										</div>
									</div>
									<div>
										<div className="text-[var(--text-muted)]">
											Prima mensual
										</div>
										<div className="font-medium">
											{currency(p.primaMensual)}
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="text-[var(--text-muted)]">Asegurados</div>
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
							<label
								className="text-xs text-[var(--text-body)]"
								htmlFor="registrar-reclamo-plan"
							>
								Plan
							</label>
							<Select
								id="registrar-reclamo-plan"
								value={plan}
								onChange={setPlan}
							>
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
								htmlFor="registrar-reclamo-personas"
							>
								Personas
							</label>
							<Input
								id="registrar-reclamo-personas"
								type="number"
								value={personas}
								onChange={(v) => setPersonas(Number(v))}
							/>
						</div>
						<Divider className="sm:col-span-2 lg:col-span-1" />
						<div className="flex items-center justify-between sm:col-span-2 lg:col-span-1">
							<span>Prima estimada:</span>
							<span className="text-lg font-semibold">
								{currency(primaEstimada)}
							</span>
						</div>
					</div>
				</Card>
			</div>
		</motion.div>
	);
}
