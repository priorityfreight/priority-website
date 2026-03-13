"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhatWeDoSection() {
  const { copy } = useLanguage();
  const pillars = [
    {
      ...copy.whatWeDo.pillars[0],
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M4 12h16M12 4v16M7 7l10 10M17 7L7 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      ...copy.whatWeDo.pillars[1],
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M5 17l4-5 3 3 7-9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 6h5v5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      ...copy.whatWeDo.pillars[2],
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="what-we-do" className="section-padding relative">
      <Container>
        <SectionHeading
          eyebrow={copy.whatWeDo.eyebrow}
          title={copy.whatWeDo.title}
          description={copy.whatWeDo.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.08 * index}>
              <div className="surface-card group h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-900/12 hover:shadow-[0_24px_64px_rgba(11,31,59,0.14)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(11,31,59,0.08),rgba(128,0,32,0.12))] text-[var(--color-navy)]">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-ink-strong)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">
                  {pillar.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
