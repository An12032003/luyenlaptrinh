import Link from "next/link";
import Image from "next/image";
import PostGridClient from "./PostGridClient";

type Post = {
  slug: string; title: string; date: string; excerpt: string;
  cover: string; tags: string[]; readingTime: number;
};

export default function PostGrid({
  posts, basePath, heroTitle, heroSubtitle,
}: { posts: Post[]; basePath: string; heroTitle: string; heroSubtitle: string }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="relative w-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-16 px-4 flex flex-col items-center text-white text-center overflow-hidden">
        <div className="absolute top-[-60px] left-[-60px] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <h1 className="relative text-3xl md:text-5xl font-extrabold drop-shadow-lg">{heroTitle}</h1>
        <p className="relative mt-3 text-white/90 max-w-lg">{heroSubtitle}</p>
      </div>

      {/* Phần lọc + grid card cần tương tác (bấm nút, hover) → tách riêng ra Client Component */}
      <PostGridClient posts={posts} basePath={basePath} />
    </div>
  );
}