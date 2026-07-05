import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

const CATEGORIES = ["a2onthemic", "gia-dinh", "hanh-trinh-on-goi", "scvg-thanh-linh"];
const BASE_PATHS: Record<string, string> = {
  a2onthemic: "/a2onthemic",
  "gia-dinh": "/gia-dinh",
  "hanh-trinh-on-goi": "/hanh-trinh-on-goi",
  "scvg-thanh-linh": "/scvg-thanh-linh",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (category) {
    return NextResponse.json(getAllPosts(category));
  }

  // Không có category → trả về TẤT CẢ bài viết từ mọi mục, kèm basePath riêng
  const all = CATEGORIES.flatMap((cat) =>
    getAllPosts(cat).map((post) => ({ ...post, basePath: BASE_PATHS[cat] }))
  );
  return NextResponse.json(all);
}