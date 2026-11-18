export class BusinessRuleError extends Error {
	constructor(
		readonly status: 409 | 422,
		message: string,
	) {
		super(message);
	}
}
