import type { Metadata } from "next";
import PostGrid from "@/components/PostGrid";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Gia Đình Của Tôi",
  description: "Những khoảnh khắc, câu chuyện và tình cảm dành cho gia đình yêu thương của mình.",
  openGraph: { title: "Gia Đình Của Tôi", images: ["/1.jpg"] },
};

export default function GiaDinhPage() {
  const posts = getAllPosts("gia-dinh");
  return (
    <PostGrid
      posts={posts}
      basePath="/gia-dinh"
      heroTitle="❤️ Gia Đình Của Tôi ❤️"
      heroSubtitle="Những khoảnh khắc, câu chuyện và tình cảm dành cho gia đình yêu thương của mình."
    />
  );
}