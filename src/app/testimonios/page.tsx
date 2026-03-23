import type { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { FinalCta, ReviewCard } from "@/components/site-sections";
import { testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Opiniones y reseñas de pacientes de la Clínica Dental Lorenzo González en Valencia.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section">
        <div className="container section-split" style={{ marginBottom: "2rem" }}>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Testimonios</span>
            <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Reseñas con una presentación más editorial y más creíble.</h1>
            <p>Diseño limpio, jerarquía clara y una voz visual que refuerza confianza sin parecer plantilla.</p>
          </div>
          <div className="card editorial-panel dark-panel" style={{ alignSelf: "center" }}>
            <p style={{ lineHeight: 1.85 }}>La confianza también se diseña. El objetivo acá es que cada testimonio se sienta como parte de una clínica de referencia, no de una landing genérica.</p>
          </div>
        </div>
        <div className="container grid-3">
          {testimonials.map((item, index) => (
            <AnimateIn key={`${item.name}-${index}`} delay={index * 0.05}>
              <ReviewCard {...item} />
            </AnimateIn>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
