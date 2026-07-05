import PostDetail from "@/components/PostDetail";
import { getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("a2onthemic", slug);
  return {
    title: post.title,
    openGraph: { title: post.title, images: [post.cover] },
  };
}

export default async function A2OnTheMicPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <PostDetail
      category="a2onthemic"
      slug={slug}
      basePath="/a2onthemic"
      backLabel="Quay lại A2OnTheMic"
    />
  );
}