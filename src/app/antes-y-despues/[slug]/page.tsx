import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) return {};

  return {
    title: `${item.title} | Caso de éxito`,
    description: `${item.summary} Cómo llegó el paciente, qué se planificó y qué resultado se consiguió.`,
    alternates: { canonical: `/antes-y-despues/${item.slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src={imageUrl(item.heroImage)} alt={item.title} fill priority style={{ objectFit: "cover" }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Caso {item.caseCode} / {item.treatment}</span>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.copy}>{item.summary}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.stack}>
            <article className={styles.card}>
              <h2 className={styles.heading}>Cómo llegó</h2>
              <p className={styles.paragraph}>{item.arrivalState}</p>
            </article>
            <article className={styles.card}>
              <h2 className={styles.heading}>Problema detectado</h2>
              <p className={styles.paragraph}>{item.problem}</p>
            </article>
            <article className={styles.card}>
              <h2 className={styles.heading}>Solución aplicada</h2>
              <p className={styles.paragraph}>{item.solution}</p>
            </article>
          </div>
          <div className={styles.stack}>
            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <p className={styles.metricValue}>{item.duration}</p>
                <p className={styles.metricLabel}>Duración</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricValue}>{item.precision}</p>
                <p className={styles.metricLabel}>Precisión</p>
              </div>
            </div>
            <article className={styles.card}>
              <h2 className={styles.subheading}>Resultado</h2>
              <p className={styles.paragraph}>{item.result}</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.stack}>
          <h2 className={styles.heading}>Antes y después</h2>
          <div className={styles.imageCompare}>
            <div className={styles.imageCard}>
              <Image src={imageUrl(item.beforeImage)} alt={`${item.title} antes`} fill style={{ objectFit: "cover", filter: "grayscale(1) brightness(.84)" }} />
              <span className={styles.imageBadge}>Antes</span>
            </div>
            <div className={styles.imageCard}>
              <Image src={imageUrl(item.afterImage)} alt={`${item.title} después`} fill style={{ objectFit: "cover" }} />
              <span className={styles.imageBadge}>Después</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.stack}>
          <h2 className={styles.heading}>Galería del caso</h2>
          <div className={styles.galleryGrid}>
            {item.gallery.map((photo) => (
              <article key={photo.alt} className={styles.galleryItem}>
                <div className={styles.galleryImage}>
                  <Image src={imageUrl(photo.image)} alt={photo.alt} fill style={{ objectFit: "cover" }} />
                </div>
                <p className={styles.galleryCopy}>{photo.alt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.infoGrid}>
          <article className={styles.infoCard}>
            <h3 className={styles.subheading}>Planificación</h3>
            <p className={styles.infoText}>Cada caso se estudia desde función, biología y lectura estética. No se replica una receta: se define un recorrido clínico concreto.</p>
          </article>
          <article className={styles.infoCard}>
            <h3 className={styles.subheading}>Seguimiento</h3>
            <p className={styles.infoText}>El resultado final no depende solo del acto clínico, sino también del control posterior, los cuidados y la estabilidad del mantenimiento.</p>
          </article>
          <article className={styles.infoCard}>
            <h3 className={styles.subheading}>Nota clínica</h3>
            <p className={styles.infoText}>Los casos publicados son orientativos. La indicación exacta, tiempos y posibilidades reales siempre se definen en consulta.</p>
          </article>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaShell}>
          <h2 className={styles.ctaTitle}>¿Quieres valorar un caso parecido al tuyo?</h2>
          <p className={styles.ctaCopy}>Podemos estudiar tu situación con calma y explicarte qué opciones existen, qué limitaciones reales hay y qué recorrido tendría más sentido para ti.</p>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Solicitar consulta</Link>
            <Link href="/antes-y-despues" className="btn-secondary" style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,.24)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Volver a resultados</Link>
          </div>
        </div>
      </section>
    </>
  );
}
