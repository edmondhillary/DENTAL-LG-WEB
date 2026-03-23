import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site";
import { imageUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="section-heading">
          <span className="eyebrow">{post.category}</span>
          <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.3rem)" }}>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
        <div className="article-shell">
          <div className="article-meta">
            <span className="pill">{post.category}</span>
            <span className="pill">{post.readTime}</span>
            <span className="pill">Clínica Dental Lorenzo González</span>
          </div>

          <div className="card media-card">
            <div style={{ position: "relative", minHeight: 520 }}>
              <Image src={imageUrl(post.cover)} alt={post.title} fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="article-grid">
            <aside className="sticky-card">
              <div className="card card-elevated editorial-panel prose">
                <h2 style={{ fontSize: "2rem" }}>Qué vas a encontrar</h2>
                <p>Lectura clara, criterio clínico y contenido útil para entender mejor el tratamiento o problema del que hablamos.</p>
                <ul>
                  <li>Explicación sin tecnicismos innecesarios</li>
                  <li>Orientación realista para pacientes y familias</li>
                  <li>Enfoque actual, no contenido de relleno SEO</li>
                </ul>
              </div>
            </aside>

            <div className="card editorial-panel article-content">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
