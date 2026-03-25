import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { TreatmentSearch } from "@/components/treatment-search";
import { treatmentCatalog } from "@/data/treatment-catalog";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Tratamientos dentales",
  description: "Explorá los tratamientos de la clínica con una estructura fiel al lenguaje visual premium de Clinical Atelier.",
};

export default function TreatmentsPage() {
  const cosmetic = [
    {
      title: "Carillas de porcelana",
      copy: "Láminas cerámicas diseñadas para redefinir forma, color y alineación con precisión microscópica.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
      href: "/tratamientos/carillas-de-porcelana",
    },
    {
      title: "Blanqueamiento boutique",
      copy: "Protocolos de oxígeno de alta potencia para devolver luminosidad con control de sensibilidad.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
      href: "/tratamientos/blanqueamiento-en-clinica",
    },
    {
      title: "Ortodoncia invisible",
      copy: "Alineación discreta guiada por simulación 3D para resultados previsibles y elegantes.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
      href: "/tratamientos/ortodoncia-invisible",
    },
  ];

  const restorative = [
    {
      title: "Coronas cerámicas",
      copy: "Restauraciones digitales que imitan la translucidez y la resistencia del esmalte natural.",
      href: "/tratamientos/coronas-ceramicas",
    },
    {
      title: "Puentes reconstructivos",
      copy: "Estructuras multiunidad diseñadas para devolver función y continuidad estética.",
      href: "/tratamientos/puentes-reconstructivos",
    },
  ];

  const foundation = [
    {
      title: "Revisiones preventivas",
      copy: "Controles periódicos con apoyo radiológico digital para detectar a tiempo cualquier alteración.",
      icon: "health_and_safety",
      highlight: true,
    },
    {
      title: "Higiene Air-Flow®",
      copy: "Eliminación delicada de biofilm y pigmentaciones mediante tecnología de aire y micropartículas.",
      icon: "waves",
    },
    {
      title: "Odontopediatría",
      copy: "Un entorno amable para construir una relación positiva con el cuidado oral desde pequeños.",
      icon: "child_care",
    },
  ];

  return (
    <main className={styles.page}>
      <div className={`pattern-dots ${styles.pattern}`} />

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Excelencia clínica
            </span>
            <h1 className={styles.heroTitle}>
              Precisión <br />
              <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>artesanal.</span>
            </h1>
              <p className={styles.heroCopy}>
              Combinamos ciencia dental avanzada y criterio estético para crear tratamientos funcionales, duraderos y visualmente naturales.
              </p>
          </div>
          <div className={styles.heroMediaWrap}>
            <div className={styles.heroMedia}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80")} alt="Consulta dental premium" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.heroNote}>
              <p className={styles.heroNoteTitle}>Estándar 2026</p>
              <p className={styles.heroNoteCopy}>Protocolos mínimamente invasivos orientados a durabilidad, función y naturalidad estética.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sections}>
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Atelier estético</h2>
              <p className={styles.sectionCopy} style={{ marginTop: ".35rem" }}>La armonía visual y el diseño de sonrisa.</p>
            </div>
            <div className={styles.sectionMeta}>Categoría 01</div>
          </div>
          <div className={styles.cardsGrid}>
            {cosmetic.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardMedia}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardCopy}>{item.copy}</p>
                <Link href={item.href} className={styles.inlineLink}>
                  Saber más <SiteIcon name="arrow_forward" size={18} className={styles.inlineLinkIcon} />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.searchWrap}>
          <TreatmentSearch
            items={treatmentCatalog}
            defaultVisibleCount={4}
            eyebrow="Explora todos los tratamientos"
            title="Buscá, filtrá y entrá directo al servicio que necesitás."
            description="Ahora el buscador indexa también todos los tratamientos y conceptos clínicos que aparecen en /precios, cada uno con su ficha específica."
          />
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Restauración avanzada</h2>
              <p className={styles.sectionCopy} style={{ marginTop: ".35rem" }}>Función, estabilidad y biomateriales de alto rendimiento.</p>
            </div>
            <div className={styles.sectionMeta}>Categoría 02</div>
          </div>
          <div className={styles.restorativeGrid}>
            <div className={styles.featureCard}>
              <Image src="/implant-3d-technical.svg" alt="Implantes dentales" fill style={{ objectFit: "cover" }} />
              <div className={styles.featureOverlay} />
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Implantes dentales</h3>
                <p className={styles.featureCopy}>Bases de titanio permanentes diseñadas para integrarse con la biología del paciente.</p>
                <Link href="/tratamientos/implante" className={`btn-secondary ${styles.featureAction}`}>Explorar tecnología</Link>
              </div>
            </div>
            <div className={styles.restorativeList}>
              {restorative.map((item) => (
                <div key={item.title} className={styles.restorativeItem}>
                  <SiteIcon name={item.title.includes("Coronas") ? "architecture" : "rebase_edit"} size={40} className={styles.restorativeIcon} />
                  <div>
                    <h4 className={styles.restorativeTitle}>{item.title}</h4>
                    <p className={styles.restorativeCopy}>{item.copy}</p>
                    <Link href={item.href} className={styles.inlineLink} style={{ fontSize: ".82rem", marginTop: ".65rem" }}>
                      Ver detalle <SiteIcon name="arrow_forward" size={16} className={styles.inlineLinkIcon} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Salud y base preventiva</h2>
              <p className={styles.sectionCopy} style={{ marginTop: ".35rem" }}>Cuidado proactivo para estabilidad clínica a largo plazo.</p>
            </div>
            <div className={styles.sectionMeta}>Categoría 03</div>
          </div>
          <div className={styles.foundationGrid}>
            {foundation.map((item) => (
              <div key={item.title} className={`${styles.foundationCard} ${item.highlight ? styles.foundationHighlight : ""}`} style={{ background: !item.highlight && item.title.includes("Air-Flow") ? "var(--surface-highest)" : undefined }}>
                <div className={styles.foundationTop}>
                  <SiteIcon name={item.icon} size={40} className={styles.foundationIcon} />
                  {item.highlight ? <span className={styles.foundationFlag}>ESENCIAL</span> : null}
                </div>
                <div>
                  <h3 className={styles.foundationTitle}>{item.title}</h3>
                  <p className={styles.foundationCopy}>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaShell}>
          <div className={`pattern-dots ${styles.pattern}`} style={{ opacity: 0.1 }} />
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Tu recorrido personalizado empieza acá.</h2>
              <p className={styles.ctaCopy}>Reserva una sesión diagnóstica completa. Estudiaremos tu caso con imagen avanzada para construir un mapa claro de tratamiento.</p>
              <div className={styles.ctaActions}>
                <Link href="/contacto" className={`btn ${styles.ctaAction}`}>Solicitar consulta</Link>
                <Link href="/precios" className={`btn-secondary ${styles.ctaAction}`}>Ver precios clínicos</Link>
              </div>
            </div>
            <div className={styles.ctaMedia}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80")} alt="Dentista de precisión" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
