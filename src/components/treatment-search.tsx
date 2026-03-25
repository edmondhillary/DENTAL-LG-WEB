"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteIcon } from "@/components/site-icon";
import { treatmentCatalog, type TreatmentCatalogEntry } from "@/data/treatment-catalog";
import styles from "./treatment-search.module.scss";

type TreatmentSearchProps = {
  items?: TreatmentCatalogEntry[];
  defaultVisibleCount?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function TreatmentSearch({
  items = treatmentCatalog,
  defaultVisibleCount = 4,
  eyebrow = "Buscador de tratamientos",
  title = "Encuentra el tratamiento adecuado en segundos.",
  description = "Explora los tratamientos disponibles y entra directamente en la página del servicio que mejor encaje con tu caso.",
}: TreatmentSearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [desktopVisibleCount, setDesktopVisibleCount] = useState(defaultVisibleCount);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncVisibleCount = (matches: boolean) => {
      setDesktopVisibleCount(matches ? 6 : defaultVisibleCount);
    };

    syncVisibleCount(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      syncVisibleCount(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [defaultVisibleCount]);

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(items.map((t) => t.category)))], [items]);

  const filtered = useMemo(() => {
    return items.filter((treatment) => {
      const matchCategory = category === "Todos" || treatment.category === category;
      const needle = query.toLowerCase().trim();
      const haystack = [
        treatment.name,
        treatment.shortDescription,
        treatment.description,
        treatment.category,
        ...(treatment.searchTerms ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return matchCategory && (!needle || haystack.includes(needle));
    });
  }, [category, items, query]);

  const hasActiveSearch = query.trim().length > 0 || category !== "Todos";
  const visibleTreatments = hasActiveSearch ? filtered : filtered.slice(0, desktopVisibleCount);

  return (
    <section className={styles.section}>
      <div className={clsx("container--wide", styles.shell)}>
        <div className={styles.orb} />
        <div className={styles.content}>
          <div className={styles.titleWrap}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.controls}>
            <label className={styles.searchLabel}>
              <SiteIcon name="search" size={18} className={styles.searchIcon} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar implantes, endodoncia, coronas, pulpotomía..."
                className={styles.input}
              />
            </label>

            <select value={category} onChange={(event) => setCategory(event.target.value)} className={styles.select}>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.chips}>
            {categories.slice(0, 6).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={clsx(styles.chip, category === item && styles.chipActive)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className={styles.results}>
            {visibleTreatments.map((treatment) => (
              <Link key={treatment.slug} href={`/tratamientos/${treatment.slug}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{treatment.category}</span>
                  <SiteIcon name="arrow_forward" size={16} className={styles.arrow} />
                </div>
                <h3 className={styles.cardTitle}>{treatment.name}</h3>
                <p className={styles.cardCopy}>{treatment.shortDescription}</p>
              </Link>
            ))}

            {visibleTreatments.length === 0 ? (
              <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>No encontramos un tratamiento con esa búsqueda.</h3>
                <p className={styles.emptyCopy}>Probá con otra palabra clave o cambiá la categoría para ver más opciones.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
