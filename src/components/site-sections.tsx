import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { beforeAfterCases, blogPosts, clinic, globalFaqs, highlights, team, testimonials, treatments, trustBadges } from "@/data/site";
import { phoneHref, stars } from "@/lib/utils";
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
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <span className="eyebrow">Clínica dental premium en Valencia</span>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 6.4rem)" }}>
              La confianza de <br /> una clínica con <br /> alma, criterio <br /> y precisión.
            </h1>
            <p className="lead">
              Más de 37 años cuidando sonrisas con un enfoque humano, tecnología avanzada y planes dentales pensados para durar.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/contacto">
                Pedir primera visita <ArrowRight size={18} />
              </Link>
              <a className="btn-secondary" href={clinic.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
            </div>
            <div className="pill-list">
              {trustBadges.map((badge) => (
                <span key={badge} className="pill">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="card surface-soft" style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
            <div style={{ position: "relative", minHeight: 560, borderRadius: 28, overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1629909615184-a2dd2a8ad8fa?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo dental premium atendiendo a una paciente"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="grid-3">
              {[
                { label: "Experiencia", value: "37+ años" },
                { label: "Tecnología", value: "Diagnóstico 3D" },
                { label: "Atención", value: "Citas personalizadas" },
              ].map((item) => (
                <div key={item.label} className="card" style={{ padding: "1rem" }}>
                  <div style={{ color: "var(--muted)", fontSize: ".9rem" }}>{item.label}</div>
                  <strong style={{ display: "block", marginTop: ".35rem", color: "var(--brand-strong)" }}>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="section-sm">
      <div className="container grid-3">
        {highlights.map((item, index) => (
          <AnimateIn key={item.title} delay={index * 0.08}>
            <article className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
              <ShieldCheck color="var(--brand)" />
              <h3 style={{ fontSize: "1.7rem", lineHeight: 1.1 }}>{item.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{item.description}</p>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

export function TreatmentsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Tratamientos"
          title="Odontología avanzada con decisiones claras"
          copy="Cada tratamiento tiene una lógica clínica, una planificación digital y una explicación sencilla. Sin plantillas genéricas, sin sobretratar."
        />
        <div className="grid-3">
          {treatments.slice(0, 6).map((treatment, index) => (
            <AnimateIn key={treatment.slug} delay={index * 0.06}>
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
    <article className="card" style={{ overflow: "hidden" }}>
      <div style={{ position: "relative", minHeight: 250 }}>
        <Image src={treatment.heroImage} alt={treatment.heroAlt} fill style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "1.35rem", display: "grid", gap: "0.9rem" }}>
        <h3 style={{ fontSize: "2rem" }}>{treatment.name}</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{treatment.shortDescription}</p>
        <Link href={`/tratamientos/${treatment.slug}`} className="btn-ghost" style={{ width: "fit-content" }}>
          Ver tratamiento <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section">
      <div className="container hero-grid" style={{ alignItems: "center" }}>
        <AnimateIn>
          <div className="card surface-soft" style={{ padding: "1rem" }}>
            <div style={{ position: "relative", minHeight: 520, borderRadius: 28, overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1580281657527-47f249e8f0f4?auto=format&fit=crop&w=1200&q=80"
                alt="Instalaciones modernas de clínica dental"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <SectionTitle
            eyebrow="Por qué elegirnos"
            title="Profesionalidad médica sin perder cercanía"
            copy="Una clínica excelente no impresiona por postureo, sino por criterio, procesos y resultados sostenibles. Esa es la diferencia."
          />
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              "Explicaciones claras para decidir con tranquilidad",
              "Planificación digital y protocolos modernos",
              "Seguimiento honesto, sin tratamientos innecesarios",
              "Experiencia acumulada aplicada a problemas reales",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <CheckCircle2 color="var(--accent)" />
                <span style={{ lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function TestimonialsPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Historias reales"
          title="La mejor prueba es cómo se siente el paciente al salir"
          copy="Confianza, claridad y resultados. Eso aparece una y otra vez cuando alguien nos recomienda."
        />
        <div className="grid-3">
          {testimonials.slice(0, limit).map((item, index) => (
            <AnimateIn key={`${item.name}-${index}`} delay={index * 0.08}>
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
    <article className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
      <div style={{ display: "flex", gap: ".25rem" }}>
        {stars(rating).map((star) => (
          <Star key={star} size={18} fill="currentColor" color="#f59e0b" />
        ))}
      </div>
      <p style={{ color: "var(--foreground)", lineHeight: 1.8, fontSize: "1.02rem" }}>&ldquo;{quote}&rdquo;</p>
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
        <SectionTitle
          eyebrow="Antes y después"
          title="Resultados que mejoran la vida diaria, no solo la foto"
          copy="La odontología premium no busca exagerar. Busca devolver función, armonía y confianza con naturalidad."
        />
        <div className="grid-2">
          {beforeAfterCases.slice(0, limit).map((item, index) => (
            <AnimateIn key={item.title} delay={index * 0.08}>
              <article className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: 320 }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.2rem", display: "grid", gap: ".6rem" }}>
                  <span className="eyebrow">{item.treatment}</span>
                  <h3 style={{ fontSize: "1.8rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{item.outcome}</p>
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
          title="Especialistas que transmiten calma, método y confianza"
          copy="Detrás de cada sonrisa bien tratada hay criterio clínico, coordinación y una forma de acompañar que se nota desde la primera visita."
        />
        <div className="grid-4">
          {team.slice(0, limit).map((member, index) => (
            <AnimateIn key={member.name} delay={index * 0.06}>
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
    <article className="card" style={{ overflow: "hidden" }}>
      <div style={{ position: "relative", minHeight: 300 }}>
        <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "1.2rem", display: "grid", gap: ".55rem" }}>
        <h3 style={{ fontSize: "1.85rem" }}>{name}</h3>
        <strong style={{ color: "var(--brand)" }}>{role}</strong>
        <span style={{ color: "var(--muted)", fontSize: ".95rem" }}>{specialty}</span>
        <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{bio}</p>
      </div>
    </article>
  );
}

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Blog"
          title="Contenido pensado para entender tu salud oral de verdad"
          copy="SEO, sí. Pero útil. Artículos claros, bien estructurados y centrados en dudas que de verdad tienen pacientes y familias."
        />
        <div className="grid-3">
          {blogPosts.slice(0, limit).map((post, index) => (
            <AnimateIn key={post.slug} delay={index * 0.06}>
              <article className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: 280 }}>
                  <Image src={post.cover} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.2rem", display: "grid", gap: ".8rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", color: "var(--muted)", fontSize: ".92rem" }}>
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "1.8rem" }}>{post.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="btn-ghost" style={{ width: "fit-content" }}>
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
      <div className="container hero-grid" style={{ alignItems: "start" }}>
        <AnimateIn>
          <SectionTitle
            eyebrow="Dudas frecuentes"
            title="Preguntas habituales antes de pedir tu cita"
            copy="Si entendés el proceso, decidís mejor. Y esa es exactamente la idea."
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
      <div className="container hero-grid" style={{ alignItems: "start" }}>
        <AnimateIn>
          <div className="card" style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
            <span className="eyebrow">Ubicación y contacto</span>
            <h2 style={{ fontSize: "clamp(2.3rem, 5vw, 4rem)" }}>Estamos en Valencia, listos para escucharte.</h2>
            <div style={{ display: "grid", gap: ".85rem", color: "var(--muted)" }}>
              <span style={{ display: "inline-flex", gap: ".7rem", alignItems: "center" }}>
                <MapPin size={18} color="var(--brand)" /> {clinic.address}
              </span>
              <span style={{ display: "inline-flex", gap: ".7rem", alignItems: "center" }}>
                <Clock3 size={18} color="var(--brand)" /> {clinic.schedule[0]}
              </span>
            </div>
            <div className="btn-row">
              <Link href="/contacto" className="btn">
                Reservar cita <ArrowRight size={18} />
              </Link>
              <a className="btn-secondary" href={phoneHref(clinic.phone)}>
                Llamar ahora
              </a>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <div className="card" style={{ overflow: "hidden" }}>
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
        <div className="card surface-soft" style={{ padding: "2rem", display: "grid", gap: "1.25rem", textAlign: "center" }}>
          <span className="eyebrow" style={{ marginInline: "auto" }}>
            Primera visita
          </span>
          <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}>Tu próxima sonrisa empieza con una conversación clara.</h2>
          <p className="lead" style={{ maxWidth: 760, margin: "0 auto" }}>
            Si buscás una clínica dental en Valencia donde experiencia, humanidad y tecnología vayan de la mano, estás en el lugar correcto.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contacto" className="btn">
              Pedir cita
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
      <div className="container hero-grid" style={{ alignItems: "start" }}>
        <AnimateIn>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            <SectionTitle
              eyebrow="Contacto y reserva"
              title="Contanos qué necesitás y te orientamos"
              copy="Podés escribirnos para pedir una primera visita, resolver dudas o consultar por un tratamiento concreto."
            />
            <div className="card" style={{ padding: "1.35rem", display: "grid", gap: "1rem" }}>
              <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
                <Sparkles color="var(--accent)" />
                <strong>Respondemos con una propuesta clara y humana</strong>
              </div>
              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                También podés escribirnos por WhatsApp si preferís una vía más directa para consultas rápidas o urgencias.
              </p>
              <a href={clinic.whatsappHref} className="btn-secondary" target="_blank" rel="noreferrer" style={{ width: "fit-content" }}>
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
