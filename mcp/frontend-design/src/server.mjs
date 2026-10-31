import { readFileSync } from "node:fs";
import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

const guidePath = new URL("../../../DESIGN.md", import.meta.url);
const architecturePath = new URL("../../../ARCHITECTURE.md", import.meta.url);
const conventionsPath = new URL("../../../CODING_CONVENTIONS.md", import.meta.url);
const rulesPath = new URL("../../../RULES.md", import.meta.url);

function readGuide(path) {
	return readFileSync(path, "utf8");
}

function textResult(text) {
	return { content: [{ type: "text", text }] };
}

const server = new McpServer({
	name: "arsfuturo-frontend-design",
	version: "0.1.0",
});

server.registerTool(
	"get_design_guidelines",
	{
		description: "Devuelve las reglas visuales y de UX para diseñar el FrontEnd de ARS Futuro.",
		inputSchema: z.object({
			section: z
				.enum(["all", "principles", "identity", "layout", "components", "data", "ai", "validation"])
				.default("all")
				.describe("Sección de la guía que se necesita"),
		}),
	},
	async ({ section }) => {
		const guide = readGuide(guidePath);
		if (section === "all") return textResult(guide);

		const headings = {
			principles: "## Principios visuales",
			identity: "## Identidad existente",
			layout: "## Layout y jerarquía",
			components: "## Componentes y controles",
			data: "## Tablas, formularios y datos",
			ai: "## IA en la interfaz",
			validation: "## Reglas para agentes de IA",
		};
		const start = guide.indexOf(headings[section]);
		if (start < 0) return textResult(`No se encontró la sección: ${section}`);
		const nextHeading = guide.indexOf("\n## ", start + headings[section].length);
		return textResult(guide.slice(start, nextHeading < 0 ? guide.length : nextHeading));
	},
);

server.registerTool(
	"get_project_context",
	{
		description: "Devuelve el contexto arquitectónico y las reglas de código relevantes para una tarea de frontend.",
		inputSchema: z.object({
			includeArchitecture: z.boolean().default(true),
			includeConventions: z.boolean().default(true),
			includeRules: z.boolean().default(true),
		}),
	},
	async ({ includeArchitecture, includeConventions, includeRules }) => {
		const documents = [];
		if (includeArchitecture) documents.push(`# ARCHITECTURE.md\n${readGuide(architecturePath)}`);
		if (includeConventions) documents.push(`# CODING_CONVENTIONS.md\n${readGuide(conventionsPath)}`);
		if (includeRules) documents.push(`# RULES.md\n${readGuide(rulesPath)}`);
		return textResult(documents.join("\n\n"));
	},
);

server.registerTool(
	"review_frontend_proposal",
	{
		description: "Revisa una propuesta de interfaz contra las reglas del proyecto y devuelve observaciones accionables.",
		inputSchema: z.object({
			proposal: z.string().min(20).describe("Descripción de la vista, componente o flujo propuesto"),
		}),
	},
	async ({ proposal }) => {
		const checks = [
			{
				name: "API segura",
				pass: !/(api[_ -]?key|secret|password|token|openai|anthropic)/i.test(proposal),
				advice: "Las claves y llamadas a proveedores deben permanecer en el backend.",
			},
			{
				name: "Estados de interfaz",
				pass: /(carga|loading|vac[ií]o|empty|error|éxito|success)/i.test(proposal),
				advice: "Incluye estados de carga, vacío, error y éxito.",
			},
			{
				name: "Revisión humana",
				pass: !/(auto.?aprobar|auto.?rechazar|autom[aá]tico.*pago|sin confirmaci[oó]n)/i.test(proposal),
				advice: "Las decisiones sobre autorizaciones, reclamos, pagos y pólizas requieren confirmación humana.",
			},
			{
				name: "Responsive y accesibilidad",
				pass: /(m[oó]vil|responsive|teclado|accesib|aria|contraste)/i.test(proposal),
				advice: "Especifica comportamiento móvil, foco, teclado, etiquetas y contraste.",
			},
			{
				name: "Componentes existentes",
				pass: /(Button|Card|Badge|Input|Select|Modal|Lucide|ui\.tsx)/i.test(proposal),
				advice: "Revisa y reutiliza los componentes de FrontEnd/src/components/ui.tsx.",
			},
		];
		const passed = checks.filter((check) => check.pass).length;
		const result = checks
			.map((check) => `${check.pass ? "OK" : "REVISAR"} - ${check.name}${check.pass ? "" : `: ${check.advice}`}`)
			.join("\n");
		return textResult(`Resultado: ${passed}/${checks.length} comprobaciones superadas.\n\n${result}`);
	},
);

const transport = new StdioServerTransport();
await server.connect(transport);
