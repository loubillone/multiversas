import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";
import { productCategories } from "../data/productCategories";
import "./Shop.css";

const ALL = "todos";

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const activeCategory = searchParams.get("categoria") || ALL;

  const handleCategory = (slug) => {
    if (slug === ALL) {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: slug });
    }
  };

  const handleReset = () => {
    setSearch("");
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === ALL || product.category === activeCategory;
      const matchesSearch =
        term === "" ||
        product.name.toLowerCase().includes(term) ||
        (product.shortDescription &&
          product.shortDescription.toLowerCase().includes(term)) ||
        (Array.isArray(product.features) &&
          product.features.some((feature) =>
            feature.toLowerCase().includes(term),
          ));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const hasProducts = products.length > 0;
  const hasResults = filteredProducts.length > 0;

  return (
    <div className="shop">
      {/* Encabezado --------------------------------------------------------- */}
      <header className="shop__hero">
        <span className="shop__blob" aria-hidden="true" />
        <Container className="shop__hero-inner">
          <span className="shop__eyebrow">Multiversas Tienda</span>
          <h1 className="shop__hero-title">
            Objetos creados para acompañar lo cotidiano
          </h1>
          <p className="shop__hero-text">
            Una colección de piezas textiles y objetos pensados para sumar
            color, calidez y sentido a los espacios y momentos de cada día.
          </p>
          <p className="shop__hero-note">
            Explorá las categorías y encontrá aquello que conecte con vos.
          </p>
        </Container>
      </header>

      <Container className="shop__content">
        {/* Barra de herramientas ------------------------------------------- */}
        <div className="shop__toolbar">
          <div className="shop__search">
            <FiSearch className="shop__search-icon" aria-hidden="true" />
            <input
              type="search"
              className="shop__search-input"
              placeholder="Buscar productos"
              aria-label="Buscar productos"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="shop__filters" role="group" aria-label="Filtrar por categoría">
            <button
              type="button"
              className={`shop__filter${
                activeCategory === ALL ? " shop__filter--active" : ""
              }`}
              onClick={() => handleCategory(ALL)}
            >
              Todos
            </button>
            {productCategories.map((category) => (
              <button
                key={category.slug}
                type="button"
                className={`shop__filter${
                  activeCategory === category.slug ? " shop__filter--active" : ""
                }`}
                onClick={() => handleCategory(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla / estados vacíos ----------------------------------------- */}
        {hasResults ? (
          <Row className="g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} lg={4} xl={3} className="d-flex">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        ) : hasProducts ? (
          <div className="shop__empty">
            <h2 className="shop__empty-title">No encontramos productos</h2>
            <p className="shop__empty-text">
              Probá con otra búsqueda o seleccioná una categoría diferente.
            </p>
            <button
              type="button"
              className="btn-multi btn-multi-primary"
              onClick={handleReset}
            >
              Ver todos
            </button>
          </div>
        ) : (
          <div className="shop__empty">
            <h2 className="shop__empty-title">Estamos preparando la colección</h2>
            <p className="shop__empty-text">
              Muy pronto vas a poder explorar todos los productos de Multiversas.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Shop;
