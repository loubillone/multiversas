// Enlaces principales de navegación (compartidos por Navbar y Footer)
export const mainLinks = [
  { label: "Inicio", to: "/" },
  { label: "Sobre mí", to: "/sobre-paula" },
  { label: "Constelaciones", to: "/constelaciones" },
  { label: "Tienda", to: "/tienda" },
  { label: "Contacto", to: "/contacto" },
];

// Servicios de constelaciones (dropdown del navbar)
export const constellationServices = [
  { label: "Sesiones individuales", to: "/constelaciones#individuales" },
  { label: "Encuentros grupales", to: "/constelaciones#grupales" },
  { label: "Counseling", to: "/constelaciones#counseling" },
  { label: "Talleres y encuentros", to: "/constelaciones#talleres" },
  { label: "Recursos gratuitos", to: "/constelaciones#recursos" },
];

// Categorías de la tienda (dropdown del navbar y columna del footer)
export const shopCategories = [
  { label: "Bolsos Materos", to: "/tienda?categoria=bolsos-materos" },
  { label: "Cocina–Comedor", to: "/tienda?categoria=cocina-comedor" },
  { label: "Baño", to: "/tienda?categoria=bano" },
  { label: "Decoración", to: "/tienda?categoria=decoracion" },
  { label: "Lonas", to: "/tienda?categoria=lonas" },
];
