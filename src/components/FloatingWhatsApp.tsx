import { waLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink("Hello Arabian Essence Exports, I would like to inquire about wholesale fragrances.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-luxe"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8 fill-white">
        <path d="M16 .395C7.164.395 0 7.559 0 16.395c0 2.84.742 5.61 2.152 8.05L0 32l7.781-2.117a15.94 15.94 0 0 0 8.219 2.246c8.836 0 16-7.164 16-16S24.836.395 16 .395zm0 29.18a13.143 13.143 0 0 1-6.715-1.84l-.48-.286-4.617 1.254 1.234-4.5-.312-.465a13.16 13.16 0 1 1 10.89 5.836zm7.531-9.844c-.41-.207-2.43-1.2-2.808-1.336-.375-.137-.65-.207-.925.207s-1.063 1.336-1.301 1.605c-.238.273-.477.305-.887.102-.41-.207-1.73-.637-3.297-2.031-1.219-1.086-2.04-2.426-2.281-2.836-.238-.41-.025-.633.18-.84.184-.184.41-.477.617-.715.207-.238.273-.41.41-.683.137-.273.07-.516-.035-.723-.102-.207-.926-2.234-1.27-3.054-.336-.804-.676-.695-.93-.707l-.793-.014c-.273 0-.715.102-1.09.516-.375.41-1.43 1.402-1.43 3.418 0 2.016 1.464 3.964 1.668 4.238.207.273 2.879 4.395 6.984 6.164.977.422 1.738.676 2.332.867.98.313 1.871.27 2.578.164.789-.117 2.43-.992 2.773-1.953.34-.961.34-1.785.238-1.953-.102-.172-.375-.273-.785-.481z"/>
      </svg>
    </motion.a>
  );
}