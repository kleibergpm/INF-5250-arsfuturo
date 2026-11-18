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

export function exportCsv(filename: string, rows: unknown[][]) {
	const csv = rows
		.map((row) =>
			row
				.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`)
				.join(","),
		)
		.join("\r\n");
	// Excel uses this directive to open columns regardless of the system delimiter.
	const blob = new Blob([`\uFEFFsep=,\r\n${csv}`], {
		type: "text/csv;charset=utf-8;",
	});
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
