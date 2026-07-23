import { Container, Row, Col } from "react-bootstrap";

import BackLink from "../components/BackLink/BackLink";
import ResourceCard from "../components/ResourceCard/ResourceCard";
import { resources } from "../data/resources";
import "./Resources.css";

function Resources() {
  return (
    <section className="resources">
      <Container>
        <BackLink to="/" label="Volver al inicio" />
        <header className="resources__header">
          <span className="resources__eyebrow">Recursos gratuitos</span>
          <h1 className="resources__title">
            Ejercicios y reflexiones para acompañar tu proceso
          </h1>
          <p className="resources__intro">
            Un espacio con propuestas simples para detenerte, observar lo que
            estás viviendo y conectar con nuevas formas de comprensión.
          </p>
        </header>

        <Row className="g-4">
          {resources.map((resource) => (
            <Col key={resource.id} xs={12} md={6} lg={4}>
              <ResourceCard resource={resource} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Resources;
