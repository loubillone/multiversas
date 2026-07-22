import { Routes, Route } from "react-router-dom";

import NavbarMultiversas from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Constellations from "./pages/Constellations";
import Workshops from "./pages/Workshops";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <NavbarMultiversas />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-paula" element={<About />} />
          <Route path="/constelaciones" element={<Constellations />} />
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
