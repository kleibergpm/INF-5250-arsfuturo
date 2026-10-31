import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { env } from "./lib/env.js";
import { swaggerSpec } from "./lib/swagger.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import routes from "./routes/index.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use((req, res, next) => {
	console.info(`${req.method} ${req.path}`);
	next();
});
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/api/docs.json", (req, res) => res.json(swaggerSpec));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);
export default app;
