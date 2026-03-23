import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { globalFaqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respondemos dudas frecuentes sobre tratamientos, citas, tecnología y atención en nuestra clínica dental de Valencia.",
};

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container hero-grid" style={{ alignItems: "start" }}>
        <div className="section-heading" style={{ marginBottom: 0 }}>
          <span className="eyebrow">FAQ</span>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.2rem)" }}>Preguntas frecuentes antes de dar el paso.</h1>
          <p>Una lectura cómoda, clara y pensada para resolver objeciones reales antes de reservar.</p>
        </div>
        <FaqAccordion items={globalFaqs} />
      </div>
    </section>
  );
}
