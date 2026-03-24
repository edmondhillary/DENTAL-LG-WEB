import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ width: "100%", paddingTop: "5rem", paddingBottom: "2.5rem", background: "#f8fafc" }}>
      <div className="container footer-grid" style={{ paddingInline: "2rem", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ fontSize: "1.125rem", fontWeight: 900, color: "#1b4477", letterSpacing: "-.03em", fontFamily: "var(--font-headline)" }}>Clinical Atelier</div>
          <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: 1.8 }}>
            Redefiniendo la excelencia dental con precisión clínica, diseño editorial y atención humana de alto nivel.
          </p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-headline)", color: "var(--brand)", fontWeight: 700, marginBottom: "1.5rem", fontSize: ".875rem", textTransform: "uppercase", letterSpacing: ".14em" }}>Práctica</h4>
          <ul style={{ display: "grid", gap: "1rem", listStyle: "none" }}>
            <li><Link href="/tratamientos" style={{ color: "#64748b", fontSize: ".875rem" }}>Tratamientos</Link></li>
            <li><Link href="/antes-y-despues" style={{ color: "#64748b", fontSize: ".875rem" }}>Resultados</Link></li>
            <li><Link href="/sobre-nosotros" style={{ color: "#64748b", fontSize: ".875rem" }}>Filosofía</Link></li>
            <li><Link href="/contacto" style={{ color: "#64748b", fontSize: ".875rem" }}>Concierge</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-headline)", color: "var(--brand)", fontWeight: 700, marginBottom: "1.5rem", fontSize: ".875rem", textTransform: "uppercase", letterSpacing: ".14em" }}>Soporte</h4>
          <ul style={{ display: "grid", gap: "1rem", listStyle: "none" }}>
            <li><Link href="/faq" style={{ color: "#64748b", fontSize: ".875rem" }}>Preguntas frecuentes</Link></li>
            <li><span style={{ color: "#64748b", fontSize: ".875rem" }}>Privacidad</span></li>
            <li><span style={{ color: "#64748b", fontSize: ".875rem" }}>Accesibilidad</span></li>
            <li><span style={{ color: "#64748b", fontSize: ".875rem" }}>Derechos del paciente</span></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-headline)", color: "var(--brand)", fontWeight: 700, marginBottom: "1.5rem", fontSize: ".875rem", textTransform: "uppercase", letterSpacing: ".14em" }}>Newsletter</h4>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <input type="email" placeholder="Email" style={{ flex: 1, background: "white", border: "1px solid rgba(195,198,214,.35)", borderRadius: 12, padding: ".8rem 1rem", fontSize: ".875rem" }} />
            <button className="btn" style={{ minHeight: 44, paddingInline: "1rem", border: 0, cursor: "pointer" }}>→</button>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid rgba(195,198,214,.35)", paddingInline: "2rem", textAlign: "center", color: "#94a3b8", fontSize: ".875rem" }}>
        © 2026 Clinical Atelier. Precision in Dentistry.
      </div>
    </footer>
  );
}
