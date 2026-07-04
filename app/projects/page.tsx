export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Dự án của tôi</h1>

      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Dự án 1: Website cá nhân</h2>
        <p className="text-gray-600">
          Trang giới thiệu bản thân, xây dựng bằng Next.js và Tailwind CSS.
        </p>
      </div>

      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Dự án 2: ___</h2>
        <p className="text-gray-600">
          Mô tả ngắn về dự án của bạn.
        </p>
      </div>
    </div>
  );
}