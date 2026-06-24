import { BUSINESS } from "../data/business";

interface LogoProps {
  variant?: "light" | "dark";
  showMotto?: boolean;
  className?: string;
}

/**
 * Text logo for Ea_max. The "Ea" mimics the script styling on the brand
 * flyer while "max" stays upright for legibility. A circle accent echoes
 * the ring around the mark on the printed material.
 */
export default function Logo({
  variant = "dark",
  showMotto = true,
  className = "",
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-brand-green"
        aria-hidden="true"
      >
        <span
          className={`font-display text-lg font-800 leading-none ${
            isLight ? "text-white" : "text-brand-blue"
          }`}
        >
          E<span className="text-brand-green">a</span>
        </span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-800 tracking-tight ${
            isLight ? "text-white" : "text-brand-navy"
          }`}
        >
          Ea<span className="text-brand-green">_max</span>
        </span>
        {showMotto && (
          <span
            className={`mt-0.5 block text-[10px] font-700 uppercase tracking-[0.22em] ${
              isLight ? "text-brand-green-light" : "text-brand-green"
            }`}
          >
            {BUSINESS.motto}
          </span>
        )}
      </span>
    </div>
  );
}
