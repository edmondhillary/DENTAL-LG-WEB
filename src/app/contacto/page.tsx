import type { Metadata } from "next";
import { ContactSection, LocationPreview } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Contacto y reserva",
  description: "Página de contacto y reserva con una experiencia premium y clara.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <header style={{ maxWidth: 760 }}>
          <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(4rem,7vw,6.4rem)", fontWeight: 800, color: "var(--brand)", letterSpacing: "-0.05em", marginBottom: "1.5rem" }}>
            Empieza tu recorrido hacia la <span style={{ color: "var(--secondary)" }}>precisión.</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8 }}>Vive una experiencia dental coordinada desde el primer contacto, con orientación humana y una logística de atención cuidada al detalle.</p>
        </header>
      </section>
      <ContactSection />
      <LocationPreview />
    </>
  );
}
