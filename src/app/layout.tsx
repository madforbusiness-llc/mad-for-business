import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madforbusiness.com"),
  title: "M.A.D for Business | Digital Studio",
  description: "Créateur de solutions et services numériques premium. Basé au Maroc, ambition internationale.",
  openGraph: {
    title: "M.A.D for Business | Digital Studio",
    description: "Créateur de solutions et services numériques premium.",
    url: "https://madforbusiness.com",
    siteName: "M.A.D for Business",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M.A.D for Business",
      }
    ],
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
