import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, MoveRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { beforeAfterCases, blogPosts, clinic, globalFaqs, highlights, team, testimonials, treatments, trustBadges } from "@/data/site";
import { imageUrl, phoneHref, stars } from "@/lib/utils";
import type { GlobalFaq, Treatment } from "@/types/site";

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="section">
      <div className="container hero-grid" style={{ alignItems: "center" }}>
        <AnimateIn>
          <div className="editorial-stack">
            <span className="eyebrow">Clínica dental privada · Valencia</span>
            <h1 style={{ fontSize: "clamp(3.7rem, 8vw, 7.3rem)" }}>
              Elegancia clínica,
              <br /> precisión moderna,
              <br /> confianza que permanece.
            </h1>
            <p className="lead" style={{ maxWidth: 640 }}>
              Una clínica dental con más de 37 años de recorrido, ahora reinterpretada desde una odontología más sofisticada, tecnológica y humana.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/contacto">
                Solicitar primera visita <ArrowRight size={18} />
              </Link>
              <a className="btn-secondary" href={clinic.whatsappHref} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </div>
            <div className="pill-list">
              {trustBadges.slice(0, 3).map((badge) => (
                <span key={badge} className="pill">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <div className="hero-frame card-elevated">
            <Image
              src={imageUrl("https://images.unsplash.com/photo-1629909615184-a2dd2a8ad8fa?auto=format&fit=crop&w=1400&q=80")}
              alt="Consulta dental premium con paciente y doctora"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-aside-card">
              <div className="metric-strip">
                {[
                  { label: "Experiencia", value: "37+ años" },
                  { label: "Tecnología", value: "Planificación 3D" },
                  { label: "Atención", value: "Citas privadas" },
                ].map((item) => (
                  <div key={item.label} className="metric-card">
                    <div style={{ color: "var(--muted)", fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".08em" }}>{item.label}</div>
                    <strong style={{ display: "block", marginTop: ".35rem", color: "var(--brand-strong)", fontSize: "1.1rem" }}>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="section-sm soft-band">
      <div className="container section-split">
        <AnimateIn>
          <SectionTitle
            eyebrow="Tradición actualizada"
            title="Una clínica que inspira serenidad y también evolución"
            copy="La mejor odontología no grita. Se percibe en el modo de escuchar, explicar, planificar y ejecutar. Ese tono es el que estamos construyendo visualmente también."
          />
        </AnimateIn>

        <div className="grid-3">
          {highlights.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 0.07}>
              <article className="card editorial-panel">
                <ShieldCheck color="var(--accent)" />
                <h3 style={{ fontSize: "1.8rem", marginTop: "1rem", lineHeight: 1.05 }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: ".8rem" }}>{item.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-split" style={{ marginBottom: "2.5rem" }}>
          <SectionTitle
            eyebrow="Tratamientos"
            title="Soluciones clínicas diseñadas con criterio, no por catálogo"
            copy="Cada tratamiento tiene su propia página, su propio contexto y su propia narrativa. Así se construye SEO útil y confianza real."
          />
          <div className="card card-elevated editorial-panel" style={{ alignSelf: "center" }}>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Implantes, ortodoncia, estética, endodoncia, periodoncia, odontopediatría y urgencias, explicados con lenguaje claro y una estética a la altura de una clínica premium.
            </p>
          </div>
        </div>

        <div className="grid-3">
          {treatments.slice(0, 6).map((treatment, index) => (
            <AnimateIn key={treatment.slug} delay={index * 0.05}>
              <TreatmentCard treatment={treatment} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="card media-card">
      <div className="image-shell">
        <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="editorial-panel">
        <span className="eyebrow">Tratamiento premium</span>
        <h3 style={{ fontSize: "2.15rem", marginTop: ".9rem" }}>{treatment.name}</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.85, marginTop: ".9rem" }}>{treatment.shortDescription}</p>
        <Link href={`/tratamientos/${treatment.slug}`} className="btn-ghost" style={{ width: "fit-content", marginTop: "1.2rem" }}>
          Descubrir tratamiento <MoveRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section">
      <div className="container editorial-grid">
        <AnimateIn className="editorial-main">
          <div className="card media-card" style={{ minHeight: 620, position: "relative" }}>
            <Image
              src={imageUrl("https://images.unsplash.com/photo-1580281657527-47f249e8f0f4?auto=format&fit=crop&w=1400&q=80")}
              alt="Clínica dental elegante y luminosa"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.08} className="editorial-side">
          <div className="card dark-panel editorial-panel" style={{ minHeight: "100%" }}>
            <SectionTitle
              eyebrow="Por qué elegirnos"
              title="La sofisticación correcta: la que mejora la experiencia del paciente"
              copy="No buscamos impresionar con artificios. Buscamos que todo se sienta claro, preciso y tranquilo, desde la primera visita hasta la última revisión."
            />

            <div className="feature-list">
              {[
                "Explicaciones limpias y honestas, sin presión comercial",
                "Diagnóstico digital y planificación contemporánea",
                "Atención con ritmo humano, no industrial",
                "Estética dental natural, nunca exagerada",
              ].map((item) => (
                <div key={item} className="feature-row">
                  <CheckCircle2 color="#d3c1ab" size={20} />
                  <span style={{ lineHeight: 1.8 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function TestimonialsPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section soft-band">
      <div className="container">
        <SectionTitle
          eyebrow="Historias reales"
          title="Confianza ganada a través de la experiencia, no del ruido"
          copy="Testimonios con una presentación más editorial, más creíble y menos plantilla. Exactamente como debería sentirse una clínica dental de referencia."
        />
        <div className="grid-3">
          {testimonials.slice(0, limit).map((item, index) => (
            <AnimateIn key={`${item.name}-${index}`} delay={index * 0.07}>
              <ReviewCard {...item} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({ name, quote, rating, treatment }: (typeof testimonials)[number]) {
  return (
    <article className="card quote-card">
      <div style={{ display: "flex", gap: ".25rem" }}>
        {stars(rating).map((star) => (
          <Star key={star} size={18} fill="currentColor" color="#c49a6c" />
        ))}
      </div>
      <p style={{ color: "var(--foreground)", lineHeight: 1.9, fontSize: "1.04rem" }}>&ldquo;{quote}&rdquo;</p>
      <div>
        <strong>{name}</strong>
        <div style={{ color: "var(--muted)", marginTop: ".2rem" }}>{treatment}</div>
      </div>
    </article>
  );
}

export function BeforeAfterPreview({ limit = 4 }: { limit?: number }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-split" style={{ marginBottom: "2.5rem" }}>
          <SectionTitle
            eyebrow="Antes y después"
            title="Casos presentados con sobriedad, luz y valor clínico"
            copy="Queremos una galería que convenza por elegancia y claridad, no por exceso. Más clínica privada, menos carrusel genérico."
          />
          <div className="card editorial-panel">
            <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>
              Resultados enfocados en naturalidad, función y armonía. Eso es exactamente lo que un paciente adulto y familiar espera ver en un sitio así.
            </p>
          </div>
        </div>

        <div className="grid-2">
          {beforeAfterCases.slice(0, limit).map((item, index) => (
            <AnimateIn key={item.title} delay={index * 0.06}>
              <article className="card media-card">
                <div className="image-shell" style={{ minHeight: 360 }}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="editorial-panel">
                  <span className="eyebrow">{item.treatment}</span>
                  <h3 style={{ fontSize: "2rem", marginTop: ".9rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: ".7rem" }}>{item.outcome}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamPreview({ limit = 4 }: { limit?: number }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Equipo médico"
          title="Profesionales con presencia serena, criterio clínico y visión contemporánea"
          copy="La forma de presentar al equipo debe transmitir autoridad y cercanía al mismo tiempo. Nada de fichas impersonales."
        />

        <div className="grid-4">
          {team.slice(0, limit).map((member, index) => (
            <AnimateIn key={member.name} delay={index * 0.05}>
              <DoctorCard {...member} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DoctorCard({ bio, image, name, role, specialty }: (typeof team)[number]) {
  return (
    <article className="card media-card">
      <div className="image-shell" style={{ minHeight: 320 }}>
        <Image src={imageUrl(image)} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="editorial-panel">
        <h3 style={{ fontSize: "1.9rem" }}>{name}</h3>
        <strong style={{ color: "var(--accent)", display: "block", marginTop: ".45rem" }}>{role}</strong>
        <span style={{ color: "var(--muted)", fontSize: ".95rem", display: "block", marginTop: ".35rem" }}>{specialty}</span>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: ".8rem" }}>{bio}</p>
      </div>
    </article>
  );
}

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section soft-band">
      <div className="container">
        <SectionTitle
          eyebrow="Contenido editorial"
          title="Artículos que enseñan, posicionan y refuerzan autoridad médica"
          copy="La clínica también se construye desde el contenido. El blog debe sentirse limpio, experto y con voz propia."
        />
        <div className="grid-3">
          {blogPosts.slice(0, limit).map((post, index) => (
            <AnimateIn key={post.slug} delay={index * 0.05}>
              <article className="card media-card">
                <div className="image-shell" style={{ minHeight: 300 }}>
                  <Image src={imageUrl(post.cover)} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="editorial-panel">
                  <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", color: "var(--muted)", fontSize: ".9rem" }}>
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "2rem", marginTop: ".8rem" }}>{post.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: ".7rem" }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="btn-ghost" style={{ width: "fit-content", marginTop: "1.1rem" }}>
                    Leer artículo <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqPreview({ items = globalFaqs.slice(0, 4) }: { items?: GlobalFaq[] }) {
  return (
    <section className="section">
      <div className="container section-split">
        <AnimateIn>
          <SectionTitle
            eyebrow="Dudas frecuentes"
            title="Una clínica elegante también explica con claridad"
            copy="Las FAQ no son un apéndice técnico: son parte central de la conversión cuando están bien jerarquizadas."
          />
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <FaqAccordion items={items} />
        </AnimateIn>
      </div>
    </section>
  );
}

export function LocationPreview() {
  return (
    <section className="section">
      <div className="container editorial-grid">
        <AnimateIn className="editorial-side">
          <div className="card dark-panel editorial-panel" style={{ minHeight: 420 }}>
            <span className="eyebrow">Ubicación y contacto</span>
            <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", marginTop: "1rem" }}>Estamos en Valencia, preparados para atenderte con calma.</h2>
            <div style={{ display: "grid", gap: "0.9rem", marginTop: "1.2rem" }}>
              <span style={{ display: "inline-flex", gap: ".7rem", alignItems: "center" }}>
                <MapPin size={18} color="#d3c1ab" /> {clinic.address}
              </span>
              <span style={{ display: "inline-flex", gap: ".7rem", alignItems: "center" }}>
                <Clock3 size={18} color="#d3c1ab" /> {clinic.schedule[0]}
              </span>
            </div>
            <div className="btn-row" style={{ marginTop: "1.4rem" }}>
              <Link href="/contacto" className="btn">
                Reservar cita <ArrowRight size={18} />
              </Link>
              <a className="btn-secondary" href={phoneHref(clinic.phone)}>
                Llamar ahora
              </a>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.08} className="editorial-main">
          <div className="card media-card">
            <iframe
              title="Mapa clínica dental Valencia"
              src="https://www.google.com/maps?q=Valencia%20dentista&output=embed"
              style={{ width: "100%", minHeight: 420, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="card dark-panel editorial-panel" style={{ textAlign: "center", padding: "2.25rem 1.8rem" }}>
          <span className="eyebrow" style={{ marginInline: "auto" }}>Primera visita</span>
          <h2 style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", marginTop: "1rem" }}>Una sonrisa bien tratada empieza con una decisión tranquila.</h2>
          <p className="lead" style={{ maxWidth: 760, margin: "1rem auto 0" }}>
            Si buscás una clínica dental en Valencia donde experiencia, detalle y sensibilidad estética vayan de la mano, este puede ser tu lugar.
          </p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "1.4rem" }}>
            <Link href="/contacto" className="btn">
              Pedir primera visita
            </Link>
            <a href={clinic.whatsappHref} className="btn-secondary" target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section">
      <div className="container section-split">
        <AnimateIn>
          <div className="editorial-stack">
            <SectionTitle
              eyebrow="Reserva y contacto"
              title="Escribinos y te orientamos con claridad desde el primer minuto"
              copy="Queremos que el contacto se sienta tan cuidado como la clínica. Cercano, elegante y sin fricción innecesaria."
            />
            <div className="card card-elevated editorial-panel">
              <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
                <Sparkles color="var(--accent)" />
                <strong>Respuesta humana y enfoque clínico</strong>
              </div>
              <p style={{ color: "var(--muted)", lineHeight: 1.85, marginTop: ".9rem" }}>
                También podés escribirnos por WhatsApp si preferís una vía más directa para una primera consulta o una urgencia dental.
              </p>
              <a href={clinic.whatsappHref} className="btn-secondary" target="_blank" rel="noreferrer" style={{ width: "fit-content", marginTop: "1rem" }}>
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <ContactForm />
        </AnimateIn>
      </div>
    </section>
  );
}
