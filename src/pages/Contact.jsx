import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import "./Contact.css";

const fadeLeft = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const fadeRight = {
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut", delay: 0.08 },
};

function Contact() {
  return (
    <div className="contact">
      <header className="contact__hero">
        <span className="contact__blob" aria-hidden="true" />
        <Container className="contact__hero-inner">
          <span className="contact__eyebrow">Multiversas</span>
          <h1 className="contact__hero-title">Contacto</h1>
          <p className="contact__hero-subtitle">Estoy acá para acompañarte</p>
          <p className="contact__hero-text">
            Si tenés alguna consulta sobre las sesiones, las constelaciones, los
            productos de la tienda o simplemente querés recibir más información,
            podés escribirme a través del formulario.
          </p>
          <p className="contact__hero-note">
            Voy a responderte a la brevedad con toda la información que
            necesites.
          </p>
        </Container>
      </header>

      <Container className="contact__content">
        <Row className="g-4 g-lg-5 align-items-start">
          <Col lg={7}>
            <motion.div {...fadeLeft} className="contact__panel">
              <h2 className="contact__panel-title">Escribime</h2>
              <ContactForm />
            </motion.div>
          </Col>

          <Col lg={5}>
            <motion.div {...fadeRight}>
              <ContactInfo />
            </motion.div>
          </Col>
        </Row>

        <p className="contact__closing">
          Gracias por acercarte a Multiversas. Cada mensaje es el comienzo de un
          nuevo encuentro.
        </p>
      </Container>
    </div>
  );
}

export default Contact;
