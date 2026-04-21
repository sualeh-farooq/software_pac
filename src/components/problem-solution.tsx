"use client";

import Image from "next/image";
import merge_unified from "../../public/assets/merge-unified.png";
import merge_agent from "../../public/assets/merge-agent-handler.png";
import merge_gateway from "../../public/assets/merge-gateway.png";

const DEFAULT_SERVICES = [
  {
    icon: merge_unified,
    title: (<>Eliminate Tool <br /> Fatigue:</>),
    description: "No more switching between 10 different tabs.",
  },
  {
    icon: merge_agent,
    title: (<>Contextual <br /> Insights:</>),
    description: "Don't just see data; understand what it means for your business.",
  },
  {
    icon: merge_gateway,
    title: (<>Proactive vs. <br /> Reactive:</>),
    description: "Fix issues before your users even notice them.",
  },
];

const ProblemSolution = ({
  title = (<>Stop Managing Chaos. Start . <br />Scaling Value</>),
  description = "Traditional IT management is broken. We replace scattered tools with a unified intelligent engine.",
  label = "Problem vs. Solution",
  services = DEFAULT_SERVICES,
}) => {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: "#04020f",
        backgroundImage:
          "radial-gradient(ellipse 900px 900px at 0% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] xl:max-w-[1450px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white" />
            <span
              className="text-[14px] md:text-[15px] font-semibold tracking-widest"
              style={{
                background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {label}
            </span>
            <span className="h-px w-12 bg-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-[15px] text-white/80 max-w-xl">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-sm sm:max-w-none mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* ✅ Fixed: removed fixed w-[370px]/w-[420px] and h-[420px] */}
              <div className="flex flex-col rounded-2xl h-full min-h-[380px] bg-[#11161f] p-6 sm:p-8">
                <h3
                  className="text-[22px] sm:text-[25px] font-bold leading-snug"
                  style={{
                    background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.title}
                </h3>

                <p className="text-[15px] text-white/80 pt-4">
                  {s.description}
                </p>

                <div className="flex justify-center mt-auto pt-6">
                  <Image
                    src={s.icon}
                    alt=""
                    width={270}
                    height={220}
                    className="w-full max-w-[270px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;