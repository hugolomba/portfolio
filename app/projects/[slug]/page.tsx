"use client";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import {
  CircleArrowRight,
  Code,
  Github,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const projectData = project as
    | (typeof project & {
        imageUrls?: string[];
        features?: string[];
      })
    | undefined;

  const images = useMemo(() => {
    if (projectData?.imageUrls?.length) {
      return projectData.imageUrls;
    }

    return project?.imageUrl ? [project.imageUrl] : [];
  }, [project]);

  const features = projectData?.features ?? [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const moreProjects = projects
    .filter((p) => p.slug !== project?.slug)
    .slice(0, 3);

  if (!project) {
    return <div className="mt-16">Project not found</div>;
  }

  return (
    <main className="mt-16 mb-10 mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
      <div className="flex items-center gap-x-2 mb-6">
        <div className="flex gap-2">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
          <span className="h-4 w-4 rounded-full bg-green-500"></span>
        </div>
        <Link
          href="/projects"
          className="ml-auto text-sm text-gray-700 hover:text-gray-900 px-3 py-1 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-400 transition-colors"
        >
          ← Back to projects
        </Link>
      </div>

      <article className="flex flex-col items-center">
        <div className="mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-gray-500">
            Selected Project
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            {project.description}
          </p>
        </div>

        <div className="mb-8 w-full max-w-5xl">
          <div className="relative min-h-[280px] w-full overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-gray-50 to-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] aspect-[4/3] sm:min-h-0 sm:aspect-[16/9]">
            {images.length > 0 && (
              <Image
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                sizes="(min-width: 1024px) 896px, (min-width: 768px) 80vw, 100vw"
                className="object-contain p-5 sm:p-8"
              />
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/80 p-3 shadow-lg backdrop-blur transition hover:bg-white sm:left-5 sm:p-2.5"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-5 sm:w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/80 p-3 shadow-lg backdrop-blur transition hover:bg-white sm:right-5 sm:p-2.5"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 sm:h-5 sm:w-5" />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    currentImageIndex === index
                      ? "bg-gray-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={project.url}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Globe />
            View Project
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Github />
            View Code
          </Link>
        </div>

        <div className="mt-12 ">
          <section className="grid w-full gap-6 lg:grid-cols-[1.35fr_0.95fr] lg:gap-10">
            <div className="flex min-w-0 flex-col gap-6">
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gray-500">
                  Overview
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                  About the project
                </h2>
                <div className="space-y-4 text-[15px] leading-7 text-gray-600 sm:text-base">
                  {project.longDescription
                    .split("\n")
                    .filter((paragraph) => paragraph.trim())
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gray-500">
                  What it includes
                </p>
                <h2 className="mb-5 text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                  Key features
                </h2>
                <ul className="space-y-3">
                  {features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gray-500">
                  Stack
                </p>
                <h2 className="mb-5 text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                  Technologies used
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => (
                    <li
                      key={index}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gray-500">
                  Process
                </p>
                <h4 className="mb-5 flex flex-row items-center justify-start gap-x-2 text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                  <Code /> Decision Log
                </h4>

                <ul className="space-y-4">
                  {project.decisionLog.map((entry, index: number) => (
                    <li key={index}>
                      <h5 className="flex flex-row items-center gap-x-2 text-lg font-semibold">
                        <CircleArrowRight />
                        {entry.title}
                      </h5>
                      <p className="ml-3 border-l-2 border-amber-400 px-6">
                        {entry.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {moreProjects.length > 0 && (
          <section className="w-full mt-16 border-t border-gray-200 pt-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Continue exploring
                </p>
                <h4 className="text-2xl font-bold tracking-tight">
                  More Projects
                </h4>
              </div>

              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                See all projects
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {moreProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="group rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                      Project
                    </p>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                      {relatedProject.title}
                    </h5>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-5">
                    {relatedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {relatedProject.technologies
                      .slice(0, 3)
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-900 px-2.5 py-1 text-xs font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <div className="flex items-center text-sm font-medium text-gray-900">
                    View details
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                See all projects
              </Link>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
