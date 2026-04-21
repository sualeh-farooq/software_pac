import Image from "next/image";
import { Award, ShieldCheck, Focus } from "lucide-react";
import arrowRight from "../../public/assets/arrow-right.png";

const DIFFERENTIATORS = [
  {
    title: "Centralized Operational Visibility",
    description:
      "Gain a holistic view of your entire IT ecosystem through a single, high-fidelity dashboard. Monitor servers, networks, and cloud environments in real-time with zero latency.",
  },
  {
    title: "AI-Driven Workflow Automation",
    description:
      "Offload repetitive manual tasks to our intelligent automation engine. Streamline service requests and incident routing so your team can focus on high-impact strategic innovation.",
  },
  {
    title: "Proactive Threat Defense",
    description:
      "Secure your perimeter with continuous compliance monitoring and instant threat detection. Our system maintains a 24/7 security baseline to protect your most critical data assets.",
  },
];

const ProductStrategySection = () => {
  return (
    <section className="py-16  md:py-24"
  style={{
        backgroundColor: "#04020f",
        backgroundImage: `
      radial-gradient(ellipse 1000px 500px at 0% 0%, #221a3f 0%, rgba(34,26,63,0.55) 30%, rgba(34,26,63,0.15) 65%, transparent 80%),
      radial-gradient(ellipse 1000px 1000px at 100% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)
    `,

      }}>          <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* ── Left: Label + Heading + Subtext ── */}
                    <div className="lg:w-[450px] xl:w-[500px] flex-shrink-0" data-aos="fade-right">
        

            <h2
              className="text-2xl pt-4 md:text-[45px] font-semibold leading-tight tracking-tight mb-5"
              style={{ color: "#ffffff" }}
            >
              Engineered for <br/> Performance & Control
            </h2>

            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#EBEBEB] w-full">
Sub-heading: Experience a unified suite of tools designed to simplify complex infrastructures and accelerate your digital growth.            </p>
          </div>

          {/* ── Right: Cards ── */}

<div className="flex-1 flex justify-end mt-6 md:mt-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full max-w-[880px]">
    {DIFFERENTIATORS.map((d, i) => (
      <div
        key={d.title}
        className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5"
        data-aos="fade-up"
        data-aos-delay={i * 100}
      >
                <div className="flex flex-col justify-between rounded-2xl h-auto md:min-h-[380px] p-6 md:p-8 bg-[#11161f]">
          <div className="flex flex-col gap-3">
            <h3
              className="text-[20px] md:text-[28px] font-extrabold leading-snug"
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

export default ProductStrategySection;