import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Ảnh bìa lớn đầu bài viết */}
      <div className="relative w-full h-64 md:h-96">
        <Image src={post.cover} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-purple-500/80 text-white px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg max-w-3xl">
            {post.title}
          </h1>
          <p className="text-white/80 text-sm mt-2">
            {post.date} · ⏱ {post.readingTime} phút đọc
          </p>
        </div>
      </div>

      <div className="max-w-2xl w-full px-4 md:px-8 py-10">
        <Link href="/blog" className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline">
          ← Quay lại Blog
        </Link>

        <div
          className="prose dark:prose-invert max-w-none mt-6 prose-headings:text-purple-600 prose-a:text-pink-500"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  );
}