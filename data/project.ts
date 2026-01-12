export type ProjectCategory = "Web" | "Mobile";

export type Project = {
  title: string;
  desc: string;
  category: ProjectCategory;
  tech: string[];
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "E-Voting Platform",
    desc: "Admin dashboards, candidate management, PDF/XLSX exports, and recap analytics.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Village Digital Website",
    desc: "Content pages, admin management, and responsive UI for real stakeholders.",
    category: "Web",
    tech: ["Next.js", "Prisma", "Tailwind"],
    link: "#",
  },
  {
    title: "Photobooth Web App",
    desc: "Camera capture, layout presets, polaroid editing, and exports.",
    category: "Web",
    tech: ["Next.js", "Canvas", "UX"],
    link: "#",
  },
  {
    title: "Simple Mobile Tracker",
    desc: "Lightweight tracker concept app (placeholder example).",
    category: "Mobile",
    tech: ["React Native", "Firebase"],
    link: "#",
  },
];
