import { useState } from "react";
import { Button } from "./ui";

const PAGE_SIZE = 10;

export function usePagination<T>(items: T[], filterKey = "") {
	const [selection, setSelection] = useState({ filterKey, page: 1 });
	const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
	const page =
		selection.filterKey === filterKey
			? Math.min(selection.page, totalPages)
			: 1;
	if (selection.filterKey !== filterKey || selection.page !== page) {
		setSelection({ filterKey, page });
	}
	const start = (page - 1) * PAGE_SIZE;
	return {
		rows: items.slice(start, start + PAGE_SIZE),
		pagination: {
			page,
			totalPages,
			onPageChange: (next: number) => setSelection({ filterKey, page: next }),
		},
	};
}

export function Pagination({
	page,
	totalPages,
	onPageChange,
}: {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}) {
	if (totalPages <= 1) return null;
	return (
		<nav
			aria-label="Paginación de resultados"
			className="mt-3 flex flex-wrap items-center justify-end gap-2"
		>
			<Button
				size="sm"
				variant="ghost"
				onClick={() => onPageChange(page - 1)}
				disabled={page === 1}
			>
				Anterior
			</Button>
			<span aria-live="polite" className="text-sm text-[var(--text-muted)]">
				Página {page} de {totalPages}
			</span>
			<Button
				size="sm"
				variant="ghost"
				onClick={() => onPageChange(page + 1)}
				disabled={page === totalPages}
			>
				Siguiente
			</Button>
		</nav>
	);
}
