import Link from "next/link";

import type { Project } from "@/data/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="project-card"
      style={{ ["--project-accent" as string]: project.accent }}
    >
      <div className="project-card__top">
        <span className="project-card__label">{project.category}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="project-card__stack">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-card__links">
        <Link href={project.link} target="_blank" rel="noreferrer">
          Live Demo
        </Link>
        <Link href={project.repo} target="_blank" rel="noreferrer">
          Source Code
        </Link>
      </div>
    </article>
  );
}
