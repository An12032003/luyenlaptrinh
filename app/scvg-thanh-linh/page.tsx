import type { Metadata } from "next";
import PostGrid from "@/components/PostGrid";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "SVCG Thánh Linh",
  description: "Nhóm sinh viên Công giáo cùng nhau sinh hoạt, gắn kết, yêu thương, hy sinh và phục vụ.",
  openGraph: { title: "SVCG Thánh Linh", images: ["/3.jpg"] },
};

export default function ScvgPage() {
  const posts = getAllPosts("scvg-thanh-linh");
  return (
    <PostGrid
      posts={posts}
      basePath="/scvg-thanh-linh"
      heroTitle="🕯️ SVCG Thánh Linh 🕯️"
      heroSubtitle="Nhóm sinh viên Công giáo cùng nhau sinh hoạt, gắn kết, yêu thương, hy sinh và phục vụ."
    />
  );
}