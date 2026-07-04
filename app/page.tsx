import Image from "next/image";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col items-center justify-center py-12">
        <Image
          src="/avtar.jpg"
          alt="Ảnh đại diện"
          width={200}
          height={200}
          className="rounded-full shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Xin chào, đây là website của tôi hihi!
        </h1>
        <p className="text-lg text-gray-600">
          Chào mừng bạn đến với trang cá nhân của tôi
        </p>
      </div>

      <About />
      <Skills />
      <Contact />
    </div>
  );
}