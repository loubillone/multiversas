import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

import { mainLinks, shopCategories } from "../../data/navLinks";
import logo from "../../assets/img/logo.webp";
import "./Footer.css";

// Datos de contacto provisionales · reemplazar por los reales más adelante
const contactInfo = [
  {
    icon: FaWhatsapp,
    label: "Whatsapp",
    href: "#", // https://wa.me/<numero>
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#", // https://instagram.com/<usuario>
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#", // https://facebook.com/<usuario>
  },
  {
    icon: FaEnvelope,
    label: "Correo",
    href: "#", // mailto:<correo>
  },
];

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-5">
          {/* Columna 1 · Identidad */}
          <Col lg={4} md={6}>
            <div className="footer__logo-wrap">
              <img
                src={logo}
                alt="Multiversas"
                className="footer__logo"
              />
            </div>
            <p className="footer__about">
              Multiversas es un espacio de encuentro, transformación y creación
              que reúne el trabajo de Paula Liistro con una tienda de objetos
              pensados para acompañar lo cotidiano.
            </p>
          </Col>

          {/* Columna 2 · Navegación */}
          <Col lg={2} md={6}>
            <h3 className="footer__title">Navegación</h3>
            <ul className="footer__links">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Columna 3 · Tienda */}
          <Col lg={3} md={6}>
            <h3 className="footer__title">Tienda</h3>
            <ul className="footer__links">
              {shopCategories.map((cat) => (
                <li key={cat.to}>
                  <Link to={cat.to} className="footer__link">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Columna 4 · Contacto */}
          <Col lg={3} md={6}>
            <h3 className="footer__title">Contacto</h3>
            <ul className="footer__contact">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer__contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer__contact-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 Multiversas. Todos los derechos reservados.
          </p>
          <p className="footer__credit">
            Diseño y desarrollo por{" "}
            <a
              href="#"
              className="footer__credit-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              REM Studio
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
