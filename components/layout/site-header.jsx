"use client";

import { useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LanguageToggle } from "@/components/ui/language-toggle";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { copy } = useLanguage();
  const navigation = [
    { label: copy.nav.home, href: "#home" },
    { label: copy.nav.whatWeDo, href: "#what-we-do" },
    { label: copy.nav.modes, href: "#transport-modes" },
    { label: copy.nav.technology, href: "#technology" },
    { label: copy.nav.presentation, href: "/presentacion" },
    { label: copy.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="relative flex items-center justify-between rounded-full border border-white/12 bg-[rgba(7,21,44,0.78)] px-4 py-3 shadow-[0_20px_50px_rgba(2,8,20,0.28)] backdrop-blur-xl sm:px-5">
          <Link href="#home" className="relative z-10">
            <PriorityLogo subtitle={copy.brandSubtitle} />
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageToggle />
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-label={copy.nav.toggle}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
              </div>
            </button>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" variant="secondary">
              {copy.nav.quote}
            </Button>
          </div>

          <div
            className={`absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(7,21,44,0.96)] p-4 shadow-[0_24px_48px_rgba(2,8,20,0.28)] backdrop-blur-xl transition-all duration-200 lg:hidden ${
              isOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-2">
              <div className="mb-2 px-2">
                <LanguageToggle />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="#contact" variant="secondary" className="mt-2 w-full">
                {copy.nav.quote}
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
