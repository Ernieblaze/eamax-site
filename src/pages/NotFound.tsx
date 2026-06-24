import { Link } from "react-router-dom";
import { ArrowRightIcon, WhatsAppIcon } from "../components/Icons";
import { GENERAL_WHATSAPP } from "../data/business";

export default function NotFound() {
  return (
    <section className="circuit-bg relative grid min-h-[60vh] place-items-center overflow-hidden bg-brand-blue text-center text-white">
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-ink"
        aria-hidden="true"
      />
      <div className="container-px relative">
        <p className="font-display text-7xl font-800 text-brand-green-light">404</p>
        <h1 className="mt-3 font-display text-2xl font-800 sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-200">
          The page you're looking for doesn't exist or may have moved. Let's get
          you back on track.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-green">
            Back to home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={GENERAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
