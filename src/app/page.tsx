"use client";

import dynamic from "next/dynamic";

const WeddingApp = dynamic(() => import("@/components/WeddingApp"), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-screen w-full"
      style={{ background: "var(--ivory)" }}
    />
  ),
});

export default function Home() {
  return <WeddingApp />;
}
