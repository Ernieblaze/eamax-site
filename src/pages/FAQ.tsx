import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ChevronIcon, WhatsAppIcon } from "../components/Icons";
import { GENERAL_WHATSAPP } from "../data/business";

const FAQS = [
  {
    q: "How do I register for Post-UTME?",
    a: "Send us a message on WhatsApp with your JAMB details and we'll handle the Post-UTME registration for you — from portal access to payment and final submission. We'll keep you updated at every step and confirm once it's done.",
  },
  {
    q: "What documents do I need for NYSC registration?",
    a: "You'll typically need your statement of result or degree certificate, a recent passport photograph, your phone number and email, and your bank details for allowance. Once you message us, we'll give you the exact checklist for your situation before we begin.",
  },
  {
    q: "How long does JAMB change of course take?",
    a: "A change of course or institution is usually processed quickly once the CAPS portal is open and your payment is confirmed — often the same day. Timing can depend on JAMB's portal availability, so it's best to start early.",
  },
  {
    q: "Can I pay online or in person?",
    a: "Both. You can pay online via bank transfer and we'll confirm receipt, or you can pay in person at our office in the RSU Shopping Complex. Either way you'll get a clear confirmation before we proceed.",
  },
  {
    q: "What are your office hours?",
    a: "We're open Monday to Saturday, 8:30am to 5:00pm, at Office 1, Rivers State University Shopping Complex (Main Campus), Port Harcourt. You can also reach us on WhatsApp outside those hours and we'll respond as soon as we can.",
  },
  {
    q: "How do I get my RSU ID card?",
    a: "We process RSU student ID cards as part of our on-campus services. Message us with your matric number and details, and we'll handle the application and let you know when it's ready for collection.",
  },
  {
    q: "Do you help with postgraduate applications?",
    a: "Yes. We handle full postgraduate applications — Masters, PGD and PhD — including form purchase, document preparation and submission. We also assist with postgraduate clearance once you're admitted.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Your personal details and documents are handled securely and used only for the service you've requested. We treat confidentiality and the safety of your transactions as a priority.",
  },
];

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-mist bg-white shadow-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-700 text-brand-navy">{q}</span>
        <ChevronIcon
          className={`h-5 w-5 shrink-0 text-brand-green transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="Help Centre"
        title="Frequently asked questions"
        subtitle="Quick answers to the things students ask us most. Still unsure? We're one message away."
      />

      <section className="bg-brand-cloud py-16 sm:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-mist bg-white p-8 text-center shadow-card">
            <h2 className="font-display text-xl font-800 text-brand-navy">
              Didn't find your answer?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Send us a message and we'll help you out directly.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={GENERAL_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask on WhatsApp
              </a>
              <Link to="/contact" className="btn-blue">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
