"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const { copy } = useLanguage();

  return (
    <footer className="relative z-10 pb-10 pt-8">
      <Container>
        <div className="flex flex-col gap-6 border-t border-white/10 px-1 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <PriorityLogo subtitle={copy.brandSubtitle} />
            <p className="max-w-xl text-sm leading-7 text-white/62">
              {copy.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/62">
            <Link href="#positioning" className="transition-[color] duration-200 hover:text-white">{copy.footer.positioning}</Link>
            <Link href="#services" className="transition-[color] duration-200 hover:text-white">{copy.footer.services}</Link>
            <Link href="#methodology" className="transition-[color] duration-200 hover:text-white">{copy.footer.methodology}</Link>
            <Link href="#impact" className="transition-[color] duration-200 hover:text-white">{copy.footer.impact}</Link>
            <Link href="/presentacion" className="transition-[color] duration-200 hover:text-white">{copy.footer.presentation}</Link>
            <Link href="#contact" className="transition-[color] duration-200 hover:text-white">{copy.footer.contact}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
