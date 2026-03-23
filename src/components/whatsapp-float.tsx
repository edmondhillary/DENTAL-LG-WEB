import { MessageCircleMore } from "lucide-react";
import { clinic } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={clinic.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: 62,
        height: 62,
        borderRadius: "999px",
        background: "linear-gradient(135deg, #25d366, #128c7e)",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 18px 35px rgba(18,140,126,.3)",
        zIndex: 60,
      }}
    >
      <MessageCircleMore size={28} />
    </a>
  );
}
