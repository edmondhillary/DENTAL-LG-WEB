import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog dental",
  description: "Blog SEO-friendly de la Clínica Dental Lorenzo González con artículos de implantología, ortodoncia y prevención.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="section">
      <div className="container section-heading">
        <span className="eyebrow">Blog dental</span>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Contenido editorial claro, útil y preparado para SEO.</h1>
        <p>Una experiencia de lectura limpia, con categorías visibles y enfoque en dudas reales del paciente.</p>
      </div>

      <div className="container">
        <article className="card" style={{ overflow: "hidden", marginBottom: "2rem" }}>
          <div className="hero-grid">
            <div style={{ position: "relative", minHeight: 420 }}>
              <Image src={featured.cover} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "2rem", display: "grid", gap: "1rem", alignContent: "center" }}>
              <span className="eyebrow">Artículo destacado</span>
              <h2 style={{ fontSize: "clamp(2.3rem, 5vw, 4rem)" }}>{featured.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{featured.excerpt}</p>
              <div className="pill-list">
                <span className="pill">{featured.category}</span>
                <span className="pill">{featured.readTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="btn" style={{ width: "fit-content" }}>
                Leer artículo
              </Link>
            </div>
          </div>
        </article>

        <div className="pill-list" style={{ marginBottom: "1.5rem" }}>
          {["Todos", "Implantología", "Ortodoncia", "Prevención"].map((category) => (
            <span key={category} className="pill">
              {category}
            </span>
          ))}
        </div>

        <div className="grid-3">
          {rest.map((post, index) => (
            <AnimateIn key={post.slug} delay={index * 0.06}>
              <article className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: 280 }}>
                  <Image src={post.cover} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.2rem", display: "grid", gap: ".75rem" }}>
                  <span className="eyebrow">{post.category}</span>
                  <h2 style={{ fontSize: "1.85rem" }}>{post.title}</h2>
                  <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="btn-ghost" style={{ width: "fit-content" }}>
                    Seguir leyendo
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
