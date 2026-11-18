type Events = {
	"http.request": {
		requestId: string;
		method: string;
		status: number | null;
		durationMs: number;
	};
	"http.error": { requestId: string };
	"server.started": { port: number };
	"server.failed": { reason: "listen" | "startup" | "shutdown" };
	"config.invalid": {
		component: "server" | "seed";
		variables: readonly string[];
	};
	"seed.completed": {
		plans: number;
		providers: number;
		policies: number;
		insuredPeople: number;
	};
	"seed.failed": undefined;
};

export function log<Event extends keyof Events>(
	level: "info" | "error",
	event: Event,
	fields: Events[Event],
) {
	const entry = JSON.stringify({
		timestamp: new Date().toISOString(),
		level,
		event,
		...fields,
	});
	const stream = level === "error" ? process.stderr : process.stdout;
	stream.write(`${entry}\n`);
}
