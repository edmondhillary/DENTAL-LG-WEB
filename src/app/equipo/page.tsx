import type { Metadata } from "next";
import { TeamPreview, FinalCta } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Equipo dental",
  description: "Conocé al equipo médico de la Clínica Dental Lorenzo González en Valencia.",
};

export default function TeamPage() {
  return (
    <>
      <section className="section">
        <div className="container section-heading">
          <span className="eyebrow">Equipo</span>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Profesionales que inspiran confianza desde la primera conversación.</h1>
          <p>
            Nuestro equipo combina experiencia, especialización y una manera muy humana de acompañar a cada paciente.
          </p>
        </div>
      </section>
      <TeamPreview />
      <FinalCta />
    </>
  );
}
