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
  metadataBase: new URL("https://hugolomba.com"),
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
    "Java",
    "Spring Boot",
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
  alternates: {
    canonical: "https://hugolomba.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hugo Lomba | Software Developer",
    description:
      "Hugo Lomba is a Software Developer based in Dublin, building responsive front-end, back-end and full-stack web applications with React, Next.js, Java and Spring Boot.",
    url: "https://hugolomba.com",
    siteName: "Hugo Lomba Portfolio",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hugo Lomba Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Lomba | Software Developer",
    description:
      "Portfolio of Hugo Lomba, a Software Developer based in Dublin, working across front-end, back-end and full-stack development.",
    images: ["/og-image.png"],
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
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
