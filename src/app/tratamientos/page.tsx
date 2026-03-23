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
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Tratamientos</span>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Soluciones dentales con lógica clínica y estética natural.</h1>
            <p>
              Navegá por nuestras áreas de tratamiento y encontrá páginas específicas pensadas para informar, posicionar bien en SEO y ayudarte a decidir con claridad.
            </p>
          </div>
          <div className="grid-3">
            {treatments.map((treatment, index) => (
              <AnimateIn key={treatment.slug} delay={index * 0.04}>
                <TreatmentCard treatment={treatment} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
