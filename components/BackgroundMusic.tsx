"use client";
import { useEffect, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Biến này nằm NGOÀI component, ở cấp độ module -> chỉ được tạo ra ĐÚNG 1 LẦN
// duy nhất trong suốt vòng đời của trang, dù component có render lại bao nhiêu lần.
let sharedAudio: HTMLAudioElement | null = null;

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!sharedAudio) {
    sharedAudio = new Audio("/a.mp3");
    sharedAudio.loop = true;
    sharedAudio.volume = 0.25;
  }
  return sharedAudio;
}

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = getAudio();
    if (!audio) return;

    // Chỉ tự phát nếu nhạc CHƯA từng được phát trước đó (tránh phát lại từ đầu khi chuyển trang)
    if (audio.paused && audio.currentTime === 0) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(!audio.paused);
    }
  }, []);

  function toggleMusic() {
    const audio = getAudio();
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-24 left-6 z-50 bg-gradient-to-r from-purple-600 to-pink-500 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      title={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
    >
      {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
    </button>
  );
}