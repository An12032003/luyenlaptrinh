import PostDetail from "@/components/PostDetail";

export default async function ScvgPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <PostDetail
      category="scvg-thanh-linh"
      slug={slug}
      basePath="/scvg-thanh-linh"
      backLabel="Quay lại SVCG Thánh Linh"
    />
  );
}