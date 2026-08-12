"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/shehnai.mp3" loop preload="none" />
      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, var(--maroon), var(--gold))",
          border: "2px solid var(--gold-light)",
          boxShadow: "0 0 18px rgba(212,175,55,0.45)",
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--ivory)"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="6" y1="4" x2="6" y2="20" />
            <line x1="18" y1="4" x2="18" y2="20" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--ivory)"
          >
            <polygon points="6,3 20,12 6,21" />
          </svg>
        )}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-2 border-gold-light animate-ping opacity-30" />
        )}
      </button>
    </>
  );
}
