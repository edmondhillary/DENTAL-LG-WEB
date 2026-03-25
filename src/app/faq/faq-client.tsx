"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteIcon } from "@/components/site-icon";
import { clinic, globalFaqs } from "@/data/site";
import styles from "./page.module.scss";

type Category = {
  id: string;
  icon: string;
  label: string;
  description: string;
  faqs: { question: string; answer: string }[];
};

const categories: Category[] = [
  {
    id: "citas",
    icon: "calendar_today",
    label: "Citas",
    description: "Resolvé dudas sobre tiempos, reservas y primera visita.",
    faqs: globalFaqs.slice(0, 2),
  },
  {
    id: "tratamientos",
    icon: "medical_services",
    label: "Tratamientos",
    description: "Preguntas frecuentes sobre carillas, blanqueamiento, sedación y más.",
    faqs: [
      {
        question: "¿Cuánto dura un blanqueamiento?",
        answer: "Suele mantenerse entre 12 y 24 meses según hábitos, tono inicial y seguimiento. La indicación exacta se revisa en consulta.",
      },
      {
        question: "¿Trabajáis con sedación?",
        answer: "Sí, cuando está clínicamente indicado. Se valora según el tipo de procedimiento, la ansiedad del paciente y las condiciones generales de salud.",
      },
      {
        question: "¿Puedo pedir información antes de decidirme?",
        answer: "Sí. En la primera visita resolvemos dudas, explicamos alternativas y vemos qué plan tiene más sentido para tu caso.",
      },
    ],
  },
  {
    id: "costes",
    icon: "payments",
    label: "Costes y financiación",
    description: "Información orientativa sobre presupuesto y financiación.",
    faqs: globalFaqs.slice(2, 4),
  },
  {
    id: "seguridad",
    icon: "verified_user",
    label: "Seguridad del paciente",
    description: "Qué hacemos para que cada visita sea clara, segura y controlada.",
    faqs: [
      {
        question: "¿Cómo gestionáis la higiene y la bioseguridad?",
        answer: "Seguimos protocolos de esterilización, desinfección y control del entorno clínico según el procedimiento y el instrumental utilizado.",
      },
      {
        question: "¿Qué pasa si tengo un problema urgente durante un tratamiento?",
        answer: "El equipo revisa cada caso y te orienta para que sepas si hace falta revisión, ajuste o cita prioritaria.",
      },
    ],
  },
];

const searchableExtras = [
  {
    title: "Carillas de precisión: el proceso",
    copy: "Nuestro protocolo estrella de carillas cerámicas combina planificación digital, mock-up y ejecución artesanal para lograr naturalidad real.",
    href: "/tratamientos/carillas-de-porcelana",
  },
  {
    title: "¿Cuánto dura un blanqueamiento?",
    copy: "Entre 12 y 24 meses según hábitos, esmalte y seguimiento. Suele mantenerse mejor cuando se combina con higiene y controles regulares.",
    href: "/tratamientos/blanqueamiento-en-clinica",
  },
  {
    title: "¿Trabajáis con sedación?",
    copy: "Sí, cuando está clínicamente indicado. Priorizamos confort, previsibilidad y seguridad en procedimientos más sensibles o extensos.",
    href: "/contacto",
  },
];

