// Datos centrales de los productos de la tienda de Multiversas.
//
// Estructura preparada para cada producto:
//   id             → identificador único
//   slug           → identificador para la URL (/producto/:slug)
//   name           → nombre del producto
//   shortDescription → descripción breve para la card
//   tagline        → título breve de la página de detalle
//   description    → párrafo(s) de la descripción (string o array de strings)
//   features       → lista de características (strings)
//   note           → aclaración informativa opcional (string)
//   preparation    → aviso de tiempo de preparación opcional (string)
//   closing        → frase final
//   price          → precio del producto (número)
//   category       → slug de la categoría (ver productCategories.js)
//   images         → array de imágenes importadas (assets/img/multiversas)
//   featured       → true si es un producto destacado
//   stock          → cantidad disponible (referencial, sin control real todavía)
//   available      → true/false si está disponible para la venta
//   variants       → array de variantes (color, tamaño, etc.) o []
//
// Agregar aquí los productos reales de Multiversas a medida que se definan.

import bolsoMateroHamsaImg from "../assets/img/multiversas/bolsoMateroEstelar.png";
import bolsoMateroLunaresImg from "../assets/img/multiversas/bolsoMateroLunares.jpg";
import bolsoMateroUniversoImg from "../assets/img/multiversas/bolsoMateroUniverso.jpg";
import mantelRectCosmosImg from "../assets/img/multiversas/mantelRectCosmos.webp";
import mantelRectCalmaImg from "../assets/img/multiversas/mantelRectCalma.webp";
import mantelRedBotanicaImg from "../assets/img/multiversas/mantelRedBotanica.png";
import mantelRedCosmosImg from "../assets/img/multiversas/mantelRedCosmos.jpg";
import cortinaBanoCorazonImg from "../assets/img/multiversas/cortinaBañoCorazon.webp";
import cortinaBanoCosmosImg from "../assets/img/multiversas/cortinaBañoCosmos.webp";
import cuencosCeramicaImg from "../assets/img/multiversas/cuencosCeramica.webp";
import lamparaLedLunaImg from "../assets/img/multiversas/lamparaLedLuna.jpg";
import lonaAbundanciaImg from "../assets/img/multiversas/lonaAbundancia.jpg";
import lonaUniversoImg from "../assets/img/multiversas/lonaUniverso.webp";

