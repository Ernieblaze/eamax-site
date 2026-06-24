import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import { SERVICES, FILTERS } from "../data/services";
import type { ServiceCategory } from "../data/services";

type Filter = "All" | ServiceCategory;

export default function Services() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? SERVICES
        : SERVICES.filter((s) => s.category === active),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Catalogue"
        title="Services & Pricing"
        subtitle="Every service below can be ordered directly on WhatsApp with a pre-filled message. Tap a filter to narrow things down."
      />

      <section className="bg-brand-cloud py-12 sm:py-16">
        <div className="container-px">
          {/* Filter bar */}
          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2.5 font-display text-sm font-600 transition-all ${
                    isActive
                      ? "bg-brand-blue text-white shadow-card"
                      : "border border-brand-mist bg-white text-brand-navy hover:border-brand-blue/40"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <p className="mb-6 text-sm text-slate-500">
            Showing <span className="font-700 text-brand-navy">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "service" : "services"}
            {active !== "All" && <> in {active}</>}.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Note about general package */}
          <div className="mt-10 rounded-2xl border border-brand-mist bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-card">
            <p>
              <span className="font-700 text-brand-navy">A quick note on pricing:</span>{" "}
              services marked “Included in general services” are part of our
              everyday on-campus support package. Message us on WhatsApp for the
              exact cost of your specific request — it depends on the details and
              what's involved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
