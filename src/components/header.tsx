"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { clinic, navigation } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        background: "rgba(244, 248, 251, 0.84)",
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
      }}
    >
      <div className="container" style={{ display: "grid", gap: "0.9rem", padding: "1rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <Link href="/" style={{ display: "grid", gap: "0.18rem" }}>
            <strong style={{ fontSize: "1rem", color: "var(--brand-strong)" }}>{clinic.name}</strong>
            <span style={{ color: "var(--muted)", fontSize: ".92rem" }}>Odontología avanzada en Valencia</span>
          </Link>

          <nav className="desktop-nav" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <div className="desktop-links" style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
              {navigation.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: active ? "var(--brand)" : "var(--foreground)",
                      fontWeight: active ? 700 : 500,
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <a className="btn" href={phoneHref(clinic.phone)}>
              <Phone size={18} /> Llamar
            </a>
          </nav>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((prev) => !prev)}
            style={{
              display: "none",
              border: "1px solid var(--border)",
              background: "white",
              borderRadius: "999px",
              width: 48,
              height: 48,
            }}
            className="mobile-trigger"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="card mobile-panel" style={{ padding: "1rem", display: "grid", gap: "0.85rem" }}>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a className="btn" href={phoneHref(clinic.phone)}>
              <Phone size={18} /> Pedir cita
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
