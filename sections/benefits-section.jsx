"use client";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  const { copy } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-grid opacity-70" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow={copy.benefits.eyebrow}
          title={copy.benefits.title}
          description={copy.benefits.description}
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {copy.benefits.items.map((benefit, index) => (
            <Reveal key={benefit.title} delay={0.07 * index}>
              <div className="surface-card h-full p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/52 sm:text-xs sm:tracking-[0.3em]">
                    0{index + 1}
                  </div>
                  <PriorityLogo showWordmark={false} className="scale-[0.56] opacity-90" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white sm:mt-8 sm:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-white/68 sm:mt-4 sm:text-base sm:leading-8">
                  {benefit.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
