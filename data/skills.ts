export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "UI / UX",
    items: [
      "Figma",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
      "Wireframes",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
  },
];
