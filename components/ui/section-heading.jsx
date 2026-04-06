export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className = "",
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "max-w-3xl";

  const tone = invert ? "text-white" : "text-white";

  const copyTone = invert
    ? "text-[rgba(229,229,229,0.74)]"
    : "text-[rgba(229,229,229,0.72)]";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      <span className={`section-label ${copyTone}`}>{eyebrow}</span>
      <h2
        className={`text-balance font-display text-[2.05rem] font-semibold leading-[0.98] sm:text-[2.85rem] lg:text-[3.2rem] ${tone}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-[58ch] text-balance text-[0.94rem] leading-7 sm:text-[0.98rem] sm:leading-8 ${copyTone}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
