"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteIcon } from "@/components/site-icon";
import { caseStudies, caseStudyCategories } from "@/data/case-studies";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

export function BeforeAfterArchiveClient() {
  const [activeCategory, setActiveCategory] = useState<(typeof caseStudyCategories)[number]>("Todos");

  const visibleCases = useMemo(() => {
    if (activeCategory === "Todos") return caseStudies;
    return caseStudies.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>Filtrar por:</span>
          <div className={styles.filterScroll}>
            {caseStudyCategories.map((label) => {
              const active = label === activeCategory;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={`${styles.filterButton} ${active ? styles.filterButtonActive : ""}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.casesSection}>
        <div className={styles.casesInner}>
          {visibleCases.map((item, index) => (
            <div key={item.slug} className={`${styles.caseRow} ${index === 2 ? styles.caseRowFeature : styles.caseRowDefault}`}>
              {index !== 2 ? (
                <div className={styles.beforeAfterMedia}>
                  <div className={styles.mediaCard}>
                    <Image src={imageUrl(item.beforeImage)} alt={`${item.title} antes`} fill style={{ objectFit: "cover", filter: "grayscale(1) brightness(.8)" }} />
                    <div className={`${styles.mediaLabel} ${styles.mediaLabelBefore}`}>Antes</div>
                  </div>
                  <div className={styles.mediaCard}>
                    <Image src={imageUrl(item.afterImage)} alt={`${item.title} después`} fill style={{ objectFit: "cover" }} />
                    <div className={`${styles.mediaLabel} ${styles.mediaLabelAfter}`}>Después</div>
                  </div>
                </div>
              ) : (
                <div className={styles.featureInfo}>
                  <div>
                    <p className={styles.caseMeta}>Caso {item.caseCode} / {item.treatment}</p>
                    <h3 className={styles.caseTitle}>{item.title}</h3>
                    <p className={styles.caseCopy}>{item.summary}</p>
                  </div>
                  <div className={styles.featureStats}>
                    <div className={styles.statCard}>
                      <p className={styles.statValue}>{item.duration}</p>
                      <p className={styles.statLabel}>Duración</p>
                    </div>
                    <div className={styles.statCard}>
                      <p className={styles.statValue}>{item.precision}</p>
                      <p className={styles.statLabel}>Precisión</p>
                    </div>
                  </div>
                </div>
              )}

              {index !== 2 ? (
                <div className={styles.caseInfo}>
                  <div>
                    <p className={styles.caseMeta}>Caso {item.caseCode} / {item.treatment}</p>
                    <h3 className={styles.caseTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.caseCopy}>{item.summary}</p>
                  <div className={styles.metrics}>
                    <div className={styles.metricRow}><span className={styles.metricLabel}>Duración</span><strong>{item.duration}</strong></div>
                    <div className={styles.metricRow}><span className={styles.metricLabel}>Precisión</span><strong>{item.precision}</strong></div>
                  </div>
                  <Link href={`/antes-y-despues/${item.slug}`} className={styles.detailLink}>Ver caso detallado <SiteIcon name="arrow_forward" size={18} /></Link>
                </div>
              ) : (
                <div className={styles.featureMedia}>
                  <Image src={imageUrl(item.heroImage)} alt={`Caso ${item.caseCode} ${item.title}`} fill style={{ objectFit: "cover" }} />
                  <div className={styles.featureOverlay} />
                  <div className={styles.featureInner}>
                    <div className={styles.featureText}>
                      <span className={styles.featureBadge}>{item.category}</span>
                      <h3 className={styles.featureTitle}>{item.title}</h3>
                      <p className={styles.featureCopy}>{item.summary}</p>
                      <Link href={`/antes-y-despues/${item.slug}`} className={styles.detailLink} style={{ color: "white", marginTop: "1.25rem" }}>Ver caso detallado <SiteIcon name="arrow_forward" size={18} /></Link>
                    </div>
                    <div className={styles.featureCardWrap}>
                      <div className={styles.featureCard}>
                        <div className={styles.featureCircle}>
                          <span className={styles.featureCircleValue}>{item.precision}</span>
                        </div>
                        <h4 className={styles.featureCardTitle}>Resultado orientativo</h4>
                        <p className={styles.featureCardCopy}>{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <section style={{ padding: "4rem 0 0", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 900, color: "var(--foreground)", lineHeight: 1.05, marginBottom: "1rem" }}>¿Listo para empezar tu recorrido?</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto 2rem" }}>Las consultas son privadas, meticulosas y diseñadas en torno a tu biología, tu estética y tus objetivos reales.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <button className="btn" style={{ minHeight: 56, paddingInline: "2rem", fontSize: "1rem" }}>Solicitar consulta</button>
              <button className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem", fontSize: "1rem" }}>Ver precios clínicos</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
