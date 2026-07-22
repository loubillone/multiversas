import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NavbarMultiversas from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Constellations from "./pages/Constellations";
import IndividualConstellation from "./pages/IndividualConstellation";
import GroupConstellation from "./pages/GroupConstellation";
import Counseling from "./pages/Counseling";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import ResourceDiscoverTheme from "./pages/ResourceDiscoverTheme";
import ResourceEntrepreneurship from "./pages/ResourceEntrepreneurship";
import Workshops from "./pages/Workshops";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavbarMultiversas />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-paula" element={<About />} />
          <Route path="/constelaciones" element={<Constellations />} />
          <Route
            path="/constelaciones/individuales"
            element={<IndividualConstellation />}
          />
          <Route
            path="/constelaciones/grupales"
            element={<GroupConstellation />}
          />
          <Route
            path="/constelaciones/counseling"
            element={<Counseling />}
          />
          <Route path="/recursos" element={<Resources />} />
          <Route
            path="/recursos/lo-que-rechazamos"
            element={<ResourceDetail />}
          />
          <Route
            path="/recursos/descubri-que-tema-constelar"
            element={<ResourceDiscoverTheme />}
          />
          <Route
            path="/recursos/fortalece-tu-emprendimiento"
            element={<ResourceEntrepreneurship />}
          />
          <Route path="/talleres" element={<Workshops />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
