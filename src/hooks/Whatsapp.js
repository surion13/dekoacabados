// Reemplaza con tu número real, formato: código de país + número, sin espacios ni +
// Ejemplo Colombia: 573001234567
export const WHATSAPP_NUMBER = "573125152823";

export function getWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}