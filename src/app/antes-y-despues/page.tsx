import type { Metadata } from "next";
import Image from "next/image";
import { SiteIcon } from "@/components/site-icon";
import { beforeAfterCases } from "@/data/site";
import { imageUrl } from "@/lib/utils";

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
              <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8 }}>Explorá una galería curada de tratamientos restauradores y estéticos donde la función y la belleza trabajan juntas.</p>
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

      <section style={{ position: "sticky", top: 88, zIndex: 40, background: "rgba(247,249,251,.8)", backdropFilter: "blur(12px)", padding: "1.5rem 0", borderBlock: "1px solid rgba(195,198,214,.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", gap: "1rem", overflowX: "auto", alignItems: "center" }}>
          <span style={{ fontSize: ".7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", color: "var(--muted)", whiteSpace: "nowrap", marginRight: ".5rem" }}>Filtrar por:</span>
          {[
            ["Todos", true],
            ["Implantes", false],
            ["Carillas", false],
            ["Ortodoncia", false],
            ["Estética", false],
          ].map(([label, active]) => (
            <button key={label} style={{ padding: ".65rem 1.25rem", borderRadius: 999, border: 0, background: active ? "var(--brand)" : "var(--surface-highest)", color: active ? "white" : "var(--muted)", fontSize: ".85rem", fontWeight: 600, whiteSpace: "nowrap" }}>{label}</button>
          ))}
        </div>
      </section>

      <section style={{ padding: "5rem 2rem 8rem", maxWidth: 1280, margin: "0 auto", display: "grid", gap: "6rem" }}>
        {beforeAfterCases.slice(0, 3).map((item, index) => (
          <div key={item.title} style={{ display: "grid", gridTemplateColumns: index === 2 ? "repeat(2, minmax(0,1fr))" : "8fr 4fr", gap: "3rem", alignItems: "center" }}>
            {index !== 2 ? (
              <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 8, background: "white", padding: 8, borderRadius: "1rem", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", borderRadius: ".75rem" }}>
                  <Image src={imageUrl(item.image)} alt={`${item.title} antes`} fill style={{ objectFit: "cover", filter: "grayscale(1) brightness(.8)" }} />
                  <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,.4)", color: "white", padding: ".35rem .8rem", borderRadius: 999, fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em" }}>Antes</div>
                </div>
                <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", borderRadius: ".75rem" }}>
                  <Image src={imageUrl(item.image)} alt={`${item.title} después`} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(27,68,119,.85)", color: "white", padding: ".35rem .8rem", borderRadius: 999, fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em" }}>Después</div>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
                <div>
                  <p style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".18em", marginBottom: ".75rem" }}>Caso 0744 / {item.treatment}</p>
                  <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2.3rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "1rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{item.outcome}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1rem" }}>
                  <div style={{ padding: "1rem", background: "var(--surface-low)", borderRadius: ".75rem", textAlign: "center" }}>
                    <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--brand)" }}>10</p>
                    <p style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".16em", color: "var(--muted)" }}>Unidades</p>
                  </div>
                  <div style={{ padding: "1rem", background: "var(--surface-low)", borderRadius: ".75rem", textAlign: "center" }}>
                    <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--brand)" }}>BL2</p>
                    <p style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".16em", color: "var(--muted)" }}>Shade match</p>
                  </div>
                </div>
              </div>
            )}

            {index !== 2 ? (
              <div style={{ display: "grid", gap: "1.25rem" }}>
                <div>
                  <p style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".18em", marginBottom: ".75rem" }}>Caso {String(912 + index).padStart(4, "0")} / {item.treatment}</p>
                  <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "1rem" }}>{item.title}</h3>
                </div>
                <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{item.outcome}</p>
                <div style={{ background: "rgba(147,242,242,.28)", padding: "1.5rem", borderRadius: "1rem", display: "grid", gap: ".85rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".9rem" }}><span style={{ color: "#004f4f" }}>Duración</span><strong>4 meses</strong></div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".9rem" }}><span style={{ color: "#004f4f" }}>Precisión</span><strong>Sub-micrónica</strong></div>
                </div>
                <button style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", border: 0, background: "transparent", color: "var(--brand)", fontWeight: 800, cursor: "pointer" }}>Ver caso detallado <SiteIcon name="arrow_forward" size={18} /></button>
              </div>
            ) : (
              <div style={{ position: "relative", minHeight: 440, borderRadius: "2rem", overflow: "hidden" }}>
                <Image src={imageUrl("https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80")} alt="Hero de blanqueamiento" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(27,68,119,.7), transparent)" }} />
                  <div style={{ position: "relative", zIndex: 1, height: "100%", padding: "3rem", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", alignItems: "center", gap: "2rem" }}>
                    <div style={{ color: "white" }}>
                      <span style={{ display: "inline-block", padding: ".35rem .8rem", borderRadius: 999, background: "rgba(255,255,255,.2)", backdropFilter: "blur(10px)", fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".16em", marginBottom: "1rem" }}>Blanqueamiento</span>
                      <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2.8rem", fontWeight: 900, marginBottom: "1rem" }}>Claridad iluminada.</h3>
                      <p style={{ color: "#d5e3ff", lineHeight: 1.8 }}>Protocolos premium de aclaramiento para resultados homogéneos, medibles y mucho más controlados.</p>
                    </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "min(320px, 100%)", maxWidth: "100%", aspectRatio: "1 / 1", background: "rgba(255,255,255,.12)", backdropFilter: "blur(20px)", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,.2)", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white" }}>
                      <div style={{ width: 192, height: 192, borderRadius: 999, border: "8px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                        <span style={{ fontSize: "3rem", fontWeight: 900 }}>+8 tonos</span>
                      </div>
                      <h4 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: ".5rem" }}>Aclarado medio estimado</h4>
                      <p style={{ color: "rgba(255,255,255,.72)", fontSize: ".9rem", lineHeight: 1.7 }}>Referencia orientativa sobre guía de color. El resultado final depende del punto de partida y del esmalte.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <section style={{ padding: "4rem 0 0", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 900, color: "var(--foreground)", lineHeight: 1.05, marginBottom: "1rem" }}>¿Listo para empezar tu recorrido?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto 2rem" }}>Las consultas son privadas, meticulosas y diseñadas en torno a tu biología, tu estética y tus objetivos reales.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <button className="btn" style={{ minHeight: 56, paddingInline: "2rem", fontSize: "1rem" }}>Solicitar consulta</button>
            <button className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem", fontSize: "1rem" }}>Ver precios clínicos</button>
          </div>
        </section>
      </section>
    </>
  );
}
