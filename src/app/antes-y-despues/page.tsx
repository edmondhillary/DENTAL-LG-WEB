import type { Metadata } from "next";
import Image from "next/image";
import { beforeAfterCases } from "@/data/site";

export const metadata: Metadata = {
  title: "Antes y después",
  description: "Galería visual de resultados y transformaciones dentales de la clínica en Valencia.",
};

export default function BeforeAfterPage() {
  return (
    <section className="section">
      <div className="container section-heading">
        <span className="eyebrow">Galería clínica</span>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>Antes y después con una presentación limpia y premium.</h1>
        <p>Mostramos evolución, naturalidad y coherencia estética. Porque el mejor resultado no grita: convence.</p>
      </div>
      <div className="container grid-2">
        {beforeAfterCases.map((item) => (
          <article key={`${item.title}-${item.treatment}`} className="card" style={{ overflow: "hidden" }}>
            <div style={{ position: "relative", minHeight: 360 }}>
              <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "1.2rem", display: "grid", gap: ".65rem" }}>
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