export function FaqClientPage() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;

    return categories
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (item) =>
            item.question.toLowerCase().includes(normalizedQuery) ||
            item.answer.toLowerCase().includes(normalizedQuery) ||
            category.label.toLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  }, [normalizedQuery]);

  const visibleCategoryIds = new Set(filteredCategories.map((item) => item.id));
  const currentCategory = filteredCategories.find((item) => item.id === activeCategory) ?? filteredCategories[0] ?? null;

  const matchedExtras = useMemo(() => {
    if (!normalizedQuery) return searchableExtras;

    return searchableExtras.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.copy.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const noResults = normalizedQuery.length > 0 && filteredCategories.length === 0 && matchedExtras.length === 0;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Soporte al paciente</span>
          <h1 className={styles.title}>
            ¿Cómo podemos refinar tu <span style={{ color: "var(--secondary)", fontStyle: "italic", fontWeight: 300 }}>experiencia?</span>
          </h1>
          <div className={styles.searchWrap}>
            <SiteIcon name="search" size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar tratamientos, costes o citas..."
              className={styles.searchInput}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.orbTop} />
        <div className={styles.orbLeft} />
      </section>

      <section className={styles.content}>
        <aside className={styles.aside}>
          <div className={styles.asideInner}>
            <h3 className={styles.asideTitle}>Categorías</h3>
            <div className={styles.categoryScroll}>
              {categories.map(({ icon, label, id }) => {
                const active = currentCategory?.id === id;
                const hiddenBySearch = normalizedQuery && !visibleCategoryIds.has(id);

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveCategory(id)}
                    className={`${styles.categoryLink} ${active ? styles.categoryLinkActive : ""}`}
                    disabled={hiddenBySearch}
                  >
                    <SiteIcon name={icon} size={18} />
                    <span className={styles.categoryLabel}>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className={styles.sections}>
          {currentCategory ? (
            <section id={currentCategory.label}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{currentCategory.label}</h2>
                <span className={styles.sectionMeta}>{currentCategory.faqs.length} respuestas útiles</span>
              </div>

              <div className={styles.sectionIntroCard}>
                <p className={styles.sectionIntroCopy}>{currentCategory.description}</p>
              </div>

              <div className={styles.faqSpacing}>
                <FaqAccordion items={currentCategory.faqs} />
              </div>
            </section>
          ) : null}

          {matchedExtras.length > 0 ? (
            <section id="Tratamientos">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Tratamientos</h2>
                <span className={styles.sectionMeta}>{matchedExtras.length} recursos relacionados</span>
              </div>
              <div className={styles.featureGrid}>
                <div className={styles.featureHero}>
                  <div className={styles.featureHeroInner}>
                    <h3 className={styles.featureHeroTitle}>Te orientamos antes de decidir</h3>
                    <p className={styles.featureHeroCopy}>Buscá por tratamiento, financiación o citas. Si necesitás una respuesta específica, el equipo te ayuda por WhatsApp o en consulta.</p>
                    <Link href="/tratamientos" className={`btn-secondary ${styles.featureHeroButton}`}>
                      Ver tratamientos <SiteIcon name="arrow_forward" size={18} />
                    </Link>
                  </div>
                </div>
                {matchedExtras.map((item) => (
                  <article key={item.title} className={styles.card}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardCopy}>{item.copy}</p>
                    <Link href={item.href} className={styles.cardLink}>
                      Más detalles <SiteIcon name="chevron_right" size={14} />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {noResults ? (
            <section>
              <div className={styles.noResultsCard}>
                <h3 className={styles.noResultsTitle}>No encontramos una respuesta exacta.</h3>
                <p className={styles.noResultsCopy}>Si tu consulta es más específica o preferís una respuesta directa, escribinos por WhatsApp y te orientamos sin vueltas.</p>
                <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" className={`btn ${styles.noResultsAction}`}>
                  <SiteIcon name="chat" size={18} />
                  Hablar por WhatsApp
                </a>
              </div>
            </section>
          ) : null}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaShell}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>¿Tienes más preguntas?</h2>
            <p className={styles.ctaCopy}>Nuestro equipo clínico puede ayudarte a resolver dudas sobre tratamiento, tiempos, financiación o urgencias.</p>
            <div className={styles.ctaActions}>
              <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" className={`btn ${styles.ctaAction}`}>Hablar con un especialista</a>
              <Link href="/contacto" className={`btn-secondary ${styles.ctaAction}`}>Escribir por email</Link>
            </div>
          </div>
          <div className={styles.ctaOrbRight} />
          <div className={styles.ctaOrbLeft} />
        </div>
      </section>
    </>
  );
}
