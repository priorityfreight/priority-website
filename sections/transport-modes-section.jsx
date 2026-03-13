"use client";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TransportModesSection() {
  const { copy } = useLanguage();
  const modes = [
    { ...copy.modes.items[0], mode: "ocean" },
    { ...copy.modes.items[1], mode: "air" },
    { ...copy.modes.items[2], mode: "ground" },
  ];

  return (
    <section
      id="transport-modes"
      className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#0B1F3B_0%,#07152C_100%)]"
    >
      <div className="absolute inset-0 bg-brand-grid opacity-30" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow={copy.modes.eyebrow}
          title={copy.modes.title}
          description={copy.modes.description}
          invert
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {modes.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 text-white transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06]">
                <div className="absolute inset-x-0 top-0 h-px orbit-stroke opacity-70" />
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.28),rgba(179,58,91,0.14))] transition duration-300 group-hover:scale-105">
                  <PriorityLogo showWordmark={false} className="scale-[0.82]" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">
                  {item.copy}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/46">
                  <span className="h-px w-8 bg-white/20" />
                  {copy.modes.kicker}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
