import Link from "next/link";
import { clinic } from "@/data/site";
import { phoneHref } from "@/lib/utils";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <div className={styles.brand}>Clínica Dental Lorenzo González</div>
          <p className={styles.copy}>
            Odontología de precisión con un enfoque humano, elegante y centrado en la salud a largo plazo.
          </p>
          <a href={phoneHref(clinic.phone)} className={styles.phone}>{clinic.phoneDisplay}</a>
          <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className={styles.link}>{clinic.address}</a>
        </div>
        <div>
          <h4 className={styles.heading}>Práctica</h4>
          <ul className={styles.navList}>
            <li><Link href="/tratamientos" className={styles.link}>Tratamientos</Link></li>
            <li><Link href="/antes-y-despues" className={styles.link}>Resultados</Link></li>
            <li><Link href="/sobre-nosotros" className={styles.link}>Filosofía</Link></li>
            <li><Link href="/contacto" className={styles.link}>Contacto</Link></li>
            <li><Link href="/precios" className={styles.link}>Precios</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.heading}>Soporte</h4>
          <ul className={styles.navList}>
            <li><Link href="/faq" className={styles.link}>Preguntas frecuentes</Link></li>
            <li><span className={styles.link}>Privacidad</span></li>
            <li><span className={styles.link}>Accesibilidad</span></li>
            <li><span className={styles.link}>Derechos del paciente</span></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.heading}>Newsletter</h4>
          <div className={styles.newsletter}>
            <div className={styles.newsletterRow}>
              <input type="email" placeholder="Email" className={styles.input} />
              <button className={`btn ${styles.submit}`}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        © 2026 Clínica Dental Lorenzo González. Precisión clínica y atención humana.
      </div>
    </footer>
  );
}
