"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { PriorityLogo } from "@/components/brand/priority-logo";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/language-toggle";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { copy } = useLanguage();
  const navigation = [
    { label: copy.nav.home, href: "#home" },
    { label: copy.nav.positioning, href: "#positioning" },
    { label: copy.nav.services, href: "#services" },
    { label: copy.nav.methodology, href: "#methodology" },
    { label: copy.nav.impact, href: "#impact" },
    { label: copy.nav.presentation, href: "/presentacion" },
    { label: copy.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div className="mx-auto w-full max-w-[1380px]">
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-[rgba(6,18,36,0.72)] px-3 py-2.5 shadow-[0_20px_50px_rgba(2,8,20,0.22)] backdrop-blur-xl sm:px-5 sm:py-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:px-6">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.03),transparent_28%,transparent_72%,rgba(179,58,91,0.08))]" />
          <Link
            href="#home"
            className="relative z-10 origin-left max-[360px]:scale-[0.9] lg:scale-[0.86] xl:scale-[0.92] 2xl:scale-100"
          >
            <PriorityLogo subtitle={copy.brandSubtitle} />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden sm:h-11 sm:w-11"
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

          <nav className="hidden min-w-0 items-center justify-center gap-3 lg:flex xl:gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-1 py-1 text-[0.82rem] text-white/68 transition-[color,opacity] duration-200 ease-out hover:text-white focus-visible:outline-none xl:text-[0.9rem]"
              >
                {item.href === "/presentacion" ? copy.nav.presentationShort : item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <LanguageToggle className="bg-white/[0.04]" />
            <Button
              href="https://erp-priority.vercel.app/login"
              variant="secondary"
              className="min-h-10 px-4 text-[0.74rem] xl:px-5 xl:text-[0.8rem]"
            >
              {copy.nav.login}
            </Button>
            <Button href="#contact" className="min-h-10 px-4 text-[0.74rem] xl:px-5 xl:text-[0.8rem]">
              <span className="xl:hidden">{copy.nav.quoteShort}</span>
              <span className="hidden xl:inline">{copy.nav.quote}</span>
            </Button>
          </div>

          <div className="lg:hidden">
            <div
              className={`fixed inset-0 z-40 bg-[rgba(3,10,22,0.94)] backdrop-blur-md transition-[opacity,visibility] duration-200 ${
                isOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />

            <div
              className={`fixed inset-x-4 top-[5.6rem] z-50 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,36,0.985),rgba(5,16,31,0.985))] p-4 shadow-[0_24px_48px_rgba(2,8,20,0.42)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-200 ${
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
                    className="rounded-2xl px-4 py-3 text-sm text-white/84 transition-[background-color,color] duration-200 hover:bg-white/[0.06] hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <Button
                    href="https://erp-priority.vercel.app/login"
                    variant="secondary"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {copy.nav.login}
                  </Button>
                  <Button href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                    {copy.nav.quote}
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
