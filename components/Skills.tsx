export default function Skills() {
  return (
    <div className="max-w-xl bg-white rounded-xl shadow-md p-6 w-full mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Kỹ năng</h2>
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">HTML</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">CSS</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Next.js</span>
      </div>
    </div>
  );
}