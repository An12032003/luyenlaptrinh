import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Xin chào, đây là website của tôi hihi!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Chào mừng bạn đến với trang cá nhân của tôi
      </p>
      <Image
        src="/avtar.jpg"
        alt="Ảnh đại diện"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
    </div>
  );
}