import { AnimatePresence, motion } from "framer-motion";
import { Bell, CheckCircle2, X, XCircle } from "lucide-react";
import {
	type ButtonHTMLAttributes,
	type InputHTMLAttributes,
	type ReactNode,
	type SelectHTMLAttributes,
	useId,
	useLayoutEffect,
	useRef,
} from "react";

export const cls = (...values: Array<string | false | null | undefined>) =>
	values.filter(Boolean).join(" ");

type CardProps = { className?: string; children: ReactNode };
export const Card = ({ className = "", children }: CardProps) => (
	<section className={cls("app-surface rounded-[1.35rem] p-5", className)}>
		{children}
	</section>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "ghost" | "success" | "danger" | "warning";
	size?: "sm" | "md" | "lg";
};
export const Button = ({
	children,
	onClick,
	variant = "primary",
	size = "md",
	className = "",
	disabled = false,
	type = "button",
	...rest
}: ButtonProps) => {
	const variants = {
		primary:
			"bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-ink)] shadow-[0_8px_18px_var(--accent-glow)]",
		ghost:
			"bg-[var(--surface-veil)] hover:bg-[var(--surface-solid)] text-[var(--text-body)] border border-[var(--border)]",
		success:
			"bg-[var(--ok)] hover:bg-[var(--ok-hover)] text-[var(--accent-ink)]",
		danger:
			"bg-[var(--danger)] hover:bg-[var(--danger-hover)] text-[var(--accent-ink)]",
		warning:
			"bg-[var(--warn)] hover:bg-[var(--warn-hover)] text-[var(--accent-ink)]",
	};
	const sizes = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2.5",
		lg: "px-5 py-3 text-lg",
	};
	return (
		<button
			{...rest}
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={cls(
				"rounded-xl font-semibold transition-all duration-200 cursor-pointer active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-soft)]",
				variants[variant],
				sizes[size],
				disabled && "opacity-60 cursor-not-allowed",
				className,
			)}
		>
			{children}
		</button>
	);
};

export type Notification = {
	id: number;
	message: string;
	type?: string;
	title?: string;
};
export function NotificationContainer({
	notifications,
	onRemove,
}: {
	notifications: Notification[];
	onRemove: (id: number) => void;
}) {
	return (
		<div className="fixed top-4 right-4 left-4 z-50 space-y-2 sm:left-auto max-w-sm">
			<AnimatePresence>
				{notifications.map((notification) => (
					<NotificationCard
						key={notification.id}
						notification={notification}
						onRemove={onRemove}
					/>
				))}
			</AnimatePresence>
		</div>
	);
}
function NotificationCard({
	notification,
	onRemove,
}: {
	notification: Notification;
	onRemove: (id: number) => void;
}) {
	const { id, message, type, title } = notification;
	const icon =
		type === "success" ? (
			<CheckCircle2 className="w-5 h-5 text-[var(--tone-notif-ok-ink)]" />
		) : type === "error" ? (
			<XCircle className="w-5 h-5 text-[var(--tone-notif-error-ink)]" />
		) : (
			<Bell className="w-5 h-5 text-[var(--tone-notif-info-ink)]" />
		);
	const background =
		type === "success"
			? "tone-notif-ok"
			: type === "error"
				? "tone-notif-error"
				: "tone-notif-info";
	return (
		<motion.div
			initial={{ opacity: 0, x: 24 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 24 }}
			transition={{ duration: 0.22, ease: "easeOut" }}
			className={`${background} border rounded-2xl p-4 shadow-lg backdrop-blur-sm`}
		>
			<div className="flex items-start gap-3">
				<div className="flex-shrink-0 mt-0.5">{icon}</div>
				<div
					className="flex-1 min-w-0"
					role={type === "error" ? "alert" : "status"}
				>
					{title && (
						<p className="text-sm font-semibold text-[var(--text)] mb-1">
							{title}
						</p>
					)}
					<p className="text-sm text-[var(--text-body)] leading-relaxed">
						{message}
					</p>
				</div>
				<button
					type="button"
					aria-label="Cerrar notificación"
					onClick={() => onRemove(id)}
					className="flex-shrink-0 ml-2 text-[var(--text-faint)] hover:text-[var(--text-body)] transition-colors"
				>
					<X className="w-4 h-4" />
				</button>
			</div>
		</motion.div>
	);
}

