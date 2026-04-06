"use client";

import { useMemo, useState } from "react";
import ProjectCard from "../../components/project-card";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "Front-end", value: "front" },
    { label: "Back-end", value: "back" },
    { label: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => {
      const type = project.type?.toLowerCase();
      return type === activeFilter;
    });
  }, [activeFilter]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 sm:pt-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Selected work
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
          Projects built with care, clarity, and intention.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          A selection of web projects focused on clean user experience,
          thoughtful interface design, and modern front-end development.
        </p>

        <div className="mt-8 inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur-sm">
          <span className="font-medium text-gray-900">
            {filteredProjects.length}
          </span>
          <span className="ml-2">projects available</span>
        </div>
      </section>

      <section className="mt-10 flex justify-center">
        <div className="inline-flex rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm backdrop-blur-sm">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
}
