import { MessageCircleMore } from "lucide-react";
import { clinic } from "@/data/site";
import styles from "./whatsapp-float.module.scss";

export function WhatsAppFloat() {
  return (
    <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp" className={styles.float}>
      <span className={styles.badge}>
        <MessageCircleMore size={24} />
      </span>
      <span className={styles.copy}>
        <strong>WhatsApp</strong>
        <small>Consulta rápida</small>
      </span>
    </a>
  );
}
