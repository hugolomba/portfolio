"use client";
import { useState, useMemo } from "react";
import ProjectCard from "./project-card";
import { projects } from "../lib/projects";

export default function Projects() {
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
    <>
      <section className="mt-10 flex justify-center">
        <div className="inline-flex md:gap-2 rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm backdrop-blur-sm">
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
    </>
  );
}
