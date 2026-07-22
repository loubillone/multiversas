import { Container } from "react-bootstrap";

import ResourceShare from "../components/ResourceShare/ResourceShare";
import { getResourceBySlug } from "../data/resources";
import "./ResourceDetail.css";

const resource = getResourceBySlug("lo-que-rechazamos");

const SHARE_MESSAGE =
  'Quiero compartirte este ejercicio de Multiversas: “Lo que rechazamos en otros crece en nosotros”. Tal vez pueda acompañarte.';

const STEPS = [
  "Pensá en una persona, una situación o algún aspecto de vos que hoy te genere rechazo.",
  "Traé frente a vos una imagen que represente ese rechazo.",
  "Observá qué tamaño tiene, qué forma aparece, qué color tiene y qué sensaciones despierta en tu cuerpo.",
  "Permití que esa imagen se exprese y preguntale: ¿Qué necesitás de mí hoy?",
  "Escuchá sin intentar corregir, cambiar o juzgar lo que aparezca.",
  "Dale lugar a cada emoción, incluso si resulta incómoda. No necesitás resolverla en ese momento; solamente reconocerla.",
];

function ResourceDetail() {
  return (
    <article className="resource">
      <Container className="resource__container">
        <header className="resource__header">
          <span className="resource__eyebrow">Recurso gratuito</span>
          <h1 className="resource__title">
            Lo que rechazamos en otros crece en nosotros
          </h1>
        </header>

        <figure className="resource__figure">
          <img
            src={resource.image}
            alt="Mujer junto a una ventana mirando hacia afuera con expresión reflexiva"
            className="resource__image"
          />
        </figure>

        <div className="resource__body">
          <p className="resource__lead">
            Cuando evitamos o rechazamos aspectos de otras personas, de nuestra
            historia o de nosotros mismos, muchas veces terminamos dándoles más
            fuerza.
          </p>

          <p className="resource__text">
            ¿Podemos aceptar todo lo que forma parte de nosotros y de nuestra
            familia, incluso aquello que resulta doloroso, incómodo o
            vergonzoso?
          </p>

          <p className="resource__text">
            Aceptar no significa justificar. Significa reconocer que algo existe
            y permitirnos observar qué puede estar mostrándonos sobre nuestra
            propia historia.
          </p>

          <h2 className="resource__subtitle">Te propongo un ejercicio</h2>
          <p className="resource__text">
            Buscá un momento tranquilo y respirando profundamente antes de
            comenzar.
          </p>

          <ol className="resource__steps">
            {STEPS.map((step, index) => (
              <li key={index} className="resource__step">
                <span className="resource__step-number">{index + 1}</span>
                <span className="resource__step-text">{step}</span>
              </li>
            ))}
          </ol>

          <blockquote className="resource__highlight">
            Te veo. Te reconozco. Sos parte de mí.
          </blockquote>

          <p className="resource__text">
            Permanecé unos instantes observando las nuevas sensaciones que
            aparecen al darle un lugar en tu corazón.
          </p>

          <h2 className="resource__subtitle">Para cerrar</h2>
          <p className="resource__text">
            Podés escribir todo lo que surgió durante el ejercicio: imágenes,
            emociones, pensamientos o palabras.
          </p>
          <p className="resource__text">
            También podés repetirlo cada vez que necesites encontrar mayor calma,
            comprensión o una nueva mirada sobre esa situación.
          </p>

          <blockquote className="resource__highlight resource__highlight--final">
            Reconocer aquello que rechazamos puede ser el primer paso para
            relacionarnos con nuestra historia de una manera más amorosa.
          </blockquote>
        </div>

        <ResourceShare shareMessage={SHARE_MESSAGE} />
      </Container>
    </article>
  );
}

export default ResourceDetail;
