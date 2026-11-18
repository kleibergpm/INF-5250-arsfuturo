export const currency = (value: number) =>
	new Intl.NumberFormat("es-DO", { style: "currency", currency: "DOP" }).format(
		value,
	);

export const formatDate = (value: string | Date | null | undefined) =>
	value
		? new Intl.DateTimeFormat("es-DO", { timeZone: "UTC" }).format(
				new Date(value),
			)
		: "-";

const csvCell = (value: unknown) =>
	`"${String(value ?? "")
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.replace(/"/g, '""')}"`;

export function exportCsv(windowName: string, rows: unknown[][]) {
	const csv = rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
	// Excel uses this directive to open columns regardless of the system delimiter.
	const blob = new Blob([`\uFEFFsep=,\r\n${csv}`], {
		type: "text/csv;charset=utf-8;",
	});
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `Arsfuturo-${windowName}.csv`;
	link.click();
	URL.revokeObjectURL(url);
}
