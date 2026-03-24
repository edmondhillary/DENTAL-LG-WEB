import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { treatments } from "@/data/site";
import { imageUrl, phoneHref } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);
  if (!treatment) return {};

  return {
    title: treatment.name,
    description: treatment.description,
    alternates: { canonical: `/tratamientos/${treatment.slug}` },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) notFound();

  return (
    <>
      <section style={{ position: "relative", minHeight: 820, display: "flex", alignItems: "center", paddingTop: "5rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={imageUrl(treatment.heroImage)} alt={treatment.heroAlt} fill priority style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, var(--background), rgba(247,249,251,.7), transparent)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, width: "100%", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ display: "inline-flex", alignItems: "center", padding: ".45rem 1rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".75rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Restauración avanzada</span>
            <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(4rem,7vw,6.8rem)", fontWeight: 800, color: "var(--brand)", lineHeight: 1, letterSpacing: "-0.05em", marginBottom: "1.5rem" }}>
              {treatment.name.split(" ")[0]} <br />
              <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>{treatment.name.split(" ").slice(1).join(" ") || "premium"}.</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 620 }}>{treatment.description}</p>
            <div className="btn-row">
              <Link href="/contacto" className="btn" style={{ minHeight: 56, paddingInline: "2rem" }}>Solicitar consulta</Link>
              <a href={phoneHref("617680026")} className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem" }}>
                <span className="material-symbols-outlined">play_circle</span>
                Hablar con concierge
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "var(--surface-low)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80")} alt="Titanio y precisión" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", right: -40, bottom: -40, background: "rgba(255,255,255,.7)", backdropFilter: "blur(20px)", padding: "2rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)", maxWidth: 280 }}>
              <p style={{ fontSize: ".75rem", fontWeight: 800, color: "var(--brand)", textTransform: "uppercase", letterSpacing: ".16em", marginBottom: ".5rem" }}>El estándar</p>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Una restauración estable que ayuda a preservar función, soporte óseo y armonía facial.</p>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "2rem" }}>La base de la vitalidad</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
              {treatment.description} Cuando está bien indicado, este tratamiento devuelve seguridad, función y una integración estética completamente natural.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "2rem" }}>
              {treatment.benefits.slice(0, 4).map((benefit, index) => (
                <div key={benefit} style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 999, background: "#cde5ff", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="material-symbols-outlined">{["verified", "auto_fix_high", "restaurant", "face_retouching_natural"][index] ?? "verified"}</span>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--brand)", fontWeight: 800, marginBottom: ".25rem" }}>{benefit}</h4>
                    <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7 }}>{treatment.process[index]?.description ?? treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 4rem" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>¿Es el camino adecuado para vos?</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Priorizamos el éxito a largo plazo. Un buen candidato reúne ciertas condiciones biológicas y de mantenimiento.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "2rem" }}>
            {treatment.idealFor.slice(0, 3).map((item, index) => (
              <article key={item} style={{ background: "var(--surface-lowest)", padding: "2.5rem", borderRadius: "1rem", border: "1px solid rgba(195,198,214,.2)", boxShadow: "0 20px 50px rgba(25,28,30,.04)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: "var(--secondary)", marginBottom: "1.5rem", display: "block" }}>{["skeleton", "health_metrics", "event_repeat"][index] ?? "check_circle"}</span>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.4rem", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>{["Soporte adecuado", "Salud gingival", "Compromiso de cuidado"][index] ?? "Candidato ideal"}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", background: "var(--surface-low)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>El recorrido atelier</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Una secuencia planificada con precisión: desde el estudio inicial hasta la restauración final.</p>
            </div>
            <div style={{ color: "var(--secondary)", fontSize: ".8rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Step-by-step precision</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "1rem" }}>
            {treatment.process.map((step, index) => (
              <article key={step.title} style={{ position: "relative", background: "white", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(195,198,214,.15)" }}>
                <div style={{ position: "absolute", top: 16, right: 16, fontSize: "4rem", fontWeight: 900, color: "#e5e7eb", lineHeight: 1 }}>0{index + 1}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span className="material-symbols-outlined" style={{ color: "var(--secondary)", marginBottom: "1rem" }}>{["biotech", "precision_manufacturing", "hourglass_top", "brush"][index] ?? "biotech"}</span>
                  <h4 style={{ color: "var(--brand)", fontWeight: 800, fontSize: "1.1rem", marginBottom: ".5rem" }}>{step.title}</h4>
                  <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.75 }}>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)" }}>Resultados clínicos</h2>
            <Link href="/antes-y-despues" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--secondary)", fontWeight: 700 }}>Ver galería completa <span className="material-symbols-outlined">arrow_right_alt</span></Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "3rem" }}>
            {treatment.beforeAfter.map((item, index) => (
              <div key={item.title} style={{ display: "grid", gap: "1.5rem" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 10", borderRadius: "1rem", overflow: "hidden" }}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover", filter: "grayscale(1)" }} />
                  <div style={{ position: "absolute", insetInline: 0, bottom: 24, display: "flex", gap: "1rem", paddingInline: 24 }}>
                    <span style={{ background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", padding: ".5rem 1rem", borderRadius: 999, fontSize: ".75rem", fontWeight: 800, color: "var(--brand)" }}>CASE #{4021 + index}</span>
                    <span style={{ background: "rgba(27,68,119,.92)", backdropFilter: "blur(12px)", padding: ".5rem 1rem", borderRadius: 999, fontSize: ".75rem", fontWeight: 800, color: "white" }}>{index === 0 ? "RESTAURATIVO" : "ESTÉTICO"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "1rem" }}>
                  <div>
                    <h4 style={{ color: "var(--brand)", fontWeight: 800, fontSize: "1.3rem", marginBottom: ".4rem" }}>{item.title}</h4>
                    <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{item.description}</p>
                  </div>
                  <div style={{ background: "var(--tertiary-fixed)", padding: ".25rem .75rem", borderRadius: 6, fontSize: ".65rem", fontWeight: 900, textTransform: "uppercase", color: "#002020" }}>Success</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", background: "var(--surface-low)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.4rem,4vw,3.8rem)", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>Preguntas frecuentes</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Respuestas claras sobre el procedimiento y el tiempo clínico del tratamiento.</p>
          </div>
          <FaqAccordion items={treatment.faqs} />
        </div>
      </section>

      <section style={{ padding: "6rem 2rem 8rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ position: "relative", background: "var(--brand)", borderRadius: "2rem", overflow: "hidden", minHeight: 400, display: "flex", alignItems: "center", padding: "3rem 4rem" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80")} alt="Ambiente clínico premium" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3rem,5vw,4.8rem)", fontWeight: 800, color: "white", marginBottom: "1rem", lineHeight: 1.1 }}>Empezá hoy tu recorrido restaurador.</h2>
              <p style={{ color: "#bcd4ff", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>Agendá una sesión diagnóstica para explorar tus posibilidades con calma, imagen avanzada y criterio clínico real.</p>
              <div className="btn-row">
                <Link href="/contacto" className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 56, paddingInline: "2rem", fontWeight: 800 }}>Reservar consulta</Link>
                <a href={phoneHref("617680026")} style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "white", fontWeight: 800 }}>
                  <span className="material-symbols-outlined">call</span>
                  Llamar a concierge
                </a>
              </div>
            </div>
            <div style={{ position: "absolute", right: 96, top: "50%", transform: "translateY(-50%)", display: "none" }} className="desktop-cta-orbit">
              <div style={{ width: 256, height: 256, border: "2px solid rgba(213,227,255,.2)", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 192, height: 192, border: "2px solid rgba(213,227,255,.4)", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ color: "white", fontSize: 56 }}>medical_services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
