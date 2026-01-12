import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiPrisma } from "react-icons/si";

export type SkillItem = {
  title: string;
  desc: string;
  icon: IconType;
  tags: string[];
};

export const SKILLS: SkillItem[] = [
  {
    title: "React & Next.js",
    desc: "Building modern web apps with App Router and best practices.",
    icon: SiNextdotjs,
    tags: ["Next.js", "React", "App Router"],
  },
  {
    title: "TypeScript",
    desc: "Safer, maintainable code with strong typing.",
    icon: SiTypescript,
    tags: ["Types", "DX", "Refactor"],
  },
  {
    title: "Tailwind CSS",
    desc: "Fast UI building with clean and consistent design systems.",
    icon: SiTailwindcss,
    tags: ["UI", "Responsive", "Design System"],
  },
  {
    title: "Backend & APIs",
    desc: "REST APIs, auth patterns, and server logic.",
    icon: FaNodeJs,
    tags: ["Node.js", "API", "Auth"],
  },
  {
    title: "Database",
    desc: "Relational modeling & querying for real projects.",
    icon: SiPostgresql,
    tags: ["PostgreSQL", "Modeling"],
  },
  {
    title: "Prisma",
    desc: "Type-safe ORM workflows and schema design.",
    icon: SiPrisma,
    tags: ["Prisma", "Migrations"],
  },
  {
    title: "Git & Collaboration",
    desc: "Version control, PR workflow, and shipping changes safely.",
    icon: FaGithub,
    tags: ["Git", "GitHub", "Teamwork"],
  },
];

export const LEARNING = {
  title: "My Learning Philosophy",
  items: [
    { title: "Learn", desc: "Explore new technologies and patterns consistently." },
    { title: "Practice", desc: "Build projects to turn knowledge into skill." },
    { title: "Share", desc: "Document and help others learn." },
  ],
};
