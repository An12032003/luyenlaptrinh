import PostDetail from "@/components/PostDetail";
export default async function GiaDinhPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostDetail category="gia-dinh" slug={slug} basePath="/gia-dinh" backLabel="Quay lại Gia Đình Của Tôi" />;
}