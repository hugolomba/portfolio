import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { AnimatePresence } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teu-dominio.com"),
  title: {
    default: "Hugo Lomba | Software Developer",
    template: "%s | Hugo Lomba",
  },
  description:
    "Portfolio of Hugo Lomba, a Software Developer based in Dublin, working across front-end, back-end and full-stack development.",
  keywords: [
    "Hugo Lomba",
    "Software Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Web Developer",
    "Dublin",
    "Ireland",
  ],
  authors: [{ name: "Hugo Lomba" }],
  creator: "Hugo Lomba",
  openGraph: {
    title: "Hugo Lomba | Software Developer",
    description:
      "Portfolio of Hugo Lomba, a Software Developer based in Dublin, working across front-end, back-end and full-stack development.",
    url: "https://teu-dominio.com",
    siteName: "Hugo Lomba Portfolio",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Lomba | Software Developer",
    description:
      "Portfolio of Hugo Lomba, a Software Developer based in Dublin, working across front-end, back-end and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
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

        {/* <AnimatePresence mode="wait"> */}
        {children}
        {/* </AnimatePresence> */}
      </body>
    </html>
  );
}
