import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const dir = path.join(process.cwd(), "src/content/blog");

export interface PostData {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  contentHtml?: string;
}

export function getAllPosts(): PostData[] {
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const slug = file.replace(".md", "");

    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(raw);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || "2025",
    };
  });
}

export async function getPost(slug: string): Promise<PostData> {
  if (!slug) throw new Error("Slug is undefined");

  const fullPath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const raw = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || "2025",
    contentHtml: processed.toString(),
  };
}
