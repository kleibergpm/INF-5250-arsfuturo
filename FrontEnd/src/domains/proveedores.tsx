import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Proveedor } from "../api/adapters";
import { Pagination, usePagination } from "../components/Pagination";
import { Badge, Card, Select } from "../components/ui";
export function ProveedoresTab({ proveedores }: { proveedores: Proveedor[] }) {
	const [ciudad, setCiudad] = useState("Todas");
	const [tipo, setTipo] = useState("Todos");

	const data = useMemo(() => {
		return proveedores.filter(
			(p) =>
				(ciudad === "Todas" || p.ciudad === ciudad) &&
				(tipo === "Todos" || p.tipo === tipo),
		);
	}, [proveedores, ciudad, tipo]);

	const ciudades = useMemo(
		() => [
			"Todas",
			...Array.from(new Set<string>(proveedores.map((p) => p.ciudad))),
		],
		[proveedores],
	);
	const tipos = useMemo(
		() => [
			"Todos",
			...Array.from(new Set<string>(proveedores.map((p) => p.tipo))),
		],
		[proveedores],
	);

	const { rows, pagination } = usePagination(
		data,
		JSON.stringify([ciudad, tipo]),
	);
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
		>
			<Card>
				<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 mb-3">
					<Select
						aria-label="Filtrar proveedor por ciudad"
						value={ciudad}
						onChange={setCiudad}
						className="w-full sm:w-[200px]"
					>
						{ciudades.map((c) => (
							<option key={c}>{c}</option>
						))}
					</Select>
					<Select
						aria-label="Filtrar proveedor por tipo"
						value={tipo}
						onChange={setTipo}
						className="w-full sm:w-[200px]"
					>
						{tipos.map((t) => (
							<option key={t}>{t}</option>
						))}
					</Select>
					<div className="w-full sm:w-auto sm:ml-auto text-sm text-[var(--text-body)]">
						{data.length} proveedor(es)
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{rows.map((p) => (
						<div key={p.id} className="rounded-xl border p-3">
							<div className="flex items-start justify-between mb-2">
								<div className="flex-1 min-w-0">
									<div className="font-semibold text-sm sm:text-base truncate">
										{p.nombre}
									</div>
									<div className="text-xs text-[var(--text-muted)]">
										{p.ciudad}
									</div>
								</div>
								<Badge color="slate" className="ml-2 flex-shrink-0">
									{p.tipo}
								</Badge>
							</div>
							<div className="text-sm text-[var(--text-body)]">
								{p.telefono}
							</div>
						</div>
					))}
				</div>
				<Pagination {...pagination} />
			</Card>
		</motion.div>
	);
}