export const Badge = ({
	children,
	color = "slate",
	className = "",
}: {
	children: ReactNode;
	color?: "green" | "red" | "amber" | "blue" | "slate";
	className?: string;
}) => (
	<span
		className={cls(
			"px-2 py-0.5 rounded-full text-xs font-medium border",
			color === "green" && "tone-ok",
			color === "red" && "tone-error",
			color === "amber" && "tone-warn",
			color === "blue" && "tone-info",
			color === "slate" && "tone-neutral",
			className,
		)}
	>
		{children}
	</span>
);

type ValueInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"onChange"
> & { onChange?: (value: string) => void };
export const Input = ({
	value,
	onChange,
	placeholder = "",
	type = "text",
	className = "",
	...rest
}: ValueInputProps) => (
	<input
		{...rest}
		type={type}
		value={value}
		onChange={(event) => onChange?.(event.target.value)}
		placeholder={placeholder}
		className={cls(
			"w-full rounded-xl border border-[var(--border)] bg-[var(--surface-solid)]/70 px-3 py-2.5 text-[var(--text-body)] placeholder:text-[var(--text-placeholder)] outline-none transition focus:border-[var(--accent-soft)] focus:ring-2 focus:ring-[var(--accent-soft)]/20",
			className,
		)}
	/>
);
type ValueSelectProps = Omit<
	SelectHTMLAttributes<HTMLSelectElement>,
	"onChange"
> & { onChange?: (value: string) => void };
export const Select = ({
	value,
	onChange,
	children,
	className = "",
	...rest
}: ValueSelectProps) => (
	<select
		{...rest}
		value={value}
		onChange={(event) => onChange?.(event.target.value)}
		className={cls(
			"w-full rounded-xl border border-[var(--border)] bg-[var(--surface-solid)]/70 px-3 py-2.5 text-[var(--text-body)] outline-none transition focus:border-[var(--accent-soft)] focus:ring-2 focus:ring-[var(--accent-soft)]/20",
			className,
		)}
	>
		{children}
	</select>
);
export const Divider = ({ className = "" }: { className?: string }) => (
	<div className={cls("h-px w-full bg-[var(--border-soft)]", className)} />
);

export const ModalActions = ({ children }: { children: ReactNode }) => (
	<footer className="sticky bottom-0 mt-3 flex flex-wrap justify-end gap-3 border-t border-[var(--border-soft)] bg-[var(--surface-solid)] py-2">
		{children}
	</footer>
);

export function Modal({
	open,
	onClose,
	title,
	children,
}: {
	open: boolean;
	onClose: () => void;
	title: ReactNode;
	children: ReactNode;
}) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const titleId = useId();

	useLayoutEffect(() => {
		const dialog = dialogRef.current;
		if (!open || !dialog) return;
		const trigger = document.activeElement;
		dialog.showModal();
		titleRef.current?.focus();
		return () => {
			dialog.close();
			if (trigger instanceof HTMLElement && trigger.isConnected)
				trigger.focus();
		};
	}, [open]);

	if (!open) return null;
	return (
		<dialog
			ref={dialogRef}
			aria-labelledby={titleId}
			onCancel={(event) => {
				event.preventDefault();
				onClose();
			}}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
			onKeyDown={(event) => {
				if (event.key !== "Tab") return;
				const controls = Array.from(
					event.currentTarget.querySelectorAll<HTMLElement>(
						"button, input, select, textarea, a[href], [tabindex]",
					),
				).filter(
					(control) =>
						control.tabIndex >= 0 &&
						!control.matches(":disabled") &&
						control.getClientRects().length > 0,
				);
				const first = controls[0];
				const last = controls.at(-1);
				const active = document.activeElement;
				if (
					event.shiftKey &&
					(active === first || active === titleRef.current)
				) {
					event.preventDefault();
					last?.focus();
				} else if (!event.shiftKey && active === last) {
					event.preventDefault();
					first?.focus();
				}
			}}
			className="m-auto max-h-[90dvh] w-[calc(100%_-_1rem)] max-w-2xl overflow-y-auto scroll-pb-20 rounded-[1.35rem] bg-[var(--surface-solid)] p-0 text-[var(--text-body)] shadow-2xl backdrop:bg-[var(--overlay)] backdrop:backdrop-blur-[1px] sm:w-[calc(100%_-_2rem)]"
		>
			<div className="p-3 sm:p-5">
				<div className="flex items-center justify-between gap-2 sm:gap-4">
					<h3
						ref={titleRef}
						id={titleId}
						tabIndex={-1}
						className="text-base font-semibold sm:text-lg"
					>
						{title}
					</h3>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						aria-label="Cerrar ventana"
						onClick={onClose}
					>
						<XCircle aria-hidden="true" className="h-5 w-5" />
					</Button>
				</div>
				<div className="mt-3">{children}</div>
			</div>
		</dialog>
	);
}
