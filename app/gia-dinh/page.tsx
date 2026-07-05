import type { Metadata } from "next";
import PostGrid from "@/components/PostGrid";
export const metadata: Metadata = {
  title: "Gia Đình Của Tôi",
  description: "Những khoảnh khắc, câu chuyện và tình cảm dành cho gia đình yêu thương của mình.",
  openGraph: { title: "Gia Đình Của Tôi", images: ["/1.jpg"] },
};
export default function GiaDinhPage() {
  return <PostGrid category="gia-dinh" basePath="/gia-dinh" heroTitle="❤️ Gia Đình Của Tôi ❤️"
    heroSubtitle="Những khoảnh khắc, câu chuyện và tình cảm dành cho gia đình yêu thương của mình." />;
}