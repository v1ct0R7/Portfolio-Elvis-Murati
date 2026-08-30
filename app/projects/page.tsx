import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="container page-intro">
        <span className="eyebrow">Projects</span>
        <h1>
          Selected projects that balance creativity, usability, and performance.
        </h1>
      </div>

      <div className="container projects-grid projects-grid--full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
