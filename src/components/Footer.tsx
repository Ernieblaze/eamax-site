import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  FacebookIcon,
} from "./Icons";
import { BUSINESS, GENERAL_WHATSAPP } from "../data/business";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const TOP_SERVICES = [
  "Post UTME / JAMB",
  "NYSC Registration",
  "Postgraduate Applications",
  "Course Registration",
  "Article Writing & Assignments",
];

export default function Footer() {
  return (
    <footer className="circuit-bg bg-brand-ink text-slate-300">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {BUSINESS.tagline} Trusted educational consultancy for Rivers State
            University students and applicants.
          </p>
          <a
            href={GENERAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green mt-5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 transition-colors hover:text-brand-green-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-wide text-white">
            Popular Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {TOP_SERVICES.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-slate-400 transition-colors hover:text-brand-green-light">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span className="text-slate-400">{BUSINESS.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-green" />
              <span className="text-slate-400">
                {BUSINESS.phones.join(" / ")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span className="break-all text-slate-400">
                {BUSINESS.emails.join(", ")}
              </span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={GENERAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Channel"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-green"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={BUSINESS.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook — ${BUSINESS.socials.facebookName}`}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-green"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name} ({BUSINESS.rsuTag}). All rights reserved.
          </p>
          <p>Shaping your future with smart solutions.</p>
        </div>
      </div>
    </footer>
  );
}
