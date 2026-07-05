import PostGrid from "@/components/PostGrid";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SVCG Thánh Linh",
  description: "Nhóm sinh viên Công giáo cùng nhau sinh hoạt, gắn kết, yêu thương, hy sinh và phục vụ.",
  openGraph: { title: "SVCG Thánh Linh", images: ["/3.jpg"] },
};
export default function ScvgPage() {
  return (
    <PostGrid
      category="scvg-thanh-linh"
      basePath="/scvg-thanh-linh"
      heroTitle="🕯️ SVCG Thánh Linh 🕯️"
      heroSubtitle="Nhóm sinh viên Công giáo cùng nhau sinh hoạt, gắn kết, yêu thương, hy sinh và phục vụ."
    />
  );
}