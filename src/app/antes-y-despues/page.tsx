import type { Metadata } from "next";
import Image from "next/image";
import { beforeAfterCases } from "@/data/site";
import { imageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Antes y después",
  description: "Galería visual de resultados y transformaciones dentales de la clínica en Valencia.",
};

export default function BeforeAfterPage() {
  return (
    <section className="section">
      <div className="container section-split" style={{ marginBottom: "2rem" }}>
        <div className="section-heading" style={{ marginBottom: 0 }}>
          <span className="eyebrow">Galería clínica</span>
          <h1 style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}>Antes y después con una presentación sobria, luminosa y convincente.</h1>
          <p>Mostramos evolución, naturalidad y coherencia estética. Porque el mejor resultado no grita: convence.</p>
        </div>
        <div className="card card-elevated editorial-panel" style={{ alignSelf: "center" }}>
          <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>Esta galería ya no tiene que sentirse como un mosaico de imágenes sueltas, sino como evidencia clínica presentada con elegancia.</p>
        </div>
      </div>
      <div className="container grid-2">
        {beforeAfterCases.map((item) => (
          <article key={`${item.title}-${item.treatment}`} className="card media-card">
            <div style={{ position: "relative", minHeight: 360 }}>
              <Image src={imageUrl(item.image)} alt={item.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="editorial-panel" style={{ display: "grid", gap: ".65rem" }}>
              <span className="eyebrow">{item.treatment}</span>
              <h2 style={{ fontSize: "2rem" }}>{item.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>{item.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
