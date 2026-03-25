import type { Metadata } from "next";
import { FaqClientPage } from "./faq-client";

export const metadata: Metadata = {
  title: "Soporte al paciente / FAQ",
  description: "Página de soporte con buscador, categorías y respuestas frecuentes.",
};

export default function FaqPage() {
  return <FaqClientPage />;
}
