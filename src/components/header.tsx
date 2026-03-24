"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic } from "@/data/site";

const navItems = [
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Resultados", href: "/antes-y-despues" },
  { label: "Filosofía", href: "/sobre-nosotros" },
  { label: "Atención", href: "/faq" },
  { label: "Concierge", href: "/contacto" },
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
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          width: "100%",
          background: "rgba(255,255,255,.7)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 50px rgba(25,28,30,0.06)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", gap: "1.25rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-headline)", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--brand)" }}>
            {clinic.name}
          </Link>

          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: ".875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "-.01em",
                    color: active ? "var(--brand)" : "#64748b",
                    borderBottom: active ? "2px solid var(--brand)" : "2px solid transparent",
                    paddingBottom: ".25rem",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
            <Link className="btn desktop-cta" href="/contacto" style={{ minHeight: 48, paddingInline: "2rem", fontFamily: "var(--font-body)", fontSize: ".875rem" }}>
              Reservar cita
            </Link>
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((prev) => !prev)}
              className="mobile-trigger"
              style={{ display: "none", width: 44, height: 44, borderRadius: 999, border: 0, background: "transparent", color: "var(--brand)" }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-overlay" style={{ position: "fixed", inset: 0, zIndex: 70, background: "rgba(247,249,251,.96)", padding: "5rem 1.5rem 1.5rem" }}>
          <div style={{ display: "grid", gap: "1rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid rgba(195,198,214,.35)",
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: pathname.startsWith(item.href) ? "var(--brand)" : "var(--foreground)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn" href="/contacto" onClick={() => setOpen(false)} style={{ marginTop: "1rem" }}>
              Reservar cita
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
