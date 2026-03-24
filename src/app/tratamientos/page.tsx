import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tratamientos dentales",
  description: "Explorá los tratamientos de la clínica con una estructura fiel al lenguaje visual premium de Clinical Atelier.",
};

export default function TreatmentsPage() {
  const cosmetic = [
    {
      title: "Carillas de porcelana",
      copy: "Láminas cerámicas diseñadas para redefinir forma, color y alineación con precisión microscópica.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
      href: "/tratamientos/carillas-dentales",
    },
    {
      title: "Blanqueamiento boutique",
      copy: "Protocolos de oxígeno de alta potencia para devolver luminosidad con control de sensibilidad.",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
      href: "/tratamientos/estetica-dental",
    },
    {
      title: "Ortodoncia invisible",
      copy: "Alineación discreta guiada por simulación 3D para resultados previsibles y elegantes.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
      href: "/tratamientos/ortodoncia",
    },
  ];

  const restorative = [
    {
      title: "Coronas cerámicas",
      copy: "Restauraciones digitales que imitan la translucidez y la resistencia del esmalte natural.",
    },
    {
      title: "Puentes reconstructivos",
      copy: "Estructuras multiunidad diseñadas para devolver función y continuidad estética.",
    },
  ];

  const foundation = [
    {
      title: "Revisiones preventivas",
      copy: "Controles periódicos con apoyo radiológico digital para detectar a tiempo cualquier alteración.",
      icon: "health_and_safety",
      highlight: true,
    },
    {
      title: "Higiene Air-Flow®",
      copy: "Eliminación delicada de biofilm y pigmentaciones mediante tecnología de aire y micropartículas.",
      icon: "waves",
    },
    {
      title: "Odontopediatría",
      copy: "Un entorno amable para construir una relación positiva con el cuidado oral desde pequeños.",
      icon: "child_care",
    },
  ];

  return (
    <main style={{ position: "relative" }}>
      <div className="pattern-dots" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <section style={{ position: "relative", padding: "6rem 2rem 5rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "4rem", alignItems: "center" }}>
          <div style={{ display: "grid", gap: "2rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", padding: ".45rem 1rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".75rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", width: "fit-content" }}>
              Excelencia clínica
            </span>
            <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(3.8rem, 7vw, 6.4rem)", color: "var(--brand)", lineHeight: 1, letterSpacing: "-0.05em", fontWeight: 800 }}>
              Precisión <br />
              <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>artesanal.</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.15rem", maxWidth: 560, lineHeight: 1.8 }}>
              Combinamos ciencia dental avanzada y criterio estético para crear tratamientos tan funcionales como bellos. Este es nuestro atelier clínico.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "4 / 5", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 24px 80px rgba(25,28,30,.12)" }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80")} alt="Consulta dental premium" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", left: -32, bottom: -32, background: "rgba(255,255,255,.8)", backdropFilter: "blur(20px)", padding: "2rem", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)", maxWidth: 280 }}>
              <p style={{ fontFamily: "var(--font-headline)", fontWeight: 800, color: "var(--brand)", fontSize: "1.2rem" }}>Estándar 2026</p>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8, marginTop: ".5rem" }}>Protocolos mínimamente invasivos orientados a durabilidad, función y naturalidad estética.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem", maxWidth: 1280, margin: "0 auto", display: "grid", gap: "6rem" }}>
        <div style={{ display: "grid", gap: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "2rem", borderBottom: "1px solid rgba(195,198,214,.3)", paddingBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)" }}>Atelier estético</h2>
              <p style={{ color: "var(--muted)", marginTop: ".35rem" }}>La armonía visual y el diseño de sonrisa.</p>
            </div>
            <div style={{ color: "var(--secondary)", fontSize: ".8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em" }}>Categoría 01</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "2rem" }}>
            {cosmetic.map((item) => (
              <article key={item.title} style={{ background: "var(--surface-lowest)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid transparent", transition: "all .3s ease" }}>
                <div style={{ aspectRatio: "1 / 1", borderRadius: ".75rem", overflow: "hidden", marginBottom: "1.5rem", position: "relative" }}>
                  <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.25rem", fontWeight: 800, color: "var(--brand)", marginBottom: ".75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>{item.copy}</p>
                <Link href={item.href} style={{ display: "inline-flex", alignItems: "center", color: "var(--secondary)", fontSize: ".8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em" }}>
                  Learn more <span className="material-symbols-outlined" style={{ fontSize: 18, marginLeft: 8 }}>arrow_forward</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gap: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "2rem", borderBottom: "1px solid rgba(195,198,214,.3)", paddingBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)" }}>Restauración avanzada</h2>
              <p style={{ color: "var(--muted)", marginTop: ".35rem" }}>Función, estabilidad y biomateriales de alto rendimiento.</p>
            </div>
            <div style={{ color: "var(--secondary)", fontSize: ".8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em" }}>Categoría 02</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "3rem" }}>
            <div style={{ position: "relative", minHeight: 480, borderRadius: "1.5rem", overflow: "hidden" }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80")} alt="Implantes dentales" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(27,68,119,.92))" }} />
              <div style={{ position: "absolute", insetInline: 0, bottom: 0, padding: "2.5rem", color: "white" }}>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "2rem", fontWeight: 800, marginBottom: ".75rem" }}>Implantes dentales</h3>
                <p style={{ color: "#d5e3ff", lineHeight: 1.8, maxWidth: 380, marginBottom: "1.25rem" }}>Bases de titanio permanentes diseñadas para integrarse con la biología del paciente.</p>
                <Link href="/tratamientos/implantes-dentales" className="btn-secondary" style={{ background: "white", color: "var(--brand)", minHeight: 44, paddingInline: "1.25rem", fontSize: ".85rem", fontWeight: 800 }}>Explorar tecnología</Link>
              </div>
            </div>
            <div style={{ display: "grid", gap: "2rem" }}>
              {restorative.map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1.5rem", padding: "2rem", background: "var(--surface-low)", borderRadius: "1.5rem", border: "1px solid rgba(195,198,214,.2)" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 40, color: "var(--secondary)" }}>{item.title.includes("Coronas") ? "architecture" : "rebase_edit"}</span>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-headline)", fontSize: "1.3rem", fontWeight: 800, color: "var(--brand)", marginBottom: ".5rem" }}>{item.title}</h4>
                    <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.8, marginBottom: "1rem" }}>{item.copy}</p>
                    <span style={{ color: "var(--brand)", fontSize: ".75rem", fontWeight: 800, textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: 4 }}>Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "2rem", borderBottom: "1px solid rgba(195,198,214,.3)", paddingBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)" }}>Salud y base preventiva</h2>
              <p style={{ color: "var(--muted)", marginTop: ".35rem" }}>Cuidado proactivo para estabilidad clínica a largo plazo.</p>
            </div>
            <div style={{ color: "var(--secondary)", fontSize: ".8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".18em" }}>Categoría 03</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "1.5rem" }}>
            {foundation.map((item) => (
              <div key={item.title} style={{ gridColumn: item.highlight ? "span 2 / span 2" : "span 1 / span 1", background: item.highlight ? "var(--brand)" : item.title.includes("Air-Flow") ? "var(--surface-highest)" : "white", color: item.highlight ? "white" : "var(--foreground)", padding: "2rem", borderRadius: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 240, boxShadow: item.highlight ? "none" : "0 4px 20px rgba(0,0,0,.02)", border: item.highlight ? "none" : "1px solid rgba(195,198,214,.2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 40, color: item.highlight ? "#d5e3ff" : "var(--secondary)" }}>{item.icon}</span>
                  {item.highlight ? <span style={{ color: "#d5e3ff", fontSize: ".7rem", fontWeight: 800 }}>ESSENTIAL</span> : null}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-headline)", fontSize: item.highlight ? "1.6rem" : "1.15rem", fontWeight: 800, marginBottom: ".75rem", marginTop: item.highlight ? "2rem" : "1rem" }}>{item.title}</h3>
                  <p style={{ color: item.highlight ? "#d5e3ff" : "var(--muted)", fontSize: ".88rem", lineHeight: 1.8 }}>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem 8rem", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ background: "var(--surface-low)", borderRadius: "2rem", overflow: "hidden", position: "relative" }}>
          <div className="pattern-dots" style={{ position: "absolute", inset: 0, opacity: 0.1 }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", alignItems: "center" }}>
            <div style={{ padding: "4rem", display: "grid", gap: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.6rem,4vw,4rem)", fontWeight: 800, color: "var(--brand)" }}>Tu recorrido personalizado empieza acá.</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, maxWidth: 520 }}>Reservá una sesión diagnóstica completa. Estudiaremos tu caso con imagen avanzada para construir un mapa claro de tratamiento.</p>
              <div className="btn-row">
                <Link href="/contacto" className="btn" style={{ minHeight: 56, paddingInline: "2rem", textTransform: "uppercase", letterSpacing: ".14em", fontSize: ".8rem" }}>Solicitar consulta</Link>
                <Link href="/contacto" className="btn-secondary" style={{ minHeight: 56, paddingInline: "2rem", textTransform: "uppercase", letterSpacing: ".14em", fontSize: ".8rem" }}>Ver precios</Link>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: 420 }}>
              <Image src={imageUrl("https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80")} alt="Dentista de precisión" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
