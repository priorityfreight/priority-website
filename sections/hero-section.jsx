"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroNetwork } from "@/components/ui/hero-network";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { copy } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-10 sm:pb-24 lg:pb-28 lg:pt-14">
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <Reveal className="relative">
            <div className="mb-8">
              <PriorityLogo className="mb-8" subtitle={copy.brandSubtitle} />
              <span className="section-label text-white/66">
                {copy.hero.eyebrow}
              </span>
            </div>

            <h1 className="text-balance max-w-[11ch] text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-base leading-8 text-[rgba(229,229,229,0.8)] sm:text-lg">
              {copy.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#contact">{copy.hero.primaryCta}</Button>
              <Button href="#contact" variant="secondary">
                {copy.hero.secondaryCta}
              </Button>
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.42em] text-white/62">
              {copy.hero.tagline}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {copy.hero.signals.map((signal, index) => (
                <Reveal key={signal.title} delay={0.1 * (index + 1)}>
                  <div className="surface-dark h-full p-5">
                    <p className="text-sm font-semibold text-white">
                      {signal.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      {signal.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <HeroNetwork />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
