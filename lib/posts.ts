import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

function getDir(category: string) {
  return path.join(process.cwd(), "posts", category);
}

function estimateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function getAllPosts(category: string) {
  const dir = getDir(category);
  if (!fs.existsSync(dir)) return [];
  const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || "",
        cover: data.cover || "/avtar.jpg",
        tags: (data.tags || []) as string[],
        readingTime: estimateReadingTime(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(category: string, slug: string) {
  const dir = getDir(category);
  const fullPath = path.join(dir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return {
    title: data.title,
    date: data.date,
    cover: data.cover || "/avtar.jpg",
    tags: (data.tags || []) as string[],
    readingTime: estimateReadingTime(content),
    contentHtml: processedContent.toString(),
    gallery: (data.gallery || []) as string[],
  };
}