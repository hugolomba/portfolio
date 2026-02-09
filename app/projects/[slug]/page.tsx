"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { CircleArrowRight, Code, Github, Globe } from "lucide-react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="mt-16">Project not found</div>;
  }

  return (
    <main className="border-border rounded-3xl border p-8 flex flex-col justify-between relative shadow-xl mt-16 w-full mb-10">
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
        <h3 className="text-4xl font-bold mb-10 mt-10 text-center uppercase tracking-tighter">
          {project.title}
        </h3>

        <div className="w-100">
          <Image
            src={project.imageUrl}
            alt="Project Screenshot"
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-2xl mb-8"
          />
        </div>

        <div className="flex flex-row">
          <Link
            href={project.url}
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium shadow ml-4 border border-gray-300 bg-gray-100 hover:bg-gray-400 transition-colors"
          >
            <Globe />
            View Project
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium shadow ml-4 border border-gray-300 bg-gray-100 hover:bg-gray-400 transition-colors"
          >
            <Github />
            View Code
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-10">
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
      </article>
    </main>
  );
}
