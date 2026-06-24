import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import {
  CheckBadgeIcon,
  PinIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from "../components/Icons";
import { BUSINESS, GENERAL_WHATSAPP } from "../data/business";

const CREDENTIALS = [
  "RSU IT Consultant",
  "Professional Teacher",
  "Registered Member, TRCN",
  "Educational Counsellor",
  "Academic Research Materials Specialist",
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Meet Mr. Ernest Anabs"
        subtitle="The consultant behind Ea_max IT Services — helping RSU students and applicants navigate admissions, registration and academic paperwork with confidence."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          {/* Photo + quick info */}
          <div className="lg:col-span-4">
            <div className="mx-auto max-w-xs text-center">
              <div className="mx-auto grid h-48 w-48 place-items-center rounded-full border-4 border-brand-green bg-brand-cloud">
                <span className="font-display text-5xl font-800 text-brand-blue">EA</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">(Photo placeholder)</p>
              <h2 className="mt-4 font-display text-2xl font-800 text-brand-navy">
                Ernest Anabs
              </h2>
              <p className="text-sm text-brand-green font-600">
                Founder, {BUSINESS.name}
              </p>

              <div className="mt-6 space-y-3 rounded-2xl border border-brand-mist bg-brand-cloud p-5 text-left text-sm">
                <p className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span className="text-slate-600">{BUSINESS.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-brand-green" />
                  <span className="text-slate-600">{BUSINESS.phones.join(" / ")}</span>
                </p>
                <p className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span className="break-all text-slate-600">
                    {BUSINESS.emails.join(", ")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8">
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title mt-2">
              Trusted guidance, right inside RSU campus.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Ea_max IT Services is an educational consultancy based at the
                Rivers State University Shopping Complex in Port Harcourt. Led by
                Mr. Ernest Anabs, the business exists to take the stress out of
                admissions, registrations and academic paperwork for students and
                applicants.
              </p>
              <p>
                As an RSU IT consultant, professional teacher and registered
                member of the Teachers Registration Council of Nigeria (TRCN),
                Mr. Ernest combines classroom experience with hands-on knowledge
                of the portals and processes students deal with every session —
                from JAMB and Post-UTME to NYSC, course registration and
                postgraduate applications.
              </p>
              <p>
                Beyond processing forms, Ea_max offers genuine guidance and
                counselling, plus support with academic research materials,
                article writing and assignments. The goal is simple: fast,
                reliable and secure service that helps you move forward.
              </p>
            </div>

            <h3 className="mt-10 font-display text-lg font-700 text-brand-navy">
              Credentials
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-xl border border-brand-mist bg-white p-4 text-sm font-600 text-brand-navy shadow-card"
                >
                  <CheckBadgeIcon className="h-5 w-5 shrink-0 text-brand-green" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={GENERAL_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <Link to="/services" className="btn-blue">
                Explore services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
