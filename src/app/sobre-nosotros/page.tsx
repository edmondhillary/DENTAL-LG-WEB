import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { FinalCta } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé la historia de la Clínica Dental Lorenzo González, su enfoque humano y su apuesta por la odontología avanzada en Valencia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <AnimateIn>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <span className="eyebrow">Nuestra historia</span>
              <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Una clínica con memoria, evolución y criterio.</h1>
              <p className="lead">
                Llevamos más de 37 años acompañando a pacientes y familias en Valencia. Y sí, la experiencia importa. Pero solo sirve si se actualiza.
              </p>
              <div className="prose">
                <p>
                  Por eso nuestra forma de trabajar combina la calma de quien ha visto cientos de casos con la precisión de quien adopta nuevas tecnologías cuando realmente mejoran el resultado.
                </p>
                <p>
                  No creemos en el lujo vacío. Creemos en una experiencia cuidada, instalaciones limpias, decisiones bien explicadas y tratamientos con sentido clínico.
                </p>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="card surface-soft" style={{ padding: "1rem" }}>
              <div style={{ position: "relative", minHeight: 560, borderRadius: 28, overflow: "hidden" }}>
                <Image
                  src="https://images.unsplash.com/photo-1581594693700-43af9c7f5e9c?auto=format&fit=crop&w=1200&q=80"
                  alt="Instalaciones modernas y luminosas de clínica dental"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {[
            {
              title: "Misión",
              text: "Ofrecer odontología excelente, entendible y humana, con planes reales y decisiones que respeten al paciente.",
            },
            {
              title: "Valores",
              text: "Honestidad clínica, atención cercana, actualización continua y obsesión por la calidad en cada detalle.",
            },
            {
              title: "Instalaciones",
              text: "Espacios serenos, tecnología diagnóstica digital y un entorno pensado para transmitir seguridad desde que entrás.",
            },
          ].map((item) => (
            <article key={item.title} className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
              <h2 style={{ fontSize: "2rem" }}>{item.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
