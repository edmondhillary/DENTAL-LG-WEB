import type { Metadata } from "next";
import { ContactSection, LocationPreview } from "@/components/site-sections";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contacto y reserva",
  description: "Página de contacto y reserva con una experiencia premium y clara.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Empieza tu recorrido hacia la <span style={{ color: "var(--secondary)" }}>precisión.</span>
          </h1>
          <p className={styles.copy}>Vive una experiencia dental coordinada desde el primer contacto, con orientación humana y una logística de atención cuidada al detalle.</p>
        </header>
      </section>
      <ContactSection />
      <LocationPreview />
    </>
  );
}
