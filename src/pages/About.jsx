import { Container, Row, Col } from "react-bootstrap";

import BackLink from "../components/BackLink/BackLink";
import aboutImg from "../assets/img/constelaciones/constelacionIndividual.jpg";
import "./About.css";

/*
  Contenido demostrativo. Reemplazar con información real de Paula antes de
  publicar la versión final.
*/
function About() {
  return (
    <section className="about-page">
      <Container>
        <BackLink to="/" label="Volver al inicio" />
        <Row className="align-items-center g-5">
          <Col lg={6} className="about-page__image-col">
            <img
              src={aboutImg}
              alt="Paula Liistro acompañando un proceso de constelación con figuras sobre una mesa"
              className="about-page__image"
            />
          </Col>

          <Col lg={6}>
            <span className="about-page__eyebrow">Paula Liistro</span>
            <h1 className="about-page__title">Sobre mí</h1>
            <p className="about-page__text">
              Creo espacios de encuentro y acompañamiento donde puedas detenerte,
              mirar tu historia con mayor profundidad y abrirte a nuevas formas
              de comprender lo que estás viviendo.
            </p>
            <p className="about-page__text">
              Desde una mirada sensible, respetuosa y sistémica, acompaño
              procesos individuales y grupales para reconocer vínculos, emociones
              y patrones que muchas veces actúan de manera silenciosa en nuestra
              vida.
            </p>
            <p className="about-page__text">
              Mi forma de acompañar parte de la escucha, la presencia y el
              respeto por los tiempos de cada proceso. Cada encuentro es una
              invitación a observar con más claridad, conectar con lo esencial y
              habilitar nuevas posibilidades.
            </p>
            <blockquote className="about-page__highlight">
              Un espacio cuidado para mirar tu historia con más conciencia,
              sensibilidad y apertura.
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
