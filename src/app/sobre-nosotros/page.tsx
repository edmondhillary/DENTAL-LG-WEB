import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Conoce la filosofía, la historia y las instalaciones de la Clínica Dental Lorenzo González.",
};

export default function AboutPage() {
  const directives = [
    {
      icon: "favorite",
      title: "Atención centrada en la persona",
      copy: "Escuchamos antes de actuar. Cada plan nace de tus necesidades, tu comodidad y tus objetivos a largo plazo.",
      bg: "#cde5ff",
      color: "#001d32",
    },
    {
      icon: "biotech",
      title: "Precisión clínica",
      copy: "Trabajamos con diagnóstico de alta definición y protocolos minuciosos para reducir margen de error y elevar previsibilidad.",
      bg: "#d5e3ff",
      color: "#001b3c",
    },
    {
      icon: "lightbulb",
      title: "Innovación con criterio",
      copy: "Adoptamos tecnología cuando mejora resultados, experiencia del paciente y conservación del tejido dental.",
      bg: "#93f2f2",
      color: "#002020",
    },
  ];

  const spaces = [
    {
      title: "Suite de consulta",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Área clínica",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Recepción clínica",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Laboratorio digital",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Nuestro legado</span>
            <h1 className={styles.title}>
              La intersección entre <br />
              <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>precisión</span> y <span style={{ color: "var(--tertiary)" }}>artesanía</span>.
            </h1>
            <p className={styles.copy}>
              En Clínica Dental Lorenzo González entendemos la odontología como una combinación de exactitud clínica, hospitalidad tranquila y sensibilidad estética.
            </p>
          </div>
          <div className={styles.heroMediaWrap}>
            <div className={styles.heroMedia}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80")} alt="Clínica dental moderna" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.heroGlow} />
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyMediaWrap}>
            <div className={styles.storyMedia}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80")} alt="Dentista revisando escaneo" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.storyCard}>
              <h4 className={styles.storyCardTitle}>Más de 37 años</h4>
              <p className={styles.storyCardCopy}>Una trayectoria construida sobre calma, precisión y relaciones a largo plazo con pacientes y familias.</p>
            </div>
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Una visión contemporánea del cuidado oral</h2>
            <div className={styles.storyText}>
              <p>La clínica nace de una convicción simple: una atención excelente no puede sentirse impersonal. Por eso combinamos método clínico, escucha real y una experiencia visualmente serena.</p>
              <p>No trabajamos desde el ruido ni desde la venta agresiva. Diseñamos recorridos de tratamiento claros, técnicamente sólidos y pensados para durar muchos años.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className={styles.sectionIntro}>
          <h2 className={styles.sectionTitle}>Nuestros pilares</h2>
          <p className={styles.sectionCopy}>Tres principios que atraviesan la experiencia completa: desde el diagnóstico hasta el resultado final.</p>
        </div>
        <div className={styles.pillarsGrid}>
          {directives.map((item) => (
            <article key={item.title} className={styles.pillarCard}>
              <div className={styles.pillarIcon} style={{ background: item.bg, color: item.color }}>
                <SiteIcon name={item.icon} size={32} />
              </div>
              <h3 className={styles.pillarTitle}>{item.title}</h3>
              <p className={styles.pillarCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.spacesWrap}>
        <div className={styles.spacesSection}>
          <div className={styles.spacesGrid}>
            <div className={styles.spacesContent}>
              <h2 className={styles.spacesTitle}>Diseñada para restaurar</h2>
              <p className={styles.spacesCopy}>Nuestros espacios buscan bajar la tensión, mejorar la concentración clínica y hacer que la consulta se sienta mucho más humana.</p>
              <div className={styles.spacesList}>
                {[
                  "Consultas con privacidad acústica",
                  "Filtración médica del aire",
                  "Sillones ergonómicos de confort alto",
                ].map((item) => (
                  <div key={item} className={styles.spacesListItem}>
                    <SiteIcon name="check_circle" size={20} style={{ color: "#6cbdfe" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.spacesGallery}>
              {spaces.map((item, index) => (
                <div key={item.title} className={`${styles.spaceCard} ${index % 2 ? styles.spaceCardOffset : ""}`}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: "3rem" }}>El equipo detrás de la precisión</h2>
          <div className={styles.teamHero}>
            <div className={styles.teamHeroImage}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80")} alt="Equipo clínico" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.teamOverlay}>
              <h3 className={styles.teamOverlayTitle}>Un equipo coordinado, preciso y cercano</h3>
              <p className={styles.teamOverlayCopy}>Especialistas con experiencia real en rehabilitación, estética, prevención y planificación digital.</p>
            </div>
          </div>
          <div className={styles.statsGrid}>
            {[
              ["10+", "Especialistas"],
              ["35K", "Pacientes tratados"],
              ["15", "Reconocimientos"],
              ["37+", "Años de experiencia"],
            ].map(([value, label]) => (
              <div key={label} className={styles.statItem}>
                <p className={styles.statValue}>{value}</p>
                <p className={styles.statLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "8rem 2rem", background: "var(--surface-high)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <SiteIcon name="spa" size={56} style={{ color: "var(--brand-container)", marginBottom: "1.5rem" }} />
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,4.5rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1.5rem" }}>Vive una odontología reimaginada.</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>Tu recorrido hacia una mejor salud oral empieza con una conversación tranquila, informada y a la altura de tus expectativas.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contacto" className="btn" style={{ minHeight: 56, paddingInline: "2rem", textTransform: "uppercase", letterSpacing: ".14em", fontSize: ".85rem" }}>Solicitar consulta</Link>
            <Link href="/tratamientos" className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem", textTransform: "uppercase", letterSpacing: ".14em", fontSize: ".85rem" }}>Ver tratamientos</Link>
          </div>
        </div>
        <div style={{ position: "absolute", top: -96, right: -96, width: 384, height: 384, border: "40px solid rgba(255,255,255,.4)", borderRadius: 999 }} />
      </section>
    </>
  );
}
