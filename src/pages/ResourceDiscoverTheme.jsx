import { Container } from "react-bootstrap";

import ResourceShare from "../components/ResourceShare/ResourceShare";
import { getResourceBySlug } from "../data/resources";
// Reutiliza los estilos editoriales del detalle de recurso
import "./ResourceDetail.css";

const resource = getResourceBySlug("descubri-que-tema-constelar");

const SHARE_MESSAGE =
  'Quiero compartirte este ejercicio de Multiversas: “Descubrí qué tema constelar”. Tal vez pueda acompañarte.';

const OBSERVATIONS = [
  "¿Cómo se siente?",
  "¿Es algo pesado o liviano?",
  "¿Se muestra cerca o a la distancia?",
  "¿Qué emociones despierta en mí?",
];

function ResourceDiscoverTheme() {
  return (
    <article className="resource">
      <Container className="resource__container">
        <header className="resource__header">
          <span className="resource__eyebrow">Recurso gratuito</span>
          <h1 className="resource__title">Descubrí qué tema constelar</h1>
        </header>

        <figure className="resource__figure">
          <img
            src={resource.image}
            alt="Mujer sentada en un campo verde, en calma y conexión con la naturaleza"
            className="resource__image"
          />
        </figure>

        <div className="resource__body">
          <p className="resource__lead">
            A veces sentimos que algo necesita ser mirado, pero no siempre
            resulta claro por dónde empezar. Este ejercicio puede ayudarte a
            conectar con aquello que hoy necesita más atención dentro de tu
            proceso.
          </p>

          <p className="resource__text">
            Buscá un lugar tranquilo donde puedas estar sin interrupciones
            durante unos minutos. Sentate cómodamente, con la espalda recta y los
            pies apoyados en el suelo.
          </p>

          <p className="resource__text">
            Cerrá los ojos y respirá profundamente. Sentí cómo tu cuerpo se
            relaja con cada exhalación.
          </p>

          <p className="resource__text">
            Visualizá un campo abierto frente a vos. Un espacio amplio y sereno,
            donde todo puede mostrarse con claridad. Permitite estar presente y
            conectar con la calma de ese lugar.
          </p>

          <p className="resource__text">
            Ahora imaginá a tu sistema familiar. Podés sentir a tus padres,
            abuelos y ancestros formando un círculo a tu alrededor. No hace falta
            verlos con precisión; simplemente percibí su presencia.
          </p>

          <p className="resource__text">
            Lentamente, en el centro de ese campo, dejá que aparezca una
            situación o un tema de tu vida que hoy te preocupe o que sientas que
            necesitás comprender mejor. Puede tratarse de un vínculo de pareja,
            algo relacionado con tus padres, una emoción persistente o una
            situación que se repite.
          </p>

          <h2 className="resource__subtitle">Observá lo que aparece</h2>
          <p className="resource__text">Observá ese tema con suavidad. Preguntate:</p>

          <ul className="resource__list">
            {OBSERVATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="resource__text">
            No juzgues lo que aparezca. Solo permitite sentir.
          </p>

          <h2 className="resource__subtitle">Preguntale a tu corazón</h2>

          <blockquote className="resource__highlight">
            ¿Es este el tema que necesito constelar ahora para sanar y avanzar?
          </blockquote>

          <p className="resource__text">
            Escuchá lo que surja sin exigirte una respuesta inmediata. Puede
            aparecer un sí, un no o incluso una nueva imagen inesperada.
          </p>

          <p className="resource__text">
            Si sentís que ese es el tema correcto, agradecé a tu corazón y a tu
            sistema familiar por mostrarte el camino.
          </p>

          <p className="resource__text">
            Si no lo sentís así, esperá unos instantes más y permití que se revele
            otra situación que necesite tu atención.
          </p>

          <p className="resource__text">
            Cuando te sientas listo o lista, respirá profundamente y volvé de a
            poco al presente.
          </p>

          <h2 className="resource__subtitle">Para cerrar</h2>
          <p className="resource__text">
            Confiá en lo que tu corazón te mostró. Muchas veces, la claridad no
            llega desde el pensamiento, sino desde lo que se siente
            profundamente.
          </p>

          <blockquote className="resource__highlight resource__highlight--final">
            Si sentís que apareció un tema importante para trabajar, las
            Constelaciones pueden ser el próximo paso para mirar, comprender y
            transformar eso que hoy necesita ser atendido.
          </blockquote>
        </div>

        <ResourceShare shareMessage={SHARE_MESSAGE} />
      </Container>
    </article>
  );
}

export default ResourceDiscoverTheme;
