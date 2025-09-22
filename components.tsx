"use client";

import { useEffect } from "react";

export default function ConfettiCanvas() {
  useEffect(() => {
    const root = document.getElementById("confettiRoot");
    if (!root) return;

    function spawnConfetti(count = 24) {
      const colors = ["#ff6b81", "#ffd166", "#9ad3bc", "#a0c4ff", "#cdb4db"];
      for (let i = 0; i < count; i++) {
        const el = document.createElement("i");
        el.style.left = (50 + (Math.random() * 60 - 30)) + "vw";
        el.style.top = (-10 + Math.random() * 10) + "vh";
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.opacity = "1";
        el.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
        root.appendChild(el);

        const fall = 800 + Math.random() * 1000;
        const rotate = Math.random() * 720 - 360;

        el.animate(
          [
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            {
              transform: `translateY(${70 + Math.random() * 90}vh) rotate(${rotate}deg)`,
              opacity: 0.05
            }
          ],
          { duration: fall, easing: "cubic-bezier(.2,.8,.2,1)" }
        );

        setTimeout(() => el.remove(), fall + 50);
      }
    }

    (window as any).spawnConfetti = spawnConfetti;

    // optional: return cleanup
    return () => {
      delete (window as any).spawnConfetti;
    };
  }, []);

  return (
    <div
      id="confettiRoot"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        overflow: "visible",
        zIndex: 999
      }}
      aria-hidden="true"
    ></div>
  );
}
