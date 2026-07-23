// Formatea un número como precio en pesos argentinos (ej: 25000 → "$25.000").
export function formatPrice(value) {
  if (typeof value !== "number") return value;

  const formatted = new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0,
  }).format(value);

  return `$${formatted}`;
}
