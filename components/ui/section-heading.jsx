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
        className={`text-balance text-3xl font-semibold leading-[1.02] sm:text-5xl ${tone}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-balance text-base leading-8 sm:text-lg ${copyTone}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
