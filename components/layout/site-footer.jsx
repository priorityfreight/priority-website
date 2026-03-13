"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const { copy } = useLanguage();

  return (
    <footer className="relative z-10 pb-10 pt-6">
      <Container>
        <div className="flex flex-col gap-6 rounded-[28px] border border-slate-900/10 bg-white/80 px-6 py-6 shadow-panel backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <PriorityLogo wordmarkTone="dark" subtitle={copy.brandSubtitle} />
            <p className="max-w-xl text-sm leading-7 text-[var(--color-ink-soft)]">
              {copy.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-ink-soft)]">
            <Link href="#what-we-do">{copy.footer.whatWeDo}</Link>
            <Link href="#transport-modes">{copy.footer.modes}</Link>
            <Link href="#technology">{copy.footer.technology}</Link>
            <Link href="#contact">{copy.footer.contact}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
