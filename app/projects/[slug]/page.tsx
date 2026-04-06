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

  const images = useMemo(() => {
    const projectWithImages = project as typeof project & {
      imageUrls?: string[];
    };

    if (projectWithImages?.imageUrls?.length) {
      return projectWithImages.imageUrls;
    }

    return project?.imageUrl ? [project.imageUrl] : [];
  }, [project]);

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
    <main className="border-border rounded-3xl border bg-white/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between relative shadow-xl mt-16 max-w-7xl mb-10 mx-auto">
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
        <h3 className="text-4xl font-bold mb-10  text-center uppercase tracking-tighter">
          {project.title}
        </h3>

        <div className="w-full max-w-4xl mb-8">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 aspect-[4/3] sm:aspect-[16/9] min-h-[280px] sm:min-h-0">
            {images.length > 0 && (
              <Image
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                sizes="(min-width: 1024px) 896px, (min-width: 768px) 80vw, 100vw"
                className="object-contain p-4"
              />
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousImage}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white/90 p-3 sm:p-2 shadow transition hover:bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-5 sm:w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNextImage}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white/90 p-3 sm:p-2 shadow transition hover:bg-white"
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
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium shadow border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Globe />
            View Project
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium shadow border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Github />
            View Code
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-10 w-full">
          <div className="md:col-span-7">
            <div>
              <h4 className="font-bold text-2xl mb-4">About</h4>
              <p className="mb-4">{project.longDescription}</p>
            </div>

            <div>
              <h4 className="font-bold text-2xl mb-4">Features</h4>
              <ul className="list-disc list-inside mb-4">
                {project.technologies.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-2xl mb-4">Tech</h4>
              <ul className="list-none flex flex-row flex-wrap gap-2 mt-2">
                {project.technologies.map((tech: string, index: number) => (
                  <li
                    key={index}
                    className="bg-gray-800 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <h4 className="font-bold text-2xl mb-4 text-center flex flex-row items-center justify-center gap-x-2">
              <Code /> Decision Log
            </h4>

            <ul>
              {project.decisionLog.map((entry, index: number) => (
                <li key={index} className="mb-4">
                  <h5 className="font-semibold text-lg flex flex-row items-center gap-x-2">
                    <CircleArrowRight />
                    {entry.title}
                  </h5>
                  <p className="ml-3 border-l-2 border-amber-400 px-6 bg-left ">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
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
                  className="group rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
