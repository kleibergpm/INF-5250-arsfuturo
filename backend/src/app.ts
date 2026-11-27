import { randomUUID } from "node:crypto";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { env } from "./lib/env.js";
import { log } from "./lib/logger.js";
import { swaggerSpec } from "./lib/swagger.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import routes from "./routes/index.js";

const app = express();
app.use(helmet());
app.use((req, res, next) => {
	const requestId = randomUUID();
	const startedAt = performance.now();
	res.locals.requestId = requestId;
	res.once("close", () => {
		log("info", "http.request", {
			requestId,
			method: req.method,
			status: res.writableFinished ? res.statusCode : null,
			durationMs: Math.round(performance.now() - startedAt),
		});
	});
	next();
});
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.get("/api/docs.json", (_req, res) => res.json(swaggerSpec));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);
export default app;
