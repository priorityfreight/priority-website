import Image from "next/image";

import horizontalDarkLogo from "@/assets/logo-horizontal-dark-transparent.png";
import horizontalLogo from "@/assets/logo-horizontal-transparent.png";
import markLogo from "@/assets/favicon-transparent.png";
import verticalDarkLogo from "@/assets/logo-vertical-dark-transparent.png";

export function PriorityLogo({
  className = "",
  showWordmark = true,
  wordmarkTone = "light",
  subtitle = "Freight Intelligence",
  layout,
}) {
  const resolvedLayout = layout ?? (showWordmark ? "horizontal" : "mark");
  const variants = {
    horizontal: {
      asset: wordmarkTone === "light" ? horizontalDarkLogo : horizontalLogo,
      frameClass: "h-10 w-[188px] sm:h-12 sm:w-[220px]",
      sizes: "(min-width: 640px) 220px, 188px",
      alt: `Priority ${subtitle}`,
    },
    vertical: {
      asset: verticalDarkLogo,
      frameClass: "h-[108px] w-[120px] sm:h-[128px] sm:w-[142px]",
      sizes: "(min-width: 640px) 142px, 120px",
      alt: `Priority ${subtitle}`,
    },
    mark: {
      asset: markLogo,
      frameClass: "h-9 w-[3.25rem] sm:h-10 sm:w-[3.7rem]",
      sizes: "(min-width: 640px) 60px, 52px",
      alt: "Priority brand mark",
    },
  };
  const variant = variants[resolvedLayout] ?? variants.horizontal;

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className={`relative shrink-0 ${variant.frameClass}`}>
        <Image
          src={variant.asset}
          alt={variant.alt}
          fill
          priority={resolvedLayout !== "mark"}
          sizes={variant.sizes}
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
