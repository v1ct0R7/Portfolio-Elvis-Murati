import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Skills</span>
          <h2>
            Tools and technologies I use to build meaningful digital
            experiences.
          </h2>
        </div>

        <div className="skills-grid">
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
      </div>
    </section>
  );
}
