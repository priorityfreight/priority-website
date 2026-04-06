"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useLanguage } from "@/components/providers/language-provider";

export function HeroNetwork() {
  const { copy } = useLanguage();
  const reduceMotion = useReducedMotion();
  const orbitLabels = [
    {
      label: copy.hero.visualLabels[0],
      className: "left-4 top-8 sm:left-8 sm:top-12",
      delay: 0.2,
    },
    {
      label: copy.hero.visualLabels[1],
      className: "right-4 top-16 sm:right-10 sm:top-20",
      delay: 0.45,
    },
    {
      label: copy.hero.visualLabels[2],
      className: "left-1/2 bottom-4 -translate-x-1/2 sm:left-10 sm:bottom-8 sm:translate-x-0",
      delay: 0.7,
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[780px]">
      <div className="absolute inset-x-[12%] top-[8%] h-28 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.24),transparent_66%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,26,49,0.92),rgba(5,14,28,0.92))] px-4 py-4 shadow-[0_36px_100px_rgba(2,8,20,0.3)] sm:px-6 sm:py-6">
        <div className="absolute inset-0 bg-brand-grid opacity-28" />
        <div className="absolute inset-x-6 inset-y-6 rounded-[28px] border border-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,58,91,0.18),transparent_32%)]" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/58 sm:px-4 sm:py-2 sm:text-[0.62rem]">
            {copy.hero.visualKicker}
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[rgba(8,20,40,0.5)] px-4 py-3 text-right backdrop-blur sm:px-5 sm:py-4">
            <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-[0.62rem]">
              {copy.hero.visualFocusLabel}
            </p>
            <p className="mt-2 font-display text-[0.98rem] font-semibold tracking-[0.1em] text-white sm:text-[1.18rem]">
              {copy.hero.visualFocusValue}
            </p>
          </div>
        </div>

        <div className="relative mt-4 flex min-h-[300px] items-center justify-center sm:min-h-[500px]">
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_58%,transparent_78%)]" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -right-1 top-[24%] h-2.5 w-2.5 rounded-full bg-[#B33A5B] shadow-[0_0_0_10px_rgba(179,58,91,0.12)] sm:-right-2 sm:h-3 sm:w-3" />
            <div className="absolute left-[11%] top-[70%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_0_8px_rgba(255,255,255,0.08)] sm:h-2.5 sm:w-2.5" />
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex aspect-square w-[88%] max-w-[320px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.16),rgba(255,255,255,0.05)_38%,rgba(255,255,255,0.02)_68%,transparent_74%)] sm:max-w-[490px]">
            <motion.div
              className="absolute h-[88%] w-[88%] rounded-full border border-white/10"
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
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

        {orbitLabels.map((item) => (
          <motion.div
            key={item.label}
            className={`absolute ${item.className} rounded-full border border-white/10 bg-[rgba(8,20,40,0.72)] px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/70 shadow-[0_14px_40px_rgba(2,8,20,0.22)] backdrop-blur sm:px-4 sm:py-2 sm:text-[0.64rem]`}
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={
              reduceMotion
                ? undefined
                : { opacity: 1, y: [0, -5, 0] }
            }
            transition={{
              opacity: { duration: 0.45, delay: item.delay },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
