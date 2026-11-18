import { isAxiosError } from "axios";

const fieldMessages: Record<string, string> = {
	name: "Escribe un nombre de al menos dos caracteres.",
	nationalId: "Escribe una cédula de 11 dígitos. Puedes incluir guiones.",
	planId: "Selecciona un plan disponible.",
	policyId: "Selecciona una póliza válida.",
	startDate: "Revisa la fecha de inicio.",
	birthDate: "Revisa la fecha de nacimiento.",
	email: "Escribe un correo válido o deja el campo vacío.",
	dependents: "Indica un número entero de dependientes igual o mayor que cero.",
	username: "Revisa el nombre de usuario.",
	password: "Escribe una contraseña de 6 a 72 caracteres.",
};

export function registrationFeedback(error: unknown, fallback: string) {
	if (
		!isAxiosError<{
			error?: string;
			message?: string;
			details?: { fieldErrors?: Record<string, string[]> };
		}>(error)
	)
		return fallback;

	const data = error.response?.data;
	if (data?.error === "INVALID_CEDULA")
		return "La cédula no es válida. Verifica el número e inténtalo de nuevo.";
	if (data?.error === "VALIDATION_ERROR") {
		const messages = Object.keys(data.details?.fieldErrors ?? {})
			.map((field) => fieldMessages[field])
			.filter(Boolean);
		if (messages.length) return messages.join(" ");
	}
	return data?.message || fallback;
}
