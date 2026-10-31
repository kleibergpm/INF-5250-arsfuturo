import {
	Building2,
	Coins,
	FileText,
	HeartPulse,
	Home,
	LogOut,
	Moon,
	RefreshCw,
	Stethoscope,
	Sun,
	User,
	Users,
	Wallet,
} from "lucide-react";
import type { ComponentType } from "react";
import { Badge, Button, cls } from "./ui";

type UserSummary = { nombre?: string; rol?: string } | null;
type Icon = ComponentType<{ className?: string }>;
type NavigationItem = { id: string; label: string; icon: Icon };
type Tema = "claro" | "oscuro";

type AppHeaderProps = {
	currentUser: UserSummary;
	onLogout: () => void;
	tema: Tema;
	onToggleTema: () => void;
};
export function AppHeader({
	currentUser,
	onLogout,
	tema,
	onToggleTema,
}: AppHeaderProps) {
	return (
		<header className="sticky top-0 z-40 border-b border-[var(--border-soft)]/80 bg-[var(--bg)]/85 backdrop-blur-xl">
			<div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-3 lg:px-8">
				<div className="flex min-w-0 items-center gap-3">
					<div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[var(--accent)] shadow-[0_8px_20px_var(--accent-glow)]">
						<img
							src="/logo_ars.png"
							alt="ARS Futuro"
							className="h-full w-full object-contain"
						/>
					</div>
					<div className="min-w-0">
						<div className="flex items-center gap-2">
							<h1 className="font-display truncate text-lg font-bold tracking-[-0.03em] text-[var(--text)] sm:text-xl">
								ARS Futuro
							</h1>
							<Badge color="blue">v2.0</Badge>
						</div>
						<p className="hidden truncate text-xs text-[var(--text-muted)] sm:block">
							Operaciones de salud, con claridad
						</p>
					</div>
				</div>
				<div className="flex shrink-0 items-center gap-2">
					<div className="hidden items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-veil)] px-3 py-2 sm:flex">
						<User className="h-4 w-4 text-[var(--accent)]" />
						<div className="leading-tight">
							<p className="text-sm font-semibold text-[var(--text-body)]">
								{currentUser?.nombre}
							</p>
							<p className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-faint)]">
								{currentUser?.rol}
							</p>
						</div>
					</div>
					<Button
						onClick={onToggleTema}
						variant="ghost"
						size="sm"
						aria-label={
							tema === "claro" ? "Activar tema negro" : "Activar tema blanco"
						}
						aria-pressed={tema === "oscuro"}
						title={tema === "claro" ? "Tema negro" : "Tema blanco"}
						className="flex min-h-11 w-11 items-center justify-center lg:min-h-0"
					>
						{tema === "claro" ? (
							<Moon className="h-4 w-4" />
						) : (
							<Sun className="h-4 w-4" />
						)}
					</Button>
					<Button
						onClick={onLogout}
						variant="ghost"
						size="sm"
						aria-label="Cerrar sesión"
						className="flex min-h-11 items-center gap-1.5 lg:min-h-0"
					>
						<LogOut className="h-4 w-4" />
						<span className="hidden mobile-m:inline">Salir</span>
					</Button>
				</div>
			</div>
		</header>
	);
}

type AppNavigationProps = {
	tab: string;
	setTab: (tab: string) => void;
	isAdmin: boolean;
};
export function AppNavigation({ tab, setTab, isAdmin }: AppNavigationProps) {
	const items: NavigationItem[] = [
		{ id: "dashboard", icon: Home, label: "Resumen" },
		{ id: "afiliados", icon: Users, label: "Afiliados" },
		{ id: "autoriz", icon: Stethoscope, label: "Autorizaciones" },
		{ id: "reclamos", icon: FileText, label: "Reclamos" },
		{ id: "servicios", icon: HeartPulse, label: "Servicios" },
		{ id: "proveed", icon: Building2, label: "Proveedores" },
	];
	if (isAdmin) {
		items.push(
			{ id: "polizas", icon: Wallet, label: "Pólizas" },
			{ id: "pagos", icon: Coins, label: "Pagos" },
			{ id: "facturas", icon: RefreshCw, label: "Facturación" },
		);
	}
	return (
		<nav
			aria-label="Secciones principales"
			className="mb-7 overflow-x-auto pb-1"
		>
			<div className="flex min-w-max gap-1 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-veil)] p-1 shadow-sm">
				{items.map(({ id, icon: Icon, label }) => (
					<button
						key={id}
						type="button"
						onClick={() => setTab(id)}
						aria-current={tab === id ? "page" : undefined}
						className={cls(
							"flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all",
							tab === id
								? "bg-[var(--accent)] text-[var(--accent-ink)] shadow-md shadow-[var(--accent-glow)]"
								: "text-[var(--text-nav)] hover:bg-[var(--surface-solid)] hover:text-[var(--accent)]",
						)}
					>
						<Icon className="h-4 w-4" />
						<span>{label}</span>
					</button>
				))}
			</div>
		</nav>
	);
}
