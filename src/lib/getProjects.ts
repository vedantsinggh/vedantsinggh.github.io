import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/projects");

// ─── Get all projects (for routing) ─────────────────────────────────────
export function getProjects() {
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
      description: data.description || "",
      image: data.image || "",
    };
  });
}

// ─── Get single project ─────────────────────────────────────────────────
export function getProject(slug: string) {
	console.log(slug)
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

    // ✅ ALL frontmatter fields available in UI
    ...data,

    // ✅ fallback safety
    title: data.title || slug,
    description: data.description || "",
    tags: data.tags || [],
    links: data.links || [],

    contentHtml,
  };
}
