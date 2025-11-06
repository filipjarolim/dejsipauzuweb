"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  y?: number; // initial translateY in px
};

export default function Reveal({ children, className, delayMs = 0, y = 12 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const to = window.setTimeout(() => setVisible(true), delayMs);
            el.dataset.reveal = "true";
            return () => window.clearTimeout(to);
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  const style = !visible
    ? { opacity: 0, transform: `translate3d(0, ${y}px, 0)` }
    : { opacity: 1, transform: "translate3d(0, 0, 0)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transitionProperty: "opacity, transform",
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}


