import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-pink-950 text-white px-4 text-center">
      <Image
        src="/avtar.jpg"
        alt="Không tìm thấy trang"
        width={120}
        height={120}
        className="rounded-full border-4 border-white/30 shadow-xl mb-6 opacity-70"
      />
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-2">
        Ối, trang này không tồn tại rồi 🥲
      </p>
      <p className="text-white/50 mb-8 max-w-md">
        Có thể đường link đã bị đổi hoặc bạn gõ nhầm địa chỉ. Quay lại trang chủ để tiếp tục khám phá nhé.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        ← Về trang chủ
      </Link>
    </div>
  );
}