import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

import ConstellationServiceCard from "../components/ConstellationServiceCard/ConstellationServiceCard";
import {
  constellationServiceItems,
  constellationResourceItem,
} from "../data/constellationServices";
import { openWhatsApp } from "../config/whatsapp";
import "./Constellations.css";

const WHATSAPP_MESSAGE =
  "Hola, estuve viendo las propuestas de Multiversas y quisiera orientación para saber qué tipo de encuentro puede acompañar mejor mi proceso.";

function Constellations() {
  return (
    <div className="constellations">
      {/* Encabezado --------------------------------------------------------- */}
      <header className="constellations__hero">
        <span
          className="constellations__blob constellations__blob--1"
          aria-hidden="true"
        />
        <span
          className="constellations__blob constellations__blob--2"
          aria-hidden="true"
        />
        <Container className="constellations__hero-inner">
          <span className="constellations__eyebrow">
            Constelaciones y acompañamiento
          </span>
          <h1 className="constellations__hero-title">
            Propuestas para mirar tu historia desde otro lugar
          </h1>
          <p className="constellations__hero-text">
            Cada proceso es diferente. Por eso, Multiversas ofrece espacios
            individuales, encuentros grupales, acompañamiento posterior y
            recursos gratuitos para que puedas encontrar la propuesta que mejor
            se adapte a tu momento.
          </p>
          <p className="constellations__hero-note">
            Conocé cada alternativa y elegí cómo comenzar tu recorrido.
          </p>
        </Container>
      </header>

      {/* Sección · Servicios ----------------------------------------------- */}
      <section className="constellations__section" aria-labelledby="servicios-title">
        <Container>
          <div className="constellations__section-head">
            <span className="constellations__section-eyebrow">
              Sesiones y acompañamientos
            </span>
            <h2 id="servicios-title" className="constellations__section-title">
              Elegí el espacio que hoy necesitás
            </h2>
            <p className="constellations__section-text">
              Propuestas pensadas para distintos momentos y formas de transitar
              un proceso personal.
            </p>
          </div>

          <Row className="g-4">
            {constellationServiceItems.map((service) => (
              <Col key={service.id} xs={12} md={6} lg={4} className="d-flex">
                <ConstellationServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Sección · Recursos gratuitos -------------------------------------- */}
      {constellationResourceItem && (
        <section
          className="constellations__section constellations__section--resources"
          aria-labelledby="recursos-title"
        >
          <Container>
            <div className="constellations__section-head">
              <span className="constellations__section-eyebrow">
                Para explorar a tu ritmo
              </span>
              <h2 id="recursos-title" className="constellations__section-title">
                Recursos gratuitos para acompañar tu proceso
              </h2>
              <p className="constellations__section-text">
                Ejercicios y reflexiones que podés realizar en tus propios
                tiempos para conectar con tus emociones, vínculos y preguntas.
              </p>
            </div>

            <ConstellationServiceCard
              service={constellationResourceItem}
              variant="featured"
            />
          </Container>
        </section>
      )}

      {/* CTA final ---------------------------------------------------------- */}
      <section className="constellations__cta" aria-labelledby="cta-title">
        <Container className="constellations__cta-inner">
          <h2 id="cta-title" className="constellations__cta-title">
            ¿No sabés qué propuesta elegir?
          </h2>
          <p className="constellations__cta-text">
            Podés consultar y recibir orientación para encontrar el espacio que
            mejor acompañe tu momento actual.
          </p>
          <Button
            className="btn-multi constellations__cta-button"
            onClick={() => openWhatsApp(WHATSAPP_MESSAGE)}
          >
            <FaWhatsapp aria-hidden="true" />
            Consultar por WhatsApp
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Constellations;
