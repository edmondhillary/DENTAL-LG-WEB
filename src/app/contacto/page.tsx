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
        <div className="container section-heading">
          <span className="eyebrow">Reservá tu cita</span>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Contacto directo, claro y sin fricción.</h1>
          <p>
            Completá el formulario, llamanos al {clinic.phoneDisplay} o escribinos por WhatsApp. Si es una urgencia, indicánoslo en el mensaje.
          </p>
        </div>
      </section>
      <ContactSection />
      <LocationPreview />
    </>
  );
}
