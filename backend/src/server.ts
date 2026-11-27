import { ConfigError } from "./lib/config-error.js";
import { log } from "./lib/logger.js";

async function start() {
	const { env } = await import("./lib/env.js");
	const { default: app } = await import("./app.js");
	const { prisma } = await import("./lib/prisma.js");

	const server = app.listen(env.port);
	server.once("listening", () =>
		log("info", "server.started", { port: env.port }),
	);
	server.on("error", () => {
		log("error", "server.failed", { reason: "listen" });
		process.exitCode = 1;
	});

	const close = () => {
		server.close(async () => {
			try {
				await prisma.$disconnect();
			} catch {
				log("error", "server.failed", { reason: "shutdown" });
				process.exitCode = 1;
			}
		});
	};
	process.once("SIGINT", close);
	process.once("SIGTERM", close);
}

start().catch((error: unknown) => {
	if (error instanceof ConfigError) {
		log("error", "config.invalid", {
			component: "server",
			variables: error.variables,
		});
	} else {
		log("error", "server.failed", { reason: "startup" });
	}
	process.exitCode = 1;
});
