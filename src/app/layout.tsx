import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madforbusiness.com"),
  title: "M.A.D for Business | Premium Digital Studio",
  description: "Creator of premium digital solutions and services. Based in Morocco, building for the world.",
  openGraph: {
    title: "M.A.D for Business | Premium Digital Studio",
    description: "Creator of premium digital solutions and services.",
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
        {children}
      </body>
    </html>
  );
}
