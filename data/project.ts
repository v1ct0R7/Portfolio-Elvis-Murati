export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
  repo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Brand Launch Website",
    category: "Web Design",
    description:
      "A modern marketing website for a startup, built to showcase products, collect leads, and improve conversion rate with a strong brand story.",
    stack: ["Next.js", "TypeScript", "CSS", "Figma"],
    link: "https://example.com",
    repo: "https://github.com",
    accent: "#22d3ee",
  },
  {
    title: "E-commerce Dashboard",
    category: "Productivity",
    description:
      "A business dashboard for tracking sales, inventory, and customer insights with a clean interface and reusable analytics modules.",
    stack: ["React", "Node.js", "Charts", "REST API"],
    link: "https://example.com",
    repo: "https://github.com",
    accent: "#8b5cf6",
  },
  {
    title: "Portfolio & Blog",
    category: "Personal Brand",
    description:
      "A content-focused website for sharing projects, writing articles, and presenting technical work in a highly readable format.",
    stack: ["Next.js", "MDX", "SEO", "Responsive UI"],
    link: "https://example.com",
    repo: "https://github.com",
    accent: "#f59e0b",
  },
];
