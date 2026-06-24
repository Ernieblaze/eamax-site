import { useState } from "react";
import { CloseIcon, WhatsAppIcon } from "./Icons";
import { whatsappLink } from "../data/business";

const MESSAGE =
  "⚠️ RSU 2026/2027 Post-UTME Registration — Portal closes soon! DM us NOW → 08159074358";

const DEADLINE_WA = whatsappLink(
  "Hello Mr. Ernest, I want to register for the RSU 2026/2027 Post-UTME before the portal closes."
);

/**
 * Top-of-page urgent deadline notice. Dismissed state lives in component
 * state only, so it reappears on the next visit/session (no storage used).
 */
export default function DeadlineBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-brand-green text-white">
      <div className="container-px flex items-center justify-center gap-3 py-2 pr-10 text-center text-sm font-600">
        <a
          href={DEADLINE_WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <WhatsAppIcon className="hidden h-4 w-4 shrink-0 sm:block" />
          <span>{MESSAGE}</span>
        </a>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss deadline notice"
        className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-white/90 hover:bg-white/20"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
