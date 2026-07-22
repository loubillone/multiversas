import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Lleva el scroll al inicio cada vez que cambia la ruta.
 * Evita que una página nueva se muestre en la posición de scroll anterior.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
