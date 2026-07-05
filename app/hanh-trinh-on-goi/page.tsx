import PostGrid from "@/components/PostGrid";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hành Trình Ơn Gọi",
  description: "Những suy tư, cầu nguyện và bước chân trên con đường ơn gọi của mình.",
  openGraph: { title: "Hành Trình Ơn Gọi", images: ["/2.jpg"] },
};
export default function HanhTrinhPage() {
  return (
      <PostGrid
        category="hanh-trinh-on-goi"
        basePath="/hanh-trinh-on-goi"
        heroTitle="�️ Hành Trình Ơn Gọi 🕊️"
        heroSubtitle="Những suy tư, cầu nguyện và bước chân trên con đường ơn gọi của mình."
      />
    );
}
