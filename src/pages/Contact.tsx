import { useState } from "react";
import type { ChangeEvent } from "react";
import PageHeader from "../components/PageHeader";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
  FacebookIcon,
} from "../components/Icons";
import { BUSINESS, GENERAL_WHATSAPP, whatsappLink } from "../data/business";
import { SERVICES } from "../data/services";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [error, setError] = useState("");

  const update = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and phone number so we can reach you.");
      return;
    }
    const text =
      `Hello Mr. Ernest, my name is ${form.name.trim()}.\n` +
      `Phone: ${form.phone.trim()}\n` +
      (form.service ? `Service of interest: ${form.service}\n` : "") +
      (form.message.trim() ? `Message: ${form.message.trim()}` : "I'd like to make an enquiry.");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-brand-mist bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 transition-colors focus:border-brand-blue";

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Ea_max"
        subtitle="Reach us on WhatsApp, give us a call, or send a quick enquiry and we'll continue the conversation on WhatsApp."
      />

      <section className="bg-brand-cloud py-16 sm:py-20">
        <div className="container-px grid gap-10 lg:grid-cols-12">
          {/* Contact card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-mist bg-white p-7 shadow-card">
              <h2 className="font-display text-xl font-800 text-brand-navy">
                Contact details
              </h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-cloud text-brand-blue">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-700 text-brand-navy">Office address</span>
                    <span className="text-slate-600">{BUSINESS.address}</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-cloud text-brand-blue">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-700 text-brand-navy">Phone</span>
                    {BUSINESS.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="block text-slate-600 hover:text-brand-green">
                        {p}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-cloud text-brand-blue">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-700 text-brand-navy">Email</span>
                    {BUSINESS.emails.map((m) => (
                      <a key={m} href={`mailto:${m}`} className="block break-all text-slate-600 hover:text-brand-green">
                        {m}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-cloud text-brand-blue">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-700 text-brand-navy">Office hours</span>
                    <span className="text-slate-600">{BUSINESS.hours}</span>
                  </span>
                </li>
              </ul>

              <a
                href={GENERAL_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green mt-7 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              <div className="mt-5 flex items-center gap-3 border-t border-brand-mist pt-5">
                <span className="text-sm font-600 text-brand-navy">Follow us:</span>
                <a
                  href={BUSINESS.socials.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Channel"
                  className="grid h-9 w-9 place-items-center rounded-full bg-brand-cloud text-brand-blue transition-colors hover:bg-brand-green hover:text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <a
                  href={BUSINESS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook — ${BUSINESS.socials.facebookName}`}
                  className="grid h-9 w-9 place-items-center rounded-full bg-brand-cloud text-brand-blue transition-colors hover:bg-brand-green hover:text-white"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-brand-mist bg-white p-7 shadow-card">
              <h2 className="font-display text-xl font-800 text-brand-navy">
                Send a quick enquiry
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill this in and we'll open WhatsApp with your details ready to send.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-600 text-brand-navy">
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-600 text-brand-navy">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="e.g. 0801 234 5678"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="mb-1.5 block text-sm font-600 text-brand-navy">
                    Service you're interested in
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className={inputClass}
                  >
                    <option value="">Select a service (optional)</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Other / General enquiry">Other / General enquiry</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-600 text-brand-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us briefly what you need help with…"
                    className={`${inputClass} resize-y`}
                  />
                </div>
              </div>

              {error && (
                <p className="mt-3 text-sm font-600 text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button type="button" onClick={handleSubmit} className="btn-green mt-5 w-full sm:w-auto">
                <WhatsAppIcon className="h-4 w-4" />
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container-px mt-12">
          <div className="overflow-hidden rounded-2xl border border-brand-mist shadow-card">
            <iframe
              title="Ea_max IT Services — Rivers State University, Port Harcourt"
              src="https://www.google.com/maps?q=Rivers%20State%20University%20Port%20Harcourt&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
