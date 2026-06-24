import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "./Icons";
import { GENERAL_WHATSAPP } from "../data/business";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-card backdrop-blur"
          : "bg-white"
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        <Link to="/" aria-label="Ea_max IT Services home">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 font-display text-sm font-600 transition-colors ${
                    isActive
                      ? "text-brand-green"
                      : "text-brand-navy hover:text-brand-blue"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={GENERAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green hidden sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg text-brand-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-brand-mist bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 font-display text-base font-600 ${
                    isActive
                      ? "bg-brand-cloud text-brand-green"
                      : "text-brand-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={GENERAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
