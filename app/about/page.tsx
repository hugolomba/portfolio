export default function AboutPage() {
  const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
  ];

  const softSkills = [
    "Problem solving",
    "Communication",
    "Attention to detail",
    "Adaptability",
    "Teamwork",
    "User-focused thinking",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 h-fit">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gray-500">
            About
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-6xl">
            Building thoughtful digital experiences.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
            Developer based in Dublin, currently focused on front-end and
            full-stack development with strong attention to product design.
          </p>
        </div>

        <div className="space-y-10">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm uppercase tracking-[0.22em] text-gray-400">
              Background
            </p>
            <p className="mt-4 text-lg leading-9 text-gray-700">
              My professional journey started in customer service and sales,
              where I developed communication, problem-solving, and
              customer-focused thinking.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm uppercase tracking-[0.22em] text-gray-400">
              Present
            </p>
            <p className="mt-4 text-lg leading-9 text-gray-700">
              I am currently studying Computing in Ireland while building
              personal projects that strengthen my skills in React, Next.js,
              JavaScript, and full-stack development.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm uppercase tracking-[0.22em] text-gray-400">
              Focus
            </p>
            <p className="mt-4 text-lg leading-9 text-gray-700">
              My focus is creating modern interfaces that combine clean design,
              smooth user experience, and strong technical foundations.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-gray-400">
              Soft skills
            </p>
            <ul className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <li
                  key={index}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-gray-400">
              Stack
            </p>
            <ul className="flex flex-wrap gap-3">
              {stack.map((tech, index) => (
                <li
                  key={index}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
