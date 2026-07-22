// Recursos gratuitos.
// Para agregar un nuevo recurso, sumá un objeto a este array con la misma
// estructura (id, slug, title, subtitle, excerpt, image, category, readingTime).
import loQueRechazamosImg from "../assets/img/recursos/rechazo-introspeccion.webp";
import descubriTemaImg from "../assets/img/recursos/tema-constelar-naturaleza.webp";
import emprendimientoImg from "../assets/img/recursos/emprendimiento-raices.webp";

export const resources = [
  {
    id: 1,
    slug: "lo-que-rechazamos",
    title: "Lo que rechazamos en otros crece en nosotros",
    subtitle:
      "Un ejercicio para reconocer, escuchar e integrar aquello que hoy genera rechazo.",
    excerpt:
      "Aceptar no significa justificar, sino reconocer lo que existe y observar qué puede estar mostrándonos sobre nuestra propia historia.",
    image: loQueRechazamosImg,
    category: "Ejercicio de reflexión",
    readingTime: "5 min",
  },
  {
    id: 2,
    slug: "descubri-que-tema-constelar",
    title: "Descubrí qué tema constelar",
    subtitle:
      "Un ejercicio para escuchar lo que hoy necesita ser mirado con más claridad.",
    excerpt:
      "Una propuesta simple para conectar con tu sistema familiar y reconocer qué situación, vínculo o emoción puede necesitar atención en este momento.",
    image: descubriTemaImg,
    category: "Ejercicio guiado",
    readingTime: "6 min",
  },
  {
    id: 3,
    slug: "fortalece-tu-emprendimiento",
    title: "Fortalecé tu emprendimiento desde tus raíces",
    subtitle:
      "Una guía de ejercicios prácticos para emprendedoras que desean avanzar con más fuerza, claridad y confianza.",
    excerpt:
      "Una propuesta para explorar vínculos, creencias y bloqueos que pueden influir en tu emprendimiento, conectando con la fuerza de tus raíces familiares.",
    image: emprendimientoImg,
    category: "Guía práctica",
    readingTime: "8 min",
  },
];

// Helper para buscar un recurso por su slug
export const getResourceBySlug = (slug) =>
  resources.find((resource) => resource.slug === slug);
