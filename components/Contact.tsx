"use client";
import { useState } from "react";

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
    <div className="max-w-full md:max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 w-full transition-shadow hover:shadow-xl">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Liên hệ</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Tên của bạn"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          placeholder="Lời nhắn..."
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Đang gửi..." : "Gửi lời nhắn"}
        </button>

        {status === "sent" && <p className="text-green-600 text-sm">✅ Đã gửi thành công!</p>}
        {status === "error" && <p className="text-red-600 text-sm">❌ Có lỗi, thử lại sau.</p>}
      </form>
    </div>
  );
}