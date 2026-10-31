import { spawn } from "node:child_process";

const commands = [
	["backend", "pnpm -C backend dev"],
	["frontend", "pnpm -C FrontEnd dev"],
];
const children = [];
let shuttingDown = false;

function stopAll(exitCode = 0) {
	if (shuttingDown) return;
	shuttingDown = true;
	for (const child of children) {
		if (!child.killed) child.kill("SIGTERM");
	}
	setTimeout(() => process.exit(exitCode), 250);
}

for (const [name, command] of commands) {
	const executable = process.platform === "win32" ? process.env.ComSpec || "cmd.exe" : "pnpm";
	const args = process.platform === "win32" ? ["/d", "/s", "/c", command] : command.split(" ");
	const child = spawn(executable, args, {
		stdio: "inherit",
		windowsHide: false,
	});
	children.push(child);
	child.on("error", (error) => {
		console.error(`[${name}] ${error.message}`);
		stopAll(1);
	});
	child.on("exit", (code) => {
		if (!shuttingDown && code !== 0) {
			console.error(`[${name}] terminó con código ${code ?? 1}`);
			stopAll(code ?? 1);
		}
	});
}

process.on("SIGINT", () => stopAll(0));
process.on("SIGTERM", () => stopAll(0));
