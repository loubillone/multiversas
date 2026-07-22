import { Container } from "react-bootstrap";
import "./PagePlaceholder.css";

/**
 * Página mínima provisional para evitar errores de navegación.
 * El contenido interno se desarrollará en etapas posteriores.
 */
function PagePlaceholder({ title, subtitle }) {
  return (
    <section className="page-placeholder">
      <Container>
        <span className="page-placeholder__eyebrow">Multiversas</span>
        <h1 className="page-placeholder__title">{title}</h1>
        {subtitle && <p className="page-placeholder__subtitle">{subtitle}</p>}
      </Container>
    </section>
  );
}

export default PagePlaceholder;
