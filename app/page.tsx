import Hero from "@/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Hugo Lomba",
  description:
    "Software Developer based in Dublin, building modern applications across front-end, back-end and full-stack development.",
};

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hugo Lomba',
    jobTitle: 'Software Developer',
    url: 'https://www.hugolomba.com',
    sameAs: [
      'https://linkedin.com/in/hugo-lomba',
      'https://github.com/hugolomba'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'Ireland'
    }
  }


  return (
    <main className="mx-auto max-w-[90rem]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
    </main>
  );
}
