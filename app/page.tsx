import Image from "next/image";
import Parallax from "@/app/components/Parallax";
import Reveal from "@/app/components/Reveal";
import ScrollChip from "@/app/components/ScrollChip";
import StoreChips from "@/app/components/StoreChips";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ScrollChip />
        {/* Subtle radial background */}
        <Parallax speed={0.04} easing={0.1}>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent_70%)] dark:bg-[radial-gradient(100%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
          />
        </Parallax>
        <Parallax speed={0.08}>
          <div aria-hidden className="absolute -z-10 h-72 w-72 -translate-y-12 -translate-x-14 rounded-full bg-accent/40 blur-3xl dark:bg-accent/25" />
        </Parallax>

        {/* Header */
        }
        <header className="mb-10 flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="dark:invert"
              src="/window.svg"
              alt="Dej si pauzu logomark"
              width={28}
              height={28}
              priority
            />
            <span className="text-sm font-medium tracking-tight text-black dark:text-zinc-50">Dej si pauzu</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
            <a href="#features" className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2">Features</a>
            <a href="#why" className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2">Why</a>
            <a href="#how" className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2">How it works</a>
            <a href="#screens" className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2">Screens</a>
            <a href="#faq" className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2">FAQ</a>
            <a href="#download" className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60 focus-visible:outline-offset-2">Download</a>
          </nav>
        </header>

        {/* Hero */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Reveal delayMs={0}>
            <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">Coming soon</span>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
              Micro‑breaks for better focus and well‑being
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Dej si pauzu helps you take short, mindful pauses during the day so you can recharge, reduce stress, and return to your work with clarity.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
              <a
                className="flex h-12 w-full items-center justify-center rounded-full bg-accent px-5 text-black transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] md:w-[158px]"
                href="#features"
              >
                Learn more
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={260}>
            <div id="download" className="mt-2 scroll-mt-28">
              <StoreChips />
            </div>
          </Reveal>
        </div>

        {/* Big display text */}
        <section className="mt-20 w-full">
          <Parallax speed={0.06} easing={0.1}>
            <Reveal>
              <h2 className="text-6xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-7xl">
                Pause. Breathe. Reset.
              </h2>
              <div className="mt-3 h-1 w-24 rounded-full bg-accent" />
            </Reveal>
          </Parallax>
        </section>

        {/* Callout CTA */}
        <section className="mt-20 w-full">
          <Parallax speed={0.04} easing={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-black/[.08] bg-black/[.02] p-6 dark:border-white/[.145] dark:bg-white/[.03]">
              <Parallax speed={0.08}>
                <div aria-hidden className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-accent/25 blur-3xl dark:bg-accent/15" />
              </Parallax>
              <Reveal>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Make space for better days</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">A few mindful pauses can shift the tone of your whole day.</p>
                  </div>
                  <a href="#download" className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-black transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]">Get started</a>
                </div>
              </Reveal>
            </div>
          </Parallax>
        </section>
        {/* How it works */}
        <section id="how" className="mt-20 w-full scroll-mt-28">
          <Parallax speed={0.05} easing={0.1}>
            <div aria-hidden className="absolute -z-10 h-56 w-56 -translate-y-8 translate-x-[65%] rounded-full bg-accent/25 blur-3xl dark:bg-accent/15 sm:translate-x-[75%]" />
          </Parallax>
          <Reveal>
            <div className="mb-6 text-sm font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">How it works</div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal delayMs={40}>
              <Parallax speed={0.04} easing={0.1}>
                <div className="group flex items-start gap-4 rounded-2xl border border-black/[.08] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:border-white/[.145] dark:bg-black">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black font-semibold">1</div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/[.04] dark:bg-white/[.06]">
                        <Image className="dark:invert" src="/window.svg" alt="Set your cadence" width={16} height={16} />
                      </span>
                      <h3 className="text-base font-semibold text-black dark:text-zinc-50">Set your cadence</h3>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 transition-colors group-hover:text-foreground dark:text-zinc-400">Choose gentle intervals that suit your flow — short pauses at a rhythm that feels natural.</p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
            <Reveal delayMs={100}>
              <Parallax speed={0.06} easing={0.1}>
                <div className="group flex items-start gap-4 rounded-2xl border border-black/[.08] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:border-white/[.145] dark:bg-black">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black font-semibold">2</div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/[.04] dark:bg-white/[.06]">
                        <Image className="dark:invert" src="/globe.svg" alt="Get a nudge" width={16} height={16} />
                      </span>
                      <h3 className="text-base font-semibold text-black dark:text-zinc-50">Get a nudge</h3>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 transition-colors group-hover:text-foreground dark:text-zinc-400">Receive a calm reminder to pause — no noise, no pressure, just a moment to breathe.</p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
            <Reveal delayMs={160}>
              <Parallax speed={0.08} easing={0.1}>
                <div className="group flex items-start gap-4 rounded-2xl border border-black/[.08] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:border-white/[.145] dark:bg-black">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black font-semibold">3</div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/[.04] dark:bg-white/[.06]">
                        <Image className="dark:invert" src="/file.svg" alt="Return focused" width={16} height={16} />
                      </span>
                      <h3 className="text-base font-semibold text-black dark:text-zinc-50">Return focused</h3>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 transition-colors group-hover:text-foreground dark:text-zinc-400">A few mindful breaths, a quick stretch, and you are back with clarity and ease.</p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-16 w-full scroll-mt-28">
          <Parallax speed={0.05}>
            <div aria-hidden className="absolute -z-10 h-60 w-60 -translate-y-6 -translate-x-[40%] rounded-full bg-accent/20 blur-3xl dark:bg-accent/12" />
          </Parallax>
          <Reveal>
            <div className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">Features</div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal delayMs={40}>
              <Parallax speed={0.05} easing={0.1}>
                <div className="group overflow-hidden rounded-2xl border border-black/[.08] bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:border-white/[.145] dark:bg-black">
                  <div className="h-1 w-full bg-accent" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/[.04] dark:bg-white/[.06]">
                        <Image className="dark:invert" src="/globe.svg" alt="Gentle reminders" width={18} height={18} />
                      </span>
                      <h3 className="text-base font-semibold text-black dark:text-zinc-50">Gentle reminders</h3>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Stay on track with unobtrusive nudges to pause, breathe, and reset.</p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
            <Reveal delayMs={100}>
              <Parallax speed={0.05} easing={0.1}>
                <div className="group overflow-hidden rounded-2xl border border-black/[.08] bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:border-white/[.145] dark:bg:black">
                  <div className="h-1 w-full bg-accent" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/[.04] dark:bg-white/[.06]">
                        <Image className="dark:invert" src="/file.svg" alt="Breathing and stretch prompts" width={18} height={18} />
                      </span>
                      <h3 className="text-base font-semibold text-black dark:text-zinc-50">Breathing and stretch prompts</h3>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Short, practical suggestions that help your body and mind unwind.</p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
            <Reveal delayMs={160}>
              <Parallax speed={0.05} easing={0.1}>
                <div className="group overflow-hidden rounded-2xl border border-black/[.08] bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:border-white/[.145] dark:bg-black">
                  <div className="h-1 w-full bg-accent" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/[.04] dark:bg-white/[.06]">
                        <Image className="dark:invert" src="/window.svg" alt="Mindful defaults" width={18} height={18} />
                      </span>
                      <h3 className="text-base font-semibold text-black dark:text-zinc-50">Mindful defaults</h3>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Thoughtful settings that work out of the box without extra setup.</p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* Why micro-breaks */}
        <section id="why" className="mt-20 w-full scroll-mt-28">
          <Parallax speed={0.05} easing={0.1}>
            <div aria-hidden className="absolute -z-10 h-56 w-56 -translate-y-6 translate-x-[10%] rounded-full bg-accent/18 blur-3xl dark:bg-accent/12" />
          </Parallax>
          <Reveal>
            <div className="mb-6 text-sm font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">Why micro‑breaks</div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal delayMs={40}>
              <Parallax speed={0.04}>
                <div className="rounded-2xl bg-white p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] dark:bg-black dark:shadow-[0_1px_0_0_rgba(255,255,255,0.12)]">
                  <div className="mb-2 inline-flex items-center gap-2">
                    <span className="h-1.5 w-6 rounded-full bg-accent" />
                    <span className="text-base font-semibold text-black dark:text-zinc-50">Sustainable pace</span>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Small pauses reduce strain and help maintain consistent energy through the day.</p>
                </div>
              </Parallax>
            </Reveal>
            <Reveal delayMs={100}>
              <Parallax speed={0.06}>
                <div className="rounded-2xl bg-white p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] dark:bg-black dark:shadow-[0_1px_0_0_rgba(255,255,255,0.12)]">
                  <div className="mb-2 inline-flex items-center gap-2">
                    <span className="h-1.5 w-6 rounded-full bg-accent" />
                    <span className="text-base font-semibold text-black dark:text-zinc-50">Clarity over hustle</span>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Brief resets help you return to tasks with a clearer mind and better focus.</p>
                </div>
              </Parallax>
            </Reveal>
            <Reveal delayMs={160}>
              <Parallax speed={0.08}>
                <div className="rounded-2xl bg-white p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] dark:bg-black dark:shadow-[0_1px_0_0_rgba(255,255,255,0.12)]">
                  <div className="mb-2 inline-flex items-center gap-2">
                    <span className="h-1.5 w-6 rounded-full bg-accent" />
                    <span className="text-base font-semibold text-black dark:text-zinc-50">Mind–body balance</span>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Gentle breathing and posture breaks support both mental ease and physical comfort.</p>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* Screens: iPhone 17 mocks */}
        <section id="screens" className="mt-20 w-full scroll-mt-28">
          <Parallax speed={0.05}>
            <div aria-hidden className="absolute -z-10 h-64 w-64 -translate-y-12 translate-x-10 rounded-full bg-accent/30 blur-3xl dark:bg-accent/20" />
          </Parallax>
          <Reveal>
            <div className="mb-6 text-sm font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">Screens</div>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Reveal delayMs={60}>
              <Parallax speed={0.12} easing={0.1} rotate={0.15} className="flex justify-center">
                <Image src="/iphone17.svg" alt="iPhone 17 mock showing Dej si pauzu screen" width={240} height={506} className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]" />
              </Parallax>
            </Reveal>
            <Reveal delayMs={120}>
              <Parallax speed={0.16} easing={0.1} rotate={0.2} className="flex justify-center">
                <Image src="/iphone17.svg" alt="iPhone 17 mock showing reminder screen" width={240} height={506} className="animate-float rotate-[-2deg] drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]" />
              </Parallax>
            </Reveal>
            <Reveal delayMs={180}>
              <Parallax speed={0.2} easing={0.1} rotate={0.25} className="flex justify-center">
                <Image src="/iphone17.svg" alt="iPhone 17 mock showing breathing prompt" width={240} height={506} className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] rotate-[2deg]" />
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20 w-full scroll-mt-28">
          <Reveal>
            <div className="mb-6 text-sm font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">FAQ</div>
          </Reveal>
          <div className="divide-y divide-black/[.06] rounded-2xl border border-black/[.08] bg-black/[.02] dark:divide-white/[.1] dark:border-white/[.145] dark:bg-white/[.03]">
            <Reveal>
              <details className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-black transition-colors group-open:text-foreground dark:text-zinc-50">
                  What is Dej si pauzu?
                  <span className="ml-4 inline-block h-5 w-5 rotate-0 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">A simple companion that encourages short, mindful micro‑breaks so you can recharge and keep a sustainable pace through your day.</p>
              </details>
            </Reveal>
            <Reveal delayMs={80}>
              <details className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-black transition-colors group-open:text-foreground dark:text-zinc-50">
                  Is it free?
                  <span className="ml-4 inline-block h-5 w-5 rotate-0 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Pricing details will be announced with the launch. Our goal is to keep it accessible and simple.</p>
              </details>
            </Reveal>
            <Reveal delayMs={140}>
              <details className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-black transition-colors group-open:text-foreground dark:text-zinc-50">
                  Which platforms are supported?
                  <span className="ml-4 inline-block h-5 w-5 rotate-0 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">We are preparing releases for iOS and Android. Store links will appear here once they are live.</p>
              </details>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Dej si pauzu
        </footer>
      </main>
    </div>
  );
}
