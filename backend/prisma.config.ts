import { defineConfig } from "prisma/config";
import { readDatabaseUrl } from "./src/lib/database-config.js";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
		seed: "tsx prisma/seed.ts",
	},
	datasource: {
		url: readDatabaseUrl("DATABASE_URL"),
		shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL
			? readDatabaseUrl("SHADOW_DATABASE_URL")
			: undefined,
	},
});
