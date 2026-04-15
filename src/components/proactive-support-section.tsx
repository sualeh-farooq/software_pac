"use client";

import Image from "next/image";
import It_support from "../../public/assets/It_support_jmage.png"
const INCLUDES = [
  "Real-time performance monitoring and alerting",
  "Scheduled system maintenance and health checks",
  "Automated security patches and updates",
  "Helpdesk support for your entire team",
  "Detailed reporting and IT health dashboards",
];

const ProactiveSupportSection = () => {
  return (
    <section className="py-16  md:py-24"
      style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 1000px 1000px at 100% 0%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}>
      <div className="mx-auto max-w-[1400px]  xl:max-w-[1500px] px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6" data-aos="fade-right">

            {/* Label + line */}
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-semibold tracking-widest "
                   style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
                Proactive IT Support
              </span>
              <span className="flex-1 max-w-[65px] h-px bg-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-[45px] font-semibold text-white leading-tight tracking-tight">
              Preventing Problems<br />Before They Start
            </h2>

            {/* Body */}
            <p className="text-[14px] md:text-[16px] text-[#EBEBEB] leading-relaxed">
              Reactive IT support is a thing of the past. We detect and address
              potential issues before they impact your business.
            </p>

            {/* Feature cards */}
<ul className="flex flex-col gap-3 mt-2 w-full md:w-fit">
  {INCLUDES.map((item) => (
    <li key={item} className="relative rounded-[16px] p-[2px] bg-gradient-to-l from-white/40 to-white/5">
      <div className="flex items-center gap-4 rounded-xl bg-[#11161f] px-4 md:px-7 pr-6 md:pr-16 py-4 md:py-6">
        <span
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #C477EA, #6F54F4)" }}
        />
        <span className="text-sm md:text-base text-[#c5cade] leading-snug">{item}</span>
      </div>
    </li>
  ))}
</ul>
          </div>

          {/* Right: Image — unchanged */}
          <div className="relative mt-12" data-aos="zoom-in" data-aos-duration="1000">
     
            <div className="h-[280px] sm:h-[360px] md:h-[460px] lg:h-[670px] w-full rounded-2xl bg-[#f1f5f9] relative overflow-hidden">
              <Image
                src={It_support}
                alt="IT monitoring dashboard showing real-time system health metrics"
                fill
                className="object-cover rounded-2xl"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#7c5cfc]/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#3B82F6]/10 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProactiveSupportSection;