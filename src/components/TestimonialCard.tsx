import { StarIcon } from "./Icons";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export default function TestimonialCard({ name, role, quote, initials }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-brand-mist bg-white p-6 shadow-card">
      <div className="flex gap-1 text-brand-green" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-mist pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue font-display text-sm font-700 text-white">
          {initials}
        </span>
        <span>
          <span className="block font-display text-sm font-700 text-brand-navy">{name}</span>
          <span className="block text-xs text-slate-500">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
