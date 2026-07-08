"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Bạn cùng nhóm SVCG",
    quote: "Ân là người rất nhiệt tình, luôn sẵn sàng giúp đỡ mọi người trong nhóm.",
    avatar: "/avtar.jpg",
  },
  {
    name: "Trần Thị B",
    role: "Bạn học cùng lớp",
    quote: "Một người bạn đáng tin cậy, luôn lắng nghe và chia sẻ chân thành.",
    avatar: "/avtar.jpg",
  },
  {
    name: "Lê Văn C",
    role: "Thành viên cộng đoàn",
    quote: "Sự hy sinh và tinh thần phục vụ của Ân là tấm gương cho nhiều bạn trẻ.",
    avatar: "/avtar.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-purple-600 dark:text-purple-400 font-semibold tracking-widest text-sm mb-2">
            MỌI NGƯỜI NÓI GÌ
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Lời chia sẻ từ những người thân quen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow relative"
            >
              <div className="text-5xl text-purple-200 dark:text-purple-800 font-serif leading-none mb-2">
                &ldquo;
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}