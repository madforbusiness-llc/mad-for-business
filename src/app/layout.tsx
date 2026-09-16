import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Adresse officielle du site. À remplacer par ton domaine le jour où tu en
  // achètes un (et à brancher dans Vercel : Settings → Domains).
  metadataBase: new URL("https://mad-for-business.vercel.app"),
  title: "M.A.D for Business | Digital Venture Studio & Tech Lab",
  description: "Concepteur et éditeur de solutions numériques & plateformes digitales. Based in Wyoming (USA) & Morocco, building for the world.",
  icons: {
    icon: "/logo-cropped.png",
    shortcut: "/logo-cropped.png",
    apple: "/logo-cropped.png",
  },
  openGraph: {
    title: "M.A.D for Business | Digital Venture Studio & Tech Lab",
    description: "Building & scaling high-impact digital products. Based in Morocco, building for the world.",
    url: "https://mad-for-business.vercel.app",
    siteName: "M.A.D for Business",
    images: [
      {
        url: "/logo-cropped.png",
        width: 1024,
        height: 578,
        alt: "M.A.D for Business",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} antialiased min-h-screen bg-background text-foreground`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
