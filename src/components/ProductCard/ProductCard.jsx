import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { getCategoryBySlug } from "../../data/productCategories";
import { formatPrice } from "../../utils/formatPrice";
import "./ProductCard.css";

/*
  Card reutilizable de producto. Recibe toda la información por props (`product`).
  Preparada para mostrar imagen, categoría, nombre, descripción breve, precio,
  etiqueta de destacado y de sin stock.
*/
function ProductCard({ product }) {
  const {
    slug,
    name,
    shortDescription,
    price,
    category,
    images,
    featured,
    available,
    stock,
  } = product;

  const categoryData = getCategoryBySlug(category);
  const mainImage = Array.isArray(images) ? images[0] : images;
  const outOfStock = available === false || stock === 0;

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={`/producto/${slug}`} className="product-card__image-link">
          {mainImage ? (
            <img
              src={mainImage}
              alt={name}
              className="product-card__image"
              loading="lazy"
            />
          ) : (
            <span className="product-card__image-placeholder" aria-hidden="true" />
          )}
        </Link>

        {/* Etiquetas superpuestas */}
        <div className="product-card__badges">
          {featured === true && (
            <span className="product-card__badge product-card__badge--featured">
              Destacado
            </span>
          )}
          {outOfStock && (
            <span className="product-card__badge product-card__badge--stock">
              Sin stock
            </span>
          )}
        </div>
      </div>

      <div className="product-card__body">
        {categoryData && (
          <span className="product-card__category">{categoryData.name}</span>
        )}

        <h3 className="product-card__title">
          <Link to={`/producto/${slug}`} className="product-card__title-link">
            {name}
          </Link>
        </h3>

        {shortDescription && (
          <p className="product-card__description">{shortDescription}</p>
        )}

        <div className="product-card__footer">
          {price != null && (
            <span className="product-card__price">{formatPrice(price)}</span>
          )}

          <Link
            to={`/producto/${slug}`}
            className="btn-multi btn-multi-primary product-card__cta"
          >
            Ver producto
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
