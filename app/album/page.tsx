"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type GalleryImage = { src: string; postTitle: string; slug: string; category: string };

export default function AlbumPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/gallery").then((r) => r.json()).then(setImages);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-2 text-center">📷 Album ảnh</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-center max-w-lg">
        Tổng hợp {images.length} khoảnh khắc từ mọi bài viết.
      </p>

      <div className="max-w-5xl w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {images.map((img, i) => (
          <button key={i} onClick={() => setOpenIndex(i)} className="relative aspect-square rounded-lg overflow-hidden group">
            <Image src={img.src} alt={img.postTitle} fill sizes="200px" className="object-cover group-hover:scale-110 transition-transform duration-300" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-square"
            >
              <Image src={images[openIndex].src} alt={images[openIndex].postTitle} fill sizes="700px" className="object-contain rounded-xl" />
              <p className="text-white text-center mt-3 text-sm">{images[openIndex].postTitle}</p>
            </motion.div>
            <button onClick={() => setOpenIndex(null)} className="absolute top-6 right-6 text-white hover:scale-110 transition-transform">
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}