import Image from "next/image";
import { Award, ShieldCheck, Focus } from "lucide-react";
import arrowRight from "../../public/assets/arrow-right.png";

const DIFFERENTIATORS = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Schedule a Consultation",
    description:
      "Talk to one of our experts and discover how we can transform your IT environment.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Request an Assessment",
    description:
      "Get a comprehensive review of your current IT infrastructure at no cost or obligation.",
  },
  {
    icon: <Focus className="w-7 h-7" />,
    title: "Become a Partner",
    description:
      "Join the growing number of businesses that trust us with their most critical technology.",
  },
];

const StrategySection = () => {
  return (
    <section className="py-16  md:py-24"
      style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 1000px 900px at 100% 0%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}>          <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* ── Left: Label + Heading + Subtext ── */}
          <div className="lg:w-[500px] flex-shrink-0" data-aos="fade-right">
          <div className="flex items-center gap-4">
              <span className="text-[14px] font-semibold tracking-widest "
                   style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
                Get Started
              </span>
              <span className="flex-1 max-w-[80px] h-px bg-white" />
            </div>

            <h2
              className="text-2xl pt-4 md:text-[45px] font-semibold leading-tight tracking-tight mb-5"
              style={{ color: "#ffffff" }}
            >
              Let's Build a Stronger,<br/> More Resilient Business.
            </h2>

            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#EBEBEB] w-full">
             The question isn't whether you can afford managed IT services — it's whether you can afford not to have them.
            </p>
          </div>

          {/* ── Right: Cards ── */}

<div className="flex-1 flex justify-end mt-6 md:mt-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[780px]">
    {DIFFERENTIATORS.map((d, i) => (
      <div
        key={d.title}
        className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5"
        data-aos="fade-up"
        data-aos-delay={i * 100}
      >
        <div className="flex flex-col justify-between rounded-2xl h-auto md:h-[320px] p-6 md:p-8 bg-[#11161f]">
          <div className="flex flex-col gap-3">
            <h3
              className="text-[22px] md:text-[30px] font-extrabold "
              style={{
                background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {d.title}
            </h3>
            <p className="text-[13px] md:text-[15px] text-white">
              {d.description}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-6 group cursor-pointer">
            <span className="text-sm font-semibold text-white/80 group-hover:text-white transition">
              Get Started
            </span>
            <Image src={arrowRight} alt="" className="pt-1 ml-2" />
          </div>
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

export default StrategySection;