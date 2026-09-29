import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "@/data/project";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Portfolio</span>
            <h2>Selected work that reflects my process and desig thinking.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
