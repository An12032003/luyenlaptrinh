import Image from "next/image";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Resume from "@/components/Resume";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Về tôi",
  description: "Câu chuyện, kỹ năng và hành trình của Nguyễn Hồng Ân.",
};
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Banner nhỏ đầu trang */}
      <div className="w-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-14 px-4 flex flex-col items-center text-white text-center">
        <Image
          src="/avtar.jpg"
          alt="Nguyễn Hồng Ân"
          width={140}
          height={140}
          className="rounded-full border-4 border-white shadow-xl object-cover w-28 h-28 md:w-36 md:h-36 mb-4"
        />
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg">Nguyễn Hồng Ân</h1>
        <p className="mt-2 text-white/90 italic">Let It All Work Out</p>
      </div>

      <div className="flex flex-col items-center w-full px-4 md:px-8 py-10 gap-6">
        <About />
        <Skills />
        <Timeline />
        <Resume />
      </div>
    </div>
  );
}