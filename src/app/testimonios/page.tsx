import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/data/site";
import { imageUrl, stars } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Historias de pacientes y reseñas con una presentación editorial premium.",
};

export default function TestimonialsPage() {
  const featured = testimonials.slice(0, 2);
  const recent = testimonials.slice(2);

  return (
    <>
      <section style={{ padding: "6rem 2rem 4rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", padding: ".45rem 1rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".75rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Patient voices</span>
            <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.8rem,7vw,6.4rem)", fontWeight: 800, color: "var(--foreground)", lineHeight: 1.05, letterSpacing: "-0.05em", marginBottom: "1.5rem" }}>
              El arte de sonreír con <span style={{ color: "var(--brand)" }}>confianza.</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.15rem", lineHeight: 1.8, maxWidth: 560, marginBottom: "2rem" }}>
              Historias reales de pacientes que eligieron precisión, estética y una experiencia clínica muy por encima de lo convencional.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ display: "flex", marginLeft: 8 }}>
                {[0, 1, 2].map((index) => (
                  <div key={index} style={{ width: 48, height: 48, borderRadius: 999, overflow: "hidden", border: "2px solid white", marginLeft: index ? -12 : 0, position: "relative" }}>
                    <Image src={imageUrl(["https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80", "https://images.unsplash.com/photo-1594824475544-95bb7cbeae7c?auto=format&fit=crop&w=300&q=80"][index])} alt="Paciente" fill style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
              <div style={{ fontSize: ".95rem", fontWeight: 700 }}><span style={{ color: "var(--brand)", fontWeight: 800 }}>500+</span> reseñas cinco estrellas</div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80")} alt="Paciente feliz" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", left: -24, bottom: -24, background: "rgba(255,255,255,.7)", backdropFilter: "blur(20px)", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)", maxWidth: 220 }}>
              <span className="material-symbols-outlined" style={{ color: "var(--brand)", fontSize: 30, fontVariationSettings: '"FILL" 1', display: "block", marginBottom: ".5rem" }}>verified</span>
              <p style={{ fontWeight: 800, color: "var(--foreground)", lineHeight: 1.4 }}>98% de satisfacción declarada</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "var(--surface-low)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.5rem", fontWeight: 800, color: "var(--foreground)", marginBottom: ".5rem" }}>Historias destacadas</h2>
            <p style={{ color: "var(--muted)" }}>Casos más desarrollados de transformación y experiencia clínica.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "3rem" }}>
            {featured.map((item, index) => (
              <article key={item.name} style={{ display: "flex", gap: "2rem", background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
                <div style={{ width: 180, aspectRatio: "1 / 1", borderRadius: ".75rem", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <Image src={imageUrl(index === 0 ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" : "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80")} alt={item.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", gap: ".15rem", color: "var(--secondary)", marginBottom: "1rem" }}>
                    {stars(item.rating).map((star) => (
                      <span key={star} className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: '"FILL" 1' }}>star</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>&ldquo;{item.quote}&rdquo;</h3>
                  <p style={{ fontWeight: 800, fontSize: ".9rem" }}>{item.name}</p>
                  <p style={{ color: "var(--outline)", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".16em", marginTop: ".35rem" }}>{item.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.4rem", fontWeight: 800, color: "var(--foreground)" }}>Experiencias recientes</h2>
          <div style={{ width: 48, height: 4, borderRadius: 999, background: "var(--brand)", margin: "1rem auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "2rem" }}>
          {recent.map((item, index) => (
            <article key={item.name} style={{ background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,.02)", border: "1px solid rgba(195,198,214,.15)" }}>
              <div style={{ display: "flex", gap: ".15rem", color: "var(--secondary)", marginBottom: "1.25rem" }}>
                {stars(item.rating).map((star) => (
                  <span key={star} className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              <p style={{ color: "var(--muted)", fontStyle: "italic", lineHeight: 1.8, marginBottom: "2rem" }}>&ldquo;{item.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: ["#d5e3ff", "#cde5ff", "#93f2f2", "#365b91"][index % 4], color: index % 4 === 3 ? "white" : "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".75rem" }}>
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: ".9rem" }}>{item.name}</p>
                  <p style={{ color: "var(--outline)", fontSize: ".75rem" }}>{item.treatment}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "6rem 2rem 8rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ position: "relative", background: "var(--brand)", borderRadius: "2rem", overflow: "hidden", padding: "4rem 2rem", textAlign: "center" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80")} alt="Textura clínica" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.8rem,5vw,4.2rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>Viví la diferencia del Atelier.</h2>
            <p style={{ color: "#bcd4ff", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto 2rem" }}>Tu experiencia también puede ayudar a otros pacientes a tomar una decisión con más claridad y confianza.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <button className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>grade</span>
                Reseñar en Google
              </button>
              <button className="btn-secondary" style={{ background: "rgba(54,91,145,.45)", color: "white", borderColor: "rgba(255,255,255,.25)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>reviews</span>
                Reseñar en otra plataforma
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
