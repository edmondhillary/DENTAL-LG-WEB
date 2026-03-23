import Link from "next/link";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { clinic, navigation } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <div className="container section" style={{ display: "grid", gap: "2rem" }}>
            <div className="footer-grid">
              <div style={{ display: "grid", gap: "1rem" }}>
                <span className="eyebrow" style={{ width: "fit-content", color: "white", background: "rgba(255,255,255,.1)" }}>
                  Clínica dental privada
                </span>
                <h3 className="footer-title">{clinic.name}</h3>
                <p className="footer-copy">
                  Clínica dental en Valencia con una visión serena, tecnológica y profundamente humana. Tratamientos bien explicados, ejecutados con precisión y pensados para durar.
                </p>
                <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" className="footer-link">
                  <MessageCircleMore size={18} /> WhatsApp directo para primeras consultas
                </a>
              </div>

              <div style={{ display: "grid", gap: "0.95rem" }}>
                <strong>Explorar</strong>
                <div className="footer-links">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: "0.95rem" }}>
                <strong>Contacto</strong>
                <div className="footer-contact">
                  <a href={phoneHref(clinic.phone)} className="footer-contact-item">
                    <Phone size={18} /> {clinic.phoneDisplay}
                  </a>
                  <a href={`mailto:${clinic.email}`} className="footer-contact-item">
                    <Mail size={18} /> {clinic.email}
                  </a>
                  <span className="footer-contact-item" style={{ alignItems: "start" }}>
                    <MapPin size={18} style={{ marginTop: 4 }} /> {clinic.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="divider" style={{ background: "rgba(255,255,255,.12)" }} />

            <div className="footer-bottom">
              <span>© 2026 {clinic.name}. Todos los derechos reservados.</span>
              <span className="footer-meta">Experiencia, precisión y atención humana desde hace más de 37 años.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
