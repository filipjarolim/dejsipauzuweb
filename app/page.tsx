import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Brand */}
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

        {/* Hero */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Micro‑breaks for better focus and well‑being
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Dej si pauzu helps you take short, mindful pauses during the day so you can recharge, reduce stress, and return to your work with clarity.
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="#features"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Features */}
        <section id="features" className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]">
            <div className="mb-3 flex items-center gap-2">
              <Image className="dark:invert" src="/globe.svg" alt="Gentle reminders" width={20} height={20} />
              <h3 className="text-base font-semibold text-black dark:text-zinc-50">Gentle reminders</h3>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Stay on track with unobtrusive nudges to pause, breathe, and reset.</p>
          </div>
          <div className="rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]">
            <div className="mb-3 flex items-center gap-2">
              <Image className="dark:invert" src="/file.svg" alt="Breathing and stretch prompts" width={20} height={20} />
              <h3 className="text-base font-semibold text-black dark:text-zinc-50">Breathing and stretch prompts</h3>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Short, practical suggestions that help your body and mind unwind.</p>
          </div>
          <div className="rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]">
            <div className="mb-3 flex items-center gap-2">
              <Image className="dark:invert" src="/vercel.svg" alt="Mindful defaults" width={20} height={20} />
              <h3 className="text-base font-semibold text-black dark:text-zinc-50">Mindful defaults</h3>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Thoughtful settings that work out of the box without extra setup.</p>
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
