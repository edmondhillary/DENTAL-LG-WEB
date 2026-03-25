import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";
import { blogPosts } from "@/data/site";
import { imageUrl } from "@/lib/utils";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Blog dental",
  description: "Revista editorial de la clínica centrada en odontología, prevención y estética dental.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerStack}>
            <div className={styles.intro}>
              <span className={styles.eyebrow}>Análisis e innovación</span>
              <h1 className={styles.title}>La Revista de la Clínica</h1>
              <p className={styles.copy}>Una exploración curada de odontología moderna, precisión clínica y el arte de una sonrisa bien diseñada.</p>
            </div>

            <nav className={styles.filters}>
              {[
                { label: "Todos", active: true },
                { label: "Higiene oral", active: false },
                { label: "Tecnología", active: false },
                { label: "Atención", active: false },
              ].map(({ label, active }) => (
                <button key={label} className={`${styles.filterButton} ${active ? styles.filterButtonActive : ""}`}>
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <article className={styles.featuredArticle}>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredMedia}>
              <Image src={imageUrl(featured.cover)} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.categoryPill}>{featured.category}</span>
                <time className={styles.featuredTime}>Octubre 2026</time>
              </div>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredCopy}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className={styles.inlineLink}>
                Leer editorial completo <SiteIcon name="arrow_forward" size={18} />
              </Link>
            </div>
          </div>
        </article>

        <div className={styles.postsGrid}>
          {rest.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <div className={styles.postMedia}>
                <Image src={imageUrl(post.cover)} alt={post.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.postMeta}>
                <span className={styles.postCategory}>{post.category}</span>
                <span className={styles.postDot} />
                <time className={styles.cardTime}>Sept 2026</time>
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardCopy}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className={styles.inlineLink} style={{ marginTop: "auto", fontSize: ".9rem" }}>
                Seguir leyendo <SiteIcon name="east" size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.loadMore}>
          <button className={`btn-secondary ${styles.loadMoreButton}`}>
            Más artículos <SiteIcon name="expand_more" size={18} />
          </button>
        </div>
      </main>

      <section className={styles.newsletterWrap}>
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterShell}>
            <div className={styles.newsletterGrid}>
              <div>
                <h2 className={styles.newsletterTitle}>Únete al círculo de la clínica</h2>
                <p className={styles.newsletterCopy}>Recibe contenido seleccionado sobre estética dental, protocolos clínicos y avances relevantes sin ruido ni saturación.</p>
              </div>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder="Tu email" className={styles.newsletterInput} />
                <button className={`btn ${styles.newsletterButton}`} type="submit">
                  Suscribirme a la revista <SiteIcon name="mail" size={18} />
                </button>
                <p className={styles.newsletterMeta}>Privacidad respetada. Baja en un click.</p>
              </form>
            </div>
            <div className={styles.newsletterOrb} />
          </div>
        </div>
      </section>
    </>
  );
}
