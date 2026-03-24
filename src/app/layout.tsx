import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadentallorenzogonzalez.es"),
  title: {
    default: "Clínica Dental Lorenzo González | Dentistas en Valencia",
    template: "%s | Clínica Dental Lorenzo González",
  },
  description:
    "Clínica dental premium en Valencia con más de 37 años de experiencia, tecnología avanzada y atención cercana para adultos y familias.",
  keywords: [
    "clínica dental Valencia",
    "dentista Valencia",
    "implantes dentales Valencia",
    "ortodoncia Valencia",
    "estética dental Valencia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica Dental Lorenzo González",
    description:
      "Odontología avanzada en Valencia con un enfoque humano, tecnología moderna y más de 37 años de experiencia.",
    url: "https://clinicadentallorenzogonzalez.es",
    siteName: "Clínica Dental Lorenzo González",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Lorenzo González",
    description:
      "Dentistas en Valencia con 37+ años de experiencia, tratamientos premium y atención cercana.",
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
