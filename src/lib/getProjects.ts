import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/projects");

export interface ProjectData {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  tag?: string;
  tags?: string[];
  year?: string;
  status?: string;
  role?: string;
  duration?: string;
  links?: { label: string; href: string }[];
  contentHtml?: string | Promise<string>;
  [key: string]: unknown;
}

// ─── Get all projects (for routing) ─────────────────────────────────────
export function getProjects(): ProjectData[] {
  if (!fs.existsSync(dir)) {
    console.error("Projects directory not found:", dir);
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(".md", "");
    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      subtitle: data.subtitle || "",
      description: data.description || "",
      image: data.image || "",
      tag: data.tag || "Engineering",
      tags: data.tags || [],
      year: data.year || "",
      status: data.status || "complete",
    };
  });
}

// ─── Get single project ─────────────────────────────────────────────────
export function getProject(slug: string): ProjectData {
  if (!slug) throw new Error("Slug is undefined");

  const fullPath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Project not found: ${slug}`);
  }

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = marked(content);

  return {
    slug,
    ...data,
    title: data.title || slug,
    subtitle: data.subtitle || "",
    description: data.description || "",
    image: data.image || "",
    tag: data.tag || "Engineering",
    tags: data.tags || [],
    links: data.links || [],
    year: data.year || "",
    status: data.status || "complete",
    role: data.role || "Lead Engineer",
    duration: data.duration || "",
    contentHtml,
  };
}
