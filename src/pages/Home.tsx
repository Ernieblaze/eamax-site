import { Link } from "react-router-dom";
import Ticker from "../components/Ticker";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import type { Testimonial } from "../components/TestimonialCard";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  BoltIcon,
  ShieldIcon,
  CheckBadgeIcon,
} from "../components/Icons";
import { SERVICES } from "../data/services";
import { BUSINESS, GENERAL_WHATSAPP } from "../data/business";

const PREVIEW = SERVICES.filter((s) => s.featured).slice(0, 4).concat(
  SERVICES.filter((s) => !s.featured).slice(0, 2)
);

const WHY = [
  {
    icon: BoltIcon,
    title: "Fast Turnaround",
    body: "We move quickly so you never miss a portal deadline or registration window.",
  },
  {
    icon: ShieldIcon,
    title: "Secure Transactions",
    body: "Your payments and personal details are handled safely and kept confidential.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Trusted by Students",
    body: "Right inside RSU campus, trusted by hundreds of students and applicants.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Chioma A.",
    role: "100 Level, RSU",
    initials: "CA",
    quote:
      "Mr. Ernest handled my Post-UTME and admission processing. Everything was done before the deadline and I got admitted. Very reliable!",
  },
  {
    name: "Daniel O.",
    role: "NYSC Prospective Corper",
    initials: "DO",
    quote:
      "My NYSC online registration was smooth from start to finish. No stress, no errors, and constant updates on WhatsApp.",
  },
  {
    name: "Blessing E.",
    role: "Postgraduate Applicant",
    initials: "BE",
    quote:
      "I almost gave up on my PG application. Ea_max took over and submitted everything correctly. Highly recommended.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="circuit-bg relative overflow-hidden bg-brand-blue">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-ink"
          aria-hidden="true"
        />
        {/* green diagonal accent */}
        <div
          className="absolute right-0 top-0 hidden h-full w-1/3 bg-brand-green/15 lg:block"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />

        <div className="container-px relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="eyebrow text-brand-green-light">
              {BUSINESS.name} • {BUSINESS.rsuTag}
            </p>
            <h1 className="mt-4 font-display text-4xl font-800 leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Shaping Your Future,{" "}
              <span className="text-brand-green-light">One Application</span> at a
              Time.
            </h1>
            <p className="mt-5 max-w-xl text-lg font-700 text-brand-green-light">
              {BUSINESS.tagline}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-200">
              Your trusted educational consultancy inside Rivers State University.
              From Post-UTME and JAMB to NYSC, course registration and
              postgraduate applications — we handle the paperwork so you can focus
              on your studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-green">
                View Services
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

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["500+", "Students served"],
                ["19+", "Services offered"],
                ["100%", "On campus"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-800 text-white">{stat}</dt>
                  <dd className="text-xs text-slate-300">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero card cluster */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm shadow-card">
                <p className="font-display text-sm font-700 uppercase tracking-wide text-brand-green-light">
                  Our Services
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Post UTME / JAMB Registration",
                    "NYSC Online Registration",
                    "Postgraduate Applications",
                    "Course & Freshers Clearance",
                    "Article Writing & Assignments",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                      <CheckBadgeIcon className="h-5 w-5 shrink-0 text-brand-green-light" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-600 text-brand-green-light hover:underline"
                >
                  See full catalogue
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DEADLINE TICKER ---------------- */}
      <Ticker />

      {/* ---------------- SERVICES PREVIEW ---------------- */}
      <section className="bg-brand-cloud py-16 sm:py-20">
        <div className="container-px">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="section-title mt-2">Popular services</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-display text-sm font-600 text-brand-blue hover:text-brand-green"
            >
              View all services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIEW.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="circuit-bg relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
        <div className="container-px relative">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-green-light">Why choose us?</p>
            <h2 className="mt-2 font-display text-3xl font-800 leading-tight sm:text-4xl">
              Built around students, deadlines and trust.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/12 bg-white/5 p-7 transition-colors hover:bg-white/8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-green text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-700">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="bg-brand-cloud py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow justify-center">Testimonials</p>
            <h2 className="section-title mt-2">What students say</h2>
            <p className="mt-3 text-slate-600">
              Real results from students and applicants we've helped move forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-px">
          <div className="circuit-bg relative overflow-hidden rounded-3xl bg-brand-blue px-8 py-12 text-center shadow-card sm:px-12 sm:py-16">
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-navy"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-800 text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-3 text-slate-200">
                Send a message and let's sort out your registration, application
                or clearance today.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href={GENERAL_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn-outline">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
