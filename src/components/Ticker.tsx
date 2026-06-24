const ITEMS = [
  "⚠️ RSU Post-UTME Portal Closes Soon — Register Now!",
  "📢 2025/2026 Admission Processing Ongoing",
  "🪖 NYSC Online Registration — Beat the rush",
  "🎓 Postgraduate Applications Open — Apply Early",
  "✍️ Article Writing & Assignment Help Available",
];

/**
 * Infinite horizontal ticker. The list is rendered twice so the marquee
 * animation can loop seamlessly at -50% translate.
 */
export default function Ticker() {
  const Row = () => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-600">
          {item}
          <span className="text-brand-green-light">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-brand-navy py-2.5 text-white">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
      <span className="sr-only">
        Urgent notices: RSU Post-UTME portal closing soon, admission processing
        ongoing, NYSC and postgraduate registration open.
      </span>
    </div>
  );
}
