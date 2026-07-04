export default function Skills() {
  return (
    <div className="max-w-full md:max-w-xl bg-white rounded-xl shadow-md p-4 md:p-6 w-full mb-6 md:mb-8 transition-shadow hover:shadow-xl">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Kỹ năng</h2>
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm">HTML</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm">CSS</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm">JavaScript</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm">Next.js</span>
      </div>
    </div>
  );
}