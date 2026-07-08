import { NextResponse } from "next/server";
import { getAllGalleryImages } from "@/lib/posts";

export async function GET() {
  return NextResponse.json(getAllGalleryImages());
}