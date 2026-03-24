import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "src/content/projects");

export function getProjects() {
  if (!fs.existsSync(dir)) {
    console.error("Projects directory not found:", dir);
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));

  return files.map((file) => {
    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");

    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Invalid JSON in:", file);
      return null;
    }
  }).filter(Boolean);
}

export function getProject(slug: string) {
  if (!slug) throw new Error("Slug is undefined");

  const fullPath = path.join(dir, `${slug}.json`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Project not found: ${slug}`);
  }

  const raw = fs.readFileSync(fullPath, "utf-8");

  return JSON.parse(raw);
}
