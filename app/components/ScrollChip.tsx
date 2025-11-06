"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  href?: string;
  threshold?: number; // px from top after which the chip hides
};

export default function ScrollChip({ href = "#features", threshold = 240 }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const shouldHide = window.scrollY > threshold;
        setHidden(shouldHide);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onScroll as any);
      cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return (
    <div
      className={
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 sm:bottom-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" +
        (hidden ? " translate-y-2 opacity-0 pointer-events-none" : " translate-y-0 opacity-100 pointer-events-auto")
      }
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce-subtle opacity-80">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Scroll</span>
      </Link>
    </div>
  );
}


