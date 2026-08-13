"use client";

import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import EnvelopeReveal from "./EnvelopeReveal";
import Hero from "./Hero";
import Celebrations from "./Celebrations";
import Footer from "./Footer";
import AudioPlayer from "./AudioPlayer";

export default function WeddingApp() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <EnvelopeReveal onDone={() => setOpened(true)} />}

      <SmoothScroll>
        <Hero opened={opened} />
        <Celebrations />
        <Footer />
        <AudioPlayer />
      </SmoothScroll>
    </>
  );
}
