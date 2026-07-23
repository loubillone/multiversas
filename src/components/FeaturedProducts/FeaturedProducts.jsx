import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";
import "./FeaturedProducts.css";

const FEATURED_LIMIT = 3;

const featuredProducts = products
  .filter((product) => product.featured === true)
  .slice(0, FEATURED_LIMIT);

function FeaturedProducts() {
  if (featuredProducts.length === 0) return null;

  return (
    <section className="featured-products" aria-labelledby="featured-products-title">
      <Container>
        <header className="featured-products__header">
          <span className="featured-products__eyebrow">Multiversas Tienda</span>
          <h2 id="featured-products-title" className="featured-products__title">
            Productos destacados
          </h2>
          <p className="featured-products__text">
            Objetos con intención para acompañar tus espacios y momentos
            cotidianos.
          </p>
        </header>

        <Row className="g-4">
          {featuredProducts.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={4} className="d-flex">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        <div className="featured-products__cta">
          <Link to="/tienda" className="btn-multi btn-multi-primary">
            Ver todos los productos
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
