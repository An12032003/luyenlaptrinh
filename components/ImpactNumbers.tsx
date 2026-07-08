"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 4, suffix: "+", label: "Năm đồng hành cùng SVCG Thánh Linh" },
  { value: 500, suffix: "+", label: "Giờ học tập và rèn luyện" },
  { value: 10, suffix: "+", label: "Bài viết chia sẻ tâm sự" },
  { value: 100, suffix: "%", label: "Nhiệt huyết và đam mê" },
];

export default function ImpactNumbers() {
  return (
    <div className="w-full bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-3xl md:text-5xl font-extrabold text-white">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-white/70 text-xs md:text-sm mt-2 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}