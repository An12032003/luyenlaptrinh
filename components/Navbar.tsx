"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-4 px-4 md:px-8 flex justify-center md:justify-between items-center gap-4 md:gap-6 sticky top-0 z-10">
      <div className="flex gap-4 md:gap-6">
        <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
          Trang chủ
        </Link>
        <Link href="/gia-dinh" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
          Gia Đình Của Tôi
        </Link>
        <Link href="/hanh-trinh-on-goi" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
          Hành Trình Ơn Gọi
        </Link>
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
          A2OnTheMic
        </Link>
        <Link href="/scvg-thanh-linh" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
          SVCG Thánh Linh
        </Link>
      </div>
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      )}
    </nav>
  );
}