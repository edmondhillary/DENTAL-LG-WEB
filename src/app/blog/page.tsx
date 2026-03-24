import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { blogPosts } from "@/data/site";
import { imageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog dental",
  description: "Revista editorial de la clínica inspirada en Clinical Atelier.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        <header style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ maxWidth: 820 }}>
              <span style={{ color: "var(--secondary)", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", fontSize: ".7rem", marginBottom: "1rem", display: "block" }}>Análisis e innovación</span>
              <h1 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(4rem,7vw,6.6rem)", fontWeight: 800, color: "var(--brand)", letterSpacing: "-0.05em", marginBottom: "1rem" }}>La Revista del Atelier</h1>
              <p style={{ color: "var(--muted)", fontSize: "1.2rem", lineHeight: 1.8, maxWidth: 700 }}>Una exploración curada de odontología moderna, precisión clínica y el arte de una sonrisa bien diseñada.</p>
            </div>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
              {[
                ["Todos", true],
                ["Higiene oral", false],
                ["Tecnología", false],
                ["Atención", false],
              ].map(([label, active]) => (
                <button key={label} style={{ padding: ".65rem 1.2rem", borderRadius: 999, border: 0, background: active ? "var(--brand)" : "var(--surface-high)", color: active ? "white" : "var(--muted)", fontSize: ".85rem", fontWeight: 600 }}>{label}</button>
              ))}
            </nav>
          </div>
        </header>

        <article style={{ background: "var(--surface-lowest)", borderRadius: "1rem", overflow: "hidden", marginBottom: "6rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", alignItems: "stretch" }}>
            <div style={{ position: "relative", minHeight: 500 }}>
              <Image src={imageUrl(featured.cover)} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ padding: ".35rem .75rem", borderRadius: 999, background: "var(--tertiary-fixed)", color: "#002020", fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase" }}>{featured.category}</span>
                <time style={{ color: "var(--outline)", fontSize: ".75rem" }}>Octubre 2026</time>
              </div>
              <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.6rem", fontWeight: 800, color: "var(--brand)", lineHeight: 1.15, marginBottom: "1.25rem" }}>{featured.title}</h2>
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--brand)", fontWeight: 800 }}>
                Leer editorial completo <SiteIcon name="arrow_forward" size={18} />
              </Link>
            </div>
          </div>
        </article>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "3rem" }}>
          {rest.map((post) => (
            <article key={post.slug} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "4 / 5", borderRadius: "1rem", overflow: "hidden", marginBottom: "2rem", background: "var(--surface-container)", position: "relative" }}>
                <Image src={imageUrl(post.cover)} alt={post.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem" }}>
                <span style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".18em" }}>{post.category}</span>
                <span style={{ width: 4, height: 4, borderRadius: 999, background: "rgba(195,198,214,.8)" }} />
                <time style={{ color: "var(--outline)", fontSize: ".75rem" }}>Sept 2026</time>
              </div>
              <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.75rem", fontWeight: 800, color: "var(--brand)", lineHeight: 1.2, marginBottom: "1rem" }}>{post.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--brand)", fontWeight: 700, fontSize: ".9rem" }}>
                Seguir leyendo <SiteIcon name="east" size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "5rem", display: "flex", justifyContent: "center" }}>
          <button className="btn-secondary" style={{ minHeight: 54, paddingInline: "2rem", fontWeight: 700 }}>
            Más artículos <SiteIcon name="expand_more" size={18} />
          </button>
        </div>
      </main>

      <section style={{ background: "var(--surface-low)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "white", borderRadius: "1.5rem", padding: "4rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "4rem", alignItems: "center" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "2.6rem", fontWeight: 800, color: "var(--brand)", marginBottom: "1rem" }}>Unite al círculo del Atelier</h2>
                <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>Recibí contenido seleccionado sobre estética dental, protocolos clínicos y avances relevantes sin ruido ni saturación.</p>
              </div>
              <form style={{ display: "grid", gap: "1rem" }}>
                <input type="email" placeholder="Tu email" style={{ width: "100%", padding: "1rem 0", border: 0, borderBottom: "2px solid rgba(195,198,214,.4)", background: "transparent", fontSize: "1.1rem", outline: "none" }} />
                <button className="btn" type="submit" style={{ width: "fit-content", minHeight: 56, paddingInline: "2rem" }}>
                  Suscribirme a la revista <SiteIcon name="mail" size={18} />
                </button>
                <p style={{ color: "var(--outline)", fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".18em" }}>Privacidad respetada. Baja en un click.</p>
              </form>
            </div>
            <div style={{ position: "absolute", right: -80, bottom: -80, width: 320, height: 320, borderRadius: 999, background: "rgba(27,68,119,.05)", filter: "blur(36px)" }} />
          </div>
        </div>
      </section>
    </>
  );
}
