"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

type Post = {
  slug: string; title: string; excerpt: string; cover: string;
  tags: string[]; date: string; basePath: string;
};

export default function SearchPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/posts").then((r) => r.json()).then(setAllPosts);
  }, []);

  const results = query.trim()
    ? allPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-6">🔍 Tìm kiếm bài viết</h1>

      <div className="relative max-w-xl w-full mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Gõ từ khóa: tên bài viết, chủ đề..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="max-w-3xl w-full flex flex-col gap-3">
        {query.trim() && results.length === 0 && (
          <p className="text-center text-gray-400">Không tìm thấy bài viết nào khớp với "{query}"</p>
        )}

        {results.map((post) => (
          <Link
            key={`${post.basePath}-${post.slug}`}
            href={`${post.basePath}/${post.slug}`}
            className="flex gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 hover:shadow-lg transition-shadow"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <Image src={post.cover} alt={post.title} fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}