import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hugolomba.com"),
  title: {
    default: "Hugo Lomba | Software Developer Portfolio in Dublin",
    template: "%s | Hugo Lomba - Software Developer Portfolio in Dublin",
  },
  description:
    "Software Developer based in Dublin specialising in front-end, back-end and full-stack web development using Java, Spring Boot, TypeScript, React and modern technologies.",
  alternates: {
    canonical: "https://www.hugolomba.com",
  },
  openGraph: {
    title: "Hugo Lomba | Software Developer Portfolio in Dublin",
    description:
      "Software Developer based in Dublin specialising in front-end, back-end and full-stack web development using Java, Spring Boot, TypeScript, React and modern technologies.",
    url: "https://www.hugolomba.com",
    siteName: "Hugo Lomba Portfolio",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "https://www.hugolomba.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hugo Lomba Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Lomba | Software Developer Portfolio in Dublin",
    description:
      "Software Developer based in Dublin specialising in front-end, back-end and full-stack web development using Java, Spring Boot, TypeScript, React and modern technologies.",
    images: ["https://www.hugolomba.com/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
