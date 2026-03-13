export function PriorityLogo({
  className = "",
  showWordmark = true,
  wordmarkTone = "light",
  subtitle = "Freight Intelligence",
}) {
  const wordmarkClass =
    wordmarkTone === "light"
      ? "text-white"
      : "text-[var(--color-ink-strong)]";
  const subtitleClass =
    wordmarkTone === "light"
      ? "text-white/70"
      : "text-[var(--color-ink-soft)]";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-12 shrink-0 sm:w-14"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="priorityOrbit" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#800020" />
            <stop offset="55%" stopColor="#B33A5B" />
            <stop offset="100%" stopColor="#909EAE" />
          </linearGradient>
          <linearGradient id="prioritySteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D2D9E1" />
            <stop offset="100%" stopColor="#909EAE" />
          </linearGradient>
        </defs>
        <ellipse
          cx="58"
          cy="58"
          rx="51"
          ry="28"
          transform="rotate(-14 58 58)"
          fill="none"
          stroke="url(#priorityOrbit)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <g transform="translate(22 19)">
          <path
            d="M29 9c-10 0-18 8-18 18v33c0 8 6 14 14 14h4V9z"
            fill="#800020"
          />
          <path
            d="M29 9v65h4c8 0 14-6 14-14V27c0-10-8-18-18-18z"
            fill="url(#prioritySteel)"
          />
          <path
            d="M18 25c6-4 11-5 16-5"
            fill="none"
            stroke="#F6CDD7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16 39c6 2 12 2 18 0"
            fill="none"
            stroke="#F6CDD7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M18 53c6-4 11-5 16-4"
            fill="none"
            stroke="#F6CDD7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M34 24h10l8 8"
            fill="none"
            stroke="#22385D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M34 38h10l10 0"
            fill="none"
            stroke="#22385D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M34 52h8l8 8"
            fill="none"
            stroke="#22385D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="56" cy="32" r="4.5" fill="#fff" stroke="#22385D" strokeWidth="3" />
          <circle cx="60" cy="38" r="4.5" fill="#fff" stroke="#22385D" strokeWidth="3" />
          <circle cx="54" cy="60" r="4.5" fill="#fff" stroke="#22385D" strokeWidth="3" />
        </g>
      </svg>

      {showWordmark ? (
        <div className="min-w-0">
          <p
            className={`truncate text-sm font-extrabold uppercase tracking-[0.34em] sm:text-base ${wordmarkClass}`}
          >
            PRIORITY
          </p>
          <p
            className={`truncate text-[0.58rem] font-medium uppercase tracking-[0.4em] sm:text-[0.68rem] ${subtitleClass}`}
          >
            {subtitle}
          </p>
        </div>
      ) : null}
    </div>
  );
}
