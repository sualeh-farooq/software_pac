

const STATS = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Coverage" },
  { value: "<1HR", label: "Incident Response" },
  { value: "100%", label: "Ownership of Your IT" },
];

export default function StatsSection() {
  return (
    <div className="w-full max-w-[1750px]  mx-auto px-6 md:px-12 xl:px-16 pb-12 md:pb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
      <div className="w-full h-px bg-white/25 mb-8 md:mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="text-[clamp(24px,5vw,48px)] font-bold tracking-[-0.02em] text-white">{s.value}</span>
            <span className="text-sm text-[#EBEBEB]">{s.label}</span>
          </div>
        ))}     

        </div>
        </div>
  );
}


