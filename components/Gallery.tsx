"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  function showPrev() {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }
  function showNext() {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }

  // Hỗ trợ vuốt trên điện thoại
  let touchStartX = 0;
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 50) showPrev();
    else if (diff < -50) showNext();
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">📷 Thư viện ảnh</h3>

      {/* Lưới ảnh nhỏ */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Ảnh ${i + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 200px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Lightbox phóng to */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            {/* Ảnh phóng to */}
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-square"
            >
              <Image
                src={images[openIndex]}
                alt={`Ảnh ${openIndex + 1}`}
                fill
                sizes="700px"
                className="object-contain rounded-xl"
              />
            </motion.div>

            {/* Nút đóng */}
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-6 right-6 text-white hover:scale-110 transition-transform"
            >
              <X size={32} />
            </button>

            {/* Nút chuyển ảnh trước/sau */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            {/* Chỉ số ảnh hiện tại */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {openIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}