"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="border-border rounded-3xl border p-8 min-h-150 flex flex-col justify-between cursor-pointer z-0 relative shadow-xl ">
        <div className="flex flex-row gap-x-2 absolute top-4 left-4">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>

        <div className="my-4 w-full h-50 object-cover rounded-2xl overflow-hidden mt-10">
          <Image
            src={project.imageUrl}
            alt="Project Screenshot"
            width={400}
            height={200}
            className="object-cover"
          />
        </div>

        <div>
          <span className="flex uppercase tracking-tighter font-semibold">
            Saas Application
          </span>
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p>{project.description}</p>

          <div>
            <h4 className="mt-8 font-semibold">Technologies:</h4>
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

        {/* <button className="bg-red-700" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button> */}

        {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Project Title</h2>
            <p className="mb-4">
              Detailed information about the project, including features,
              technologies used, challenges faced, and solutions implemented.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
      </div>
    </Link>
  );
}
