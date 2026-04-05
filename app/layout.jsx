import { Manrope, Space_Grotesk } from "next/font/google";

import { LanguageProvider } from "@/components/providers/language-provider";
import "@/styles/theme.css";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "PRIORITY Freight Intelligence | Bilingual Logistics Intelligence Platform",
  description:
    "PRIORITY combines logistics expertise, data intelligence and modern technology to optimize global freight movement across air, ocean and land in English and Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
