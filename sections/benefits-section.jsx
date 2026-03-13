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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {copy.benefits.items.map((benefit, index) => (
            <Reveal key={benefit.title} delay={0.07 * index}>
              <div className="surface-card h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/52">
                    0{index + 1}
                  </div>
                  <PriorityLogo showWordmark={false} className="scale-[0.56] opacity-90" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/68">
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
