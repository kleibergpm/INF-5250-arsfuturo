import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const outputFile = "CHANGELOG.md";
const categories = [
	["feat", "Nuevas funcionalidades"],
	["fix", "Correcciones"],
	["perf", "Rendimiento"],
	["refactor", "Refactorización"],
	["docs", "Documentación"],
	["test", "Pruebas"],
	["build", "Construcción"],
	["ci", "Integración continua"],
	["chore", "Mantenimiento"],
	["revert", "Reversiones"],
];

function runGit(args) {
	return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function getRepositoryUrl() {
	try {
		const remote = runGit(["config", "--get", "remote.origin.url"]);
		if (remote.startsWith("git@github.com:")) {
			return `https://github.com/${remote.slice("git@github.com:".length).replace(/\.git$/, "")}`;
		}
		return remote.replace(/\.git$/, "");
	} catch {
		return "";
	}
}

function parseCommit(line) {
	const [hash, subject] = line.split("\t");
	const match = subject.match(/^([a-z]+)(?:\(([^)]+)\))?(!)?:\s+(.+)$/i);
	if (!match) {
		return { hash, type: "other", scope: "", subject };
	}
	return {
		hash,
		type: match[1].toLowerCase(),
		scope: match[2] ?? "",
		subject: match[4],
	};
}

const commits = runGit(["log", "--no-merges", "--format=%H%x09%s"])
	.split("\n")
	.filter(Boolean)
	.map(parseCommit);
const repositoryUrl = getRepositoryUrl();
const groups = new Map(categories);
groups.set("other", "Otros cambios");

for (const commit of commits) {
	if (!groups.has(commit.type)) {
		groups.set(commit.type, `Tipo: ${commit.type}`);
	}
}

const sections = [];
for (const [type, title] of groups) {
	const entries = commits.filter((commit) => commit.type === type);
	if (entries.length === 0) continue;
	sections.push(`### ${title}`);
	sections.push(
		entries
			.map((commit) => {
				const scope = commit.scope ? `**${commit.scope}:** ` : "";
				const reference = repositoryUrl
					? ` ([${commit.hash.slice(0, 7)}](${repositoryUrl}/commit/${commit.hash}))`
					: ` (${commit.hash.slice(0, 7)})`;
				return `- ${scope}${commit.subject}${reference}`;
			})
			.join("\n"),
	);
}

const content = `# Changelog\n\nTodos los cambios relevantes del proyecto se documentan en este archivo.\n\n## Sin publicar\n\n${sections.join("\n\n")}\n`;
writeFileSync(outputFile, content, "utf8");
console.log(`Changelog generado: ${outputFile} (${commits.length} commits)`);
