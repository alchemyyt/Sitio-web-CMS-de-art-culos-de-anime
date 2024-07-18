import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime en español",
  description: "Memes e información de anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full bg-white${inter.className}`}>
        <MobileHeader />
        <DesktopHeader />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
