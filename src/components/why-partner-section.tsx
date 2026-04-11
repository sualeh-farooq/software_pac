import { Award, ShieldCheck, Focus } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Deep Expertise",
    description:
      "Our team of certified professionals brings extensive knowledge across a wide range of technologies, industries, and platforms — ensuring you always have the right expertise at hand.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Proven Reliability",
    description:
      "We deliver consistent, high-quality service backed by defined SLAs and a track record of keeping businesses running smoothly.",
  },
  {
    icon: <Focus className="w-7 h-7" />,
    title: "Your Focus Restored",
    description:
      "With your IT in capable hands, redirect energy toward what truly matters — growing your business, serving customers, and pursuing strategic goals.",
  },
];

const WhyPartnerSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* ── Left: Label + Heading + Subtext ── */}
          <div className="w-full lg:w-[500px] flex-shrink-0" data-aos="fade-right">
              <div className="flex items-center gap-4">
              <span className="text-[14px] font-semibold tracking-widest"
                   style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
                Why Choose Us
              </span>
              <span className="flex-1 max-w-[80px] h-px bg-white" />
            </div>

            <h2
              className="text-2xl md:text-[45px] pt-4 font-semibold leading-tight tracking-tight mb-5"
              style={{ color: "#ffffff" }}
            >
              Why Partner With Us?
            </h2>

            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/80">
              Choosing the right managed IT partner is one of the most important
              decisions your business will make.
            </p>
          </div>

          {/* ── Right: Cards ── */}
          <div className="w-full flex-1 flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-8 w-full md:max-w-[790px]">
              {DIFFERENTIATORS.map((d, i) => (
                <div
                  key={d.title}
                  className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/10"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="flex flex-col gap-2 rounded-2xl h-auto md:h-[320px] p-6 md:p-8 bg-[#11161f]">
                    <h3 className="text-[22px] md:text-[30px] font-extrabold leading-snug" style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
                      {d.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-white">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;