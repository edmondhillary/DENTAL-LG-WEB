"use client";

import { Send } from "lucide-react";
import { clinic } from "@/data/site";
import styles from "./contact-form.module.scss";

export function ContactForm() {
  return (
    <form action={clinic.formspreeEndpoint} method="POST" className="card form-shell">
      <input type="hidden" name="_subject" value="Nueva solicitud desde la web de la clínica" />

      <div className="grid-2">
        <label className="field-label">
          <span>Nombre y apellidos</span>
          <input className="field-input" type="text" name="nombre" required placeholder="Tu nombre" />
        </label>
        <label className="field-label">
          <span>Teléfono</span>
          <input className="field-input" type="tel" name="telefono" required placeholder="Tu teléfono" />
        </label>
      </div>

      <div className="grid-2">
        <label className="field-label">
          <span>Email</span>
          <input className="field-input" type="email" name="email" required placeholder="Tu email" />
        </label>
        <label className="field-label">
          <span>Tratamiento de interés</span>
          <input className="field-input" type="text" name="tratamiento" placeholder="Implantes, ortodoncia, estética..." />
        </label>
      </div>

      <label className="field-label">
        <span>¿Qué te gustaría consultar?</span>
        <textarea
          className="field-input field-textarea"
          name="mensaje"
          required
          placeholder="Cuéntanos qué necesitas, qué te preocupa o qué tratamiento te interesa."
        />
      </label>

      <button className={`btn ${styles.submit}`} type="submit">
        <Send size={18} /> Enviar solicitud
      </button>

      <p className={styles.disclaimer}>
        Al enviar, tus datos se remiten de forma segura a través de Formspree para que el equipo de la clínica pueda responderte.
      </p>
    </form>
  );
}
