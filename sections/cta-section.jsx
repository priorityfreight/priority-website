"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CTASection() {
  const { copy } = useLanguage();

  return (
    <section id="contact" className="section-padding relative pt-10">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,#0B1F3B_0%,#07152C_100%)] px-6 py-12 shadow-[0_40px_100px_rgba(3,10,24,0.32)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-brand-grid opacity-30" />
            <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.36),transparent_68%)]" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="section-label text-white/62">{copy.cta.eyebrow}</p>
                <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {copy.cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  {copy.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button href="mailto:hello@priorityfi.com" className="min-w-[220px]">
                  {copy.cta.primary}
                </Button>
                <Button
                  href="#home"
                  variant="secondary"
                  className="min-w-[220px]"
                >
                  {copy.cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
