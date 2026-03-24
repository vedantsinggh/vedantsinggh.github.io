import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="sketch p-4">
        <h2>{post.title}</h2>
        <p className="text-sm text-gray-400">{post.date}</p>
        <p className="mt-2 text-gray-300">{post.description}</p>
      </div>
    </Link>
  );
}
