"use client";

import { motion } from "framer-motion";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";

export function HeroNetwork() {
  const { copy } = useLanguage();
  const modeCards = [
    {
      label: copy.modes.items[0].title,
      mode: "ocean",
      className: "left-4 top-10 md:left-0 md:top-16",
      delay: 0.2,
    },
    {
      label: copy.modes.items[1].title,
      mode: "air",
      className: "right-4 top-8 md:right-0 md:top-10",
      delay: 0.45,
    },
    {
      label: copy.modes.items[2].title,
      mode: "ground",
      className: "bottom-8 right-10 md:bottom-10 md:right-8",
      delay: 0.7,
    },
  ];

  function ModeCard({ card, mobile = false }) {
    return (
      <motion.div
        className={
          mobile
            ? "surface-dark px-4 py-3"
            : `absolute ${card.className} surface-dark w-[190px] px-4 py-3 sm:w-[210px]`
        }
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: card.delay },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: card.delay,
          },
        }}
      >
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.36),rgba(179,58,91,0.14))]">
            <PriorityLogo showWordmark={false} className="scale-[0.72]" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/55 sm:text-xs">
              {copy.header.networkLayer}
            </p>
            <p className="text-base font-medium leading-7 text-white/92 sm:text-sm sm:leading-6">
              {card.label}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,31,60,0.96),rgba(8,20,40,0.98))] p-5 shadow-[0_40px_100px_rgba(4,10,22,0.45)] sm:p-6 md:aspect-[1.08] md:p-8">
      <div className="absolute inset-0 bg-brand-grid opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,58,91,0.24),transparent_38%)]" />
      <motion.div
        className="absolute left-1/2 top-[30%] h-[44%] w-[44%] -translate-x-1/2 rounded-full border border-white/10 md:left-auto md:top-auto md:h-[76%] md:w-[76%] md:translate-x-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -right-4 top-[22%] h-3 w-3 rounded-full bg-[#B33A5B] shadow-[0_0_0_10px_rgba(179,58,91,0.12)]" />
        <div className="absolute left-[12%] top-[70%] h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_0_8px_rgba(255,255,255,0.08)]" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[30%] h-[33%] w-[33%] -translate-x-1/2 rounded-full border border-white/8 md:left-auto md:top-auto md:h-[58%] md:w-[58%] md:translate-x-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-4 rounded-[28px] border border-white/5 md:inset-6 md:rounded-[30px]" />

      <div className="relative z-10 flex h-[300px] w-full items-center justify-center sm:h-[360px] md:h-full">
        <div className="relative flex aspect-square w-[88%] max-w-[320px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.14),rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.02)_70%,transparent_75%)] sm:max-w-[360px] md:w-[72%] md:max-w-none">
          <motion.div
            className="absolute h-[86%] w-[86%] rounded-full border border-white/10"
            animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <svg viewBox="0 0 320 320" className="relative z-10 h-full w-full">
            <defs>
              <linearGradient id="brainSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D7DDE5" />
                <stop offset="100%" stopColor="#909EAE" />
              </linearGradient>
              <linearGradient id="brainBurgundy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C01246" />
                <stop offset="100%" stopColor="#800020" />
              </linearGradient>
              <linearGradient id="orbitLine" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#800020" />
                <stop offset="55%" stopColor="#B33A5B" />
                <stop offset="100%" stopColor="#909EAE" />
              </linearGradient>
            </defs>

            <ellipse
              cx="158"
              cy="164"
              rx="126"
              ry="68"
              transform="rotate(-15 158 164)"
              fill="none"
              stroke="url(#orbitLine)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <g transform="translate(78 56)">
              <path
                d="M82 12c-32 0-58 26-58 58v107c0 26 21 47 47 47h11V12z"
                fill="url(#brainBurgundy)"
              />
              <path
                d="M82 12v212h12c26 0 47-21 47-47V70c0-32-26-58-59-58z"
                fill="url(#brainSteel)"
              />
              <path
                d="M35 66c12-8 30-12 51-12"
                fill="none"
                stroke="#F7D3DC"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M30 108c18 7 38 7 58 0"
                fill="none"
                stroke="#F7D3DC"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M35 151c16-10 34-13 52-10"
                fill="none"
                stroke="#F7D3DC"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M92 68h40l28 28"
                fill="none"
                stroke="#20385A"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M92 110h48"
                fill="none"
                stroke="#20385A"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M92 152h28l26 26"
                fill="none"
                stroke="#20385A"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="156" cy="96" r="13" fill="#F8FAFC" stroke="#20385A" strokeWidth="8" />
              <circle cx="164" cy="110" r="13" fill="#F8FAFC" stroke="#20385A" strokeWidth="8" />
              <circle cx="144" cy="178" r="13" fill="#F8FAFC" stroke="#20385A" strokeWidth="8" />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mt-3 grid gap-3 md:hidden">
        {modeCards.map((card) => (
          <ModeCard key={card.label} card={card} mobile />
        ))}
      </div>

      <div className="hidden md:block">
        {modeCards.map((card) => (
          <ModeCard key={card.label} card={card} />
        ))}
      </div>
    </div>
  );
}
