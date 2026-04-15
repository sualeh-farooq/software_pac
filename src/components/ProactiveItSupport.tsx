"use client";

import Image from "next/image";
import itSupportImage1 from "../../public/assets/itsupport-image1.png";

const DEFAULT_INCLUDES = [
  "ITIL Process Optimization",
  "Problem Management (Root Cause Analysis)",
  "Change Management (Risk-Free Evolution)",
  "Service Desk Setup (Ticketing Ecosystem)",
  "SLA Performance Tracking",
];

const ProactiveITSupport = ({
  label = "Proactive IT Support",
  title = (
    <>
      Managed IT <br /> Operational Services
    </>
  ),
  description = (
    <>
      Reactive IT support is a thing of the past. We detect and address <br />
      potential issues before they impact your business.
    </>
  ),
  includes = DEFAULT_INCLUDES,
  image = itSupportImage1,
}) => {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: "#04020f",
        backgroundImage:
          "radial-gradient(ellipse 900px 900px at 0% 0%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] xl:max-w-[1500px] px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">

            {/* Label */}
            <div className="flex items-center gap-4">
              <span
                className="text-[14px] font-semibold tracking-widest"
                style={{
                  background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {label}
              </span>
              <span className="flex-1 max-w-[65px] h-px bg-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-[45px] font-semibold text-white leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] text-[#EBEBEB] leading-relaxed">
              {description}
            </p>

            {/* List */}
            <ul className="flex flex-col gap-3 mt-2 w-full md:w-fit">
              {includes.map((item, i) => (
                <li
                  key={i}
                  className="relative rounded-[16px] p-[2px] bg-gradient-to-l from-white/40 to-white/5"
                >
                  <div className="flex items-center gap-4 rounded-xl bg-[#11161f] px-4 md:px-8 pr-8 md:pr-42 py-4 md:py-6">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                      }}
                    />
                    <span className="text-sm md:text-base text-[#c5cade]">
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative mt-12">
            <div className="h-[280px] sm:h-[360px] md:h-[460px] lg:h-[670px] w-full rounded-2xl bg-[#f1f5f9] relative overflow-hidden">
              <Image
                src={image}
                alt="IT support"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProactiveITSupport;