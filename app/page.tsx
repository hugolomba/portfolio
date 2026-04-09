import Hero from "@/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Hugo Lomba",
  description:
    "Software Developer based in Dublin, building modern applications across front-end, back-end and full-stack development.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[90rem]">
      <Hero />
    </main>
  );
}
