import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteIcon } from "@/components/site-icon";
import { clinic } from "@/data/site";
import { getTreatmentBySlug, treatmentCatalog } from "@/data/treatment-catalog";
import { formatStartingPrice, imageUrl, phoneHref } from "@/lib/utils";
import styles from "./page.module.scss";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatmentCatalog.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};

  return {
    title: treatment.name,
    description: treatment.description,
    alternates: { canonical: `/tratamientos/${treatment.slug}` },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) notFound();

  const commonFaqs = treatment.commonFaqs?.length ? treatment.commonFaqs : treatment.faqs;
  const technicalFaqs = treatment.technicalFaqs?.length ? treatment.technicalFaqs : treatment.faqs;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill priority style={{ objectFit: "cover" }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{treatment.eyebrow ?? treatment.category}</span>
            <h1 className={styles.heroTitle}>
              {treatment.name.split(" ")[0]} <br />
              <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>
                {treatment.name.split(" ").slice(1).join(" ") || "premium"}.
              </span>
            </h1>
            <p className={styles.heroCopy}>{treatment.description}</p>
            <div className={styles.pill}>
              <SiteIcon name="verified" size={16} /> Primera visita gratuita (sin radiografía)
            </div>
            <p className={styles.price}>{formatStartingPrice(treatment.startingPrice)}</p>
            <div className={styles.actions}>
              <Link href="/contacto" className={`btn ${styles.action}`}>Solicitar consulta</Link>
              <Link href="/precios" className={`btn-secondary ${styles.action}`}>Ver precios clínicos</Link>
              <a href={phoneHref(clinic.phone)} className={`btn-secondary ${styles.action} ${styles.phoneAction}`}>
                <SiteIcon name="call" size={18} />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.twoColSection}>
        <div className={styles.introGrid}>
          <div className={styles.mediaWrap}>
            <div className={styles.media}>
              <Image src={imageUrl(treatment.detailImage)} alt={treatment.detailImageAlt} fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.mediaNote}>
              <p className={styles.noteEyebrow}>Visión clínica</p>
              <p className={styles.noteCopy}>{treatment.detailIntro}</p>
            </div>
          </div>
          <div>
            <h2 className={styles.sectionTitle}>Qué aporta este tratamiento</h2>
            <p className={styles.introCopy}>
              {treatment.detailIntro} En clínica priorizamos indicación honesta, ejecución precisa y un mantenimiento que sostenga el resultado más allá de la primera fase.
            </p>
            <div className={styles.benefits}>
              {treatment.benefits.slice(0, 4).map((benefit, index) => (
                <div key={benefit} className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <SiteIcon name={["verified", "auto_fix_high", "restaurant", "face_retouching_natural"][index] ?? "verified"} size={20} />
                  </div>
                  <div>
                    <h4 className={styles.benefitTitle}>{benefit}</h4>
                    <p className={styles.benefitCopy}>{treatment.process[index]?.description ?? treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.trustHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Qué genera confianza en este plan</h2>
            <p className={styles.sectionLead}>
              Acá no vendemos humo. Estas son las bases clínicas y de proceso que hacen que el tratamiento tenga sentido a medio y largo plazo.
            </p>
          </div>
          <div className={styles.processMeta}>Trust component</div>
        </div>
        <div className={styles.trustGrid}>
          {treatment.trustPoints.map((point, index) => (
            <article key={point} className={styles.trustCard}>
              <div className={styles.trustIconWrap}>
                <SiteIcon name={["biotech", "shield", "monitor_heart"][index] ?? "verified"} size={22} />
              </div>
              <h3 className={styles.trustTitle}>{point}</h3>
              <p className={styles.cardCopy}>{treatment.process[index]?.description ?? treatment.detailIntro}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.simpleSection}>
        <div className={styles.simpleSection} style={{ padding: 0, background: "transparent" }}>
          <div className={styles.simpleIntro}>
          <h2 className={styles.simpleTitle}>¿Es el tratamiento adecuado para ti?</h2>
            <p className={styles.sectionLead}>
              Priorizamos el éxito a largo plazo. Un buen candidato reúne condiciones biológicas, funcionales y de mantenimiento concretas.
            </p>
          </div>
          <div className={styles.candidateGrid}>
            {treatment.idealFor.slice(0, 3).map((item, index) => (
              <article key={item} className={styles.candidateCard}>
                <SiteIcon name={["skeleton", "health_metrics", "event_repeat"][index] ?? "check_circle"} size={40} className={styles.candidateIcon} />
                <h3 className={styles.candidateTitle}>{["Perfil clínico", "Objetivo funcional", "Compromiso de cuidado"][index] ?? "Candidato ideal"}</h3>
                <p className={styles.cardCopy}>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processSection} style={{ padding: 0, background: "transparent" }}>
          <div className={styles.processHeader}>
            <div style={{ maxWidth: 640 }}>
              <h2 className={styles.processTitle}>El recorrido clínico</h2>
              <p className={styles.sectionLead}>Una secuencia pensada con criterio: desde el estudio inicial hasta el control de la fase final.</p>
            </div>
            <div className={styles.processMeta}>Protocolo clínico</div>
          </div>
          <div className={styles.processGrid}>
            {treatment.process.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <div className={styles.stepNumber}>0{index + 1}</div>
                <div className={styles.stepContent}>
                  <SiteIcon name={["biotech", "precision_manufacturing", "hourglass_top", "brush"][index] ?? "biotech"} size={22} className={styles.stepIcon} />
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepCopy}>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.resultsSection} style={{ padding: 0, background: "transparent" }}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.resultsTitle}>Resultados clínicos</h2>
            <Link href="/antes-y-despues" className={styles.resultsLink}>
              Ver galería completa <SiteIcon name="arrow_right_alt" size={18} />
            </Link>
          </div>
          <div className={styles.resultsGrid}>
            {treatment.beforeAfter.map((item, index) => (
              <div key={item.title} className={styles.resultCard}>
                <div className={styles.resultMedia}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover", filter: "grayscale(1)" }} />
                  <div className={styles.resultBadges}>
                    <span className={styles.caseBadge}>CASO #{4021 + index}</span>
                    <span className={styles.typeBadge}>{index === 0 ? "RESTAURATIVO" : "ESTÉTICO"}</span>
                  </div>
                </div>
                <div className={styles.resultRow}>
                  <div>
                    <h4 className={styles.resultTitle}>{item.title}</h4>
                    <p className={styles.resultCopy}>{item.description}</p>
                  </div>
                  <div className={styles.resultTag}>Resultado</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqSectionInner}>
          <div className={styles.faqIntro}>
            <h2 className={styles.faqTitle}>Preguntas frecuentes</h2>
            <p className={styles.faqCopy}>
              Respuestas claras para pacientes y, además, un bloque técnico para entender mejor criterios, materiales y secuencias.
            </p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqColumn}>
              <div className={styles.faqColumnHeader}>
                <span className={styles.faqBadge}>FAQ normal</span>
                <h3 className={styles.faqColumnTitle}>Dudas habituales</h3>
              </div>
              <FaqAccordion items={commonFaqs} />
            </div>
            <div className={styles.faqColumn}>
              <div className={styles.faqColumnHeader}>
                <span className={styles.faqBadge}>FAQ técnica</span>
                <h3 className={styles.faqColumnTitle}>Criterio clínico</h3>
              </div>
              <FaqAccordion items={technicalFaqs} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaShell}>
          <div className={styles.ctaBg}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80")} alt="Ambiente clínico premium" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Empieza hoy tu tratamiento con una valoración precisa.</h2>
            <p className={styles.ctaCopy}>Reserva una sesión diagnóstica para explorar tus posibilidades con calma, imagen avanzada y criterio clínico real.</p>
            <div className={styles.ctaActions}>
              <Link href="/contacto" className={`btn-secondary ${styles.ctaPrimary}`}>Reservar consulta</Link>
              <Link href="/precios" className={`btn-secondary ${styles.ctaSecondary}`}>Ver precios clínicos</Link>
              <a href={phoneHref(clinic.phone)} className={styles.ctaPhone}>
                <SiteIcon name="call" size={18} />
                Llamar ahora
              </a>
            </div>
          </div>
          <div className={styles.orbit}>
            <div className={styles.orbitOuter}>
              <div className={styles.orbitInner}>
                <SiteIcon name="medical_services" size={56} className={styles.orbitIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
