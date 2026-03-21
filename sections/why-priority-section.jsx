"use client";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyPrioritySection() {
  const { copy } = useLanguage();

  return (
    <section className="section-padding relative">
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={copy.why.eyebrow}
              title={copy.why.title}
              description={copy.why.description}
              className="max-w-2xl"
            />

            <div className="surface-card mt-6 overflow-hidden p-0 sm:mt-8">
              <div className="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/52 sm:text-xs sm:tracking-[0.3em]">
                  {copy.why.panelTitle}
                </p>
              </div>
              <div className="grid gap-0 divide-y divide-white/10">
                {copy.why.panelLines.map((line) => (
                  <div
                    key={line}
                    className="px-5 py-4 text-[0.98rem] leading-7 text-white/68 sm:px-6 sm:py-5 sm:text-base sm:leading-8"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {copy.why.features.map((feature, index) => (
              <Reveal key={feature.title} delay={0.08 * index}>
                <div className="surface-card h-full p-5 sm:p-6">
                  <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.22),rgba(179,58,91,0.08))] sm:h-14 sm:w-14">
                    <PriorityLogo showWordmark={false} className="scale-[0.76]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white sm:mt-5 sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-white/68 sm:text-base sm:leading-8">
                    {feature.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
