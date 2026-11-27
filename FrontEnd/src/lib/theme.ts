export type Tema = "claro" | "oscuro";

export const TEMA_KEY = "arsfuturo_tema";

// Recharts no hereda los tokens del tema: hay que darle tinta, rejilla,
// series y tooltip explícitos para que no aparezcan los colores por defecto.
const GRAFICA_OSCURO = {
	eje: { fill: "#8ba3a3", fontSize: 12 },
	linea: "#203338",
	serie: "#2dd4bf",
	sectores: ["#2dd4bf", "#f87171"],
	tooltip: {
		backgroundColor: "#16272b",
		border: "1px solid #2a4247",
		borderRadius: "0.75rem",
		color: "#e8f1f0",
	},
};

export const graficaDe = (tema: Tema) =>
	tema === "oscuro" ? GRAFICA_OSCURO : null;
