import PostDetail from "@/components/PostDetail";
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostDetail category="blog" slug={slug} basePath="/blog" backLabel="Quay lại A2OnTheMic" />;
}