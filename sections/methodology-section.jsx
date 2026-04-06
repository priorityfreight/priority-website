"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function MethodologySection() {
  const { copy } = useLanguage();

  return (
    <section id="methodology" className="section-padding relative overflow-hidden">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:items-start">
          <Reveal>
            <span className="section-label text-white/62">{copy.methodology.eyebrow}</span>
            <h2 className="mt-6 max-w-[11ch] font-display text-[2rem] font-semibold leading-[0.94] text-white sm:text-[3rem] lg:text-[3.8rem]">
              {copy.methodology.title}
            </h2>
            <p className="mt-5 max-w-[54ch] text-[0.96rem] leading-7 text-white/72 sm:text-[1.04rem] sm:leading-8">
              {copy.methodology.description}
            </p>
            <p className="mt-4 max-w-[48ch] text-[0.92rem] leading-7 text-white/56 sm:text-[1rem] sm:leading-8">
              {copy.methodology.note}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {copy.methodology.outcomes.map((item, index) => (
                <Reveal key={item.title} delay={0.08 * (index + 1)}>
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[0.88rem] leading-6 text-white/68 sm:text-[0.94rem] sm:leading-7">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {copy.methodology.steps.map((step, index) => (
              <Reveal key={step.title} delay={0.08 * index}>
                <article className="grid gap-3 border-b border-white/10 py-5 sm:py-7 lg:grid-cols-[96px_minmax(0,1fr)] lg:gap-8">
                  <div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white/56 sm:h-12 sm:w-12 sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-white sm:text-[1.55rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[56ch] text-[0.9rem] leading-6 text-white/68 sm:mt-4 sm:text-[1rem] sm:leading-8">
                      {step.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
