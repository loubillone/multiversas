import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

import serviceImg from "../assets/img/constelaciones/constGrupales.jpeg";
// Reutiliza la identidad visual de la página de servicio (clases .service*)
import "./IndividualConstellation.css";
import "./GroupConstellation.css";

/*
  Número de WhatsApp pendiente de configurar.
  Formato internacional sin "+", ni espacios ni guiones. Ej: "5493511234567".
  Dejar como cadena vacía hasta contar con el número real.
*/
const WHATSAPP_NUMBER = "";

const WHATSAPP_MESSAGE =
  "Hola, quisiera recibir más información sobre las Constelaciones Familiares Grupales: modalidad, próximas fechas, disponibilidad y valor.";

function GroupConstellation() {
  const handleWhatsApp = () => {
    if (!WHATSAPP_NUMBER) {
      Swal.fire({
        icon: "info",
        title: "Número de WhatsApp pendiente de configurar.",
        confirmButtonColor: "#6d5a91",
      });
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="service">
      <span className="service__blob service__blob--1" aria-hidden="true" />

      <Container className="service__container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="service__content-col order-lg-1">
            <span className="service__eyebrow">Constelaciones familiares</span>
            <h1 className="service__title">Constelaciones Familiares Grupales</h1>
            <p className="service__subtitle">Un viaje de sanación en comunidad</p>

            <p className="service__text">
              A veces, al observar nuestra vida, encontramos situaciones que se
              repiten, vínculos que generan malestar o dificultades que parecen
              no tener una explicación clara.
            </p>
            <p className="service__text">
              Las constelaciones familiares grupales ofrecen un espacio para
              explorar esas dinámicas invisibles que pueden estar influyendo en
              tu bienestar y en la forma en que te relacionás con los demás.
            </p>
            <p className="service__text">
              En un ambiente de confianza y respeto, trabajamos junto a otras
              personas que también están atravesando sus propios procesos. A
              través de representantes, se ponen en escena vínculos, situaciones
              o integrantes del sistema familiar, permitiendo que emociones y
              movimientos profundos comiencen a manifestarse.
            </p>
            <p className="service__text">
              El grupo acompaña y sostiene la experiencia. Cada constelación
              puede resonar de una manera diferente en quienes participan,
              ayudando a reconocer patrones, comprender vínculos y abrir nuevas
              posibilidades.
            </p>
            <p className="service__text">
              Es una invitación a mirar más allá de lo evidente, conectar con
              aquello que necesita ser reconocido y dar un nuevo paso en tu
              proceso personal.
            </p>

            <blockquote className="service__highlight">
              No tenés que atravesarlo en soledad. El encuentro con otros también
              puede convertirse en una oportunidad de comprensión y
              transformación.
            </blockquote>

            <Button
              className="btn-multi group-service__whatsapp"
              onClick={handleWhatsApp}
            >
              <FaWhatsapp aria-hidden="true" />
              Consultar por WhatsApp
            </Button>

            <p className="group-service__info-text">
              Consultá por próximas fechas, modalidad, disponibilidad y valor.
            </p>
          </Col>

          <Col lg={6} className="service__image-col order-lg-2">
            <div className="service__image-wrap">
              <img
                src={serviceImg}
                alt="Grupo de personas participando de un encuentro de constelaciones familiares"
                className="service__image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GroupConstellation;
