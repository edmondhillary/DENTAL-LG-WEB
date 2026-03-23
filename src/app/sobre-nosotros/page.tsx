import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { FinalCta } from "@/components/site-sections";
import { imageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé la historia de la Clínica Dental Lorenzo González, su enfoque humano y su apuesta por la odontología avanzada en Valencia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container editorial-grid">
          <AnimateIn>
            <div className="editorial-side editorial-stack">
              <span className="eyebrow">Nuestra historia</span>
              <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Una clínica con memoria, refinamiento y visión de futuro.</h1>
              <p className="lead">
                Llevamos más de 37 años acompañando a pacientes y familias en Valencia. La experiencia importa, pero solo tiene valor cuando se transforma en calma, criterio y actualización constante.
              </p>
              <div className="card card-elevated editorial-panel prose">
                <p>
                  Nuestra forma de trabajar combina la serenidad de una trayectoria clínica consolidada con la precisión de una odontología digital contemporánea.
                </p>
                <p>
                  No creemos en el lujo vacío. Creemos en una experiencia cuidada, espacios luminosos, decisiones bien explicadas y tratamientos con sentido médico real.
                </p>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08} className="editorial-main">
            <div className="card media-card">
              <div style={{ position: "relative", minHeight: 620 }}>
                <Image
                  src={imageUrl("https://images.unsplash.com/photo-1581594693700-43af9c7f5e9c?auto=format&fit=crop&w=1400&q=80")}
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
              text: "Ofrecer odontología excelente, comprensible y humana, con planes sobrios, realistas y centrados en el bienestar a largo plazo.",
            },
            {
              title: "Valores",
              text: "Honestidad clínica, atención cercana, actualización constante y un estándar alto en cada pequeño detalle de la experiencia.",
            },
            {
              title: "Instalaciones",
              text: "Espacios serenos, tecnología diagnóstica actual y un entorno pensado para transmitir seguridad desde el primer minuto.",
            },
          ].map((item) => (
            <article key={item.title} className="card editorial-panel" style={{ display: "grid", gap: "1rem" }}>
              <h2 style={{ fontSize: "2rem" }}>{item.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
