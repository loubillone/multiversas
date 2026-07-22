import { Link } from "react-router-dom";
import { FiClock, FiArrowRight } from "react-icons/fi";

import "./ResourceCard.css";

function ResourceCard({ resource }) {
  const { slug, title, excerpt, image, category, readingTime } = resource;
  const to = `/recursos/${slug}`;

  return (
    <article className="resource-card">
      <Link to={to} className="resource-card__image-link" tabIndex={-1} aria-hidden="true">
        <img src={image} alt="" className="resource-card__image" loading="lazy" />
      </Link>

      <div className="resource-card__body">
        <span className="resource-card__category">{category}</span>

        <h3 className="resource-card__title">
          <Link to={to} className="resource-card__title-link">
            {title}
          </Link>
        </h3>

        <p className="resource-card__excerpt">{excerpt}</p>

        <div className="resource-card__footer">
          <span className="resource-card__time">
            <FiClock aria-hidden="true" />
            {readingTime}
          </span>

          <Link to={to} className="resource-card__link">
            Leer recurso
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ResourceCard;
