"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  speed?: number;
  easing?: number; // 0..1, closer to 1 is smoother
  rotate?: number; // degrees per 100px movement
  scale?: number; // scale factor per 1000px movement
  className?: string;
  children: ReactNode;
};

export default function Parallax({ speed = 0.1, easing = 0.08, rotate = 0, scale = 0, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // respect user's reduced motion setting

    let rafId = 0;
    let currentY = 0;
    let targetY = 0;

    const computeTarget = () => {
      const rect = el.getBoundingClientRect();
      targetY = -rect.top * speed;
    };

    const animate = () => {
      currentY += (targetY - currentY) * easing;
      const r = rotate ? (currentY / 100) * rotate : 0;
      const s = scale ? 1 + (currentY / 1000) * scale : 1;
      el.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0) rotate(${r.toFixed(3)}deg) scale(${s.toFixed(4)})`;
      rafId = requestAnimationFrame(animate);
    };

    const onScrollOrResize = () => {
      computeTarget();
    };

    computeTarget();
    animate();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cancelAnimationFrame(rafId);
    };
  }, [speed, easing, rotate, scale]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}


