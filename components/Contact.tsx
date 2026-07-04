export default function Contact() {
  return (
    <div className="max-w-xl bg-white rounded-xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Liên hệ</h2>
      <div className="flex flex-col gap-2 text-gray-600">
        <p>📧 Email: josepn.hongan@gmail.com</p>
        <div className="flex gap-4 mt-2">
          <a href="https://www.facebook.com/nguyen.hong.an.752845" target="_blank" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <a href="https://github.com/An12032003" target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}