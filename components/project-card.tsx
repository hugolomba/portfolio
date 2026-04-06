"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  const previewImage =
    project.imageUrl || project.imageUrls?.[0] || "/images/placeholder.png";

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/90 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 to-transparent" />

        <div className="relative z-10 flex items-center gap-2 mb-6">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-400/90" />
        </div>

        <div className="relative mb-6 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100 aspect-[16/10]">
          <Image
            src={previewImage}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="mb-5">
            <span className="mb-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
              Selected Project
            </span>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-gray-950 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-gray-600 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h4 className="text-sm font-medium text-gray-700">
                Technologies
              </h4>
              <span className="text-xs text-gray-400">
                {project.technologies.length} stack
              </span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 3)
                .map((tech: string, index: number) => (
                  <li
                    key={index}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </li>
                ))}

              {project.technologies.length > 3 && (
                <li className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                  +{project.technologies.length - 3} more
                </li>
              )}
            </ul>
          </div>
        </div>
      </article>
    </Link>
  );
}
