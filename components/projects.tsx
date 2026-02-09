import ProjectCard from "./project-card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "House Management App",
      type: "Saas Application",
      description:
        "Brief description of the project highlighting key features and technologies used.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      imageUrl: "/images/1.png",
    },
    {
      title: "E-commerce Platform",
      type: "Saas Application",
      description:
        "Brief description of the project highlighting key features and technologies used.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      imageUrl: "/images/1.png",
    },
    {
      title: "Social Media Dashboard",
      type: "Saas Application",
      description:
        "Brief description of the project highlighting key features and technologies used.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      imageUrl: "/images/1.png",
    },
  ];

  return (
    <section className="mt-20 min-h-screen">
      <h2 className="text-7xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
