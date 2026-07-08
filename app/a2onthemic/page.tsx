import PostGrid from "@/components/PostGrid";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A2OnTheMic",
  description: "Nơi mình chia sẻ hành trình học tập, dự án và những điều thú vị trên con đường lập trình.",
  openGraph: {
    title: "A2OnTheMic",
    description: "Nơi mình chia sẻ hành trình học tập, dự án và những điều thú vị trên con đường lập trình.",
    images: ["/3.jpg"],
  },
};

export default function A2OnTheMicPage() {
  const posts = getAllPosts("a2onthemic");
  return (
    <PostGrid
      posts={posts}
      basePath="/a2onthemic"
      heroTitle="✨ A2OnTheMic ✨"
      heroSubtitle="Nơi mình chia sẻ hành trình học tập, dự án và những điều thú vị trên con đường lập trình."
    />
  );
}