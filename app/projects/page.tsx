export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
        Dự án của tôi
      </h1>

      <div className="max-w-full md:max-w-xl w-full bg-white rounded-xl shadow-md p-4 md:p-6 mb-4 transition-shadow hover:shadow-xl">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Dự án 1: Website cá nhân</h2>
        <p className="text-sm md:text-base text-gray-600">
          Trang giới thiệu bản thân, xây dựng bằng Next.js và Tailwind CSS.
        </p>
      </div>

      <div className="max-w-full md:max-w-xl w-full bg-white rounded-xl shadow-md p-4 md:p-6 transition-shadow hover:shadow-xl">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Dự án 2: ___</h2>
        <p className="text-sm md:text-base text-gray-600">
          Mô tả ngắn về dự án của bạn.
        </p>
      </div>
    </div>
  );
}