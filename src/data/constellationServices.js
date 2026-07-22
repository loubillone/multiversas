// Catálogo de propuestas de Constelaciones (servicios + recursos).
// Preparado para reutilizarse: la página general /constelaciones y, más
// adelante, una versión resumida en el Home pueden consumir estos mismos datos.
//
// Estructura de cada propuesta:
//   id, slug, type, eyebrow, title, subtitle, excerpt, image, imageAlt,
//   modality, price, meta, buttonText, path, featured
//
// - type: "service" (propuesta paga) | "resource" (recurso gratuito)
// - price / modality / meta: null cuando no corresponden (no renderizar vacíos)

// Se reutilizan las imágenes ya asignadas a cada página de detalle.
import individualImg from "../assets/img/constelaciones/constInd3.jpeg";
import groupImg from "../assets/img/constelaciones/constGrupales.jpeg";
import counselingImg from "../assets/img/constelaciones/couseling.jpg";
// Imagen coherente con la sección de Recursos Gratuitos (ya existente en los datos).
import resourcesImg from "../assets/img/recursos/tema-constelar-naturaleza.webp";

export const constellationServices = [
  {
    id: 1,
    slug: "individuales",
    type: "service",
    eyebrow: "Sesión individual",
    title: "Constelaciones Familiares Individuales",
    subtitle: "Un espacio íntimo de sanación",
    excerpt:
      "Un encuentro personal para explorar emociones, vínculos, bloqueos y situaciones que parecen repetirse en tu vida desde una nueva perspectiva.",
    image: individualImg,
    imageAlt:
      "Elementos de representación dispuestos en círculo durante una sesión individual de constelaciones familiares",
    modality: "Presencial u online",
    price: "$40.000",
    meta: null,
    buttonText: "Ver sesión",
    path: "/constelaciones/individuales",
    featured: true,
  },
  {
    id: 2,
    slug: "grupales",
    type: "service",
    eyebrow: "Encuentro grupal",
    title: "Constelaciones Familiares Grupales",
    subtitle: "Un viaje de sanación en comunidad",
    excerpt:
      "Un espacio compartido para observar dinámicas familiares, reconocer patrones y abrir nuevas posibilidades con el acompañamiento del grupo.",
    image: groupImg,
    imageAlt:
      "Grupo de personas participando de un encuentro de constelaciones familiares",
    modality: "Información a consultar",
    price: null,
    meta: "Próximas fechas y modalidad",
    buttonText: "Ver propuesta",
    path: "/constelaciones/grupales",
    featured: true,
  },
  {
    id: 3,
    slug: "counseling",
    type: "service",
    eyebrow: "Acompañamiento",
    title: "Counseling después de una constelación",
    subtitle: "Integrando el cambio en tu vida",
    excerpt:
      "Un espacio cálido y respetuoso para poner en palabras lo vivido e integrar las emociones y comprensiones que surgieron después de constelar.",
    image: counselingImg,
    imageAlt:
      "Espacio cálido de escucha y acompañamiento para integrar el proceso después de una constelación",
    modality: "Presencial u online",
    price: "$30.000",
    meta: null,
    buttonText: "Ver acompañamiento",
    path: "/constelaciones/counseling",
    featured: true,
  },
  {
    id: 4,
    slug: "recursos",
    type: "resource",
    eyebrow: "Recursos gratuitos",
    title: "Ejercicios y reflexiones",
    subtitle: "Propuestas para acompañar tu proceso",
    excerpt:
      "Ejercicios guiados y contenidos de reflexión para detenerte, observar lo que estás viviendo y conectar con nuevas formas de comprensión.",
    image: resourcesImg,
    imageAlt:
      "Mujer sentada en un campo verde, en calma y conexión con la naturaleza",
    modality: null,
    price: null,
    meta: "3 recursos disponibles",
    buttonText: "Explorar recursos",
    path: "/recursos",
    featured: true,
  },
];

// Helpers para reutilizar el catálogo (página general y, luego, Home).
export const constellationServiceItems = constellationServices.filter(
  (item) => item.type === "service",
);

export const constellationResourceItem = constellationServices.find(
  (item) => item.type === "resource",
);
