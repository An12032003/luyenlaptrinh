"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative w-full py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-purple-950 via-gray-900 to-pink-950">
      {/* Vòng sáng trang trí phía sau */}
      <div className="absolute top-[-80px] left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-80px] right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Cột trái: tiêu đề + thông tin liên hệ */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <p className="text-purple-300 font-semibold tracking-widest text-sm mb-2">
            KẾT NỐI VỚI TÔI
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Cùng nhau trò chuyện nhé!
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Để lại vài dòng nhắn gửi, mình sẽ phản hồi sớm nhất có thể. Rất vui được lắng nghe câu chuyện của bạn.
          </p>

          <div className="flex flex-col gap-3">
            <a href="mailto:" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                <Mail size={18} />
              </span>
              Nhận tin nhắn qua email
            </a>
            <a href="https://www.facebook.com/nguyen.hong.an.752845" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                <FaFacebook size={18} />
              </span>
              Facebook
            </a>
            <a href="https://github.com/An12032003" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                <FaGithub size={18} />
              </span>
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Cột phải: form kính mờ */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-white mb-2">
            <MessageCircle size={20} />
            <span className="font-semibold">Gửi lời nhắn</span>
          </div>

          <input
            type="text"
            placeholder="Tên của bạn"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-white/90 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500"
          />
          <textarea
            placeholder="Lời nhắn..."
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-white/90 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500 resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send size={16} />
            {status === "sending" ? "Đang gửi..." : "Gửi lời nhắn"}
          </button>

          {status === "sent" && <p className="text-green-400 text-sm text-center">✅ Đã gửi thành công!</p>}
          {status === "error" && <p className="text-red-400 text-sm text-center">❌ Có lỗi, thử lại sau.</p>}
        </motion.form>
      </div>
    </div>
  );
}