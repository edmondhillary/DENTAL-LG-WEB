import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { team } from "@/data/site";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Equipo dental",
  description: "Conoce al equipo clínico de la clínica con una presentación editorial cuidada.",
};

export default function TeamPage() {
  return (
    <>
      <section className={styles.heroWrap}>
        <div className={styles.heroBg}>
          <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80")} alt="Equipo clínico" fill style={{ objectFit: "cover", opacity: 0.9 }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Precisión de clase mundial</span>
            <h1 className={styles.heroTitle}>Las manos detrás <br /> del arte clínico.</h1>
            <p className={styles.heroCopy}>Nuestro equipo reúne criterio, especialización y una forma profundamente humana de acompañar cada caso con rigor y elegancia.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.featureGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Excelencia clínica como estándar</h2>
            <div className={styles.featuresList}>
              {[
                ["verified", "Especialización real", "Cada miembro senior trabaja desde formación avanzada y un criterio clínico profundamente afinado."],
                ["biotech", "Enfoque guiado por evidencia", "La actualización constante es parte del estándar, no un argumento de marketing."],
              ].map(([icon, title, copy]) => (
                <div key={title} className={styles.featureItem}>
                  <div className={styles.featureIconWrap} style={{ background: icon === "verified" ? "#d5e3ff" : "#93f2f2" }}>
                    <SiteIcon name={icon} size={22} style={{ color: icon === "verified" ? "var(--brand)" : "var(--tertiary)" }} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{title}</h3>
                    <p className={styles.featureCopy}>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.featureImage}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80")} alt="Tecnología y trabajo clínico" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <h2 className={styles.sectionTitle}>Nuestros clínicos</h2>
          <p className={styles.sectionLead}>Especialistas que trabajan con precisión, método y sensibilidad estética.</p>
        </div>

        <div className={styles.teamGrid}>
          {team.slice(0, 3).map((member, index) => (
            <article key={member.name} className={styles.teamCard}>
              <div className={styles.teamImageWrap}>
                <Image src={imageUrl(member.image)} alt={member.name} fill style={{ objectFit: "cover" }} />
                <div className={styles.teamImageBadge}>
                  <span className={styles.teamBadgeLabel}>{index === 0 ? "Dirección clínica" : index === 1 ? "Estética" : "Ortodoncia"}</span>
                  <SiteIcon name="share" size={18} className={styles.teamBadgeIcon} />
                </div>
              </div>
              <div className={styles.teamCardContent}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cardName}>{member.name}</h3>
                    <p className={styles.cardRole}>{member.role}</p>
                  </div>
                  <SiteIcon name={index === 0 ? "school" : index === 1 ? "palette" : "biotech"} size={30} className={styles.cardRoleIcon} />
                </div>
                <p className={styles.cardCopy}>{member.bio}</p>
                <div className={styles.profileRow}>
                  <div className={styles.profileIconWrap}>
                    <SiteIcon name="link" size={18} className={styles.profileIcon} />
                  </div>
                  <span className={styles.profileLabel}>Perfil profesional</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.valueGrid}>
          <div className={styles.valueMediaWrap}>
            <div className={styles.valueMedia}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80")} alt="Equipo relajado" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.valueGlow} />
            <div className={styles.teamBadgeCard}>
              <p className={styles.teamBadgeTitle}>150+ años combinados</p>
              <p className={styles.teamBadgeCopy}>Experiencia clínica</p>
            </div>
          </div>
          <div>
            <h2 className={styles.valueTitle}>Precisión con empatía</h2>
            <p className={styles.valueCopy}>Más allá de la tecnología y del conocimiento técnico, entendemos que el éxito clínico también depende de cómo se acompaña a la persona durante todo el proceso.</p>
            <div className={styles.quoteCard}>
              <p className={styles.quote}>“No solo tratan dientes: cuidan personas. La atención y el detalle son realmente excepcionales.”</p>
              <p className={styles.quoteMeta}>— Paciente desde 2021</p>
            </div>
              <button className={styles.valueLink}>
              Conoce al equipo completo <SiteIcon name="arrow_forward" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaShell}>
          <div className={styles.ctaContent}>
            <SiteIcon name="spa" size={56} className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>Vive una odontología reimaginada.</h2>
            <p className={styles.ctaCopy}>Una primera conversación puede cambiar cómo entiendes tu salud oral, tu estética y tu experiencia dentro de la clínica.</p>
            <div className={styles.ctaActions}>
              <Link href="/contacto" className={`btn-secondary ${styles.ctaPrimary}`}>Solicitar consulta</Link>
              <Link href="/tratamientos" className={`btn-secondary ${styles.ctaSecondary}`}>Ver tratamientos</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
