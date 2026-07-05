"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

type Post = {
  slug: string; title: string; date: string; excerpt: string;
  cover: string; tags: string[]; readingTime: number;
};

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200 dark:bg-gray-800 animate-pulse" />
  );
}

export default function PostGrid({
  category, basePath, heroTitle, heroSubtitle,
}: { category: string; basePath: string; heroTitle: string; heroSubtitle: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState<string>("Tất cả");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/posts?category=${category}`)
      .then((r) => r.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [category]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return ["Tất cả", ...Array.from(tagSet)];
  }, [posts]);

  const filtered = activeTag === "Tất cả" ? posts : posts.filter((p) => p.tags.includes(activeTag));
  const [featured, ...rest] = filtered;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Banner giữ nguyên như cũ */}
      <div className="relative w-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-16 px-4 flex flex-col items-center text-white text-center overflow-hidden">
        <div className="absolute top-[-60px] left-[-60px] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative text-3xl md:text-5xl font-extrabold drop-shadow-lg">{heroTitle}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-3 text-white/90 max-w-lg">{heroSubtitle}</motion.p>
      </div>

      {!loading && allTags.length > 1 && (
        <div className="max-w-5xl w-full px-4 -mt-6 relative z-20 flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-md transition-all ${
                activeTag === tag
                  ? "bg-purple-600 text-white scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="max-w-6xl w-full px-4 md:px-8 py-10">
        {loading ? (
          // Trạng thái đang tải: hiện khung xương
          <>
            <div className="w-full h-64 md:h-96 rounded-3xl bg-gray-200 dark:bg-gray-800 animate-pulse mb-8" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </>
        ) : (
          <>
            {featured && (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
                <Link href={`${basePath}/${featured.slug}`} className="group relative block rounded-3xl overflow-hidden shadow-2xl h-64 md:h-96">
                  <Image src={featured.cover} alt={featured.title} fill sizes="100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">✨ Nổi bật</div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <div className="flex gap-2 mb-2">
                      {featured.tags.map((t) => (<span key={t} className="text-xs bg-white/20 backdrop-blur text-white px-2 py-0.5 rounded-full">{t}</span>))}
                    </div>
                    <h2 className="text-xl md:text-3xl font-extrabold text-white max-w-2xl">{featured.title}</h2>
                    <p className="text-white/70 text-sm mt-2 max-w-xl hidden md:block">{featured.excerpt}</p>
                    <p className="text-white/60 text-xs mt-3">{featured.date} · ⏱ {featured.readingTime} phút đọc</p>
                  </div>
                </Link>
              </motion.div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {rest.map((post, i) => (
                <motion.div key={post.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 8) * 0.06 }}>
                  <Link href={`${basePath}/${post.slug}`} className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow aspect-[3/4]">
                    <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <h3 className="text-white font-bold text-sm line-clamp-2 drop-shadow">{post.title}</h3>
                      <p className="text-white/60 text-[10px] mt-1">{post.date}</p>
                      <p className="text-white/80 text-xs mt-2 line-clamp-2 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 overflow-hidden">{post.excerpt}</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">{i + 2}</div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 mt-10">Chưa có bài viết nào trong mục này.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}