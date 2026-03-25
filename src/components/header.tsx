"use client";

import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic } from "@/data/site";
import styles from "./header.module.scss";

const navItems = [
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Resultados", href: "/antes-y-despues" },
  { label: "Filosofía", href: "/sobre-nosotros" },
  { label: "Precios", href: "/precios" },
  { label: "Atención", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={styles.header}
      >
        <div className={clsx("container", styles.inner)}>
          <Link href="/" className={styles.brand}>
            {clinic.name}
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(styles.navLink, active && styles.navLinkActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <a href={`tel:${clinic.phone}`} className={clsx(styles.desktopMeta, styles.phone)}>
              {clinic.phoneDisplay}
            </a>
            <span className={clsx(styles.desktopMeta, styles.eyebrow)}>
              Primera visita gratuita (sin radiografía)
            </span>
            <Link className={clsx("btn", styles.desktopButton)} href="/contacto">
              Reservar cita
            </Link>
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((prev) => !prev)}
              className={styles.mobileTrigger}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className={styles.overlay}>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className={styles.overlayClose}
          >
            <X size={24} strokeWidth={3} />
          </button>
          <div className={styles.overlayInner}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(styles.overlayLink, pathname.startsWith(item.href) && styles.overlayLinkActive)}
              >
                {item.label}
              </Link>
            ))}
            <Link className={clsx("btn", styles.overlayPrimary)} href="/contacto" onClick={() => setOpen(false)}>
              Reservar cita
            </Link>
            <Link className={clsx("btn-secondary", styles.overlaySecondary)} href="/precios" onClick={() => setOpen(false)}>
              Ver precios clínicos
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
