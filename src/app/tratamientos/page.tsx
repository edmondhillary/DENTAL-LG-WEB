import type { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { FinalCta, TreatmentCard } from "@/components/site-sections";
import { treatments } from "@/data/site";

export const metadata: Metadata = {
  title: "Tratamientos dentales",
  description:
    "Descubrí nuestros tratamientos dentales en Valencia: implantes, ortodoncia, estética, periodoncia, odontopediatría, urgencias y más.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="section">
        <div className="container section-split">
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Tratamientos</span>
            <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Soluciones dentales con una lógica médica clara y una estética serena.</h1>
            <p>
              Navegá por nuestras áreas de tratamiento y encontrá páginas específicas pensadas para informar, posicionar bien en SEO y ayudarte a decidir con criterio.
            </p>
          </div>
          <div className="card card-elevated editorial-panel" style={{ alignSelf: "center" }}>
            <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>
              Priorizamos tratamientos con explicación limpia, visual coherente y una estructura por servicio que refuerza confianza y calidad percibida.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid-3">
          {treatments.map((treatment, index) => (
            <AnimateIn key={treatment.slug} delay={index * 0.04}>
              <TreatmentCard treatment={treatment} />
            </AnimateIn>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
