import { getProjects } from "@/lib/getProjects";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-3xl mb-8">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
