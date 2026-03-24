import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteIcon } from "@/components/site-icon";
import { TreatmentSearch } from "@/components/treatment-search";
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
    <section style={{ position: "relative", minHeight: 920, display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "5rem" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3rem", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gap: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "var(--tertiary-fixed)", color: "#002020", padding: ".55rem 1rem", borderRadius: 999, width: "fit-content", fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em" }}>
            <SiteIcon name="verified" size={16} />
            Excelencia clínica
          </div>
          <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.8rem, 7vw, 6.8rem)", fontWeight: 800, color: "var(--foreground)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            Arquitectos de una <span style={{ color: "var(--brand)" }}>sonrisa perfecta.</span>
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620 }}>
            Vive una odontología de precisión donde la excelencia clínica se encuentra con una atención cuidada, cálida y totalmente personalizada.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/contacto" style={{ minHeight: 60, paddingInline: "2.5rem", fontSize: "1.05rem" }}>Reservar cita</Link>
            <Link className="btn-secondary" href="/sobre-nosotros" style={{ minHeight: 60, paddingInline: "2rem", fontSize: "1.05rem" }}>
              Nuestra filosofía <SiteIcon name="arrow_forward" size={20} />
            </Link>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "rgba(255,255,255,.82)", padding: ".85rem 1.1rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)", width: "fit-content" }}>
            <SiteIcon name="verified" size={18} style={{ color: "var(--brand)" }} />
            <span style={{ fontSize: ".88rem", fontWeight: 700, color: "var(--brand)" }}>Primera visita gratuita (sin radiografía)</span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "4 / 5", borderRadius: "2rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)", position: "relative", transform: "rotate(2deg)" }}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80")} alt="Clínica dental premium" fill priority style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "absolute", left: "-2.5rem", bottom: "-2.5rem", background: "rgba(255,255,255,.8)", backdropFilter: "blur(20px)", padding: "2rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)", maxWidth: 320 }}>
            <div style={{ display: "flex", gap: ".1rem", color: "var(--tertiary)", marginBottom: ".5rem" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <SiteIcon key={i} name="star" size={18} fill="currentColor" />
              ))}
            </div>
            <p style={{ fontStyle: "italic", lineHeight: 1.8, color: "var(--foreground)", fontWeight: 500 }}>
              “La experiencia dental más sofisticada que hemos vivido. Precisión, calma y un resultado impecable.”
            </p>
            <p style={{ marginTop: "1rem", fontSize: ".75rem", fontWeight: 800, color: "var(--outline)", textTransform: "uppercase", letterSpacing: ".18em" }}>— Paciente verificado</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 0, right: 0, width: "33%", height: "100%", background: "var(--surface-low)", borderTopLeftRadius: "10rem", borderBottomLeftRadius: "10rem", zIndex: 0 }} />
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
    <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "3rem", textAlign: "center" }}>
          {stats.map((item) => (
            <div key={item.label} style={{ display: "grid", gap: ".5rem" }}>
              <div style={{ fontSize: "2.75rem", fontFamily: "var(--font-headline)", fontWeight: 900, color: "var(--brand)" }}>{item.value}</div>
              <div style={{ fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em", color: "var(--outline)" }}>{item.label}</div>
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
    <section style={{ padding: "7rem 0", background: "var(--surface-low)" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))" }}>
        <div style={{ marginBottom: "3rem" }}>
          <TreatmentSearch />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 720 }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 800, marginBottom: "1.25rem" }}>Excelencia en cada dimensión.</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.125rem", lineHeight: 1.8 }}>Combinamos principios biológicos con precisión estética para ofrecer resultados duraderos, funcionales y visualmente impecables.</p>
          </div>
          <Link href="/tratamientos" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", fontWeight: 800, color: "var(--brand)" }}>
            Ver todos los tratamientos <SiteIcon name="arrow_forward" size={18} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2rem" }}>
          {featured.map((treatment, index) => (
            <article key={treatment.slug} style={{ background: "var(--surface-lowest)", borderRadius: "1rem", overflow: "hidden", transition: "all .5s ease", boxShadow: index === 1 ? "0 20px 50px rgba(25,28,30,.06)" : "none" }}>
              <div style={{ height: 256, position: "relative", overflow: "hidden" }}>
                <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "2rem" }}>
                <span style={{ display: "block", fontSize: ".7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".2em", color: index === 0 ? "var(--tertiary)" : index === 1 ? "var(--secondary)" : "var(--outline)", marginBottom: ".75rem" }}>
                  {index === 0 ? "Arte" : index === 1 ? "Función" : "Bienestar"}
                </span>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>{treatment.name}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{treatment.shortDescription}</p>
                <Link href={`/tratamientos/${treatment.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--brand)", fontSize: ".875rem", fontWeight: 800 }}>
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
    <section style={{ padding: "7rem 0", overflow: "hidden" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "5rem", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ background: "var(--surface-high)", width: "100%", aspectRatio: "1 / 1", borderRadius: "999px", position: "absolute", top: -80, left: -80, opacity: .5, zIndex: -1 }} />
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 12", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
            <Image src={imageUrl("https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=80")} alt="Tecnología clínica" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 800, marginBottom: "3rem" }}>Más que odontología. Un atelier clínico.</h2>
          <div style={{ display: "grid", gap: "2.5rem" }}>
            {features.map(([icon, title, copy]) => (
              <div key={title} style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ width: 56, height: 56, borderRadius: 18, background: title === "Hospitalidad clínica" ? "var(--tertiary-fixed)" : "var(--secondary-fixed, #cde5ff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <SiteIcon name={icon} size={28} style={{ color: title === "Hospitalidad clínica" ? "var(--tertiary)" : "var(--brand)" }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-headline)", fontSize: "1.35rem", fontWeight: 800, marginBottom: ".4rem" }}>{title}</h4>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsPreview({ limit = 2 }: { limit?: number }) {
  return (
    <section style={{ padding: "7rem 0", background: "var(--surface-low)" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))" }}>
        <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.3rem", fontWeight: 800, marginBottom: "1rem" }}>Historias de pacientes</h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem" }}>Relatos reales de transformación, confianza y resultados bien ejecutados.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3rem" }}>
          {testimonials.slice(0, limit).map((item, index) => (
            <article key={item.name} style={{ display: "flex", gap: "2rem", background: "var(--surface-lowest)", padding: "2rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
              <div style={{ width: 140, aspectRatio: "1 / 1", overflow: "hidden", borderRadius: ".75rem", flexShrink: 0, position: "relative" }}>
                <Image src={imageUrl(index === 0 ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" : "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80")} alt={item.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: ".15rem", color: "var(--secondary)", marginBottom: "1rem" }}>
                  {stars(item.rating).map((star) => (
                    <SiteIcon key={star} name="star" size={16} fill="currentColor" />
                  ))}
                </div>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>&ldquo;{item.quote}&rdquo;</h3>
                <p style={{ fontSize: ".875rem", color: "var(--foreground)", fontWeight: 800 }}>{item.name}</p>
                <p style={{ fontSize: ".7rem", color: "var(--outline)", textTransform: "uppercase", letterSpacing: ".18em", marginTop: ".35rem" }}>{item.treatment}</p>
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
    <section style={{ padding: "7rem 0", background: "#191c1e", color: "white" }}>
      <div className="container" style={{ width: "min(1280px, calc(100% - 4rem))" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 800, marginBottom: "1rem" }}>Galería de resultados</h2>
          <p style={{ color: "#c3c6d6", maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>Transformaciones reales con una presentación premium, editorial y clínicamente creíble.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "1rem" }}>
          {beforeAfterCases.slice(0, limit).map((item, index) => (
            <article key={item.title} style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", borderRadius: "1rem", marginTop: index % 2 ? "2rem" : 0 }}>
              <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover", filter: "grayscale(1)" }} />
              <div style={{ position: "absolute", insetInline: 0, bottom: 0, padding: "1.5rem", background: "linear-gradient(180deg, transparent, rgba(0,0,0,.8))" }}>
                <p style={{ fontWeight: 800 }}>{item.treatment}</p>
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
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem 6rem" }}>
      <div style={{ background: "linear-gradient(135deg, rgba(213,227,255,.9), rgba(147,242,242,.45), rgba(255,255,255,.95))", borderRadius: "2rem", padding: "2.5rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".72rem", letterSpacing: ".18em", textTransform: "uppercase" }}>Primera visita</span>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 800, color: "var(--brand)", marginTop: ".75rem", marginBottom: ".75rem" }}>Primera visita gratuita (sin radiografía)</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Te escuchamos, valoramos tu caso y te orientamos con claridad para que decidas con tranquilidad desde el principio.</p>
          </div>
          <div className="btn-row">
            <Link href="/contacto" className="btn" style={{ minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Pedir cita</Link>
            <Link href="/precios" className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Ver precios clínicos</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqPreview({ items = globalFaqs }: { items?: GlobalFaq[] }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem 8rem" }}>
      <div style={{ background: "var(--surface-low)", borderRadius: "2rem", padding: "3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>¿Tienes alguna duda?</h2>
        <p style={{ color: "var(--muted)", fontSize: "1.125rem", maxWidth: 720, margin: "0 auto 2rem", lineHeight: 1.8 }}>Nuestro equipo clínico está preparado para orientarte con claridad y resolver tus dudas con rapidez.</p>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FaqAccordion items={items.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}

export function LocationPreview() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem 6rem" }}>
      <div style={{ background: "var(--surface-lowest)", borderRadius: "1rem", overflow: "hidden", height: 450, position: "relative", boxShadow: "inset 0 0 0 1px rgba(195,198,214,.2)" }}>
        <iframe title="Mapa" src="https://www.google.com/maps?q=C%2F%20Manuel%20Candela%205%2C%20Puerta%201%2C%20Valencia%2C%20Espa%C3%B1a&output=embed" style={{ width: "100%", height: "100%", border: 0, filter: "grayscale(1) opacity(.7)" }} />
        <div style={{ position: "absolute", inset: 0, border: "12px solid var(--surface-low)", borderRadius: "1rem", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ background: "var(--brand)", color: "white", padding: "1rem", borderRadius: "1rem", marginBottom: ".5rem", boxShadow: "0 24px 80px rgba(25,28,30,.2)" }}>
              <SiteIcon name="location_on" size={30} />
            </div>
          <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,.9)", backdropFilter: "blur(12px)", padding: ".5rem 1rem", borderRadius: 999, fontSize: ".7rem", fontWeight: 800, color: "var(--brand)", textTransform: "uppercase", letterSpacing: ".16em" }}>Clínica Dental Lorenzo González</a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "2rem" }}>
        <div style={{ background: "var(--surface-lowest)", borderRadius: "1rem", padding: "3rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)", marginBottom: "2rem" }}>Solicita una consulta</h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".75rem 1rem", borderRadius: 999, background: "rgba(147,242,242,.35)", color: "#002020", fontSize: ".82rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            <SiteIcon name="verified" size={16} /> Primera visita gratuita (sin radiografía)
          </div>
          <ContactForm />
        </div>
        <div style={{ display: "grid", gap: "2rem" }}>
          <div style={{ background: "var(--brand)", color: "white", borderRadius: "1rem", padding: "2rem", minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1.5rem" }}>
                <SiteIcon name="location_on" size={20} style={{ color: "var(--tertiary-fixed)" }} />
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.25rem", fontWeight: 800 }}>El Atelier clínico</h3>
              </div>
              <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.86, color: "inherit" }}>{clinic.address}</a>
            </div>
            <div style={{ display: "grid", gap: "1rem" }}>
              <a href={phoneHref(clinic.phone)} style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: 700 }}>
                <SiteIcon name="call" size={18} /> {clinic.phoneDisplay}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: ".95rem" }}>
                <SiteIcon name="schedule" size={18} /> {clinic.schedule[0]}
              </div>
            </div>
          </div>
          <div style={{ background: "var(--tertiary-fixed)", color: "#002020", borderRadius: "1rem", padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem" }}>
                <SiteIcon name="medical_services" size={20} style={{ color: "var(--tertiary)" }} />
              <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.01em" }}>Urgencias fuera de horario</h3>
            </div>
            <p style={{ fontSize: ".95rem", lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>Los pacientes en seguimiento pueden usar el canal prioritario de WhatsApp para una primera orientación urgente.</p>
            <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", fontWeight: 800, color: "var(--tertiary)", borderBottom: "1px solid rgba(0,76,76,.2)", paddingBottom: ".2rem" }}>Abrir WhatsApp urgente</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem 6rem" }}>
      <div style={{ background: "var(--brand)", color: "white", borderRadius: "2rem", overflow: "hidden", position: "relative", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .1 }}>
          <Image src={imageUrl("https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=80")} alt="Textura clínica" fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,6vw,5.8rem)", fontWeight: 900, letterSpacing: "-0.05em", marginBottom: "1.5rem" }}>Tu próxima gran sonrisa empieza hoy.</h2>
          <p style={{ color: "#bcd4ff", fontSize: "1.2rem", maxWidth: 860, margin: "0 auto 2rem", lineHeight: 1.8 }}>Da el primer paso hacia una sonrisa funcional, estética y duradera. Nuestro equipo está listo para acompañarte.</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".75rem 1rem", borderRadius: 999, background: "rgba(255,255,255,.12)", color: "white", fontSize: ".82rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            <SiteIcon name="verified" size={16} /> Primera visita gratuita (sin radiografía)
          </div>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contacto" className="btn-secondary" style={{ background: "white", color: "var(--brand)", fontWeight: 900, fontSize: "1.1rem", minHeight: 60, paddingInline: "2.5rem" }}>Solicitar consulta</Link>
            <Link href="/precios" className="btn-secondary" style={{ background: "rgba(255,255,255,.12)", color: "white", borderColor: "rgba(255,255,255,.2)", fontWeight: 900, fontSize: "1.1rem", minHeight: 60, paddingInline: "2rem" }}>Ver precios clínicos</Link>
            <a href={phoneHref(clinic.phone)} style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", fontWeight: 800, fontSize: "1.15rem" }}>
              <SiteIcon name="call" size={18} /> {clinic.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
