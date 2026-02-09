import ProjectCard from "../../components/project-card";
import { projects } from "../../lib/projects";
export default function ProjectsPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}
