"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="card" style={{ padding: "1.25rem 1.25rem 1.35rem" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                background: "transparent",
                border: 0,
                textAlign: "left",
                cursor: "pointer",
                fontWeight: 700,
                color: "var(--brand-strong)",
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 160ms ease" }}
              />
            </button>
            {isOpen ? <p style={{ marginTop: "0.85rem", color: "var(--muted)", lineHeight: 1.75 }}>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
