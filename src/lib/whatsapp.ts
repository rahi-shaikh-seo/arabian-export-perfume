export const WHATSAPP_NUMBER = "919913298992";
export const WHATSAPP_DISPLAY = "+91 99132 98992";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}