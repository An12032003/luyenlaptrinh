import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex gap-6">
      <Link href="/" className="text-blue-600 font-semibold hover:underline">
        Trang chủ
      </Link>
      <Link href="/projects" className="text-blue-600 font-semibold hover:underline">
        Dự án của tôi
      </Link>
    </nav>
  );
}