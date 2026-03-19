import { Shield, Zap, TrendingUp } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: <Shield className="w-7 h-7 text-[#3a4096]" />,
    title: "Security",
    description: "Protecting data in an era of escalating cyber threats",
  },
  {
    icon: <Zap className="w-7 h-7 text-[#3a4096]" />,
    title: "Performance",
    description: "Ensuring systems run at peak efficiency 24/7",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#3a4096]" />,
    title: "Scalability",
    description: "Growing your infrastructure alongside your business",
  },
];

const ChallengesIntroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div className="">
        {/* <div className="relative rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-10 lg:p-12 shadow-[0_22px_55px_-40px_rgba(15,23,42,0.35)]"> */}
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14" data-aos="fade-up">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
                The Modern IT Challenge
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#25285e] leading-tight tracking-tight mb-5">
                Navigating the Complexities of Modern Business Technology
              </h2>
              <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
                Today&apos;s business environment is defined by rapid technological change, rising
                cybersecurity threats, and the relentless pressure to stay competitive. Managing IT
                infrastructure is no longer just an operational concern — it&apos;s a strategic imperative.
              </p>
            </div>

            {/* Mobile/Tablet fallback layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:hidden">
              {PAIN_POINTS.map((point, i) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 90}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f5f9] mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#25285e] mb-2">{point.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>

            {/* Desktop hub layout */}
            <div className="relative hidden lg:block h-[560px]" data-aos="fade-up" data-aos-delay="120">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[220px] w-[220px] rounded-full border border-[#CBD5E1] bg-white shadow-sm flex items-center justify-center text-center px-8">
                  <div className="absolute inset-4 rounded-full border border-dashed border-[#CBD5E1]" />
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[#64748B]">Core Challenge</p>
                    <p className="mt-2 text-base font-semibold leading-snug text-[#25285e]">
                      Managing IT is now a strategic imperative.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-[50%] top-[50%] h-px w-[520px] -translate-x-1/2 -translate-y-1/2 bg-[#CBD5E1]" />
              <div className="absolute left-[50%] top-[50%] h-[430px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#CBD5E1]" />

              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[300px]">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f5f9] mb-4">{PAIN_POINTS[0].icon}</div>
                  <h3 className="text-lg font-bold text-[#25285e] mb-2">{PAIN_POINTS[0].title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{PAIN_POINTS[0].description}</p>
                </div>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[300px]">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f5f9] mb-4">{PAIN_POINTS[1].icon}</div>
                  <h3 className="text-lg font-bold text-[#25285e] mb-2">{PAIN_POINTS[1].title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{PAIN_POINTS[1].description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-[74%] w-[320px]">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f5f9] mb-4">{PAIN_POINTS[2].icon}</div>
                  <h3 className="text-lg font-bold text-[#25285e] mb-2">{PAIN_POINTS[2].title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{PAIN_POINTS[2].description}</p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesIntroSection;
