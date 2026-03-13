"use client";

import { motion } from "framer-motion";

export function BackgroundNetwork({ className = "" }) {
  const nodes = [
    { left: "8%", top: "18%", delay: 0.2 },
    { left: "26%", top: "38%", delay: 0.7 },
    { left: "54%", top: "22%", delay: 1.1 },
    { left: "76%", top: "40%", delay: 0.4 },
    { left: "62%", top: "68%", delay: 1.3 },
    { left: "18%", top: "72%", delay: 0.9 },
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 overflow-hidden bg-brand-grid grid-fade ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
      >
        <path
          d="M124 188C238 122 326 178 446 248C602 338 742 166 886 216C1036 268 1100 422 1328 334"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M120 538C262 454 370 508 484 450C634 372 714 508 866 474C1014 440 1188 304 1340 386"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.span
          key={`${node.left}-${node.top}`}
          className="absolute h-2.5 w-2.5 rounded-full bg-white/70 shadow-[0_0_0_6px_rgba(255,255,255,0.03)]"
          style={{ left: node.left, top: node.top }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.35, 0.95, 0.35],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
        >
          <motion.span
            className={`absolute inset-0 rounded-full ${
              index % 2 === 0 ? "bg-[#B33A5B]/60" : "bg-white/35"
            }`}
            animate={{ scale: [1, 3.2], opacity: [0.55, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: node.delay + 0.15,
              ease: "easeOut",
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}

