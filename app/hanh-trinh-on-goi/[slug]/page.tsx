import PostDetail from "@/components/PostDetail";
export default async function HanhTrinhPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostDetail category="hanh-trinh-on-goi" slug={slug} basePath="/hanh-trinh-on-goi" backLabel="Quay lại Hành Trình Ơn Gọi" />;
}