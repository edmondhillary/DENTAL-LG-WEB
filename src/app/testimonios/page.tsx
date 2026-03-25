import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { clinic, testimonials } from "@/data/site";
import { imageUrl, stars } from "@/lib/utils";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Historias de pacientes y reseñas con una presentación editorial premium.",
};

const avatarPalette = ["#d5e3ff", "#cde5ff", "#93f2f2", "#365b91"];

export default function TestimonialsPage() {
  const featured = testimonials.slice(0, 2);
  const recent = testimonials.slice(2);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <span className={styles.eyebrow}>Voces de pacientes</span>
            <h1 className={styles.title}>
              El arte de sonreír con <span style={{ color: "var(--brand)" }}>confianza.</span>
            </h1>
            <p className={styles.heroCopy}>
              Historias reales de pacientes que eligieron precisión, estética y una experiencia clínica muy por encima de lo convencional.
            </p>
            <div className={styles.heroProof}>
              <div className={styles.proofAvatars}>
                {[0, 1, 2].map((index) => (
                  <div key={index} className={styles.proofAvatar}>
                    <Image
                      src={imageUrl([
                        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
                        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&q=80",
                      ][index])}
                      alt="Paciente"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <a href={clinic.googleReviewsUrl} target="_blank" rel="noreferrer" className={styles.proofLink}>
                <span className={styles.googleBadge} aria-hidden="true">
                  <span className={styles.googleGlyph}>G</span>
                </span>
                <span><strong style={{ color: "var(--brand)" }}>28</strong> Google reviews</span>
              </a>
            </div>
          </div>

          <div className={styles.heroMediaWrap}>
            <div className={styles.heroMedia}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80")} alt="Paciente feliz" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.heroBadgeCard}>
              <SiteIcon name="verified" size={30} className={styles.heroBadgeIcon} />
              <p className={styles.heroBadgeText}>98% de satisfacción declarada</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredWrap}>
        <div className={styles.featuredSection}>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>Historias destacadas</h2>
            <p className={styles.sectionCopy}>Casos más desarrollados de transformación y experiencia clínica.</p>
          </div>

          <div className={styles.featuredGrid}>
            {featured.map((item, index) => (
              <article key={item.name} className={styles.featuredCard}>
                <div className={styles.featuredAvatar}>
                  <Image
                    src={imageUrl(index === 0 ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" : "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80")}
                    alt={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.stars}>
                    {stars(item.rating).map((star) => (
                      <SiteIcon key={star} name="star" size={14} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className={styles.featuredQuote}>&ldquo;{item.quote}&rdquo;</h3>
                  <p className={styles.reviewName}>{item.name}</p>
                  <div className={styles.reviewMeta}>
                    <p className={styles.reviewInfo}>{item.source} · {item.publishedAt}</p>
                    <a href={clinic.googleReviewsUrl} target="_blank" rel="noreferrer" className={styles.googleLink}>
                      <span className={styles.googleBadge} aria-hidden="true">
                        <span className={styles.googleGlyph}>G</span>
                      </span>
                      <span>Google Reviews</span>
                    </a>
                  </div>
                  <p className={styles.reviewTreatment}>{item.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.recentSection}>
        <div className={styles.recentIntro}>
          <h2 className={styles.sectionTitle}>Experiencias recientes</h2>
          <div className={styles.recentDivider} />
        </div>

        <div className={styles.recentGrid}>
          {recent.map((item, index) => (
            <article key={item.name} className={styles.recentCard}>
              <div className={styles.stars}>
                {stars(item.rating).map((star) => (
                  <SiteIcon key={star} name="star" size={12} fill="currentColor" />
                ))}
              </div>
              <p className={styles.recentQuote}>&ldquo;{item.quote}&rdquo;</p>
              <div className={styles.reviewAuthor}>
                <div
                  className={styles.reviewInitials}
                  style={{ background: avatarPalette[index % avatarPalette.length], color: index % avatarPalette.length === 3 ? "white" : "var(--brand)" }}
                >
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className={styles.reviewMeta}>
                  <p className={styles.reviewName}>{item.name}</p>
                  <p className={styles.reviewInfo}>{item.source} · {item.publishedAt}</p>
                  <a href={clinic.googleReviewsUrl} target="_blank" rel="noreferrer" className={styles.googleLink}>
                    <span className={styles.googleBadge} aria-hidden="true">
                      <span className={styles.googleGlyph}>G</span>
                    </span>
                    <span>Google Reviews</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaShell}>
          <div className={styles.ctaBg}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80")} alt="Textura clínica" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Vive la diferencia de nuestra clínica.</h2>
            <p className={styles.ctaCopy}>Tu experiencia también puede ayudar a otros pacientes a tomar una decisión con más claridad y confianza.</p>
            <div className={styles.ctaActions}>
              <a href={clinic.googleReviewsUrl} target="_blank" rel="noreferrer" className={`btn-secondary ${styles.ctaPrimary}`}>
                <SiteIcon name="grade" size={18} />
                Dejar reseña en Google
              </a>
              <Link href="/contacto" className={`btn-secondary ${styles.ctaSecondary}`}>
                <SiteIcon name="reviews" size={18} />
                Reservar consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
