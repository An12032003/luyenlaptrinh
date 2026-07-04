import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "blog";
  return NextResponse.json(getAllPosts(category));
}