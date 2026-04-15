"use client";

import Image from "next/image";
import icon from "../../public/assets/cybersecurity-icon.png";
import icon1 from "../../public/assets/cybersecurity-icon1.png";
import icon2 from "../../public/assets/cybersecurity-icon2.png";
import icon3 from "../../public/assets/cybersecurity-icon3.png";

const DEFAULT_SERVICES = [
  {
    icon: icon,
    title: "Rapid Incident & Root Cause Analysis",
    description:
      "We minimize downtime. We not only solve issues, but also identify their root causes and eliminate future risks.",
  },
  {
    icon: icon1,
    title: "Next-Gen Service Desk & Ticketing Setup",
    description:
      "A centralized support system that streamlines communication.",
  },
  {
    icon: icon2,
    title: "Precision SLA Definition & Tracking",
    description:
      "We define clear Service Level Agreements and ensure compliance.",
  },
  {
    icon: icon3,
    title: "Strategic Change Management",
    description:
      "We ensure controlled deployments without disrupting operations.",
  },
];

const CorePillar = ({
  title = (
    <>
      Operational Excellence <br />
      Framework
    </>
  ),
  label = "Core Pillars",
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
      <div className="mx-auto max-w-[1200px] xl:max-w-[1450px] px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">

          {/* Label */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white" />
            <span
              className="text-[11px] md:text-[15px] font-semibold tracking-widest"
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

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex flex-col gap-4 rounded-2xl h-full bg-[#11161f] p-7">

                <div className="flex h-11 w-11 items-center justify-center">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={30}
                    height={30}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <h3
                  className="text-[25px] font-bold leading-snug"
                  style={{
                    background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.title}
                </h3>

                <p className="text-[15px] text-white/80">
                  {s.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillar;