import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";

import BackLink from "../components/BackLink/BackLink";
import { getProductBySlug } from "../data/products";
import { getCategoryBySlug } from "../data/productCategories";
import { formatPrice } from "../utils/formatPrice";
import "./ProductDetail.css";

function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const category = product ? getCategoryBySlug(product.category) : null;
  const mainImage = product?.images?.[0];
  const descriptionParagraphs = product?.description
    ? Array.isArray(product.description)
      ? product.description
      : [product.description]
    : [];

  const handleBuy = () => {
    Swal.fire({
      icon: "info",
      title: "La compra online estará disponible próximamente.",
      confirmButtonColor: "#6d5a91",
    });
  };

  if (!product) {
    return (
      <section className="product-detail product-detail--empty">
        <Container>
          <BackLink to="/tienda" label="Volver a la tienda" />
          <span className="product-detail__eyebrow">Multiversas Tienda</span>
          <h1 className="product-detail__title">Producto no encontrado</h1>
          <p className="product-detail__text">
            No pudimos encontrar el producto que estás buscando.
          </p>
          <Link to="/tienda" className="btn-multi btn-multi-primary">
            Volver a la tienda
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <span className="product-detail__blob" aria-hidden="true" />

      <Container className="product-detail__container">
        <BackLink to="/tienda" label="Volver a la tienda" />
        <Row className="align-items-start g-5">
          <Col lg={6} className="product-detail__image-col">
            <div className="product-detail__image-wrap">
              {mainImage && (
                <img
                  src={mainImage}
                  alt={`${product.name} de Multiversas`}
                  className="product-detail__image"
                />
              )}
            </div>
          </Col>

          <Col lg={6} className="product-detail__content-col">
            {category && (
              <span className="product-detail__eyebrow">{category.name}</span>
            )}

            <h1 className="product-detail__title">{product.name}</h1>

            {product.tagline && (
              <p className="product-detail__tagline">{product.tagline}</p>
            )}

            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="product-detail__text">
                {paragraph}
              </p>
            ))}

            {product.features?.length > 0 && (
              <ul className="product-detail__features">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}

            <div className="product-detail__pricing">
              <span className="product-detail__price">
                {formatPrice(product.price)}
              </span>
              {product.available && product.stock > 0 && (
                <span className="product-detail__stock">
                  {product.stock} unidades disponibles
                </span>
              )}
            </div>

            {product.preparation && (
              <p className="product-detail__preparation">
                {product.preparation}
              </p>
            )}

            {product.note && (
              <p className="product-detail__note">{product.note}</p>
            )}

            {product.closing && (
              <blockquote className="product-detail__closing">
                {product.closing}
              </blockquote>
            )}

            <Button
              className="btn-multi btn-multi-primary product-detail__buy"
              onClick={handleBuy}
            >
              Comprar
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductDetail;
