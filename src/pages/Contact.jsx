import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

import BackLink from "../components/BackLink/BackLink";
import ContactForm from "../components/ContactForm/ContactForm";
import "./Contact.css";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Contact() {
  return (
    <div className="contact">
      <header className="contact__hero">
        <span className="contact__blob" aria-hidden="true" />
        <Container>
          <BackLink to="/" label="Volver al inicio" />
          <div className="contact__hero-inner">
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
          </div>
        </Container>
      </header>

      <Container className="contact__content">
        <motion.div {...fadeUp} className="contact__panel">
          <h2 className="contact__panel-title">Escribime</h2>
          <ContactForm />
        </motion.div>

        <p className="contact__closing">
          Gracias por acercarte a Multiversas. Cada mensaje es el comienzo de un
          nuevo encuentro.
        </p>
      </Container>
    </div>
  );
}

export default Contact;
