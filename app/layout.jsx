import { LanguageProvider } from "@/components/providers/language-provider";
import "@/styles/theme.css";
import "./globals.css";

export const metadata = {
  title: "PRIORITY Freight Intelligence | Bilingual Logistics Intelligence Platform",
  description:
    "PRIORITY combines logistics expertise, data intelligence and modern technology to optimize global freight movement across air, ocean and land in English and Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
