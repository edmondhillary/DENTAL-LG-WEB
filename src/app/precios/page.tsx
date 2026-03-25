import type { Metadata } from "next";
import Link from "next/link";
import { pricingGroups } from "@/data/site";
import { getTreatmentHrefByPricingItem } from "@/data/treatment-catalog";
import { formatStartingPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Precios clínicos",
  description: "Tabla orientativa de precios clínicos agrupados por tratamiento.",
};

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 6rem" }}>
      <header style={{ maxWidth: 840, marginBottom: "4rem" }}>
        <span style={{ display: "inline-flex", alignItems: "center", padding: ".45rem 1rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".75rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Tarifas orientativas</span>
        <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.6rem,7vw,6rem)", fontWeight: 800, color: "var(--brand)", lineHeight: 1.02, letterSpacing: "-0.05em", marginBottom: "1.5rem" }}>Precios clínicos por tratamiento.</h1>
        <p style={{ color: "var(--muted)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>Estos importes son orientativos y pueden variar según el diagnóstico y la complejidad clínica. Siempre confirmamos el presupuesto tras la valoración personalizada.</p>
        <p style={{ color: "var(--brand)", fontWeight: 800 }}>Primera visita gratuita (sin radiografía)</p>
      </header>

      <div style={{ display: "grid", gap: "2rem" }}>
        {pricingGroups.map((group) => (
          <section key={group.slug} style={{ background: "white", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 20px 50px rgba(25,28,30,.06)", border: "1px solid rgba(195,198,214,.15)" }}>
            <div style={{ padding: "1.5rem 2rem", background: "var(--surface-low)" }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2rem", fontWeight: 800, color: "var(--brand)" }}>{group.title}</h2>
            </div>
            <div style={{ display: "grid" }}>
              {group.items.map((item, index) => {
                const href = getTreatmentHrefByPricingItem(group.slug, item.name);

                return (
                  <Link
                    key={item.name}
                    href={href}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.6fr .6fr",
                      gap: "1rem",
                      padding: "1rem 2rem",
                      borderTop: index ? "1px solid rgba(195,198,214,.15)" : 0,
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ display: "grid", gap: ".35rem" }}>
                      <span style={{ color: "var(--foreground)", fontWeight: 700 }}>{item.name}</span>
                      <span style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".78rem", letterSpacing: ".12em", textTransform: "uppercase" }}>
                        Ver detalle clínico →
                      </span>
                    </span>
                    <span style={{ color: "var(--brand)", fontWeight: 800, textAlign: "right" }}>{formatStartingPrice(item.price)}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div style={{ marginTop: "4rem", background: "var(--brand)", borderRadius: "2rem", padding: "3rem 2rem", color: "white", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.4rem,4vw,3.4rem)", fontWeight: 800, marginBottom: "1rem" }}>¿Necesitas un presupuesto detallado?</h2>
        <p style={{ color: "#d5e3ff", maxWidth: 760, margin: "0 auto 1.75rem", lineHeight: 1.8 }}>Solicita una valoración clínica y te explicaremos opciones, tiempos y costes con total claridad.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/contacto" className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Solicitar valoración</Link>
          <Link href="/tratamientos" className="btn-secondary" style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,.25)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Ver tratamientos</Link>
        </div>
      </div>
    </main>
  );
}
