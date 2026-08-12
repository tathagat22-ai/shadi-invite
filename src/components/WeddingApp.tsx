"use client";

import SmoothScroll from "./SmoothScroll";
import Hero from "./Hero";
import Welcome from "./Welcome";
import EventsTimeline from "./EventsTimeline";
import Venue from "./Venue";
import Footer from "./Footer";
import FloatingPetals from "./FloatingPetals";
import AudioPlayer from "./AudioPlayer";

export default function WeddingApp() {
  return (
    <SmoothScroll>
      <FloatingPetals />
      <Hero />
      <Welcome />
      <EventsTimeline />
      <Venue />
      <Footer />
      <AudioPlayer />
    </SmoothScroll>
  );
}
