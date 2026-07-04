"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-16 md:py-24 px-4 flex flex-col items-center text-white relative overflow-hidden">
        <ParticleBackground />
      {/* Vòng tròn trang trí mờ phía sau */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
    
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/avtar.jpg"
          alt="Ảnh đại diện"
          width={180}
          height={180}
          priority
          className="rounded-full border-4 border-white shadow-2xl object-cover w-32 h-32 md:w-44 md:h-44"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-extrabold mt-6 text-center drop-shadow-lg"
      >
        Tên Của Bạn
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base md:text-xl mt-2 text-white/90 text-center"
      >
        ✨ Hành trình tìm hiểu ơn gọi ✨
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
  );
}