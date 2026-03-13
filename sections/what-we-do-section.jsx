"use client";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhatWeDoSection() {
  const { copy } = useLanguage();
  const pillars = [
    {
      ...copy.whatWeDo.pillars[0],
      icon: <PriorityLogo showWordmark={false} className="scale-[0.82]" />,
    },
    {
      ...copy.whatWeDo.pillars[1],
      icon: <PriorityLogo showWordmark={false} className="scale-[0.82]" />,
    },
    {
      ...copy.whatWeDo.pillars[2],
      icon: <PriorityLogo showWordmark={false} className="scale-[0.82]" />,
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
              <div className="surface-card group h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.22),rgba(179,58,91,0.12))]">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/68">
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
