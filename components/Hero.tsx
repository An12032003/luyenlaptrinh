"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Hero() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="relative w-full py-16 md:py-24 px-4 flex flex-col items-center text-white overflow-hidden">
      {/* Ảnh bìa làm nền, mờ nhạt */}
      <div className="absolute inset-0">
        <Image
          src="/cover-bg.jpg"
          alt="Ảnh bìa"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-pink-900/70 backdrop-blur-[2px]" />
      </div>

      <div className="absolute inset-0 z-[1]">
        <ParticleBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => setShowFull(true)}
          className="cursor-pointer"
        >
          <Image
            src="/avtar.jpg"
            alt="Ảnh đại diện"
            width={280}
            height={280}
            className="rounded-full border-4 border-white shadow-2xl object-cover w-52 h-52 md:w-72 md:h-72 hover:scale-105 transition-transform"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold mt-6 text-center drop-shadow-lg"
        >
          Nguyễn Hồng Ân
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl mt-2 text-white/90 text-center italic"
        >
          Let It All Work Out
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-3 mt-6"
        >
          <a href="#about" className="bg-white text-purple-600 font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
            Về tôi
          </a>
          <a href="#contact" className="bg-white/20 border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
            Liên hệ
          </a>
        </motion.div>
      </div>

      {/* Dòng chữ chạy ngang (ticker) */}
      <div className="relative z-10 w-full mt-10 overflow-hidden border-t border-white/20 pt-4">
        <motion.div
          className="whitespace-nowrap flex gap-12 text-sm md:text-base font-semibold tracking-widest text-white/90"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {Array(6).fill("✨ CHÀO MỪNG ĐẾN VỚI BLOG CỦA MÌNH ✨").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Modal xem ảnh full khi bấm vào avatar */}
      <AnimatePresence>
        {showFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFull(false)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-lg aspect-square"
            >
              <Image
                src="/avtar.jpg"
                alt="Ảnh đại diện phóng to"
                fill
                sizes="500px"
                className="object-contain rounded-2xl"
              />
            </motion.div>
            <button
              onClick={() => setShowFull(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}