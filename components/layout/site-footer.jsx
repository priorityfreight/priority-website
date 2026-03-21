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
        <div className="flex flex-col gap-5 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-glow backdrop-blur sm:rounded-[28px] sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <PriorityLogo subtitle={copy.brandSubtitle} />
            <p className="max-w-xl text-sm leading-7 text-white/68">
              {copy.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/68">
            <Link href="#what-we-do">{copy.footer.whatWeDo}</Link>
            <Link href="#services">{copy.footer.services}</Link>
            <Link href="#technology">{copy.footer.technology}</Link>
            <Link href="/presentacion">{copy.footer.presentation}</Link>
            <Link href="#contact">{copy.footer.contact}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
