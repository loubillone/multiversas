import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import heroImg from "../../assets/img/constelaciones/paulaLiistro.jpg";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeImage = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  return (
    <section className="hero">
      {/* Elementos decorativos difuminados */}
      <span className="hero__blob hero__blob--1" aria-hidden="true" />
      <span className="hero__blob hero__blob--2" aria-hidden="true" />
      <span className="hero__blob hero__blob--3" aria-hidden="true" />

      <Container className="hero__container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="hero__text-col">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.span className="hero__eyebrow" variants={fadeUp}>
                Un espacio para mirar, sentir y transformar
              </motion.span>

              <motion.h1 className="hero__title" variants={fadeUp}>
                Volver a tu historia también puede ser una forma de avanzar
              </motion.h1>

              <motion.p className="hero__subtitle" variants={fadeUp}>
                Constelaciones familiares, espacios de encuentro y objetos
                creados para acompañar procesos personales con presencia,
                sensibilidad y sentido.
              </motion.p>

              <motion.div className="hero__actions" variants={fadeUp}>
                <Link to="/constelaciones" className="btn-multi btn-multi-primary">
                  Conocer las sesiones
                </Link>
                <Link to="/tienda" className="btn-multi btn-multi-outline">
                  Explorar Multiversas
                </Link>
              </motion.div>

              <motion.p className="hero__note" variants={fadeUp}>
                Sesiones presenciales y online · Productos artesanales · Talleres
                y encuentros
              </motion.p>
            </motion.div>
          </Col>

          <Col lg={6} className="hero__image-col">
            <motion.div
              className="hero__image-wrap"
              variants={fadeImage}
              initial="hidden"
              animate="show"
            >
              <img
                src={heroImg}
                alt="Paula Liistro sosteniendo figuras usadas en las constelaciones familiares"
                className="hero__image"
                loading="eager"
              />

              <motion.div
                className="hero__card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero__card-dot" aria-hidden="true" />
                Encuentros presenciales y online
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
