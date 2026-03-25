"use client";

import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import styles from "./faq-accordion.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.stack}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className={styles.item}>
            <button className={styles.trigger} onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span>{item.question}</span>
              <ChevronDown size={18} className={clsx(styles.icon, isOpen && styles.iconOpen)} />
            </button>
            {isOpen ? <p className={styles.answer}>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
