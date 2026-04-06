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

          <div className="relative grid items-center gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-10 lg:px-14 lg:py-12 xl:px-16">
            <Reveal className="relative z-10 max-w-3xl">
              <PriorityLogo className="mb-7 sm:mb-9" subtitle={copy.brandSubtitle} />
              <span className="section-label text-white/62">{copy.hero.eyebrow}</span>

              <h1 className="text-shadow-soft mt-6 max-w-[10ch] font-display text-[2.35rem] font-semibold leading-[0.92] text-white sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[4.7rem]">
                {copy.hero.title}
              </h1>
              <p className="mt-5 max-w-[57ch] text-balance text-[0.94rem] leading-7 text-white/72 sm:mt-6 sm:text-[1rem] sm:leading-8">
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

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:mt-9 sm:grid-cols-3">
                {copy.hero.signals.map((signal, index) => (
                  <Reveal key={signal.title} delay={0.08 * (index + 1)}>
                    <div className="h-full">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/48 sm:text-[0.78rem] sm:tracking-[0.18em]">
                        {signal.title}
                      </p>
                      <p className="mt-3 text-[0.88rem] leading-6 text-white/68 sm:text-[0.94rem] sm:leading-7">
                        {signal.copy}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="relative z-10 lg:pl-2">
              <HeroNetwork />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
