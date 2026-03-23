import { MessageCircleMore } from "lucide-react";
import { clinic } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp" className="wa-float">
      <span className="wa-float-badge">
        <MessageCircleMore size={24} />
      </span>
      <span className="wa-float-copy">
        <strong>WhatsApp</strong>
        <small>Consulta rápida</small>
      </span>
    </a>
  );
}
