import Link from "next/link";

const styles = {
  primary:
    "bg-[linear-gradient(135deg,#800020_0%,#B33A5B_100%)] text-white shadow-[0_18px_48px_rgba(128,0,32,0.28)] hover:-translate-y-0.5",
  secondary:
    "border border-white/15 bg-white/[0.05] text-white hover:-translate-y-0.5 hover:bg-white/[0.09]",
  light:
    "border border-slate-900/10 bg-white text-[var(--color-ink-strong)] shadow-[0_14px_40px_rgba(11,31,59,0.1)] hover:-translate-y-0.5",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classNames = `inline-flex min-h-12 items-center justify-center rounded-full px-4 text-sm font-semibold tracking-[0.05em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out focus-visible:outline-none sm:px-6 sm:tracking-[0.08em] ${styles[variant]} ${className}`;
  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));

  if (href) {
    if (isExternal) {
      return (
        <a href={href} className={classNames} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
