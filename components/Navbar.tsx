"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-toi", label: "Về tôi" },
  { href: "/a2onthemic", label: "A2OnTheMic" },
  { href: "/gia-dinh", label: "Gia Đình Của Tôi" },
  { href: "/hanh-trinh-on-goi", label: "Hành Trình Ơn Gọi" },
  { href: "/scvg-thanh-linh", label: "SVCG Thánh Linh" },
  { href: "/tim-kiem", label: "🔍 Tìm kiếm" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-40">
      {/* Tên/logo bên trái */}
      <Link href="/" className="font-extrabold text-purple-600 dark:text-purple-400">
        Nguyễn Hồng Ân
      </Link>

      {/* Menu ngang - chỉ hiện trên máy tính */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors text-sm"
          >
            {link.label}
          </Link>
        ))}
        {mounted && (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-xl">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        )}
      </div>

      {/* Nút hamburger - chỉ hiện trên điện thoại */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden text-gray-700 dark:text-gray-200"
      >
        <Menu size={26} />
      </button>

      {/* Menu sổ xuống dạng overlay - trên điện thoại */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Lớp nền tối phía sau */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            {/* Panel menu trượt từ phải vào */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-2xl p-6 flex flex-col gap-2 md:hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-purple-600 dark:text-purple-400">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-500 dark:text-gray-300">
                  <X size={24} />
                </button>
              </div>

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-200 font-semibold py-3 border-b border-gray-100 dark:border-gray-800 hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="mt-4 flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold"
                >
                  {theme === "dark" ? "☀️ Chế độ sáng" : "🌙 Chế độ tối"}
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}