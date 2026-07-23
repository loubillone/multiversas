import { Container } from "react-bootstrap";
import { FiCalendar } from "react-icons/fi";

import BackLink from "../components/BackLink/BackLink";
import "./Workshops.css";

function Workshops() {
  return (
    <section className="workshops">
      <span className="workshops__blob" aria-hidden="true" />

      <Container className="workshops__container">
        <BackLink to="/" label="Volver al inicio" />

        <div className="workshops__panel">
          <span className="workshops__icon" aria-hidden="true">
            <FiCalendar />
          </span>

          <h1 className="workshops__title">Talleres y encuentros</h1>

          <p className="workshops__badge">Próximamente</p>

          <p className="workshops__text">
            Estamos preparando nuevos espacios para compartir, aprender y
            encontrarnos.
          </p>

          <p className="workshops__text workshops__text--secondary">
            Muy pronto vas a encontrar acá toda la información sobre próximos
            talleres, encuentros y experiencias de Multiversas.
          </p>

          <p className="workshops__closing">
            Gracias por acompañar este proceso.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Workshops;
