import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Badge,
} from "react-bootstrap";
import { FiShoppingBag } from "react-icons/fi";

import { mainLinks, constellationServices } from "../../data/navLinks";
import logo from "../../assets/img/logo.webp";
import "./Navbar.css";

// Contador estático provisional (sin lógica de carrito todavía)
const CART_COUNT = 0;

function NavbarMultiversas() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Fondo sólido al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // El navbar es sólido si se hizo scroll o si no estamos sobre el hero
  const solid = scrolled || !isHome;

  const closeMenu = () => setExpanded(false);

  // Configuración de los menús desplegables del navbar
  const dropdowns = {
    Constelaciones: {
      id: "mv-constellations-dropdown",
      items: constellationServices,
      allLabel: "Ver todos los servicios",
      allTo: "/constelaciones",
    },
  };

  const renderDropdown = (label) => {
    const { id, items, allLabel, allTo } = dropdowns[label];
    return (
      <NavDropdown
        key={id}
        title={label}
        id={id}
        className="mv-navbar__dropdown"
        menuVariant="light"
      >
        {items.map((item) => (
          <NavDropdown.Item
            key={item.to}
            as={Link}
            to={item.to}
            className="mv-navbar__dropdown-item"
            onClick={closeMenu}
          >
            {item.label}
          </NavDropdown.Item>
        ))}
        <NavDropdown.Divider />
        <NavDropdown.Item
          as={Link}
          to={allTo}
          className="mv-navbar__dropdown-item mv-navbar__dropdown-item--all"
          onClick={closeMenu}
        >
          {allLabel}
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`mv-navbar ${solid ? "mv-navbar--solid" : "mv-navbar--transparent"}`}
    >
      <Container className="mv-navbar__container">
        <Navbar.Brand as={Link} to="/" className="mv-navbar__brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Multiversas · inicio"
            className="mv-navbar__logo"
          />
        </Navbar.Brand>

        <div className="mv-navbar__actions order-lg-last">
          <Link
            to="/carrito"
            className="mv-navbar__cart"
            aria-label={`Ver carrito, ${CART_COUNT} productos`}
            onClick={closeMenu}
          >
            <FiShoppingBag aria-hidden="true" />
            <Badge pill className="mv-navbar__cart-badge">
              {CART_COUNT}
            </Badge>
          </Link>

          <Navbar.Toggle
            aria-controls="mv-offcanvas"
            aria-label="Abrir menú de navegación"
            className="mv-navbar__toggle"
          />
        </div>

        <Navbar.Offcanvas
          id="mv-offcanvas"
          aria-labelledby="mv-offcanvas-title"
          placement="end"
          className="mv-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="mv-offcanvas-title" className="mv-offcanvas__title">
              <img src={logo} alt="Multiversas" className="mv-offcanvas__logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="mv-navbar__nav ms-lg-auto align-items-lg-center">
              {mainLinks.map((link) =>
                dropdowns[link.label] ? (
                  renderDropdown(link.label)
                ) : (
                  <Nav.Link
                    key={link.to}
                    as={NavLink}
                    to={link.to}
                    end={link.to === "/"}
                    className="mv-navbar__link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Nav.Link>
                ),
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMultiversas;
