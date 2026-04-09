import Projects from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software development projects built across front-end, back-end and full-stack technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 sm:pt-10">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          My Work
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
          Projects{" "}
        </h1>
      </section>

      <Projects />
    </main>
  );
}
