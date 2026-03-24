import { getProject, getProjects } from "@/lib/getProjects";

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const project = await getProject(slug);

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const project = await getProject(slug);

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  );
}
