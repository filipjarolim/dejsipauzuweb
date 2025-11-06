"use client";

import Link from "next/link";

type Props = {
  appleUrl?: string;
  googleUrl?: string;
  className?: string;
};

function Chip({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
  const base = "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-foreground/90 shadow-sm backdrop-blur-sm transition-colors hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2";
  if (href) {
    return (
      <Link aria-label={label} href={href} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <span aria-label={`${label} (coming soon)`} aria-disabled className={`${base} opacity-70`}>{children}</span>
  );
}

export default function StoreChips({ appleUrl, googleUrl, className }: Props) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      <Chip href={appleUrl} label="Download on the App Store">
        {/* Apple icon */}
        <svg aria-hidden="true" className="block h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M16.365 1.43c.04 1.06-.39 2.02-1.06 2.84-.77.93-2.02 1.66-3.14 1.56-.12-1.03.42-2.12 1.1-2.9.8-.95 2.2-1.65 3.1-1.5zM20.98 17.07c-.53 1.15-.78 1.66-1.47 2.67-.96 1.4-2.31 3.15-3.97 3.17-1.49.02-1.87-1.03-3.89-1.02-2.02.02-2.43 1.04-3.93 1.02-1.66-.02-2.93-1.52-3.9-2.92C1.4 17.74.32 14.2 1.74 11.46c.8-1.55 2.25-2.52 3.82-2.54 1.62-.03 2.64 1.07 3.98 1.07 1.33 0 2.17-1.07 4-1.07 1.26 0 2.59.69 3.4 1.86-2.99 1.63-2.51 5.9.64 6.29z"/>
        </svg>
        <span className="font-medium">App Store</span>
      </Chip>
      <Chip href={googleUrl} label="Get it on Google Play">
        {/* Google Play icon */}
        <svg aria-hidden="true" className="block h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M3.6 2.2c-.38.2-.6.58-.6 1.05v17.5c0 .47.22.85.6 1.05l10.3-9.8L3.6 2.2zm12.1 7.16L6.1 1.41l10.3 5.96c.45.26.73.74.73 1.27 0 .52-.28 1-.73 1.26zM6.1 22.59l9.6-7.95c.45-.26.73-.74.73-1.27 0-.52-.28-1-.73-1.26L6.1 4.59l9.6 8.23c.45.26.73.74.73 1.27 0 .52-.28 1-.73 1.26L6.1 22.59z"/>
        </svg>
        <span className="font-medium">Google Play</span>
      </Chip>
    </div>
  );
}


