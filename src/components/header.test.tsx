import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "@/components/header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: ComponentProps<"a">) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("renders brand and desktop CTA", () => {
    render(<Header />);

    expect(screen.getByText(/Clínica Dental Lorenzo González/i)).toBeInTheDocument();
    expect(screen.getByText(/Llamar ahora/i)).toBeInTheDocument();
  });

  it("opens mobile drawer when trigger is clicked", () => {
    render(<Header />);

    fireEvent.click(screen.getByLabelText(/Abrir menú/i));

    expect(screen.getByText(/Reservar llamada/i)).toBeInTheDocument();
  });
});
