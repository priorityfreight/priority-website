"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Button } from "@/components/ui/button";
import { HeroNetwork } from "@/components/ui/hero-network";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { copy } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden px-3 pb-16 pt-2 sm:px-4 sm:pb-24 lg:px-6 lg:pb-28">
      <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,22,42,0.98),rgba(5,16,31,0.98))] shadow-[0_50px_140px_rgba(2,8,20,0.32)]">
        <div className="absolute inset-0 bg-brand-grid opacity-30" />
        <div className="absolute inset-x-[18%] top-[-14%] h-72 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.28),transparent_66%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[14%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(144,158,174,0.12),transparent_62%)] blur-3xl" />

        <div className="relative mx-auto grid max-w-[1360px] gap-8 px-5 pb-8 pt-16 sm:px-8 sm:pb-12 sm:pt-24 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-12 lg:px-10 lg:pb-14 lg:pt-28 xl:px-14">
          <Reveal className="relative z-10 max-w-3xl">
            <PriorityLogo className="mb-6 sm:mb-10" subtitle={copy.brandSubtitle} />
            <span className="section-label text-white/60">{copy.hero.eyebrow}</span>

            <h1 className="text-shadow-soft mt-5 max-w-[9ch] font-display text-[2.35rem] font-semibold leading-[0.9] text-white sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-4 max-w-[46ch] text-balance text-[0.94rem] leading-7 text-white/72 sm:mt-6 sm:text-[1.04rem] sm:leading-8">
              {copy.hero.description}
            </p>

            <div className="mt-7 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
              <Button href="#contact" className="w-full sm:w-auto">
                {copy.hero.primaryCta}
              </Button>
              <Button href="/presentacion" variant="secondary" className="w-full sm:w-auto">
                {copy.hero.secondaryCta}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-5 sm:mt-10 sm:grid-cols-3">
              {copy.hero.proofs.map((proof, index) => (
                <Reveal key={proof.label} delay={0.08 * (index + 1)}>
                  <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/42 sm:text-[0.62rem]">
                      {proof.label}
                    </p>
                    <p className="mt-2 text-[0.98rem] font-semibold leading-6 text-white">
                      {proof.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative z-10">
            <HeroNetwork />
          </Reveal>
        </div>

        <div className="relative border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]">
          <div className="mx-auto grid max-w-[1360px] gap-4 px-5 py-4 sm:px-8 lg:grid-cols-3 lg:px-10 xl:px-14">
            {copy.hero.signals.map((signal, index) => (
              <Reveal key={signal.title} delay={0.12 + 0.08 * index}>
                <div className="grid gap-2 lg:grid-cols-[minmax(0,112px)_minmax(0,1fr)] lg:gap-4">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/46 sm:text-[0.66rem]">
                    {signal.title}
                  </p>
                  <p className="text-[0.86rem] leading-6 text-white/66 sm:text-[0.9rem] sm:leading-7">
                    {signal.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
