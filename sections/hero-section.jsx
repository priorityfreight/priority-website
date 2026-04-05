"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Button } from "@/components/ui/button";
import { HeroNetwork } from "@/components/ui/hero-network";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { copy } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="absolute inset-x-[12%] top-[-8%] h-56 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.34),transparent_68%)] blur-3xl" />

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,27,52,0.92),rgba(6,18,36,0.96))] shadow-[0_50px_140px_rgba(2,8,20,0.38)]">
          <div className="absolute inset-0 bg-brand-grid opacity-35" />
          <div className="absolute inset-y-0 right-0 w-[46%] bg-[radial-gradient(circle_at_center,rgba(179,58,91,0.2),transparent_62%)]" />

          <div className="relative grid min-h-[calc(100svh-6.5rem)] items-center gap-10 px-5 py-8 sm:min-h-[calc(100svh-7.5rem)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:px-14 lg:py-14 xl:px-16">
            <Reveal className="relative z-10 max-w-3xl">
              <PriorityLogo className="mb-8 sm:mb-10" subtitle={copy.brandSubtitle} />
              <span className="section-label text-white/62">{copy.hero.eyebrow}</span>

              <h1 className="text-shadow-soft mt-6 max-w-[11ch] font-display text-5xl font-semibold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {copy.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/74 sm:text-lg sm:leading-8">
                {copy.hero.description}
              </p>

              <div className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
                <Button href="#contact" className="w-full sm:w-auto">
                  {copy.hero.primaryCta}
                </Button>
                <Button href="/presentacion" variant="secondary" className="w-full sm:w-auto">
                  {copy.hero.secondaryCta}
                </Button>
              </div>

              <p className="mt-8 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/56 sm:text-sm sm:tracking-[0.42em]">
                {copy.hero.tagline}
              </p>

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:mt-10 sm:grid-cols-3">
                {copy.hero.signals.map((signal, index) => (
                  <Reveal key={signal.title} delay={0.08 * (index + 1)}>
                    <div className="h-full">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/48">
                        {signal.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/72 sm:text-[0.98rem]">
                        {signal.copy}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="relative z-10 lg:pl-6">
              <HeroNetwork />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
