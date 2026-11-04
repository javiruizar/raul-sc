// Nombres legibles de los tipos de servicio del formulario de presupuesto (ServiceTypeStep).
// Se usan en el resumen del formulario y en los emails.
export const budgetServiceNames: Record<string, string> = {
  "reformas-integrales": "Reformas Integrales",
  "restauracion": "Restauración de Casas Antiguas",
  "albanileria": "Albañilería General",
  "banos-cocinas": "Baños y Cocinas",
  "fachadas-tejados": "Fachadas y Tejados",
  "trabajos-piedra": "Trabajos en Piedra",
  "otro": "Otro",
};

export function getBudgetServiceName(id: string): string {
  return budgetServiceNames[id] ?? id;
}
