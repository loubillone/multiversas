import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import ResourceShare from "../components/ResourceShare/ResourceShare";
import { getResourceBySlug } from "../data/resources";
// Reutiliza los estilos editoriales del detalle de recurso
import "./ResourceDetail.css";

const resource = getResourceBySlug("fortalece-tu-emprendimiento");

const SHARE_MESSAGE =
  'Quiero compartirte esta guía de Multiversas: “Fortalecé tu emprendimiento desde tus raíces”. Tal vez pueda acompañarte.';

const EXERCISES = [
  {
    title: "Ejercicio 1 · Conectando con mis raíces",
    prep: "Sentate cómodamente, con la espalda recta. Cerrá los ojos y realizá tres respiraciones profundas. Sentí cómo el aire entra y sale, relajando tu cuerpo con cada exhalación.",
    steps: [
      "Visualizá a tus padres detrás de vos, dándote fuerza, aun cuando la relación con ellos no haya sido perfecta.",
      "Sentí cómo te sostienen, cómo te han dado la vida.",
      "Preguntate: “¿Estoy tomando esa fuerza o sigo en lucha o rechazo?”",
      "Anotá lo que sientas o pienses en este momento.",
    ],
    note: "Cuando hice este ejercicio, sentí cómo mi energía cambiaba. Dejé de sentirme sola y conecté con algo más grande que me sostenía.",
  },
  {
    title: "Ejercicio 2 · Liberando bloqueos emocionales",
    prep: "Apoyá los pies firmemente en el suelo y respirá profundamente tres veces. Imaginá que tus pies se conectan con la tierra, dándote estabilidad.",
    steps: [
      "Escribí tres obstáculos importantes que hoy estén limitando tu negocio.",
      "Reflexioná: “¿Qué historias familiares podrían estar detrás de estos bloqueos?”",
      "Anotá las creencias limitantes que puedas identificar.",
      "Repetí en voz alta: “Reconozco estas creencias y las dejo ir. Tomo la fuerza de mi sistema familiar para avanzar.”",
    ],
    note: "Me di cuenta de que llevaba el miedo al fracaso de mis abuelos, que atravesaron muchas dificultades. Cuando pude reconocerlo, fue como soltar una carga pesada.",
  },
  {
    title: "Ejercicio 3 · Anclando la abundancia",
    prep: "Cerrá los ojos, relajá los hombros y respirá lentamente tres veces. Sentí cómo el aire te llena de calma y confianza.",
    steps: [
      "Elegí una meta importante para tu negocio.",
      "Visualizate alcanzando esa meta. Observá tus emociones y la energía de éxito que te rodea.",
      "Imaginá a tus padres y ancestros detrás de vos, acompañándote.",
      "Sentí cómo te transmiten su deseo de que puedas avanzar y prosperar.",
      "Anotá cómo te sentís al recibir ese apoyo.",
      "Repetí: “Honro a mis raíces y abro el camino a la abundancia.”",
    ],
    note: "Sentir a mis ancestros apoyándome transformó mi percepción. De repente, sentí que había una red invisible sosteniéndome.",
  },
  {
    title: "Ejercicio 4 · Mejorando mis relaciones laborales",
    prep: "Colocá las manos sobre tu corazón, respirá profundamente y sentí su latido. Agradecé a tu cuerpo por acompañarte en este recorrido.",
    steps: [
      "Escribí los nombres de las personas con las que más interactuás en tu negocio.",
      "Cerrá los ojos y visualizá a cada una.",
      "Observá si aparece alguna tensión, incomodidad o conflicto.",
      "Preguntate: “¿Estoy repitiendo alguna dinámica familiar en esta relación?”",
      "Anotá una intención de cambio: “Elijo ver a estas personas con una nueva mirada, libre de cargas del pasado.”",
    ],
    note: "Descubrí que muchas veces intentaba complacer a todos, algo muy ligado a mi historia familiar. Poder verlo me ayudó a empezar a poner límites más sanos.",
  },
];

function ResourceEntrepreneurship() {
  return (
    <article className="resource">
      <Container className="resource__container">
        <header className="resource__header">
          <span className="resource__eyebrow">Recurso gratuito</span>
          <h1 className="resource__title">
            Fortalecé tu emprendimiento desde tus raíces
          </h1>
        </header>

        <figure className="resource__figure">
          <img
            src={resource.image}
            alt="Mujer escribiendo en un cuaderno con calma, en un momento de planificación consciente"
            className="resource__image"
          />
        </figure>

        <div className="resource__body">
          <p className="resource__subtitle" style={{ marginTop: 0 }}>
            Guía de ejercicios prácticos de Constelaciones Familiares para
            emprendedoras
          </p>

          <p className="resource__lead">¡Bienvenida!</p>

          <p className="resource__text">
            Soy Paula, facilitadora de Constelaciones Familiares y también
            emprendedora. Sé lo que se siente cuando algo parece frenar o limitar
            el crecimiento, incluso cuando existe el deseo profundo de avanzar.
          </p>
          <p className="resource__text">
            Con esta guía quiero compartirte ejercicios que pueden ayudarte a
            conectar con la fuerza de tus raíces familiares y acompañarte en el
            pasaje hacia un emprendimiento más confiado, más alineado y más
            sostenido.
          </p>
          <p className="resource__text">
            Tomate tu tiempo. Podés realizar cada ejercicio con calma, amor y
            respeto por tu propio proceso.
          </p>
          <p className="resource__text">
            Respirá profundamente y empezá este recorrido hacia un emprendimiento
            más conectado con vos.
          </p>

          {EXERCISES.map((exercise) => (
            <div className="resource__exercise" key={exercise.title}>
              <h2 className="resource__subtitle">{exercise.title}</h2>

              <span className="resource__label">Preparación</span>
              <p className="resource__text">{exercise.prep}</p>

              <span className="resource__label">Ejercicio</span>
              <ol className="resource__steps">
                {exercise.steps.map((step, index) => (
                  <li key={index} className="resource__step">
                    <span className="resource__step-number">{index + 1}</span>
                    <span className="resource__step-text">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="resource__note">
                <p className="resource__note-title">Nota personal</p>
                <p className="resource__note-text">{exercise.note}</p>
              </div>
            </div>
          ))}

          <h2 className="resource__subtitle">Para cerrar</h2>
          <p className="resource__text">
            Gracias por regalarte este tiempo y por abrirte a explorar la fuerza
            de tus raíces.
          </p>
          <p className="resource__text">
            Recordá: tu emprendimiento también puede florecer cuando reconocés,
            sanás y liberás aquello que te ha estado frenando.
          </p>

          <blockquote className="resource__highlight resource__highlight--final">
            Si sentís que necesitás más acompañamiento o querés profundizar en tu
            proceso, podés dar el próximo paso a través de una sesión individual.
          </blockquote>

          <div className="resource__cta">
            <Link
              to="/constelaciones/individuales"
              className="btn-multi btn-multi-outline"
            >
              Conocer sesiones individuales
            </Link>
          </div>
        </div>

        <ResourceShare shareMessage={SHARE_MESSAGE} />
      </Container>
    </article>
  );
}

export default ResourceEntrepreneurship;
