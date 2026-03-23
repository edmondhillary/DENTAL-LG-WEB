import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { blogPosts } from "@/data/site";
import { imageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog dental",
  description: "Blog SEO-friendly de la Clínica Dental Lorenzo González con artículos de implantología, ortodoncia y prevención.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="section">
      <div className="container section-split" style={{ marginBottom: "2rem" }}>
        <div className="section-heading" style={{ marginBottom: 0 }}>
          <span className="eyebrow">Blog dental</span>
          <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Contenido editorial con presencia clínica y lectura limpia.</h1>
          <p>Una experiencia de lectura más madura, con categorías visibles y un tono visual que refuerza autoridad médica.</p>
        </div>
        <div className="card card-elevated editorial-panel" style={{ alignSelf: "center" }}>
          <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>Acá también tiene que notarse la diferencia: menos blog genérico, más revista clínica contemporánea.</p>
        </div>
      </div>

      <div className="container">
        <article className="card media-card" style={{ marginBottom: "2rem" }}>
          <div className="editorial-grid">
            <div className="editorial-side" style={{ position: "relative", minHeight: 480 }}>
              <Image src={imageUrl(featured.cover)} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="editorial-main editorial-panel" style={{ display: "grid", gap: "1rem", alignContent: "center" }}>
              <span className="eyebrow">Artículo destacado</span>
              <h2 style={{ fontSize: "clamp(2.3rem, 5vw, 4rem)" }}>{featured.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{featured.excerpt}</p>
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
              <article className="card media-card">
                <div style={{ position: "relative", minHeight: 300 }}>
                  <Image src={imageUrl(post.cover)} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="editorial-panel" style={{ display: "grid", gap: ".75rem" }}>
                  <span className="eyebrow">{post.category}</span>
                  <h2 style={{ fontSize: "1.95rem" }}>{post.title}</h2>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{post.excerpt}</p>
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
