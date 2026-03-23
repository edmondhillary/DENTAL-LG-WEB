import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactSection, FaqPreview, TestimonialsPreview } from "@/components/site-sections";
import { treatments } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return {};
  }

  return {
    title: treatment.name,
    description: `${treatment.shortDescription} Tratamiento en Valencia con enfoque premium, FAQ específica y primera visita personalizada.`,
    alternates: { canonical: `/tratamientos/${treatment.slug}` },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) notFound();

  return (
    <>
      <section className="section">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <div style={{ display: "grid", gap: "1.2rem" }}>
            <span className="eyebrow">Tratamiento dental</span>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.2rem)" }}>{treatment.name}</h1>
            <p className="lead">{treatment.description}</p>
            <div className="pill-list">
              {treatment.idealFor.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="card surface-soft" style={{ padding: "1rem" }}>
            <div style={{ position: "relative", minHeight: 540, borderRadius: 28, overflow: "hidden" }}>
              <Image src={treatment.heroImage} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid-2">
          <article className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
            <h2 style={{ fontSize: "2.4rem" }}>Qué es y qué beneficios aporta</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{treatment.description}</p>
            <ul>
              {treatment.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>
          <article className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
            <h2 style={{ fontSize: "2.4rem" }}>Para quién está indicado</h2>
            <ul>
              {treatment.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Paso a paso</span>
            <h2>Así trabajamos este tratamiento</h2>
            <p>Sin improvisación. Cada fase tiene un propósito clínico y una explicación sencilla.</p>
          </div>
          <div className="grid-4">
            {treatment.process.map((step, index) => (
              <article key={step.title} className="card" style={{ padding: "1.3rem", display: "grid", gap: ".8rem" }}>
                <span className="eyebrow">0{index + 1}</span>
                <h3 style={{ fontSize: "1.75rem" }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Antes y después</span>
            <h2>Casos inspirados en resultados reales</h2>
            <p>Una muestra visual premium para reforzar la confianza y el contexto SEO de cada servicio.</p>
          </div>
          <div className="grid-2">
            {treatment.beforeAfter.map((item) => (
              <article key={item.title} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: 320 }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.2rem", display: "grid", gap: ".65rem" }}>
                  <h3 style={{ fontSize: "1.8rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsPreview limit={3} />
      <FaqPreview items={treatment.faqs} />
      <ContactSection />
    </>
  );
}
