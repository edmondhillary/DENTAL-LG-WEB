"use client";

import { Send } from "lucide-react";
import type { CSSProperties } from "react";
import { clinic } from "@/data/site";

const inputStyle: CSSProperties = {
  width: "100%",
  minHeight: 54,
  padding: "0 1rem",
  borderRadius: 16,
  border: "1px solid var(--border)",
  background: "white",
};

export function ContactForm() {
  return (
    <form action={clinic.formspreeEndpoint} method="POST" className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
      <input type="hidden" name="_subject" value="Nueva solicitud desde la web de la clínica" />
      <div className="grid-2">
        <label style={{ display: "grid", gap: ".5rem" }}>
          <span>Nombre y apellidos</span>
          <input style={inputStyle} type="text" name="nombre" required placeholder="Tu nombre" />
        </label>
        <label style={{ display: "grid", gap: ".5rem" }}>
          <span>Teléfono</span>
          <input style={inputStyle} type="tel" name="telefono" required placeholder="Tu teléfono" />
        </label>
      </div>
      <div className="grid-2">
        <label style={{ display: "grid", gap: ".5rem" }}>
          <span>Email</span>
          <input style={inputStyle} type="email" name="email" required placeholder="Tu email" />
        </label>
        <label style={{ display: "grid", gap: ".5rem" }}>
          <span>Tratamiento de interés</span>
          <input style={inputStyle} type="text" name="tratamiento" placeholder="Implantes, ortodoncia, estética..." />
        </label>
      </div>
      <label style={{ display: "grid", gap: ".5rem" }}>
        <span>¿Qué te gustaría consultar?</span>
        <textarea
          name="mensaje"
          required
          placeholder="Contanos qué necesitás, qué te preocupa o qué tratamiento te interesa."
          style={{ ...inputStyle, minHeight: 160, padding: "1rem" }}
        />
      </label>
      <button className="btn" type="submit" style={{ border: 0, cursor: "pointer" }}>
        <Send size={18} /> Enviar solicitud
      </button>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: ".95rem" }}>
        Al enviar, tus datos se remiten de forma segura a través de Formspree para que el equipo de la clínica pueda responderte.
      </p>
    </form>
  );
}