export const products = [
  {
    id: 1,
    slug: "bolso-matero-hamsa",
    name: "Bolso Matero “Hamsa”",
    category: "bolsos-materos",
    shortDescription:
      "Un bolso matero impermeable, práctico y original, inspirado en la Mano de Fátima y las constelaciones.",
    tagline: "Llevá tus momentos de mate con energía, protección y estilo.",
    description:
      "El bolso matero “Hamsa” combina practicidad con un diseño inspirado en la Mano de Fátima y las constelaciones. Es ideal para acompañarte en salidas, viajes o encuentros, manteniendo todos tus accesorios organizados y protegidos.",
    features: [
      "Tela impermeable: protege el interior frente a derrames y humedad.",
      "Medidas prácticas: 30 × 43 cm cerrado, con espacio para termos grandes, incluso modelos tipo Stanley.",
      "Bolsillo interno: ideal para guardar yerba, bombilla y otros accesorios.",
      "Cordón ajustable: permite cerrarlo y transportarlo de forma cómoda y segura.",
      "Diseño Hamsa: una propuesta visual inspirada en la protección, el equilibrio y la conexión con el universo.",
    ],
    closing:
      "Un bolso funcional y original para convertir cada momento de mate en algo especial.",
    price: 25000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [bolsoMateroHamsaImg],
  },
  {
    id: 2,
    slug: "bolso-matero-fases-lunares",
    name: "Bolso Matero “Fases Lunares”",
    category: "bolsos-materos",
    shortDescription:
      "Un bolso matero impermeable inspirado en las fases de la luna y en la conexión con los ciclos naturales.",
    tagline: "Cada fase tiene su magia… igual que vos.",
    description: [
      "El bolso matero “Fases Lunares” está inspirado en los ciclos de la luna y en los distintos momentos que atravesamos: los de expansión, los de calma y aquellos en los que necesitamos recargar energía.",
      "Es una propuesta práctica y original para acompañarte en salidas, viajes y encuentros, manteniendo todos tus accesorios organizados y protegidos.",
    ],
    features: [
      "Tela impermeable: protege el interior frente a derrames y humedad.",
      "Medidas prácticas: 30 × 43 cm cerrado, con espacio para termos grandes, incluso modelos tipo Stanley.",
      "Bolsillo interno: ideal para guardar yerba, bombilla y otros elementos esenciales.",
      "Cordón ajustable: permite cerrarlo y transportarlo de forma cómoda y segura.",
      "Diseño de fases lunares: inspirado en la conexión con los ciclos naturales, la transformación y la renovación.",
    ],
    closing:
      "Un bolso pensado para acompañarte en cada etapa y hacer especial cada momento de mate.",
    price: 25000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [bolsoMateroLunaresImg],
  },
  {
    id: 3,
    slug: "bolso-matero-universo",
    name: "Bolso Matero “Universo”",
    category: "bolsos-materos",
    shortDescription:
      "Un bolso matero práctico, liviano y resistente, inspirado en la energía, el equilibrio y la magia del universo.",
    tagline: "Porque tomar mate también puede ser un ritual",
    description: [
      "El bolso matero “Universo” acompaña tus momentos de pausa y te recuerda que la magia también puede encontrarse en lo cotidiano.",
      "Práctico, liviano y resistente, es ideal para llevar el mate, el termo y todo lo que necesitás de manera cómoda, organizada y con mucho estilo.",
      "Su diseño vibrante, inspirado en el universo, invita a conectar con la confianza, la gratitud y la energía positiva en cada salida.",
    ],
    features: [
      "Medidas prácticas: 30 × 43 cm cerrado, ideal para termos grandes, incluso modelos tipo Stanley.",
      "Bolsillo interno: espacio adicional para yerba, bombilla y otros elementos esenciales.",
      "Cordón ajustable: permite cerrarlo y transportarlo de manera cómoda y segura.",
      "Diseño Universo: inspirado en la protección, el equilibrio y la conexión con la energía del universo.",
      "Estructura liviana y resistente: pensada para acompañarte todos los días.",
    ],
    closing:
      "Un bolso funcional y lleno de color para hacer de cada mate un momento especial.",
    price: 25000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [bolsoMateroUniversoImg],
  },
  {
    id: 4,
    slug: "mantel-rectangular-cosmos",
    name: "Mantel Rectangular “Cosmos”",
    category: "cocina-comedor",
    shortDescription:
      "Un mantel rectangular inspirado en el cielo nocturno, las estrellas y los ciclos del universo.",
    tagline:
      "Una mesa inspirada en el cielo, las estrellas y la magia del universo.",
    description: [
      "El mantel rectangular “Cosmos” presenta un diseño inspirado en el cielo nocturno, las estrellas y los ciclos del universo.",
      "Su estampa transforma la mesa en un espacio original y lleno de personalidad, ideal para acompañar comidas cotidianas, reuniones y encuentros especiales.",
      "Además de aportar color y una estética diferente, está confeccionado con una tela resistente y fácil de cuidar.",
    ],
    features: [
      "Tela de poliéster resistente y fácil de limpiar.",
      "Estampado de alta calidad.",
      "Apto para lavado en lavarropas.",
      "Ideal para el comedor, la cocina o encuentros especiales.",
      "Diseño Cosmos inspirado en el cielo nocturno, las estrellas y los ciclos del universo.",
    ],
    note: "Los colores del estampado pueden variar levemente según la configuración de la pantalla desde la que se visualice el producto.",
    closing:
      "Una pieza creada para llenar la mesa de color, energía y momentos compartidos.",
    price: 41000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [mantelRectCosmosImg],
  },
  {
    id: 5,
    slug: "mantel-rectangular-calma",
    name: "Mantel Rectangular “Calma”",
    category: "cocina-comedor",
    shortDescription:
      "Un mantel rectangular inspirado en el corazón, las flores y la calidez de los encuentros cotidianos.",
    tagline: "Un diseño para vestir la mesa con amor, armonía y color.",
    description: [
      "El mantel rectangular “Calma” está inspirado en el corazón como símbolo de amor, conexión y calidez.",
      "Las flores que rodean el diseño aportan color, armonía y una sensación de serenidad, creando un ambiente especial para compartir cada día.",
      "Es una pieza pensada para transformar la mesa y acompañar comidas, reuniones y encuentros cotidianos con una estética cálida y original.",
    ],
    features: [
      "Tela de poliéster resistente y de fácil cuidado.",
      "Estampado de alta calidad.",
      "Ideal para el comedor, la cocina o encuentros especiales.",
      "Apto para lavarropas.",
    ],
    note: "Los colores del estampado pueden variar levemente según la configuración de la pantalla desde la que se visualice el producto.",
    closing:
      "Una pieza creada para llenar la mesa de color, calma y momentos compartidos.",
    price: 35000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [mantelRectCalmaImg],
  },
  {
    id: 6,
    slug: "mantel-redondo-botanica",
    name: "Mantel Redondo “Botánica”",
    category: "cocina-comedor",
    shortDescription:
      "Un mantel redondo de inspiración botánica, ideal para sumar frescura, armonía y calidez a la mesa.",
    tagline: "Un toque natural para tu mesa",
    description: [
      "Dale a tu mesa un estilo único y fresco con el mantel redondo “Botánica”, diseñado para quienes disfrutan de la naturaleza, la calma y la simplicidad.",
      "Su diseño botánico, de líneas finas y modernas, combina delicadeza y versatilidad para crear un espacio acogedor, armónico y lleno de personalidad.",
      "Es una pieza ideal para transformar la mesa en un rincón especial, tanto en los momentos cotidianos como en reuniones y encuentros.",
      "Perfecto para tus momentos cotidianos o reuniones especiales, este mantel transforma cualquier espacio en un rincón acogedor y lleno de energía positiva.",
    ],
    features: [
      "Tela de poliéster lavable: resistente y fácil de mantener.",
      "Estampado full color: detalles que resaltan con elegancia y estilo.",
      "Medida ideal: 140 cm de diámetro, perfecta para mesas redondas.",
      "Diseño botánico: una propuesta fresca, serena y versátil para distintos espacios.",
    ],
    closing:
      "Una pieza pensada para vestir la mesa con naturalidad, frescura y armonía.",
    price: 35000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [mantelRedBotanicaImg],
  },
  {
    id: 7,
    slug: "mantel-redondo-cosmos-y-luna",
    name: "Mantel Redondo “Cosmos y Luna”",
    category: "cocina-comedor",
    shortDescription:
      "Un mantel redondo inspirado en la energía del sol y la luna, ideal para llenar la mesa de color, magia y buena vibra.",
    tagline: "Energía que ilumina cada encuentro",
    description: [
      "Dejá que la magia del sol y la luna acompañe tus momentos con el mantel redondo “Cosmos y Luna”.",
      "Su diseño transforma cualquier mesa en un espacio de energía, color y buena vibra, ideal para compartir encuentros cotidianos o momentos especiales.",
      "Es una pieza versátil y llamativa, pensada para sumar personalidad y calidez tanto en interiores como en salidas al aire libre.",
    ],
    features: [
      "Tela de poliéster resistente y fácil de lavar.",
      "Diseño full color: colores vibrantes y detalles que capturan la magia del universo.",
      "Medida: 140 cm de diámetro, ideal para mesas redondas y lonitas para picnic.",
      "Diseño inspirado en el sol, la luna y la energía del universo.",
    ],
    closing:
      "Una pieza pensada para llenar cada encuentro de color, energía y magia cotidiana.",
    price: 35000,
    stock: 10,
    available: true,
    featured: true,
    variants: [],
    images: [mantelRedCosmosImg],
  },
  {
    id: 8,
    slug: "cortina-bano-corazon",
    name: "Cortina de Baño “Corazón”",
    category: "bano",
    shortDescription:
      "Una cortina de baño que combina amor, energía y protección a través del rosa, los corazones y el fuego.",
    tagline: "Amor, energía y protección para transformar tu espacio",
    description: [
      "La cortina de baño “Corazón” combina la suavidad del rosa con la fuerza del fuego y la presencia de los corazones, creando un equilibrio entre amor, energía y protección.",
      "El rosa invita a la calma, al cuidado y al amor propio.",
      "Los corazones representan conexión, apertura y sensibilidad.",
      "El fuego recuerda la energía vital, la transformación y la fuerza interna.",
    ],
    features: [
      "Tela de poliéster lavable.",
      "Medidas: 175 × 175 cm.",
      "No incluye ganchos.",
      "No incluye protector plástico.",
    ],
    preparation:
      "Este producto puede requerir hasta 7 días hábiles para su preparación.",
    closing:
      "Una pieza pensada para llenar el baño de color, simbolismo y energía.",
    price: 35000,
    stock: 2,
    available: true,
    featured: true,
    variants: [],
    images: [cortinaBanoCorazonImg],
  },
  {
    id: 9,
    slug: "cortina-bano-cosmos-a-mi-favor",
    name: "Cortina de Baño “Cosmos a mi favor”",
    category: "bano",
    shortDescription:
      "Una cortina de baño inspirada en la luna, el sol, las estrellas y los ciclos del universo.",
    tagline:
      "Un diseño para conectar con la intuición y la energía del universo",
    description: [
      "La cortina de baño “Cosmos a mi favor” está inspirada en los ciclos del universo, la luna, el sol y las estrellas.",
      "Fue diseñada para quienes disfrutan de los espacios con significado y buscan incorporar detalles que transmitan calma, conexión y energía.",
      "Su fondo azul profundo invita a bajar el ritmo, conectar con la intuición y recordar que siempre podemos encontrar una guía en nuestros propios ciclos.",
    ],
    features: [
      "Confeccionada en poliéster resistente y de excelente calidad.",
      "Lavable en lavarropas.",
      "Secado rápido.",
      "Liviana, práctica y duradera.",
      "Colores vibrantes pensados para acompañar el uso diario.",
      "Diseño inspirado en la luna, el sol, las estrellas y los ciclos del universo.",
    ],
    note: "Los colores pueden variar levemente según la configuración de la pantalla desde la que se visualice el producto.",
    closing:
      "Una pieza pensada para transformar el baño en un espacio de calma, color y conexión.",
    price: 35000,
    stock: 3,
    available: true,
    featured: true,
    variants: [],
    images: [cortinaBanoCosmosImg],
  },
  {
    id: 10,
    slug: "set-cuencos-ceramica",
    name: "Set de Cuencos de Cerámica",
    category: "decoracion",
    shortDescription:
      "Un set de piezas artesanales, versátiles y elegantes, pensado para decorar y sumar calidez a distintos espacios.",
    tagline:
      "Piezas artesanales que combinan versatilidad, belleza y funcionalidad",
    description: [
      "Este set de cuencos de cerámica reúne piezas prácticas y decorativas, hechas a mano y pensadas para acompañar distintos espacios del hogar.",
      "Cada pieza refleja un trabajo artesanal único, combinando detalles tradicionales con una estética moderna, cálida y versátil.",
      "Además de ser funcionales, los cuencos aportan personalidad y armonía, tanto al momento de servir como al decorar rincones especiales.",
    ],
    features: [
      "Aptos para horno, ideales para cocinar y servir.",
      "Piezas realizadas de manera artesanal.",
      "Cada cuenco puede presentar detalles únicos propios del trabajo hecho a mano.",
      "Diseño versátil para utilizar como pieza funcional o decorativa.",
      "Combinan elegancia, calidez y practicidad.",
    ],
    closing:
      "Un set pensado para transformar los espacios cotidianos con diseño, funcionalidad y el encanto de lo artesanal.",
    price: 60000,
    stock: 3,
    available: true,
    featured: true,
    variants: [],
    images: [cuencosCeramicaImg],
  },
  {
    id: 11,
    slug: "lampara-led-luna-menguante",
    name: "Lámpara LED “Luna Menguante”",
    category: "decoracion",
    shortDescription:
      "Una lámpara LED recargable, con tres tonos de luz y un diseño inspirado en la luna menguante.",
    tagline: "Elegancia y energía para iluminar tu espacio",
    description: [
      "Iluminá tus momentos con la magia de la luna. La lámpara LED “Luna Menguante” aporta una luz suave y relajante, ideal para crear ambientes cálidos y serenos.",
      "Además de ser funcional, se convierte en un elemento decorativo original y sofisticado, perfecto para mesas, escritorios, estanterías o rincones especiales del hogar.",
      "Su diseño inspirado en la luna invita a conectar con la calma, la armonía y la belleza de los ciclos naturales.",
    ],
    features: [
      "Recargable por USB e incluye cable.",
      "Tres tonos de luz: cálida, fría y neutra.",
      "Medidas: 23 × 21 cm.",
      "Ideal para mesas, escritorios, estanterías y espacios de descanso.",
      "Diseño inspirado en la luna menguante.",
      "Luz suave y decorativa.",
    ],
    closing:
      "Una lámpara pensada para iluminar tus noches y sumar calma, estilo y energía lunar a tu espacio.",
    price: 24000,
    stock: 5,
    available: true,
    featured: true,
    variants: [],
    images: [lamparaLedLunaImg],
  },
  {
    id: 12,
    slug: "lona-proyecta-abundancia",
    name: "Lona “Proyectá Abundancia”",
    category: "lonas",
    shortDescription:
      "Una lona llena de color y energía, ideal para acompañar tus momentos de descanso en la playa, el parque o un picnic.",
    tagline: "Diseñada para disfrutar, relajarte y proyectar abundancia",
    description: [
      "La lona “Proyectá Abundancia” fue creada para acompañarte en tus momentos de descanso, conexión y diversión.",
      "Su diseño original y sus colores llenos de energía la convierten en una pieza única para disfrutar al aire libre y crear un espacio propio donde quieras.",
      "Es ideal para llevar a la playa, organizar un picnic, relajarte en el parque o disfrutar de una tarde especial en compañía.",
    ],
    features: [
      "Medidas: 1,40 × 1,40 m.",
      "Ideal para picnic, playa, parque y actividades al aire libre.",
      "Diseño original inspirado en la abundancia y la energía positiva.",
      "Formato práctico para acompañar momentos de descanso y diversión.",
      "Colores y detalles que aportan personalidad a cada encuentro.",
    ],
    closing:
      "Una lona pensada para crear tu propio espacio de disfrute y conectar con la energía de la abundancia.",
    price: 25000,
    stock: 6,
    available: true,
    featured: true,
    variants: [],
    images: [lonaAbundanciaImg],
  },
  {
    id: 13,
    slug: "manta-xl-universo-a-mi-favor",
    name: "Manta XL “El Universo está a mi Favor”",
    category: "lonas",
    shortDescription:
      "Una manta XL de inspiración cósmica, ideal para disfrutar en la playa, la pileta, el parque o un picnic.",
    tagline: "La energía del universo para acompañar tus momentos de relax",
    description: [
      "Llevá la magia del universo a tus momentos de descanso con la manta XL “El Universo está a mi Favor”, una pieza llena de energía, color y diseño.",
      "Es perfecta para disfrutar en la pileta, la playa, el parque o durante un picnic al aire libre. Su tamaño amplio permite usarla de manera individual o compartirla.",
      "Su mensaje poderoso invita a conectar con tu mejor versión y a recordar que el universo siempre puede estar de tu lado.",
    ],
    features: [
      "Material: tela de poliéster suave, liviana y lavable.",
      "Medidas XL: 140 × 140 cm.",
      "Ideal para la pileta, la playa, el parque y picnics al aire libre.",
      "Diseño exclusivo con motivos cósmicos, mariposas y símbolo del yin-yang.",
      "Formato amplio, ideal para compartir o disfrutar de manera individual.",
      "Diseño que combina energía, equilibrio y estilo.",
    ],
    closing:
      "Más que una manta, es un recordatorio para conectar con tu energía y transformar cada momento en algo especial.",
    price: 35000,
    stock: 4,
    available: true,
    featured: true,
    variants: [],
    images: [lonaUniversoImg],
  },
];

// Helper para buscar un producto por su slug.
export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);
