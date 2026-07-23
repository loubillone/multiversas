import { Container } from "react-bootstrap";

import BackLink from "../BackLink/BackLink";
import "./PagePlaceholder.css";

/**
 * Página mínima provisional para evitar errores de navegación.
 * El contenido interno se desarrollará en etapas posteriores.
 */
function PagePlaceholder({
  title,
  subtitle,
  backTo = "/",
  backLabel = "Volver al inicio",
}) {
  return (
    <section className="page-placeholder">
      <Container>
        <BackLink to={backTo} label={backLabel} />
        <span className="page-placeholder__eyebrow">Multiversas</span>
        <h1 className="page-placeholder__title">{title}</h1>
        {subtitle && <p className="page-placeholder__subtitle">{subtitle}</p>}
      </Container>
    </section>
  );
}

export default PagePlaceholder;
