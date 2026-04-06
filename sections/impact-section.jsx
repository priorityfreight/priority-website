"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ImpactSection() {
  const { copy } = useLanguage();

  return (
    <section id="impact" className="section-padding relative overflow-hidden">
      <div className="absolute left-[10%] top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.24),transparent_70%)] blur-2xl" />

      <Container className="relative z-10">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-start">
          <Reveal className="xl:sticky xl:top-28">
            <span className="section-label text-white/62">{copy.impact.eyebrow}</span>
            <h2 className="mt-6 max-w-[11ch] font-display text-[2rem] font-semibold leading-[0.94] text-white sm:text-[3rem] lg:text-[3.8rem]">
              {copy.impact.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-[0.96rem] leading-7 text-white/72 sm:text-[1.06rem] sm:leading-8">
              {copy.impact.description}
            </p>

            <blockquote className="mt-8 max-w-[14ch] border-l-2 border-[var(--color-orbit)] pl-4 font-display text-[1.45rem] font-semibold leading-[1.04] text-white sm:mt-10 sm:pl-6 sm:text-[2.35rem]">
              {copy.impact.quote}
            </blockquote>

            <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/42 sm:text-xs">
                {copy.impact.extraTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {copy.impact.extras.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/56"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {copy.impact.benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={0.08 * index}>
                <article className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-8 sm:py-8">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/36 sm:pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-semibold text-white sm:text-[1.5rem]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-[0.9rem] leading-6 text-white/66 sm:mt-4 sm:text-[1rem] sm:leading-8">
                      {benefit.copy}
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
