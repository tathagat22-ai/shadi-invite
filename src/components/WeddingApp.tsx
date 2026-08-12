"use client";

import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import SplashScreen from "./SplashScreen";
import Hero from "./Hero";
import Welcome from "./Welcome";
import EventsTimeline from "./EventsTimeline";
import Venue from "./Venue";
import Footer from "./Footer";
import FloatingPetals from "./FloatingPetals";
import AudioPlayer from "./AudioPlayer";

export default function WeddingApp() {
  const [splashDone, setSplashDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleSplashComplete = () => {
    setSplashDone(true);
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  };

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      {splashDone && (
        <div
          style={{
            opacity: showContent ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
          }}
        >
          <SmoothScroll>
            <FloatingPetals />
            <Hero />
            <Welcome />
            <EventsTimeline />
            <Venue />
            <Footer />
            <AudioPlayer />
          </SmoothScroll>
        </div>
      )}
    </>
  );
}
