import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section className="page-shell">
      <div className="container page-intro">
        <span className="eyebrow">Skills</span>
        <h1>My toolkit for design, development, and product thinking.</h1>
      </div>

      <div className="container skills-grid skills-grid--full">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
