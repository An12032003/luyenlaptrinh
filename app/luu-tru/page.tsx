import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lưu trữ",
  description: "Toàn bộ bài viết được sắp xếp theo dòng thời gian.",
};

const CATEGORIES: { key: string; basePath: string; label: string }[] = [
  { key: "a2onthemic", basePath: "/a2onthemic", label: "A2OnTheMic" },
  { key: "gia-dinh", basePath: "/gia-dinh", label: "Gia Đình Của Tôi" },
  { key: "hanh-trinh-on-goi", basePath: "/hanh-trinh-on-goi", label: "Hành Trình Ơn Gọi" },
  { key: "scvg-thanh-linh", basePath: "/scvg-thanh-linh", label: "SVCG Thánh Linh" },
];

type ArchivePost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  tags: string[];
  readingTime: number;
  basePath: string;
  categoryLabel: string;
};

function groupByMonth(posts: ArchivePost[]) {
  const groups: Record<string, ArchivePost[]> = {};
  posts.forEach((post) => {
    const d = new Date(post.date);
    const key = `Tháng ${d.getMonth() + 1}/${d.getFullYear()}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(post);
  });
  return groups;
}

export default function ArchivePage() {
  const allPosts: ArchivePost[] = CATEGORIES.flatMap((cat) =>
    getAllPosts(cat.key).map((post) => ({ ...post, basePath: cat.basePath, categoryLabel: cat.label }))
  ).sort((a, b) => (a.date < b.date ? 1 : -1));

  const grouped = groupByMonth(allPosts);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-2 text-center">🗂️ Lưu trữ</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10 text-center max-w-lg">
        Toàn bộ {allPosts.length} bài viết từ mọi chuyên mục, sắp xếp theo dòng thời gian.
      </p>

      <div className="max-w-2xl w-full">
        {Object.entries(grouped).map(([month, posts]) => (
          <div key={month} className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-3 sticky top-16 bg-gray-100 dark:bg-gray-950 py-2 z-10">
              {month}
            </h2>
            <div className="flex flex-col gap-2 border-l-2 border-purple-300 dark:border-purple-800 pl-4">
              {posts.map((post) => (
                <Link
                  key={`${post.basePath}-${post.slug}`}
                  href={`${post.basePath}/${post.slug}`}
                  className="group flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow relative"
                >
                  <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-950" />
                  <div>
                    <p className="text-xs text-purple-500 font-semibold">{post.categoryLabel}</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 transition-colors text-sm">
                      {post.title}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-3">{post.date}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}