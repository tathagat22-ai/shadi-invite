"use client";

import dynamic from "next/dynamic";

const WeddingApp = dynamic(() => import("./WeddingApp"), {
  ssr: false,
});

export default function ClientApp() {
  return <WeddingApp />;
}
