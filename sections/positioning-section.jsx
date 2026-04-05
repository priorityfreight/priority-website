"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PositioningSection() {
  const { copy } = useLanguage();

  return (
    <section id="positioning" className="section-padding relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <Reveal>
            <span className="section-label text-white/62">{copy.positioning.eyebrow}</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl font-semibold leading-[0.96] text-white sm:text-5xl lg:text-6xl">
              {copy.positioning.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
              {copy.positioning.intro}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg sm:leading-9">
              {copy.positioning.body}
            </p>
            <p className="mt-8 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {copy.positioning.highlight}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {copy.positioning.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/58"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_32px_80px_rgba(2,8,20,0.22)]">
              <div className="grid md:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/42 sm:text-xs">
                    {copy.positioning.comparison.leftTitle}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
                    {copy.positioning.comparison.leftItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 bg-white/[0.04] p-6 md:border-l md:border-t-0 sm:p-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/48 sm:text-xs">
                    {copy.positioning.comparison.rightTitle}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                    {copy.positioning.comparison.rightItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6 sm:px-8">
                <p className="max-w-3xl text-xl font-semibold leading-9 text-white sm:text-2xl sm:leading-10">
                  {copy.positioning.comparison.quote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
