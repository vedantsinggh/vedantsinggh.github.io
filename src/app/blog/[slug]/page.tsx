import { getPost, getAllPosts } from "@/lib/getPosts";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: any) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
