"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function LanguageToggle({ className = "" }) {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 ${className}`}
      aria-label={copy.languageLabel}
    >
      {[
        { code: "es", label: "ES" },
        { code: "en", label: "EN" },
      ].map((option) => {
        const active = option.code === language;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={`min-w-11 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
              active
                ? "bg-white/14 text-white"
                : "text-white/62 hover:text-white"
            }`}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
