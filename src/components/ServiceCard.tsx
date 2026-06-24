import type { Service } from "../data/services";
import { formatNaira } from "../data/services";
import { orderLink } from "../data/business";
import { WhatsAppIcon } from "./Icons";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isPriced = service.price !== null;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-brand-mist bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-cloud text-2xl"
          aria-hidden="true"
        >
          {service.icon}
        </span>
        <span className="rounded-full bg-brand-blue/8 px-3 py-1 font-display text-[11px] font-700 uppercase tracking-wide text-brand-blue">
          {service.category}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-700 leading-snug text-brand-navy">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-brand-mist pt-4">
        <span
          className={`font-display ${
            isPriced
              ? "text-lg font-800 text-brand-green"
              : "text-xs font-600 text-slate-500"
          }`}
        >
          {formatNaira(service.price)}
        </span>
        <a
          href={orderLink(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-green px-3.5 py-2 font-display text-xs font-600 text-white transition-colors hover:bg-brand-green-dark"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order via WhatsApp
        </a>
      </div>
    </article>
  );
}
