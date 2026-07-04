"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Post = {
  slug: string; title: string; date: string; excerpt: string;
  cover: string; tags: string[]; readingTime: number;
};

export default function PostGrid({
  category, basePath, heroTitle, heroSubtitle,
}: { category: string; basePath: string; heroTitle: string; heroSubtitle: string }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`/api/posts?category=${category}`).then((r) => r.json()).then(setPosts);
  }, [category]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-16 px-4 flex flex-col items-center text-white text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">{heroTitle}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-white/90 max-w-lg">{heroSubtitle}</motion.p>
      </div>

      <div className="max-w-7xl w-full px-4 md:px-8 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 -mt-8 relative z-10">
        {posts.map((post, i) => (
          <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <Link href={`${basePath}/${post.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative w-full h-44 overflow-hidden">
                <Image src={post.cover} alt={post.title} fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg group-hover:text-purple-600 transition-colors">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                  <span>{post.date}</span><span>⏱ {post.readingTime} phút đọc</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}