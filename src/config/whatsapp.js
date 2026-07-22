import Swal from "sweetalert2";

/*
  Configuración centralizada de WhatsApp.
  Número en formato internacional sin "+", ni espacios ni guiones.
  Ej: "5493511234567". Dejar como cadena vacía hasta contar con el número real.
*/
export const WHATSAPP_NUMBER = "";

// Abre WhatsApp con un mensaje prellenado.
// Si el número aún no está configurado, muestra el aviso estándar del proyecto.
export function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER) {
    Swal.fire({
      icon: "info",
      title: "Número de WhatsApp pendiente de configurar.",
      confirmButtonColor: "#6d5a91",
    });
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
