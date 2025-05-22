import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/cookiesbanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime en Español: [Comunidad] Noticias y Reseñas de Anime",
  description:
    "Sumérgete en nuestra Comunidad Anime en Español: [Noticias de última hora, reseñas detalladas y análisis profundos] de tus series y películas de animacion japonesa favoritas. No te pierdas ningún estreno. ¡Tu espacio otaku te espera! 🤩🔥 Únete y vive el anime al máximo. 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`w-full bg-white${inter.className}`}>
        <MobileHeader />
        <DesktopHeader />
        {children}
        <CookieConsentBanner />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
