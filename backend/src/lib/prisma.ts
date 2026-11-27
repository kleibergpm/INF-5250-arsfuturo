import { PrismaPg } from "@prisma/adapter-pg";
import { readDatabaseUrl } from "./database-config.js";
import { PrismaClient } from "./generated/client/index.js";

const adapter = new PrismaPg({
	connectionString: readDatabaseUrl("DATABASE_URL"),
});
export const prisma = new PrismaClient({ adapter });
