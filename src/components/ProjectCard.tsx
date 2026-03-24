import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="sketch p-3 text-sm h-full flex flex-col justify-between">

        <div>
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-xs mt-2 opacity-70">
            {project.description}
          </p>
        </div>

        <div className="text-[10px] mt-4 opacity-60">
          {Array.isArray(project.tags)
            ? project.tags.join(" · ")
            : "untagged"}
        </div>

      </div>
    </Link>
  );
}
