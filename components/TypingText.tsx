"use client";
import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 80,
  className = "",
}: { text: string; speed?: number; className?: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}