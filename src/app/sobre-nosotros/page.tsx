import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Conocé la filosofía, la historia y las instalaciones de la Clínica Dental Lorenzo González.",
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
      title: "Recepción atelier",
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

      <section style={{ padding: "8rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>Nuestros pilares</h2>
            <p style={{ color: "var(--muted)", maxWidth: 760, margin: "0 auto", lineHeight: 1.8 }}>Tres principios que atraviesan la experiencia completa: desde el diagnóstico hasta el resultado final.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "2rem" }}>
            {directives.map((item) => (
              <article key={item.title} style={{ background: "var(--surface-lowest)", padding: "2.5rem", borderRadius: "2rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: item.bg, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                  <SiteIcon name={item.icon} size={32} />
                </div>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.7rem", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "var(--brand)", color: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "4fr 8fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, marginBottom: "1.5rem" }}>Diseñada para restaurar</h2>
            <p style={{ color: "#bcd4ff", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>Nuestros espacios buscan bajar la tensión, mejorar la concentración clínica y hacer que la consulta se sienta mucho más humana.</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                "Consultas con privacidad acústica",
                "Filtración médica del aire",
                "Sillones ergonómicos de confort alto",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: ".75rem", fontSize: ".85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em" }}>
                  <SiteIcon name="check_circle" size={20} style={{ color: "#6cbdfe" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1rem" }}>
            {spaces.map((item, index) => (
              <div key={item.title} style={{ position: "relative", height: 256, borderRadius: "1rem", overflow: "hidden", marginTop: index % 2 ? "2rem" : 0 }}>
                <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "3rem" }}>El equipo detrás de la precisión</h2>
          <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", borderRadius: "3rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
            <div style={{ position: "relative", height: 500 }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80")} alt="Equipo clínico" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(27,68,119,.85))", display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "start", padding: "3rem", textAlign: "left" }}>
              <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: ".5rem" }}>Un equipo coordinado, preciso y cercano</h3>
              <p style={{ color: "#bcd4ff", maxWidth: 680, lineHeight: 1.8 }}>Especialistas con experiencia real en rehabilitación, estética, prevención y planificación digital.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "2rem", marginTop: "4rem" }}>
            {[
              ["25+", "Especialistas"],
              ["12k", "Sonrisas tratadas"],
              ["15", "Reconocimientos"],
              ["0.1%", "Incidencia crítica"],
            ].map(([value, label]) => (
              <div key={label}>
                <p style={{ fontFamily: "var(--font-headline)", fontSize: "2.75rem", fontWeight: 900, color: "var(--secondary)" }}>{value}</p>
                <p style={{ marginTop: ".5rem", fontSize: ".8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", color: "var(--outline)" }}>{label}</p>
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
