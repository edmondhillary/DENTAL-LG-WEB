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
        <div className="container section-split">
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Equipo</span>
            <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Profesionales que transmiten calma, presencia y criterio desde el primer contacto.</h1>
            <p>Nuestro equipo combina experiencia, especialización y una forma serena de acompañar cada tratamiento.</p>
          </div>
          <div className="card card-elevated editorial-panel" style={{ alignSelf: "center" }}>
            <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>
              Queremos que la presentación del equipo se sienta más cercana a una clínica privada contemporánea: humana, limpia y con autoridad suave.
            </p>
          </div>
        </div>
      </section>
      <TeamPreview />
      <FinalCta />
    </>
  );
}
