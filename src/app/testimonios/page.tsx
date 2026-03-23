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
        <div className="container section-heading">
          <span className="eyebrow">Testimonios</span>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Reseñas que construyen confianza de verdad.</h1>
          <p>Diseño limpio, valoración visible y una narrativa realista para reforzar credibilidad y conversión.</p>
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
