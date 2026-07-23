import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMonitor } from "react-icons/fi";

import { WHATSAPP_NUMBER, openWhatsApp } from "../../config/whatsapp";

/*
  Datos de contacto editables.
  Reemplazar los placeholders cuando estén disponibles los datos reales.
  El número de WhatsApp se toma de src/config/whatsapp.js.
*/
const CONTACT_EMAIL = "[Correo electrónico]";
const WHATSAPP_LABEL = WHATSAPP_NUMBER || "[Número de WhatsApp]";

const WHATSAPP_MESSAGE =
  "Hola, vi la web de Multiversas y quisiera realizar una consulta.";

function ContactInfo() {
  return (
    <aside className="contact-info">
      <h2 className="contact-info__title">Hablemos</h2>
      <p className="contact-info__text">
        Cada consulta es bienvenida. Escribime y te acompaño a encontrar la
        opción que mejor se adapte a lo que estás buscando.
      </p>

      <ul className="contact-info__list">
        <li className="contact-info__item">
          <span className="contact-info__icon" aria-hidden="true">
            <FaWhatsapp />
          </span>
          <div>
            <span className="contact-info__label">WhatsApp</span>
            <span className="contact-info__value">{WHATSAPP_LABEL}</span>
          </div>
        </li>

        <li className="contact-info__item">
          <span className="contact-info__icon" aria-hidden="true">
            <FiMail />
          </span>
          <div>
            <span className="contact-info__label">Correo electrónico</span>
            <span className="contact-info__value">{CONTACT_EMAIL}</span>
          </div>
        </li>

        <li className="contact-info__item">
          <span className="contact-info__icon" aria-hidden="true">
            <FiMonitor />
          </span>
          <div>
            <span className="contact-info__label">Modalidad</span>
            <span className="contact-info__value">
              Atención presencial y online
            </span>
          </div>
        </li>
      </ul>

      <button
        type="button"
        className="btn-multi contact-info__whatsapp"
        onClick={() => openWhatsApp(WHATSAPP_MESSAGE)}
      >
        <FaWhatsapp aria-hidden="true" />
        Escribirme por WhatsApp
      </button>
    </aside>
  );
}

export default ContactInfo;
