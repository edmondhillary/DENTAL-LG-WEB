import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site";

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
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-heading">
          <span className="eyebrow">{post.category}</span>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
        <div className="card" style={{ overflow: "hidden", marginBottom: "2rem" }}>
          <div style={{ position: "relative", minHeight: 460 }}>
            <Image src={post.cover} alt={post.title} fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="prose">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
