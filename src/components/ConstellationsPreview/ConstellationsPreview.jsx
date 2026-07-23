import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "./ConstellationsPreview.css";

function ConstellationsPreview() {
  return (
    <section
      className="constellations-preview"
      aria-labelledby="constellations-preview-title"
    >
      <Container>
        <div className="constellations-preview__inner">
          <h2
            id="constellations-preview-title"
            className="constellations-preview__title"
          >
            Un espacio para mirar lo que necesita ser transformado
          </h2>
          <p className="constellations-preview__text">
            Constelaciones individuales, grupales y asesoramientos para
            acompañarte en distintos momentos de tu proceso.
          </p>
          <Link to="/constelaciones" className="btn-multi btn-multi-primary">
            Conocer las propuestas
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ConstellationsPreview;
