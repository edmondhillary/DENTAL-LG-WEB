import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteIcon } from "@/components/site-icon";
import { globalFaqs } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Soporte al paciente / FAQ",
  description: "Página de soporte con buscador, categorías y respuestas frecuentes.",
};

export default function FaqPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Soporte al paciente</span>
          <h1 className={styles.title}>
            ¿Cómo podemos refinar tu <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>experiencia?</span>
          </h1>
          <div className={styles.searchWrap}>
            <SiteIcon name="search" size={20} className={styles.searchIcon} />
            <input type="text" placeholder="Buscar tratamientos, costes o citas..." className={styles.searchInput} />
          </div>
        </div>
        <div className={styles.orbTop} />
        <div className={styles.orbLeft} />
      </section>

      <section className={styles.content}>
        <aside className={styles.aside}>
          <div className={styles.asideInner}>
            <h3 className={styles.asideTitle}>Categorías</h3>
            {[
              ["calendar_today", "Citas", true],
              ["medical_services", "Tratamientos", false],
              ["payments", "Costes y financiación", false],
              ["verified_user", "Seguridad del paciente", false],
            ].map(([icon, label, active]) => (
              <a key={label} href={`#${label}`} className={`${styles.categoryLink} ${active ? styles.categoryLinkActive : ""}`}>
                <SiteIcon name={icon} size={18} />
                <span style={{ fontWeight: 700 }}>{label}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className={styles.sections}>
          <section id="Citas">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Citas</h2>
              <span className={styles.sectionMeta}>4 preguntas frecuentes</span>
            </div>
            <FaqAccordion items={globalFaqs.slice(0, 2)} />
          </section>

          <section id="Tratamientos">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Tratamientos</h2>
              <span className={styles.sectionMeta}>6 preguntas frecuentes</span>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureHero}>
                <div className={styles.featureHeroInner}>
                  <h3 className={styles.featureHeroTitle}>Carillas de precisión: el proceso</h3>
                  <p className={styles.featureHeroCopy}>Nuestro protocolo estrella de carillas cerámicas combina planificación digital, mock-up y ejecución artesanal para lograr naturalidad real.</p>
                  <button className={`btn-secondary ${styles.featureHeroButton}`}>
                    Ver galería del tratamiento <SiteIcon name="arrow_forward" size={18} />
                  </button>
                </div>
              </div>
              {[
                {
                  title: "¿Cuánto dura un blanqueamiento?",
                  copy: "Entre 12 y 24 meses según hábitos, esmalte y seguimiento. Suele mantenerse mejor cuando se combina con higiene y controles regulares.",
                },
                {
                  title: "¿Trabajáis con sedación?",
                  copy: "Sí, cuando está clínicamente indicado. Priorizamos confort, previsibilidad y seguridad en procedimientos más sensibles o extensos.",
                },
              ].map((item) => (
                <article key={item.title} className={styles.card}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardCopy}>{item.copy}</p>
                  <a href="#" className={styles.cardLink}>
                    Más detalles <SiteIcon name="chevron_right" size={14} />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="Costes y financiación">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Costes y financiación</h2>
              <span className={styles.sectionMeta}>3 preguntas frecuentes</span>
            </div>
            <FaqAccordion items={globalFaqs.slice(2, 4)} />
          </section>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaShell}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>¿Tienes más preguntas?</h2>
            <p className={styles.ctaCopy}>Nuestro equipo clínico puede ayudarte a resolver dudas sobre tratamiento, tiempos, financiación o urgencias.</p>
            <div className={styles.ctaActions}>
              <button className={`btn ${styles.ctaAction}`}>Hablar con un especialista</button>
              <button className={`btn-secondary ${styles.ctaAction}`}>Escribir por email</button>
            </div>
          </div>
          <div className={styles.ctaOrbRight} />
          <div className={styles.ctaOrbLeft} />
        </div>
      </section>
    </>
  );
}
