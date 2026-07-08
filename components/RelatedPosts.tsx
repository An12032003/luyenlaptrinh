import Link from "next/link";
import Image from "next/image";

type Post = { slug: string; title: string; cover: string; date: string };

export default function RelatedPosts({
  posts, basePath,
}: { posts: Post[]; basePath: string }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
        📌 Bài viết liên quan
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`${basePath}/${post.slug}`}
            className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-28">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-3 bg-white dark:bg-gray-800">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 transition-colors">
                {post.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}