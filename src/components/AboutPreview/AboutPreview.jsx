import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import aboutImg from "../../assets/img/constelaciones/constelacionIndividual.jpg";
import "./AboutPreview.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeImage = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function AboutPreview() {
  return (
    <section className="about-preview">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="about-preview__image-col">
            <motion.div
              className="about-preview__image-wrap"
              variants={fadeImage}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="about-preview__blob" aria-hidden="true" />
              <img
                src={aboutImg}
                alt="Paula Liistro acompañando un proceso de constelación con figuras sobre una mesa"
                className="about-preview__image"
                loading="lazy"
              />
            </motion.div>
          </Col>

          <Col lg={6} className="about-preview__text-col">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.span className="about-preview__eyebrow" variants={fadeUp}>
                Conocé a Paula
              </motion.span>

              <motion.h2 className="about-preview__title" variants={fadeUp}>
                Un espacio de escucha, encuentro y transformación
              </motion.h2>

              <motion.p className="about-preview__text" variants={fadeUp}>
                Acompaño procesos personales desde una mirada sensible y
                sistémica, creando espacios de escucha, encuentro y
                transformación para mirar la propia historia con más claridad y
                apertura.
              </motion.p>

              <motion.blockquote className="about-preview__highlight" variants={fadeUp}>
                Cada encuentro es una invitación a mirar con más claridad y
                conectar con aquello que necesita ser escuchado.
              </motion.blockquote>

              <motion.div variants={fadeUp}>
                <Link to="/sobre-paula" className="btn-multi btn-multi-primary">
                  Conocer más sobre mí
                </Link>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutPreview;
