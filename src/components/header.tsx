"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, MessageCircleMore, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic, navigation } from "@/data/site";
import { phoneHref } from "@/lib/utils";

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
      <header className="site-header">
        <div className="container header-shell">
          <div className="header-brand-wrap">
            <Link href="/" className="brand-lockup">
              <span className="brand-mark">LG</span>
              <span>
                <strong>{clinic.name}</strong>
                <small>Odontología contemporánea con alma clínica</small>
              </span>
            </Link>
          </div>

          <nav className="desktop-nav">
            <div className="desktop-links">
              {navigation.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link key={item.href} href={item.href} className={active ? "desktop-link active" : "desktop-link"}>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="header-actions">
              <a href={clinic.whatsappHref} target="_blank" rel="noreferrer" className="header-mini-action">
                <MessageCircleMore size={16} /> WhatsApp
              </a>
              <a className="btn" href={phoneHref(clinic.phone)}>
                <Phone size={18} /> Llamar ahora
              </a>
            </div>
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((prev) => !prev)}
            className="mobile-trigger"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
            >
              <div className="mobile-drawer-top">
                <div className="brand-lockup">
                  <span className="brand-mark">LG</span>
                  <span>
                    <strong>{clinic.name}</strong>
                    <small>Valencia</small>
                  </span>
                </div>
                <button type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} className="mobile-close">
                  <X size={18} />
                </button>
              </div>

              <div className="mobile-nav-links">
                {navigation.map((item, index) => {
                  const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <Link href={item.href} onClick={() => setOpen(false)} className={active ? "mobile-nav-link active" : "mobile-nav-link"}>
                        <span>{item.label}</span>
                        <ChevronRight size={18} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mobile-drawer-footer">
                <a className="btn" href={phoneHref(clinic.phone)}>
                  <Phone size={18} /> Reservar llamada
                </a>
                <a className="btn-secondary" href={clinic.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircleMore size={18} /> Escribir por WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
