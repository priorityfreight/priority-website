export function SlideShell({
  id,
  index,
  title,
  eyebrow,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative min-h-screen scroll-mt-24 border-b border-white/10 px-5 py-24 sm:px-6 lg:px-10 ${className}`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold uppercase tracking-[0.24em] text-white/62">
                {String(index).padStart(2, "0")}
              </span>
              <span className="section-label text-white/58">{eyebrow}</span>
            </div>
            <h2 className="text-balance max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}

