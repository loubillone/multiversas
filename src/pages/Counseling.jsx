import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiMonitor, FiTag } from "react-icons/fi";

import TransferModal from "../components/TransferModal/TransferModal";
import serviceImg from "../assets/img/constelaciones/couseling.jpg";
// Reutiliza la identidad visual de la página de servicio (clases .service*)
import "./IndividualConstellation.css";

const SERVICE = {
  name: "Counseling después de una constelación",
  modality: "Presencial u online",
  price: "$30.000",
};

const WHATSAPP_MESSAGE =
  "Hola, realicé la transferencia de $30.000 para una sesión de Counseling después de una constelación. Quisiera enviar el comprobante y coordinar mi turno.";

function Counseling() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="service">
      <span className="service__blob service__blob--1" aria-hidden="true" />

      <Container className="service__container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="service__content-col">
            <span className="service__eyebrow">
              Acompañamiento después de constelar
            </span>
            <h1 className="service__title">
              Counseling después de una constelación
            </h1>
            <p className="service__subtitle">Integrando el cambio en tu vida</p>

            <p className="service__text">
              Después de vivir una constelación familiar, pueden aparecer
              emociones, preguntas y nuevas comprensiones. Es un proceso profundo
              y, en algunos casos, puede surgir la necesidad de contar con un
              espacio adicional para integrar todo lo que comenzó a movilizarse.
            </p>
            <p className="service__text">
              El counseling posterior a una constelación ofrece un acompañamiento
              cálido, respetuoso y sin juicios, donde podés poner en palabras lo
              vivido, expresar lo que sentís y observar con mayor claridad
              aquello que todavía necesita ser comprendido.
            </p>
            <p className="service__text">
              A través de conversaciones centradas en el aquí y ahora, este
              espacio te ayuda a reconocer los cambios emocionales y vinculares
              que la constelación despertó, y a trasladar esas nuevas miradas a
              tu vida cotidiana.
            </p>
            <p className="service__text">
              Es una oportunidad para continuar el proceso con mayor seguridad,
              fortalecer los movimientos iniciados y encontrar una forma más
              consciente y amorosa de transitar lo que estás viviendo.
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
              Si después de constelar sentís que todavía hay movimientos internos,
              preguntas o emociones que necesitan ser acompañadas, el counseling
              puede ayudarte a integrar el proceso con más claridad y confianza.
            </blockquote>

            <Button
              className="btn-multi btn-multi-primary service__cta"
              onClick={() => setShowModal(true)}
            >
              Reservar sesión
            </Button>
          </Col>

          <Col lg={6} className="service__image-col order-first order-lg-last">
            <div className="service__image-wrap">
              <img
                src={serviceImg}
                alt="Espacio de escucha y acompañamiento para integrar el proceso después de una constelación"
                className="service__image"
              />
            </div>
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

export default Counseling;
