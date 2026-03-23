import type { Metadata } from "next";
import { ContactSection, LocationPreview } from "@/components/site-sections";
import { clinic } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto y cita dental",
  description: "Pedí cita en la Clínica Dental Lorenzo González por formulario, teléfono o WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container section-split">
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Reservá tu cita</span>
            <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Contacto directo, elegante y sin fricción.</h1>
            <p>Completá el formulario, llamanos al {clinic.phoneDisplay} o escribinos por WhatsApp. Si es una urgencia, indicánoslo en el mensaje.</p>
          </div>
          <div className="card dark-panel editorial-panel" style={{ alignSelf: "center" }}>
            <p style={{ lineHeight: 1.85 }}>La página de contacto también tiene que respirar confianza clínica: claridad, calma y una vía rápida para resolver dudas reales.</p>
          </div>
        </div>
      </section>
      <ContactSection />
      <LocationPreview />
    </>
  );
}
