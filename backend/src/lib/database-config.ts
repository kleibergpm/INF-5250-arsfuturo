import { z } from "zod";
import { ConfigError } from "./config-error.js";
import "./load-env.js";

const postgresUrl = z.url({ protocol: /^postgres(?:ql)?$/ }).refine((value) => {
	const url = new URL(value);
	return Boolean(url.hostname && url.pathname.length > 1 && !url.hash);
});

export function readDatabaseUrl(
	key: "DATABASE_URL" | "SHADOW_DATABASE_URL",
): string {
	const result = postgresUrl.safeParse(process.env[key]);
	if (!result.success) throw new ConfigError([key]);
	return result.data;
}
