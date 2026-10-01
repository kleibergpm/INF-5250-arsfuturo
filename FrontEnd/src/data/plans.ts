import type { Plan } from "../api/adapters";

export function getPlanById(plans: Plan[], id: string) {
  return plans.find((plan) => plan.id === id) || { id, nombre: "Plan no disponible", cobertura: {} };
}

export function canAuthorize(plans: Plan[], afiliado: { plan?: string }, procedimiento: string) {
  const plan = getPlanById(plans, afiliado.plan || "");
  const value = procedimiento.toLowerCase();
  if (value.includes("consulta")) return plan.cobertura.consultas;
  if (value.includes("rayos") || value.includes("imagen")) return plan.cobertura.emergencias || plan.cobertura.hospitalizacion;
  if (value.includes("laborat")) return plan.cobertura.laboratorio;
  if (value.includes("odont")) return plan.cobertura.odontologia || false;
  if (value.includes("psico") || value.includes("mental")) return plan.cobertura.saludMental || false;
  return true;
}
