export class ConfigError extends Error {
	constructor(readonly variables: readonly string[]) {
		super(`Configuración inválida: ${variables.join(", ")}`);
	}
}
