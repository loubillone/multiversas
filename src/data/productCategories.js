// Categorías de la tienda de Multiversas.
// Reutilizables por la página de Tienda, los filtros y el Navbar/Footer.
import { FiShoppingBag, FiCoffee, FiDroplet, FiHome, FiImage } from "react-icons/fi";

export const productCategories = [
  {
    id: 1,
    name: "Bolsos materos",
    slug: "bolsos-materos",
    description:
      "Bolsos pensados para llevar el mate y acompañar tus encuentros.",
    icon: FiShoppingBag,
  },
  {
    id: 2,
    name: "Cocina–Comedor",
    slug: "cocina-comedor",
    description:
      "Piezas textiles y objetos para dar calidez a la mesa y la cocina.",
    icon: FiCoffee,
  },
  {
    id: 3,
    name: "Baño",
    slug: "bano",
    description: "Objetos y textiles para renovar el espacio del baño.",
    icon: FiDroplet,
  },
  {
    id: 4,
    name: "Decoración",
    slug: "decoracion",
    description: "Detalles para sumar color y sentido a cada ambiente.",
    icon: FiHome,
  },
  {
    id: 5,
    name: "Lonas",
    slug: "lonas",
    description: "Lonas ilustradas para vestir y transformar tus paredes.",
    icon: FiImage,
  },
];

// Helper para obtener una categoría por su slug.
export const getCategoryBySlug = (slug) =>
  productCategories.find((category) => category.slug === slug);
