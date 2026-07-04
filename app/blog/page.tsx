import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-6">📝 Blog của tôi</h1>

      <div className="max-w-2xl w-full flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}