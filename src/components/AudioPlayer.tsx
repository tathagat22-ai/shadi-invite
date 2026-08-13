"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.7;

    const events = ["pointerdown", "touchstart", "click", "keydown"];
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, tryPlay));
    };
    // Browsers block audio-with-sound until the user interacts; the "tap to
    // open" gesture is the first interaction, so playback starts right then.
    const tryPlay = () => {
      a.play()
        .then(() => cleanup())
        .catch(() => {});
    };

    tryPlay(); // in case autoplay is permitted
    events.forEach((e) =>
      window.addEventListener(e, tryPlay, { passive: true })
    );

    const onVisibility = () => {
      if (document.hidden) {
        a.pause();
      } else if (!a.paused || a.currentTime > 0) {
        a.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cleanup();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <audio ref={audioRef} src="/audio/wedding.mp3" loop preload="auto" />
  );
}
