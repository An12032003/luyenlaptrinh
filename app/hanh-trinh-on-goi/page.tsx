import type { Metadata } from "next";
import PostGrid from "@/components/PostGrid";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Hành Trình Ơn Gọi",
  description: "Những suy tư, cầu nguyện và bước chân trên con đường ơn gọi của mình.",
  openGraph: { title: "Hành Trình Ơn Gọi", images: ["/2.jpg"] },
};

export default function HanhTrinhPage() {
  const posts = getAllPosts("hanh-trinh-on-goi");
  return (
    <PostGrid
      posts={posts}
      basePath="/hanh-trinh-on-goi"
      heroTitle="🕊️ Hành Trình Ơn Gọi 🕊️"
      heroSubtitle="Những suy tư, cầu nguyện và bước chân trên con đường ơn gọi của mình."
    />
  );
}