import type { Metadata } from "next";
import { SiteIcon } from "@/components/site-icon";
import { BeforeAfterArchiveClient } from "./archive-client";

export const metadata: Metadata = {
  title: "Antes y después",
  description: "Archivo visual de resultados clínicos y restauraciones premium.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <section style={{ padding: "6rem 2rem 4rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ maxWidth: 760 }}>
              <span style={{ display: "inline-flex", alignItems: "center", padding: ".45rem 1rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", marginBottom: "1.25rem" }}>Archivo clínico</span>
              <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.8rem,7vw,6.2rem)", fontWeight: 800, color: "var(--foreground)", lineHeight: .95, letterSpacing: "-0.05em", marginBottom: "1rem" }}>
                La precisión de la <span style={{ color: "var(--brand)" }}>artesanía clínica.</span>
              </h1>
              <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8 }}>Explora una galería cuidada de tratamientos restauradores y estéticos donde la función y la belleza trabajan juntas.</p>
            </div>
            <div style={{ background: "var(--surface-low)", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(195,198,214,.2)", maxWidth: 320 }}>
              <p style={{ color: "var(--secondary)", fontWeight: 700, fontSize: ".9rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;La excelencia no es un acto, sino una disciplina clínica meticulosa.&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: "#d5e3ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SiteIcon name="verified" size={18} style={{ color: "var(--brand)" }} />
                </div>
                <span style={{ fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em" }}>Estándar clínico 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterArchiveClient />
    </>
  );
}
