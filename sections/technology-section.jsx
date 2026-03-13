"use client";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechnologySection() {
  const { copy } = useLanguage();
  const blocks = [
    {
      ...copy.technology.blocks[0],
      accent: "from-[#800020]/20 to-transparent",
    },
    {
      ...copy.technology.blocks[1],
      accent: "from-[#0B1F3B]/12 to-transparent",
    },
    {
      ...copy.technology.blocks[2],
      accent: "from-[#909EAE]/20 to-transparent",
    },
  ];

  return (
    <section id="technology" className="section-padding relative">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={copy.technology.eyebrow}
              title={copy.technology.title}
              description={copy.technology.description}
            />
          </Reveal>

          <div className="grid gap-5">
            {blocks.map((block, index) => (
              <Reveal key={block.title} delay={0.1 * index}>
                <div className="surface-card relative overflow-hidden p-6 sm:p-7">
                  <div className={`absolute inset-0 bg-gradient-to-r ${block.accent}`} />
                  <div className="relative z-10 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                    <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <PriorityLogo showWordmark={false} className="scale-[0.7] opacity-95" />
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-burgundy)]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-orbit)]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-steel)]" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-white/14" />
                        <div className="h-2 w-4/5 rounded-full bg-white/10" />
                        <div className="h-2 w-3/5 rounded-full bg-white/10" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white">
                        {block.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-white/68">
                        {block.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
