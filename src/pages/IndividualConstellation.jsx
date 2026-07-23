import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiMonitor, FiTag } from "react-icons/fi";

import BackLink from "../components/BackLink/BackLink";
import TransferModal from "../components/TransferModal/TransferModal";
import serviceImg from "../assets/img/constelaciones/constInd3.jpeg";
import "./IndividualConstellation.css";

const SERVICE = {
  name: "Constelaciones Familiares Individuales",
  modality: "Presencial u online",
  price: "$40.000",
};

const WHATSAPP_MESSAGE =
  "Hola, realicé la transferencia de $40.000 para una sesión de Constelaciones Familiares Individuales. Quisiera enviar el comprobante y coordinar mi turno.";

function IndividualConstellation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="service">
      <span className="service__blob service__blob--1" aria-hidden="true" />

      <Container className="service__container">
        <BackLink to="/constelaciones" label="Volver a constelaciones" />
        <Row className="align-items-center g-5">
          <Col lg={6} className="service__image-col">
            <div className="service__image-wrap">
              <img
                src={serviceImg}
                alt="Figuras de representación dispuestas en círculo durante una sesión individual de constelaciones familiares"
                className="service__image"
              />
            </div>
          </Col>

          <Col lg={6} className="service__content-col">
            <span className="service__eyebrow">Constelaciones familiares</span>
            <h1 className="service__title">
              Constelaciones Familiares Individuales
            </h1>
            <p className="service__subtitle">Un espacio íntimo de sanación</p>

            <p className="service__text">
              Las constelaciones familiares individuales son un encuentro
              personal para explorar emociones, vínculos, bloqueos y situaciones
              que parecen repetirse en tu vida.
            </p>
            <p className="service__text">
              En una sesión privada, trabajamos sobre aquello que hoy te genera
              incomodidad, preocupación o dificultad. Puede estar relacionado con
              tus relaciones amorosas, tu familia, tus proyectos, estudios,
              trabajo o los vínculos con padres, hermanos e hijos.
            </p>
            <p className="service__text">
              A diferencia de las constelaciones grupales, en este espacio
              utilizamos muñecos y otros elementos de representación para
              visualizar a los integrantes de tu sistema familiar o las
              situaciones que necesitás observar.
            </p>
            <p className="service__text">
              Este trabajo permite mirar tu historia desde una nueva perspectiva,
              reconocer dinámicas y patrones que quizás permanecían ocultos, y
              abrir nuevas posibilidades de comprensión y transformación.
            </p>

            {/* Bloque de modalidad y precio */}
            <div className="service__info">
              <div className="service__info-item">
                <span className="service__info-icon" aria-hidden="true">
                  <FiMonitor />
                </span>
                <div>
                  <span className="service__info-label">Modalidad</span>
                  <span className="service__info-value">{SERVICE.modality}</span>
                </div>
              </div>
              <div className="service__info-item">
                <span className="service__info-icon" aria-hidden="true">
                  <FiTag />
                </span>
                <div>
                  <span className="service__info-label">Valor</span>
                  <span className="service__info-value service__info-price">
                    {SERVICE.price}
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="service__highlight">
              Reservá tu turno y date la oportunidad de mirar tu historia desde
              otro lugar.
            </blockquote>

            <Button
              className="btn-multi btn-multi-primary service__cta"
              onClick={() => setShowModal(true)}
            >
              Reservar y pagar
            </Button>
          </Col>
        </Row>
      </Container>

      <TransferModal
        show={showModal}
        onHide={() => setShowModal(false)}
        serviceName={SERVICE.name}
        modality={SERVICE.modality}
        price={SERVICE.price}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
    </section>
  );
}

export default IndividualConstellation;
