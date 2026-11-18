import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const windows = process.platform === "win32";
const root = fileURLToPath(new URL("../", import.meta.url));
const frontendPort = process.env.FRONTEND_PORT ?? "5173";
if (
	!/^\d{1,5}$/.test(frontendPort) ||
	Number(frontendPort) < 1 ||
	Number(frontendPort) > 65535
) {
	console.error("FRONTEND_PORT debe ser un puerto entre 1 y 65535.");
	process.exit(1);
}
const children = [];
let stopping = false;

function stopAll(exitCode = 0) {
	if (stopping) return;
	stopping = true;
	process.exitCode = exitCode;

	for (const child of children) {
		if (!child.pid) continue;
		if (windows) {
			if (child.exitCode === null && child.signalCode === null) {
				spawnSync("taskkill.exe", ["/pid", String(child.pid), "/t", "/f"], {
					stdio: "ignore",
					windowsHide: true,
				});
			}
		} else {
			try {
				process.kill(-child.pid, "SIGTERM");
			} catch (error) {
				if (error.code !== "ESRCH") throw error;
			}
		}
	}
}

process.on("SIGINT", () => stopAll());
process.on("SIGTERM", () => stopAll());

for (const directory of ["backend", "FrontEnd"]) {
	const args = ["-C", directory, "run", "dev"];
	if (directory === "FrontEnd") args.push("--port", frontendPort, "--strictPort");
	const child = spawn(
		windows ? process.env.ComSpec || "cmd.exe" : "pnpm",
		windows ? ["/d", "/s", "/c", `pnpm ${args.join(" ")}`] : args,
		{ cwd: root, stdio: "inherit", detached: !windows },
	);
	children.push(child);

	child.on("error", (error) => {
		console.error(`[${directory}] ${error.message}`);
		stopAll(1);
	});
	child.on("exit", (code, signal) => {
		if (stopping) return;
		console.error(`[${directory}] terminó (${code ?? signal}).`);
		stopAll(code ?? 1);
	});
}
