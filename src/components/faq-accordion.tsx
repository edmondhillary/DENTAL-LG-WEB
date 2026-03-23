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
    <div className="faq-stack">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="card faq-item">
            <button className="faq-trigger" onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 180ms ease" }}
              />
            </button>
            {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
