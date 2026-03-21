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

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.08 * index}>
              <div className="surface-card group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.22),rgba(179,58,91,0.12))] sm:h-16 sm:w-16">
                  {pillar.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-white/68 sm:mt-4 sm:text-base sm:leading-8">
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
