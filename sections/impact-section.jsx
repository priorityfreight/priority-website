"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ImpactSection() {
  const { copy } = useLanguage();

  return (
    <section id="impact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-grid opacity-55" />
      <div className="absolute left-[10%] top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.28),transparent_70%)] blur-2xl" />

      <Container className="relative z-10">
        <Reveal>
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,27,52,0.9),rgba(7,21,44,0.96))] shadow-[0_38px_110px_rgba(2,8,20,0.28)]">
            <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                <span className="section-label text-white/62">{copy.impact.eyebrow}</span>
                <h2 className="mt-6 max-w-[12ch] font-display text-[2.1rem] font-semibold leading-[0.96] text-white sm:text-[2.9rem] lg:text-[3.5rem]">
                  {copy.impact.title}
                </h2>
                <p className="mt-6 max-w-2xl text-[0.98rem] leading-7 text-white/72 sm:text-[1.04rem] sm:leading-8">
                  {copy.impact.description}
                </p>

                <blockquote className="mt-10 border-l-2 border-[var(--color-orbit)] pl-5 text-[1.4rem] font-semibold leading-8 text-white sm:pl-6 sm:text-[1.85rem] sm:leading-9">
                  {copy.impact.quote}
                </blockquote>
              </div>

              <div className="border-t border-white/10 lg:border-l lg:border-t-0">
                {copy.impact.benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`grid gap-4 px-6 py-6 sm:grid-cols-[72px_minmax(0,1fr)] sm:px-8 lg:px-10 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/38 sm:text-xs sm:pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-[1.08rem] font-semibold text-white sm:text-[1.35rem]">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/68 sm:text-[0.98rem] sm:leading-8">
                        {benefit.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 px-6 py-6 sm:px-8 lg:px-10">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/42 sm:text-xs">
                {copy.impact.extraTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {copy.impact.extras.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/56"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
