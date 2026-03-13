export function TransportIcon({ mode, className = "" }) {
  const shared = "h-6 w-6";

  if (mode === "ocean") {
    return (
      <svg viewBox="0 0 32 32" className={`${shared} ${className}`} fill="none">
        <path
          d="M6 19h18l2 5H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 14h6v5H8zM15 15h4v4h-4zM20 16h4v3h-4zM5 26c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1 2 1 4 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (mode === "air") {
    return (
      <svg viewBox="0 0 32 32" className={`${shared} ${className}`} fill="none">
        <path
          d="M4 18l8 2 10 8 3-1-4-10 7-6c1-1 1-2 0-3s-2-1-3 0l-6 7-10-4-1 3 7 5-8 1z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className={`${shared} ${className}`} fill="none">
      <path
        d="M4 10h16v10H4zM20 13h5l3 4v3h-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

