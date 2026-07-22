import { Modal, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

import "./TransferModal.css";

/*
  Número de WhatsApp pendiente de configurar.
  Formato internacional sin "+", ni espacios ni guiones. Ej: "5493511234567".
  Dejar como cadena vacía hasta contar con el número real.
*/
const WHATSAPP_NUMBER = "";

// Datos bancarios demostrativos · reemplazar antes de publicar la versión final
const TRANSFER_DATA = {
  alias: "ALIAS.DE.EJEMPLO",
  titular: "Nombre de la titular",
  banco: "Banco de ejemplo",
};

function TransferModal({
  show,
  onHide,
  serviceName,
  modality,
  price,
  whatsappMessage,
}) {
  const handleWhatsApp = () => {
    if (!WHATSAPP_NUMBER) {
      Swal.fire({
        icon: "info",
        title: "Número de WhatsApp pendiente de configurar.",
        confirmButtonColor: "#6d5a91",
      });
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      keyboard
      aria-labelledby="transfer-modal-title"
      contentClassName="transfer-modal"
    >
      <Modal.Header closeButton className="transfer-modal__header">
        <Modal.Title id="transfer-modal-title" className="transfer-modal__title">
          Reservá tu sesión
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="transfer-modal__body">
        <p className="transfer-modal__intro">
          Realizá la transferencia para confirmar tu reserva. Una vez enviado el
          comprobante, coordinaremos el día y horario de la sesión.
        </p>

        <div className="transfer-modal__summary">
          <div className="transfer-modal__row">
            <span>Servicio</span>
            <strong>{serviceName}</strong>
          </div>
          <div className="transfer-modal__row">
            <span>Modalidad</span>
            <strong>{modality}</strong>
          </div>
          <div className="transfer-modal__row">
            <span>Valor</span>
            <strong className="transfer-modal__price">{price}</strong>
          </div>
        </div>

        <div className="transfer-modal__bank">
          <h3 className="transfer-modal__bank-title">Datos para transferir</h3>
          <div className="transfer-modal__row">
            <span>Alias</span>
            <strong>{TRANSFER_DATA.alias}</strong>
          </div>
          <div className="transfer-modal__row">
            <span>Titular</span>
            <strong>{TRANSFER_DATA.titular}</strong>
          </div>
          <div className="transfer-modal__row">
            <span>Banco</span>
            <strong>{TRANSFER_DATA.banco}</strong>
          </div>
        </div>

        <p className="transfer-modal__note">
          Datos demostrativos. Reemplazar antes de publicar la versión final.
        </p>
      </Modal.Body>

      <Modal.Footer className="transfer-modal__footer">
        <Button
          className="btn-multi btn-multi-primary transfer-modal__whatsapp"
          onClick={handleWhatsApp}
        >
          <FaWhatsapp aria-hidden="true" />
          Enviar comprobante por WhatsApp
        </Button>
        <Button
          className="btn-multi btn-multi-outline transfer-modal__close"
          onClick={onHide}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TransferModal;
