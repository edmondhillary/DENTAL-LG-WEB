import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { clinic, navigation } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer style={{ marginTop: "auto", background: "#0b1c2d", color: "#e2edf7" }}>
      <div className="container section" style={{ display: "grid", gap: "2rem" }}>
        <div className="grid-3">
          <div style={{ display: "grid", gap: "1rem" }}>
            <h3 style={{ fontSize: "2rem" }}>{clinic.name}</h3>
            <p style={{ color: "rgba(226,237,247,.78)", lineHeight: 1.7 }}>
              Clínica dental premium en Valencia con un enfoque humano, tecnología actual y tratamientos diseñados para durar.
            </p>
          </div>

          <div style={{ display: "grid", gap: "0.9rem" }}>
            <strong>Enlaces rápidos</strong>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: "0.9rem" }}>
            <strong>Contacto</strong>
            <a href={phoneHref(clinic.phone)} style={{ display: "inline-flex", gap: ".65rem", alignItems: "center" }}>
              <Phone size={18} /> {clinic.phoneDisplay}
            </a>
            <a href={`mailto:${clinic.email}`} style={{ display: "inline-flex", gap: ".65rem", alignItems: "center" }}>
              <Mail size={18} /> {clinic.email}
            </a>
            <span style={{ display: "inline-flex", gap: ".65rem", alignItems: "center", lineHeight: 1.6 }}>
              <MapPin size={18} /> {clinic.address}
            </span>
          </div>
        </div>

        <div className="divider" style={{ background: "rgba(255,255,255,.12)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", color: "rgba(226,237,247,.72)" }}>
          <span>© 2026 {clinic.name}. Todos los derechos reservados.</span>
          <span>Experiencia, precisión y atención humana desde hace más de 37 años.</span>
        </div>
      </div>
    </footer>
  );
}
