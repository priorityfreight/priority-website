"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PositioningSection() {
  const { copy } = useLanguage();

  return (
    <section id="positioning" className="section-padding relative">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <Reveal>
            <span className="section-label text-white/62">{copy.positioning.eyebrow}</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-[2.2rem] font-semibold leading-[0.94] text-white sm:text-[3rem] lg:text-[3.8rem]">
              {copy.positioning.title}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-7 text-white/72 sm:text-[1.06rem] sm:leading-8">
              {copy.positioning.intro}
            </p>
            <p className="mt-6 max-w-[54ch] text-[0.98rem] leading-7 text-white/62 sm:text-[1.02rem] sm:leading-8">
              {copy.positioning.body}
            </p>
            <p className="mt-10 max-w-[18ch] font-display text-[1.65rem] font-semibold leading-tight text-white sm:text-[2.05rem]">
              {copy.positioning.highlight}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {copy.positioning.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/56"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="border-y border-white/10 py-8">
                <p className="max-w-[17ch] font-display text-[1.75rem] font-semibold leading-[1.02] text-white sm:text-[2.4rem]">
                  {copy.positioning.comparison.quote}
                </p>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-0">
                <div className="md:pr-8">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-xs">
                    {copy.positioning.comparison.leftTitle}
                  </p>
                  <ul className="mt-6 space-y-5 border-l border-white/10 pl-5 text-[0.96rem] leading-7 text-white/60 sm:text-[1rem] sm:leading-8">
                    {copy.positioning.comparison.leftItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-white/48 sm:text-xs">
                    {copy.positioning.comparison.rightTitle}
                  </p>
                  <ul className="mt-6 space-y-5 border-l border-white/10 pl-5 text-[0.96rem] leading-7 text-white/82 sm:text-[1rem] sm:leading-8">
                    {copy.positioning.comparison.rightItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
