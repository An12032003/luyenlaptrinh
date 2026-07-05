"use client";
import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function getUrl() {
    return typeof window !== "undefined" ? window.location.href : "";
  }

  function shareFacebook() {
    const url = encodeURIComponent(getUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400");
  }

  function copyLink() {
    navigator.clipboard.writeText(getUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Chia sẻ:</span>
      <button
        onClick={shareFacebook}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition-transform"
        title="Chia sẻ Facebook"
      >
        <FaFacebook size={16} />
      </button>
      <button
        onClick={copyLink}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-600 text-white hover:scale-110 transition-transform"
        title="Copy link"
      >
        {copied ? <Check size={16} /> : <LinkIcon size={16} />}
      </button>
      {copied && <span className="text-xs text-green-600">Đã copy link!</span>}
    </div>
  );
}