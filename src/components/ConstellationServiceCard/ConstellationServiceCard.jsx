import { Link } from "react-router-dom";
import { FiMonitor, FiArrowRight } from "react-icons/fi";

import "./ConstellationServiceCard.css";

/*
  Card reutilizable para las propuestas de Constelaciones.
  Recibe toda la información por props (objeto `service`); no contiene textos
  específicos escritos dentro del componente.

  variant:
    - "default"  → tarjeta vertical (imagen arriba). Grilla de servicios.
    - "featured" → tarjeta horizontal destacada (imagen a un lado). Recursos.
*/
function ConstellationServiceCard({ service, variant = "default" }) {
  const {
    eyebrow,
    title,
    subtitle,
    excerpt,
    image,
    imageAlt,
    modality,
    price,
    meta,
    buttonText,
    path,
  } = service;

  const isFeatured = variant === "featured";

  return (
    <article className={`cs-card${isFeatured ? " cs-card--featured" : ""}`}>
      <div className="cs-card__media">
        <img src={image} alt={imageAlt} className="cs-card__image" />
      </div>

      <div className="cs-card__body">
        {eyebrow && <span className="cs-card__eyebrow">{eyebrow}</span>}

        <h3 className="cs-card__title">
          <Link to={path} className="cs-card__title-link">
            {title}
          </Link>
        </h3>

        {subtitle && <p className="cs-card__subtitle">{subtitle}</p>}

        <p className="cs-card__excerpt">{excerpt}</p>

        {/* Detalles: modalidad (con ícono) y precio destacado cuando existan */}
        {(modality || price) && (
          <div className="cs-card__details">
            {modality && (
              <span className="cs-card__modality">
                <FiMonitor aria-hidden="true" />
                {modality}
              </span>
            )}
            {price && <span className="cs-card__price">{price}</span>}
          </div>
        )}

        {/* Meta informativa (ej. fechas a consultar o cantidad de recursos) */}
        {meta && <p className="cs-card__note">{meta}</p>}

        <Link
          to={path}
          className="btn-multi btn-multi-primary cs-card__cta"
        >
          {buttonText}
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default ConstellationServiceCard;
