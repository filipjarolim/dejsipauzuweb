import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dej si pauzu — Micro‑breaks for well‑being",
  description: "A simple way to take mindful micro‑breaks, recharge, and return with clarity.",
  openGraph: {
    title: "Dej si pauzu — Micro‑breaks for well‑being",
    description: "A simple way to take mindful micro‑breaks, recharge, and return with clarity.",
  },
  twitter: {
    card: "summary",
    title: "Dej si pauzu — Micro‑breaks for well‑being",
    description: "A simple way to take mindful micro‑breaks, recharge, and return with clarity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
