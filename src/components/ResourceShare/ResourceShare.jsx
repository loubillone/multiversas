import { FaWhatsapp } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Swal from "sweetalert2";

import "./ResourceShare.css";

/**
 * Sección reutilizable para compartir un recurso.
 * Recibe el mensaje base y agrega automáticamente la URL actual.
 */
function ResourceShare({ shareMessage }) {
  const handleShareWhatsApp = () => {
    const text = `${shareMessage} ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      Swal.fire({
        icon: "success",
        title: "Enlace copiado",
        confirmButtonColor: "#6d5a91",
        timer: 1800,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "No se pudo copiar el enlace",
        confirmButtonColor: "#6d5a91",
      });
    }
  };

  return (
    <section className="resource-share">
      <h2 className="resource-share__title">Compartí este ejercicio</h2>
      <p className="resource-share__text">
        Tal vez estas palabras también puedan acompañar a alguien más.
      </p>
      <div className="resource-share__actions">
        <button
          type="button"
          className="btn-multi resource-share__whatsapp"
          onClick={handleShareWhatsApp}
        >
          <FaWhatsapp aria-hidden="true" />
          Compartir por WhatsApp
        </button>
        <button
          type="button"
          className="btn-multi btn-multi-outline"
          onClick={handleCopyLink}
        >
          <FiLink aria-hidden="true" />
          Copiar enlace
        </button>
      </div>
    </section>
  );
}

export default ResourceShare;
