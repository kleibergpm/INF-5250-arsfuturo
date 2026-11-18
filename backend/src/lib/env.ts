import { z } from "zod";
import { ConfigError } from "./config-error.js";
import "./load-env.js";

const origin = z.url({ protocol: /^https?$/ }).transform((value, context) => {
	const url = new URL(value);
	if (url.username || url.password || url.href !== `${url.origin}/`) {
		context.addIssue({ code: "custom", message: "Expected an HTTP origin" });
		return z.NEVER;
	}
	return url.origin;
});

const config = z.object({
	PORT: z
		.string()
		.regex(/^\d+$/)
		.transform(Number)
		.pipe(z.int().min(1).max(65535)),
	JWT_SECRET: z.string().refine((value) => value.trim().length > 0),
	CORS_ORIGIN: origin,
});

const result = config.safeParse({
	PORT: process.env.PORT ?? "4000",
	JWT_SECRET:
		process.env.JWT_SECRET ??
		(process.env.NODE_ENV === "test" ? "test-secret" : undefined),
	CORS_ORIGIN: process.env.CORS_ORIGIN ?? "http://localhost:5173",
});
if (!result.success) {
	throw new ConfigError(
		result.error.issues.map((issue) => String(issue.path[0])),
	);
}

export const env = Object.freeze({
	port: result.data.PORT,
	jwtSecret: result.data.JWT_SECRET,
	corsOrigin: result.data.CORS_ORIGIN,
});
