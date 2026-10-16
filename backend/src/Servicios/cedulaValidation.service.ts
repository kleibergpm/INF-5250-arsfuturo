const CEDULA_VALIDATION_URL = "https://api.digital.gob.do/v3/cedulas";
const REQUEST_TIMEOUT_MS = 5_000;

export class CedulaValidationUnavailableError extends Error {
	readonly status = 503;

	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
		this.name = "CedulaValidationUnavailableError";
	}
}

export async function validateCedula(nationalId: string): Promise<boolean> {
	let response: Response;

	try {
		response = await fetch(
			`${CEDULA_VALIDATION_URL}/${encodeURIComponent(nationalId)}/validate`,
			{
				headers: { accept: "application/json" },
				signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
			},
		);
	} catch (error) {
		throw new CedulaValidationUnavailableError(
			"No fue posible consultar el servicio de validacion de cedulas",
			{ cause: error },
		);
	}

	if (!response.ok) {
		throw new CedulaValidationUnavailableError(
			`El servicio de validacion de cedulas respondio con estado ${response.status}`,
		);
	}

	let result: unknown;
	try {
		result = await response.json();
	} catch (error) {
		throw new CedulaValidationUnavailableError(
			"El servicio de validacion de cedulas devolvio una respuesta invalida",
			{ cause: error },
		);
	}

	if (
		typeof result !== "object" ||
		result === null ||
		!("valid" in result) ||
		typeof result.valid !== "boolean"
	) {
		throw new CedulaValidationUnavailableError(
			"El servicio de validacion de cedulas devolvio una respuesta invalida",
		);
	}

	return result.valid;
}
