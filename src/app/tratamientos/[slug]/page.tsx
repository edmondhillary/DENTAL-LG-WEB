import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactSection, FaqPreview, TestimonialsPreview } from "@/components/site-sections";
import { treatments } from "@/data/site";
import { imageUrl } from "@/lib/utils";

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
        <div className="container editorial-grid">
          <div className="editorial-side editorial-stack">
            <span className="eyebrow">Tratamiento dental</span>
            <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.7rem)" }}>{treatment.name}</h1>
            <p className="lead">{treatment.description}</p>
            <div className="pill-list">
              {treatment.idealFor.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <div className="card card-elevated editorial-panel prose">
              <p>
                Este servicio está estructurado para posicionar bien en SEO, pero sobre todo para explicar con elegancia clínica lo que una persona necesita entender antes de decidir.
              </p>
            </div>
          </div>
          <div className="editorial-main">
            <div className="card media-card">
              <div style={{ position: "relative", minHeight: 620 }}>
                <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid-2">
          <article className="card editorial-panel prose">
            <h2 style={{ fontSize: "2.4rem" }}>Qué es y qué beneficios aporta</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{treatment.description}</p>
            <ul>
              {treatment.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>
          <article className="card dark-panel editorial-panel prose">
            <h2 style={{ fontSize: "2.4rem" }}>Para quién está indicado</h2>
            <ul>
              {treatment.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-sm soft-band">
        <div className="container info-band">
          {[
            {
              title: "Primera visita estratégica",
              copy: "Analizamos tu caso con calma para entender si este tratamiento es realmente el camino adecuado.",
            },
            {
              title: "Tecnología con sentido",
              copy: "Usamos herramientas digitales cuando elevan diagnóstico, precisión y previsibilidad del resultado.",
            },
            {
              title: "Resultado natural",
              copy: "La prioridad no es impresionar, sino conseguir función, armonía y una estética coherente con tu rostro.",
            },
          ].map((item) => (
            <article key={item.title} className="info-band-card">
              <strong style={{ color: "var(--brand-strong)", display: "block", fontSize: "1rem" }}>{item.title}</strong>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: ".65rem" }}>{item.copy}</p>
            </article>
          ))}
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
              <article key={step.title} className="card editorial-panel" style={{ display: "grid", gap: ".8rem" }}>
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
              <article key={item.title} className="card media-card">
                <div style={{ position: "relative", minHeight: 360 }}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="editorial-panel" style={{ display: "grid", gap: ".65rem" }}>
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
