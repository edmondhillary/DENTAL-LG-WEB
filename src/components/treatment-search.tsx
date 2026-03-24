"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { treatments } from "@/data/site";
import { SiteIcon } from "@/components/site-icon";

export function TreatmentSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(treatments.map((t) => t.category)))], []);

  const filtered = useMemo(() => {
    return treatments.filter((treatment) => {
      const matchCategory = category === "Todos" || treatment.category === category;
      const needle = query.toLowerCase().trim();
      const matchQuery =
        !needle ||
        treatment.name.toLowerCase().includes(needle) ||
        treatment.shortDescription.toLowerCase().includes(needle) ||
        treatment.category.toLowerCase().includes(needle);

      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <section style={{ padding: "0 2rem 6rem", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ position: "relative", borderRadius: "2rem", overflow: "hidden", background: "linear-gradient(135deg, rgba(213,227,255,.7), rgba(147,242,242,.42), rgba(255,255,255,.92))", padding: "2rem", boxShadow: "0 20px 50px rgba(25,28,30,.06)" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 220, height: 220, borderRadius: 999, background: "rgba(27,68,119,.12)", filter: "blur(35px)" }} />
        <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "1.5rem" }}>
          <div>
            <span style={{ color: "var(--secondary)", fontWeight: 800, fontSize: ".75rem", letterSpacing: ".18em", textTransform: "uppercase" }}>Buscador de tratamientos</span>
            <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(2.3rem,4vw,3.6rem)", fontWeight: 800, color: "var(--brand)", marginTop: ".75rem" }}>Encuentra el tratamiento adecuado en segundos.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
            <label style={{ position: "relative" }}>
              <SiteIcon name="search" size={18} style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", color: "var(--outline)" }} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar implantes, endodoncia, limpieza dental..."
                style={{ width: "100%", minHeight: 60, border: 0, borderRadius: 999, background: "rgba(255,255,255,.92)", padding: "0 1.25rem 0 3rem", boxShadow: "0 10px 30px rgba(25,28,30,.04)" }}
              />
            </label>

            <select value={category} onChange={(event) => setCategory(event.target.value)} style={{ minHeight: 60, border: 0, borderRadius: 999, background: "rgba(255,255,255,.92)", padding: "0 1.25rem", boxShadow: "0 10px 30px rgba(25,28,30,.04)" }}>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
            {categories.slice(0, 6).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                style={{
                  border: 0,
                  borderRadius: 999,
                  padding: ".65rem 1rem",
                  background: category === item ? "var(--brand)" : "rgba(255,255,255,.7)",
                  color: category === item ? "white" : "var(--muted)",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "1rem" }}>
            {filtered.slice(0, 6).map((treatment) => (
              <Link key={treatment.slug} href={`/tratamientos/${treatment.slug}`} style={{ background: "rgba(255,255,255,.78)", backdropFilter: "blur(16px)", borderRadius: "1.25rem", padding: "1.25rem", boxShadow: "0 10px 30px rgba(25,28,30,.04)", display: "grid", gap: ".6rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: ".75rem", alignItems: "start" }}>
                  <span style={{ color: "var(--secondary)", fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>{treatment.category}</span>
                  <SiteIcon name="arrow_forward" size={16} style={{ color: "var(--brand)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-headline)", fontSize: "1.25rem", fontWeight: 800, color: "var(--brand)" }}>{treatment.name}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}>{treatment.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
