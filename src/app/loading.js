"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [tick, setTick] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setTick((n) => n + 1), 300);
    return () => clearInterval(t);
  }, []);

  const blocks = 8;
  const dots = ".".repeat((tick % 3) + 1);

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-zinc-900"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');`}</style>

      {/* Pixel ring spinner */}
      <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
        {Array.from({ length: blocks }).map((_, i) => {
          const angle = (i / blocks) * 2 * Math.PI;
          const x = Math.cos(angle) * 28;
          const y = Math.sin(angle) * 28;
          const active = mounted && i === tick % blocks;
          const prev   = mounted && i === (tick - 1 + blocks) % blocks;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "10px",
                height: "10px",
                transform: `translate(${x - 5}px, ${y - 5}px)`,
                background: active ? "#a855f7" : prev ? "#7c3aed" : "#27272a",
                boxShadow: active ? "0 0 10px #a855f7" : "none",
                imageRendering: "pixelated",
                transition: "background 0.1s",
              }}
            />
          );
        })}
      </div>

      {/* Text */}
      <p
        className="mt-8 text-purple-500"
        style={{ fontSize: "11px", letterSpacing: "0.25em" }}
      >
        LOADING{mounted ? dots : "..."}
      </p>
    </div>
  );
}