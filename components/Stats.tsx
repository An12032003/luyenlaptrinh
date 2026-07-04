"use client";
import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Giờ luyện code" },
  { number: "5", label: "Dự án đã làm" },
  { number: "3", label: "Ngôn ngữ lập trình" },
  { number: "100%", label: "Đam mê" },
];

export default function Stats() {
  return (
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4 -mt-8 relative z-10">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
        >
          <p className="text-2xl md:text-3xl font-extrabold text-purple-600">{s.number}</p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}