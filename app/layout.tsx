import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const body = Crimson_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA4Devs — Formación en Inteligencia Artificial",
  description:
    "Domina la Inteligencia Artificial con el programa más completo en español. Desde fundamentos hasta sistemas autónomos con IA generativa.",
  openGraph: {
    title: "IA4Devs — Formación en Inteligencia Artificial",
    description: "El programa de IA más completo en español.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
