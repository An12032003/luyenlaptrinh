"use client";
import { motion } from "framer-motion";

const milestones = [
  { year: "2024", title: "Bắt đầu học lập trình", desc: "Làm quen với HTML, CSS, JavaScript" },
  { year: "2025", title: "Học React & Next.js", desc: "Xây dựng các dự án cá nhân đầu tiên" },
  { year: "2026", title: "Ra mắt website cá nhân", desc: "Trang giới thiệu bản thân chính thức online" },
];

export default function Timeline() {
  return (
    <div id="about" className="max-w-2xl w-full px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        🚀 Hành trình của tôi
      </h2>
      <div className="flex flex-col gap-6 border-l-4 border-purple-300 pl-6">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow"></div>
            <p className="text-sm text-purple-600 font-semibold">{m.year}</p>
            <h3 className="text-lg font-bold text-gray-800">{m.title}</h3>
            <p className="text-gray-600 text-sm">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}