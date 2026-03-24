import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { globalFaqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Patient support / FAQ",
  description: "Página de soporte con buscador, categorías y respuestas frecuentes.",
};

export default function FaqPage() {
  return (
    <>
      <section style={{ position: "relative", padding: "6rem 2rem 4rem", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "var(--tertiary-fixed)", color: "#002020", padding: ".45rem 1rem", borderRadius: 999, fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", marginBottom: "1.5rem" }}>Patient support</span>
          <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.8rem,7vw,6.4rem)", fontWeight: 800, color: "var(--brand)", lineHeight: 1.05, letterSpacing: "-0.05em", maxWidth: 980, margin: "0 auto 2rem" }}>
            ¿Cómo podemos refinar tu <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>experiencia?</span>
          </h1>
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            <span className="material-symbols-outlined" style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", color: "var(--outline)" }}>search</span>
            <input type="text" placeholder="Buscar tratamientos, costes o citas..." style={{ width: "100%", background: "white", border: 0, padding: "1.5rem 2rem 1.5rem 4rem", borderRadius: 999, boxShadow: "0 20px 50px rgba(25,28,30,.06)", fontSize: "1.1rem" }} />
          </div>
        </div>
        <div style={{ position: "absolute", top: -96, right: -96, width: 384, height: 384, borderRadius: 999, background: "rgba(27,68,119,.05)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", top: "50%", left: -96, width: 256, height: 256, borderRadius: 999, background: "rgba(0,99,152,.05)", filter: "blur(40px)" }} />
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 8rem", display: "flex", gap: "4rem" }}>
        <aside style={{ width: "25%" }}>
          <div style={{ position: "sticky", top: 128, display: "grid", gap: ".75rem" }}>
            <h3 style={{ fontFamily: "var(--font-headline)", fontSize: ".75rem", fontWeight: 900, color: "var(--outline)", textTransform: "uppercase", letterSpacing: ".2em", marginBottom: "1rem", paddingLeft: "1rem" }}>Categorías</h3>
            {[
              ["calendar_today", "Citas", true],
              ["medical_services", "Tratamientos", false],
              ["payments", "Costes e insurance", false],
              ["verified_user", "Seguridad del paciente", false],
            ].map(([icon, label, active]) => (
              <a key={label} href={`#${label}`} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.5rem", borderRadius: "1rem", background: active ? "var(--brand)" : "transparent", color: active ? "white" : "var(--muted)", textDecoration: "none" }}>
                <span className="material-symbols-outlined">{icon}</span>
                <span style={{ fontWeight: 700 }}>{label}</span>
              </a>
            ))}
          </div>
        </aside>

        <div style={{ flex: 1, display: "grid", gap: "5rem" }}>
          <section id="Citas">
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2rem", borderBottom: "1px solid rgba(195,198,214,.2)", paddingBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)" }}>Citas</h2>
              <span style={{ color: "var(--outline)", fontSize: ".9rem" }}>4 preguntas frecuentes</span>
            </div>
            <FaqAccordion items={globalFaqs.slice(0, 2)} />
          </section>

          <section id="Tratamientos">
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2rem", borderBottom: "1px solid rgba(195,198,214,.2)", paddingBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)" }}>Tratamientos</h2>
              <span style={{ color: "var(--outline)", fontSize: ".9rem" }}>6 preguntas frecuentes</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1.5rem" }}>
              <div style={{ gridColumn: "span 2 / span 2", background: "linear-gradient(135deg, var(--brand), #003366)", borderRadius: "1.75rem", padding: "2.5rem", color: "white", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
                  <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>Carillas de precisión: el proceso</h3>
                  <p style={{ color: "#d5e3ff", lineHeight: 1.8, marginBottom: "1.5rem" }}>Nuestro protocolo estrella de carillas cerámicas combina planificación digital, mock-up y ejecución artesanal para lograr naturalidad real.</p>
                  <button className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 48, paddingInline: "1.25rem", fontWeight: 800 }}>
                    Ver galería del tratamiento <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
              {[
                {
                  title: "¿Cuánto dura un blanqueamiento?",
                  copy: "Entre 12 y 24 meses según hábitos, esmalte y seguimiento. Suele mantenerse mejor cuando se combina con higiene y controles regulares.",
                },
                {
                  title: "¿Trabajáis con sedación?",
                  copy: "Sí, cuando está clínicamente indicado. Priorizamos confort, previsibilidad y seguridad en procedimientos más sensibles o extensos.",
                },
              ].map((item) => (
                <article key={item.title} style={{ background: "white", padding: "2rem", borderRadius: "1.75rem", border: "1px solid rgba(195,198,214,.15)", boxShadow: "0 4px 20px rgba(0,0,0,.02)" }}>
                  <h4 style={{ fontFamily: "var(--font-headline)", fontSize: "1.2rem", fontWeight: 800, marginBottom: ".75rem" }}>{item.title}</h4>
                  <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.8, marginBottom: "1rem" }}>{item.copy}</p>
                  <a href="#" style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".14em", display: "inline-flex", alignItems: "center", gap: ".35rem" }}>
                    Más detalles <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="Costes e insurance">
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2rem", borderBottom: "1px solid rgba(195,198,214,.2)", paddingBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)" }}>Costes e insurance</h2>
              <span style={{ color: "var(--outline)", fontSize: ".9rem" }}>3 preguntas frecuentes</span>
            </div>
            <FaqAccordion items={globalFaqs.slice(2, 4)} />
          </section>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem 8rem" }}>
        <div style={{ background: "var(--surface-low)", borderRadius: "3rem", padding: "4rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,4.5rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>¿Seguís con preguntas?</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto 2rem" }}>Nuestro equipo de concierge clínico puede ayudarte a resolver dudas sobre tratamiento, tiempos, financiación o urgencias.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <button className="btn" style={{ minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Hablar con un especialista</button>
              <button className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Escribir por email</button>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: -80, right: -80, width: 256, height: 256, borderRadius: 999, background: "rgba(0,99,152,.1)", filter: "blur(28px)" }} />
          <div style={{ position: "absolute", top: -80, left: -80, width: 256, height: 256, borderRadius: 999, background: "rgba(0,76,76,.1)", filter: "blur(28px)" }} />
        </div>
      </section>
    </>
  );
}
