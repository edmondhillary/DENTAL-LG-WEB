import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteIcon } from "@/components/site-icon";
import styles from "@/components/site-sections.module.scss";
import { beforeAfterCases, blogPosts, clinic, globalFaqs, team, testimonials, treatments } from "@/data/site";
import { imageUrl, initials, phoneHref, stars } from "@/lib/utils";
import type { GlobalFaq, Treatment } from "@/types/site";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article style={{ background: "var(--surface-lowest)", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
      <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
        <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.4rem", fontWeight: 800, color: "var(--brand)", marginBottom: ".75rem" }}>{treatment.name}</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: ".95rem", marginBottom: "1rem" }}>{treatment.shortDescription}</p>
        <Link href={`/tratamientos/${treatment.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", color: "var(--secondary)", fontWeight: 800, fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".12em" }}>
          Saber más <SiteIcon name="arrow_forward" size={16} />
        </Link>
      </div>
    </article>
  );
}

export function ReviewCard({ name, quote, rating, treatment }: (typeof testimonials)[number]) {
  return (
    <article style={{ background: "var(--surface-lowest)", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,.02)", border: "1px solid rgba(195,198,214,.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: ".85rem", marginBottom: "1rem" }}>
        <div style={{ width: 42, height: 42, borderRadius: 999, background: "#d5e3ff", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".8rem" }}>
          {initials(name)}
        </div>
        <div>
          <p style={{ fontWeight: 800, fontSize: ".88rem" }}>{name}</p>
          <p style={{ fontSize: ".72rem", color: "var(--outline)" }}>Reseña de Google</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: ".15rem", color: "var(--secondary)", marginBottom: "1rem" }}>
        {stars(rating).map((star) => (
          <SiteIcon key={star} name="star" size={14} fill="currentColor" />
        ))}
      </div>
      <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
      <div>
        <p style={{ fontWeight: 800, fontSize: ".875rem" }}>{name}</p>
        <p style={{ fontSize: ".75rem", color: "var(--outline)" }}>{treatment}</p>
      </div>
    </article>
  );
}

export function DoctorCard({ bio, image, name, role, specialty }: (typeof team)[number]) {
  return (
    <article style={{ background: "var(--surface-lowest)", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
      <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
        <Image src={imageUrl(image)} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "2rem" }}>
        <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.6rem", fontWeight: 800, color: "var(--brand)" }}>{name}</h3>
        <p style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 600, margin: ".35rem 0 .75rem" }}>{role}</p>
        <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: ".75rem" }}>{specialty}</p>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: ".9rem" }}>{bio}</p>
      </div>
    </article>
  );
}

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.containerWide}>
        <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <SiteIcon name="verified" size={16} />
            Excelencia clínica
          </div>
          <h1 className={styles.heroTitle}>
            Arquitectos de una <span style={{ color: "var(--brand)" }}>sonrisa perfecta.</span>
          </h1>
          <p className={styles.heroText}>
            Vive una odontología de precisión donde la excelencia clínica se encuentra con una atención cuidada, cálida y totalmente personalizada.
          </p>
          <div className={styles.actionsRow}>
            <Link className="btn" href="/contacto">Reservar cita</Link>
            <Link className="btn-secondary" href="/sobre-nosotros">
              Nuestra filosofía <SiteIcon name="arrow_forward" size={20} />
            </Link>
          </div>
          <div className={styles.heroOffer}>
            <SiteIcon name="verified" size={18} style={{ color: "var(--brand)" }} />
            <span style={{ fontSize: ".88rem", fontWeight: 700, color: "var(--brand)" }}>Primera visita gratuita (sin radiografía)</span>
          </div>
        </div>
        <div className={styles.heroMediaWrap}>
          <div className={styles.heroMedia}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80")} alt="Clínica dental premium" fill priority style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.heroReview}>
            <div className={styles.heroReviewStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <SiteIcon key={i} name="star" size={18} fill="currentColor" />
              ))}
            </div>
            <p className={styles.heroReviewText}>
              “La experiencia dental más sofisticada que hemos vivido. Precisión, calma y un resultado impecable.”
            </p>
            <p className={styles.heroReviewMeta}>— Paciente verificado</p>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.heroBackdrop} />
    </section>
  );
}

export function HighlightsSection() {
  const stats = [
    { value: "37+", label: "Años de experiencia" },
    { value: "10k+", label: "Sonrisas tratadas" },
    { value: "3D", label: "Diagnóstico digital" },
    { value: "Zero", label: "Protocolo de dolor" },
  ];

  return (
    <section className={styles.section} style={{ background: "var(--surface)" }}>
      <div className={styles.containerWide}>
        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <div key={item.label} className={styles.statItem}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentsPreview() {
  const featured = [treatments[2], treatments[0], treatments[7]];

  return (
    <section className={`${styles.section} ${styles.sectionMuted}`}>
      <div className={styles.containerWide}>
        <div className={styles.sectionHeaderFlex}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitleLg}>Excelencia en cada dimensión.</h2>
            <p className={styles.sectionLead}>Combinamos principios biológicos con precisión estética para ofrecer resultados duraderos, funcionales y visualmente impecables.</p>
          </div>
          <Link href="/tratamientos" className={styles.inlineLink}>
            Ver todos los tratamientos <SiteIcon name="arrow_forward" size={18} />
          </Link>
        </div>
        <div className={styles.gridThree}>
          {featured.map((treatment, index) => (
            <article key={treatment.slug} className={styles.treatmentCard} style={index === 1 ? { boxShadow: "0 20px 50px rgba(25,28,30,.06)" } : undefined}>
              <div className={styles.squareMedia} style={{ height: 256, aspectRatio: "auto" }}>
                <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.treatmentPreviewBody}>
                <span style={{ display: "block", fontSize: ".7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".2em", color: index === 0 ? "var(--tertiary)" : index === 1 ? "var(--secondary)" : "var(--outline)", marginBottom: ".75rem" }}>
                  {index === 0 ? "Arte" : index === 1 ? "Función" : "Bienestar"}
                </span>
                <h3 className={styles.sectionTitle} style={{ marginBottom: "1rem" }}>{treatment.name}</h3>
                <p className={styles.cardCopy} style={{ marginBottom: "1.5rem" }}>{treatment.shortDescription}</p>
                <Link href={`/tratamientos/${treatment.slug}`} className={styles.inlineLink} style={{ fontSize: ".875rem" }}>
                  Saber más <SiteIcon name="open_in_new" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  const features = [
    ["biotech", "Precisión microscópica", "Utilizamos diagnóstico de alta definición y planificación avanzada para tratamientos más conservadores y exactos."],
    ["spa", "Hospitalidad clínica", "Cada detalle, desde el ritmo de consulta hasta el confort del paciente, está diseñado para reducir ansiedad y elevar la experiencia."],
    ["3d_rotation", "Flujo digital", "Sin impresiones incómodas: trabajamos con escaneado 3D y procesos más rápidos, limpios y predecibles."],
  ];

  return (
    <section className={styles.section} style={{ overflow: "hidden" }}>
      <div className={styles.containerWide}>
        <div className={styles.twoCol}>
        <div className={styles.featureMediaWrap}>
          <div className={styles.featureHalo} />
          <div className={styles.featureMedia}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=80")} alt="Tecnología clínica" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div>
          <h2 className={styles.sectionTitleLg} style={{ marginBottom: "3rem" }}>Más que odontología. Un atelier clínico.</h2>
          <div className={styles.featureList}>
            {features.map(([icon, title, copy]) => (
              <div key={title} className={styles.featureItem}>
                <div className={styles.featureIconWrap} style={{ background: title === "Hospitalidad clínica" ? "var(--tertiary-fixed)" : "var(--secondary-fixed, #cde5ff)" }}>
                  <SiteIcon name={icon} size={28} style={{ color: title === "Hospitalidad clínica" ? "var(--tertiary)" : "var(--brand)" }} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>{title}</h4>
                  <p className={styles.featureCopy}>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export function TestimonialsPreview({ limit = 2 }: { limit?: number }) {
  return (
    <section className={`${styles.section} ${styles.sectionMuted}`}>
      <div className={styles.containerWide}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: "1rem" }}>Historias de pacientes</h2>
        <p className={styles.sectionLead} style={{ marginBottom: "3rem" }}>Relatos reales de transformación, confianza y resultados bien ejecutados.</p>
        <div className={styles.testimonialGrid}>
          {testimonials.slice(0, limit).map((item, index) => (
            <article key={item.name} className={styles.testimonialCard}>
              <div className={styles.testimonialAvatar}>
                <Image src={imageUrl(index === 0 ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" : "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80")} alt={item.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.testimonialBody}>
                <div className={styles.stars}>
                  {stars(item.rating).map((star) => (
                    <SiteIcon key={star} name="star" size={16} fill="currentColor" />
                  ))}
                </div>
                <h3 className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</h3>
                <p className={styles.testimonialName}>{item.name}</p>
                <p className={styles.testimonialMeta}>{item.treatment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterPreview({ limit = 4 }: { limit?: number }) {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.containerWide}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className={styles.sectionTitleLg} style={{ marginBottom: "1rem" }}>Galería de resultados</h2>
          <p style={{ color: "#c3c6d6", maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>Transformaciones reales con una presentación premium, editorial y clínicamente creíble.</p>
        </div>
        <div className={styles.beforeAfterGrid}>
          {beforeAfterCases.slice(0, limit).map((item, index) => (
            <article key={item.title} className={`${styles.beforeAfterCard} ${index % 2 ? styles.beforeAfterOffset : ""}`}>
              <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover", filter: "grayscale(1)" }} />
              <div className={styles.beforeAfterOverlay}>
                <p className={styles.beforeAfterLabel}>{item.treatment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamPreview() {
  return (
    <section style={{ padding: "7rem 0", background: "var(--surface)" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))", display: "grid", gridTemplateColumns: "5fr 7fr", gap: "4rem" }}>
        <div>
          <span style={{ display: "block", color: "var(--brand)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", fontSize: ".7rem", marginBottom: "1rem" }}>Nuestros expertos</span>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.3rem,4vw,3.5rem)", fontWeight: 800, marginBottom: "2rem" }}>Dirigida por especialistas con visión clínica y sensibilidad estética.</h2>
          <div style={{ background: "var(--surface-lowest)", padding: "2rem", borderRadius: "1.5rem", boxShadow: "0 4px 20px rgba(0,0,0,.02)", border: "1px solid rgba(195,198,214,.2)" }}>
            <div style={{ width: 96, height: 96, borderRadius: 18, overflow: "hidden", marginBottom: "1.5rem", position: "relative" }}>
              <Image src={imageUrl(team[0].image)} alt={team[0].name} fill style={{ objectFit: "cover" }} />
            </div>
            <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.8rem", fontWeight: 800 }}>{team[0].name}</h3>
            <p style={{ color: "var(--brand)", fontWeight: 800, fontSize: ".875rem", margin: ".5rem 0 1rem" }}>{team[0].role}</p>
            <p style={{ color: "var(--muted)", fontStyle: "italic", lineHeight: 1.8 }}>{team[0].bio}</p>
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2rem", fontWeight: 800, marginBottom: "2rem" }}>Dudas frecuentes</h2>
          <FaqAccordion items={globalFaqs.slice(0, 3)} />
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1.5rem" }}>
            <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "var(--brand)", color: "white" }}>
              <SiteIcon name="location_on" size={18} style={{ marginBottom: ".5rem" }} />
              <h4 style={{ fontWeight: 800, marginBottom: ".25rem" }}>Nuestra clínica</h4>
              <p style={{ fontSize: ".875rem", lineHeight: 1.7, opacity: .9 }}>{clinic.address}</p>
            </div>
            <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "var(--surface-highest)" }}>
              <SiteIcon name="schedule" size={18} style={{ marginBottom: ".5rem", color: "var(--brand)" }} />
              <h4 style={{ fontWeight: 800, marginBottom: ".25rem" }}>Horario</h4>
              <p style={{ fontSize: ".875rem", lineHeight: 1.7, color: "var(--muted)" }}>{clinic.schedule[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  const [featured] = blogPosts;
  return (
    <section style={{ padding: "7rem 0", background: "var(--surface)" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
          <span style={{ color: "var(--secondary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", fontSize: ".7rem" }}>Análisis e innovación</span>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 800, color: "var(--brand)" }}>La Revista del Atelier</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.25rem", lineHeight: 1.8, maxWidth: 760 }}>Una exploración editorial de odontología moderna, precisión estética y tecnología clínica aplicada.</p>
        </div>
        <article style={{ background: "var(--surface-lowest)", borderRadius: "1rem", overflow: "hidden", marginBottom: "4rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", alignItems: "stretch" }}>
            <div style={{ position: "relative", minHeight: 500 }}>
              <Image src={imageUrl(featured.cover)} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ padding: ".35rem .75rem", background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", borderRadius: 999 }}>{featured.category}</span>
                <span style={{ color: "var(--outline)", fontSize: ".75rem" }}>2026</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2.4rem", fontWeight: 800, color: "var(--brand)", lineHeight: 1.15, marginBottom: "1.5rem" }}>{featured.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--brand)", fontWeight: 800 }}>Leer editorial <SiteIcon name="arrow_forward" size={18} /></Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function FreeVisitBanner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerShell}>
        <div className={styles.bannerRow}>
          <div className={styles.bannerTextWrap}>
            <span className={styles.bannerEyebrow}>Primera visita</span>
            <h2 className={styles.bannerTitle} style={{ color: "var(--brand)", marginTop: ".75rem", marginBottom: ".75rem" }}>Primera visita gratuita (sin radiografía)</h2>
            <p className={styles.bannerCopy}>Te escuchamos, valoramos tu caso y te orientamos con claridad para que decidas con tranquilidad desde el principio.</p>
          </div>
          <div className={styles.actionsRow}>
            <Link href="/contacto" className="btn">Pedir cita</Link>
            <Link href="/precios" className="btn-secondary">Ver precios clínicos</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqPreview({ items = globalFaqs }: { items?: GlobalFaq[] }) {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqShell}>
        <div className={styles.faqInner}>
        <h2 className={styles.faqTitle} style={{ color: "var(--brand)", marginBottom: "1rem" }}>¿Tienes alguna duda?</h2>
        <p className={styles.faqCopy} style={{ margin: "0 auto 2rem" }}>Nuestro equipo clínico está preparado para orientarte con claridad y resolver tus dudas con rapidez.</p>
        <div>
          <FaqAccordion items={items.slice(0, 3)} />
        </div>
        </div>
      </div>
    </section>
  );
}

export function LocationPreview() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.mapFrame}>
        <iframe title="Mapa" src="https://www.google.com/maps?q=C%2F%20Manuel%20Candela%205%2C%20Puerta%201%2C%20Valencia%2C%20Espa%C3%B1a&output=embed" className={styles.map} />
        <div className={styles.mapBorder} />
        <div className={styles.mapCenter}>
            <div className={styles.mapPin}>
              <SiteIcon name="location_on" size={30} />
            </div>
          <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className={styles.mapLink}>Clínica Dental Lorenzo González</a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactGrid}>
        <div className={`${styles.contactPanel} ${styles.contactBox}`} style={{ background: "var(--surface-lowest)", color: "var(--foreground)", minHeight: "auto" }}>
          <h2 className={styles.contactTitle} style={{ color: "var(--brand)", marginBottom: "2rem" }}>Solicita una consulta</h2>
          <div className={styles.contactPill}>
            <SiteIcon name="verified" size={16} /> Primera visita gratuita (sin radiografía)
          </div>
          <ContactForm />
        </div>
        <div className={styles.contactAside}>
          <div className={styles.contactBox}>
            <div>
              <div className={styles.contactBoxHeader}>
                <SiteIcon name="location_on" size={20} style={{ color: "var(--tertiary-fixed)" }} />
                <h3 className={styles.contactBoxTitle}>El Atelier clínico</h3>
              </div>
              <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className={styles.contactAddress}>{clinic.address}</a>
            </div>
            <div className={styles.contactMeta}>
              <a href={phoneHref(clinic.phone)} className={styles.contactLink}>
                <SiteIcon name="call" size={18} /> {clinic.phoneDisplay}
              </a>
              <div className={styles.contactSchedule}>
                <SiteIcon name="schedule" size={18} /> {clinic.schedule[0]}
              </div>
            </div>
          </div>
          <div className={styles.contactUrgency}>
            <div className={styles.urgencyHeader}>
                <SiteIcon name="medical_services" size={20} style={{ color: "var(--tertiary)" }} />
              <h3 className={styles.urgencyTitle}>Urgencias fuera de horario</h3>
            </div>
            <p className={styles.urgencyCopy}>Los pacientes en seguimiento pueden usar el canal prioritario de WhatsApp para una primera orientación urgente.</p>
            <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" className={styles.urgencyLink}>Abrir WhatsApp urgente</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.finalCtaShell}>
        <div className={styles.finalCtaBg}>
          <Image src={imageUrl("https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=80")} alt="Textura clínica" fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Tu próxima gran sonrisa empieza hoy.</h2>
          <p className={styles.finalCtaCopy}>Da el primer paso hacia una sonrisa funcional, estética y duradera. Nuestro equipo está listo para acompañarte.</p>
          <div className={styles.finalCtaPill}>
            <SiteIcon name="verified" size={16} /> Primera visita gratuita (sin radiografía)
          </div>
          <div className={styles.finalCtaActions}>
            <Link href="/contacto" className={`btn-secondary ${styles.finalPrimary}`}>Solicitar consulta</Link>
            <Link href="/precios" className={`btn-secondary ${styles.finalSecondary}`}>Ver precios clínicos</Link>
            <a href={phoneHref(clinic.phone)} className={styles.finalPhone}>
              <SiteIcon name="call" size={18} /> {clinic.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
