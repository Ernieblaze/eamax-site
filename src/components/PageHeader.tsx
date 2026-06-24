interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="circuit-bg relative overflow-hidden bg-brand-blue">
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-navy"
        aria-hidden="true"
      />
      <div className="container-px relative py-16 sm:py-20">
        <p className="font-display text-xs font-700 uppercase tracking-[0.2em] text-brand-green-light">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-800 leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            {subtitle}
          </p>
        )}
      </div>
      {/* angled lower edge — echoes the diagonal slashes on the brand flyer */}
      <div
        className="absolute -bottom-px left-0 h-8 w-full bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        aria-hidden="true"
      />
    </section>
  );
}
