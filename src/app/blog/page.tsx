import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Blog</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="underline">
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
