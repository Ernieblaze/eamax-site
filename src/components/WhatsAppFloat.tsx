import { WhatsAppIcon } from "./Icons";
import { GENERAL_WHATSAPP } from "../data/business";

/**
 * Persistent floating WhatsApp button, always visible bottom-right.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={GENERAL_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2"
    >
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-navy px-3 py-2 text-xs font-600 text-white opacity-0 shadow-card transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white shadow-[0_10px_28px_-6px_rgba(0,166,81,0.8)] transition-transform animate-floaty hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
