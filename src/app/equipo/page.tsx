import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/site";
import { imageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Equipo dental",
  description: "Conocé al equipo clínico de la clínica con una presentación editorial premium.",
};

export default function TeamPage() {
  return (
    <>
      <section style={{ position: "relative", minHeight: 716, display: "flex", alignItems: "center", overflow: "hidden", background: "var(--surface-low)", marginBottom: "4rem" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80")} alt="Equipo clínico" fill style={{ objectFit: "cover", opacity: 0.9 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,.82), transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", width: "100%", padding: "0 2rem" }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{ display: "inline-block", padding: ".45rem 1rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", marginBottom: "1.5rem" }}>Precisión de clase mundial</span>
            <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.6rem,7vw,6.6rem)", lineHeight: 1.05, letterSpacing: "-0.05em", color: "var(--brand)", marginBottom: "1.5rem", fontWeight: 800 }}>
              Las manos detrás <br /> del arte clínico.
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620 }}>
              Nuestro equipo reúne criterio, especialización y una forma profundamente humana de acompañar cada caso con rigor y elegancia.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 2rem 6rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "4rem", alignItems: "center", marginBottom: "6rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.5rem", fontWeight: 800, color: "var(--brand)", marginBottom: "2rem" }}>Excelencia clínica como estándar</h2>
            <div style={{ display: "grid", gap: "2rem" }}>
              {[
                ["verified", "Especialización real", "Cada miembro senior trabaja desde formación avanzada y un criterio clínico profundamente afinado."],
                ["biotech", "Enfoque guiado por evidencia", "La actualización constante es parte del estándar, no un argumento de marketing."],
              ].map(([icon, title, copy]) => (
                <div key={title} style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: icon === "verified" ? "#d5e3ff" : "#93f2f2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: icon === "verified" ? "var(--brand)" : "var(--tertiary)" }}>{icon}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.2rem", fontWeight: 800, color: "var(--brand)", marginBottom: ".35rem" }}>{title}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", height: 420, borderRadius: "1rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80")} alt="Tecnología y trabajo clínico" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div style={{ marginBottom: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.5rem", fontWeight: 800, color: "var(--brand)", marginBottom: ".75rem" }}>Nuestros clínicos</h2>
            <p style={{ color: "var(--muted)" }}>Especialistas que trabajan con precisión, método y sensibilidad estética.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "2.5rem" }}>
            {team.slice(0, 3).map((member, index) => (
              <article key={member.name} style={{ background: "white", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
                  <Image src={imageUrl(member.image)} alt={member.name} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", left: 16, right: 16, bottom: 16, background: "rgba(255,255,255,.7)", backdropFilter: "blur(20px)", borderRadius: 16, padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".16em", color: "var(--brand)" }}>{index === 0 ? "Dirección clínica" : index === 1 ? "Estética" : "Ortodoncia"}</span>
                    <span className="material-symbols-outlined" style={{ color: "var(--brand)" }}>share</span>
                  </div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.6rem", fontWeight: 800, color: "var(--brand)" }}>{member.name}</h3>
                      <p style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 600 }}>{member.role}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: "var(--brand)", fontSize: 30 }}>{index === 0 ? "school" : index === 1 ? "palette" : "biotech"}</span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8, marginBottom: "1rem" }}>{member.bio}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 999, border: "1px solid rgba(195,198,214,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand)" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>link</span>
                    </div>
                    <span style={{ fontSize: ".7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--outline)" }}>Perfil profesional</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "5rem", alignItems: "center", marginBottom: "6rem" }}>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "1 / 1", borderRadius: "1.5rem", overflow: "hidden", position: "relative", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1516549655669-df4a2b8315db?auto=format&fit=crop&w=1200&q=80")} alt="Equipo relajado" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: -40, right: -40, width: 256, height: 256, background: "rgba(213,227,255,.35)", borderRadius: "1.5rem", zIndex: -1 }} />
            <div style={{ position: "absolute", top: -24, left: -24, background: "var(--tertiary-fixed)", borderRadius: "1rem", padding: "1rem 1.25rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
              <p style={{ fontFamily: "var(--font-headline)", fontWeight: 800, color: "#002020" }}>150+ años combinados</p>
              <p style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".16em", color: "rgba(0,32,32,.7)" }}>Experiencia clínica</p>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1.5rem" }}>Precisión con empatía</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>Más allá de la tecnología y del conocimiento técnico, entendemos que el éxito clínico también depende de cómo se acompaña a la persona durante todo el proceso.</p>
            <div style={{ background: "var(--surface-low)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid rgba(195,198,214,.2)", marginBottom: "1.5rem" }}>
              <p style={{ fontStyle: "italic", color: "var(--foreground)", lineHeight: 1.8, marginBottom: ".75rem" }}>“No solo tratan dientes: cuidan personas. La atención y el detalle son realmente excepcionales.”</p>
              <p style={{ color: "var(--brand)", fontSize: ".8rem", fontWeight: 800 }}>— Paciente desde 2021</p>
            </div>
            <button style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", border: 0, background: "transparent", color: "var(--brand)", fontWeight: 800, cursor: "pointer" }}>
              Conocé al equipo completo <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <section style={{ padding: "6rem 2rem", background: "var(--brand)", borderRadius: "2rem", color: "white", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 56, color: "#bcd4ff", fontVariationSettings: '"FILL" 1', marginBottom: "1rem" }}>spa</span>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,4.6rem)", fontWeight: 800, marginBottom: "1rem" }}>Viví una odontología reimaginada.</h2>
            <p style={{ color: "#d5e3ff", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>Una primera conversación puede cambiar cómo entendés tu salud oral, tu estética y tu experiencia dentro de la clínica.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/contacto" className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Solicitar consulta</Link>
              <Link href="/tratamientos" className="btn-secondary" style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,.25)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Ver tratamientos</Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
