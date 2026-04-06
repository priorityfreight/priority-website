"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function MethodologySection() {
  const { copy } = useLanguage();

  return (
    <section id="methodology" className="section-padding relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <Reveal>
            <span className="section-label text-white/62">{copy.methodology.eyebrow}</span>
            <h2 className="mt-6 max-w-[13ch] font-display text-[2.05rem] font-semibold leading-[0.98] text-white sm:text-[2.8rem] lg:text-[3.3rem]">
              {copy.methodology.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[0.94rem] leading-7 text-white/72 sm:text-[0.98rem] sm:leading-8">
              {copy.methodology.description}
            </p>
            <p className="mt-5 max-w-xl text-[0.92rem] leading-7 text-white/56 sm:text-[0.98rem] sm:leading-8">
              {copy.methodology.note}
            </p>

            <div className="mt-10 surface-line">
              {copy.methodology.outcomes.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-3 px-5 py-5 sm:grid-cols-[120px_minmax(0,1fr)] sm:px-6 ${
                    index > 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/38 sm:text-xs">
                    {item.title}
                  </p>
                  <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {copy.methodology.steps.map((step, index) => (
              <Reveal key={step.title} delay={0.08 * index}>
                <article className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] px-5 py-6 shadow-[0_24px_60px_rgba(2,8,20,0.18)] backdrop-blur sm:px-6 sm:py-7 lg:pl-24">
                  <div className="mb-4 flex items-center gap-4 lg:absolute lg:left-6 lg:top-7 lg:mb-0 lg:flex-col lg:items-start">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold uppercase tracking-[0.2em] text-white/62">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40 lg:hidden">
                      PRIORITY
                    </span>
                  </div>

                  <h3 className="text-[1.08rem] font-semibold text-white sm:text-[1.42rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-[0.98rem] sm:leading-8">
                    {step.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
