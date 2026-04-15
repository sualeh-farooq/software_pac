"use client";

import Image from "next/image";
import cloud_service from "../../public/assets/cloud_service.png"

const INCLUDES = [
  "Cloud migration planning and execution",
  "Hybrid and multi-cloud architecture design",
  "Cloud security and compliance management",
  "Cost optimization and right-sizing",
  "Ongoing cloud infrastructure management",
  "Disaster recovery and backup solutions",
];

const SolutionSection = () => {
  return (
    <section className="py-16  md:py-24"
      style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 1000px 1400px at 100% 0%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}>     
  
  
   <div className="mx-auto max-w-[1400px] xl:max-w-[1500px] px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6" data-aos="fade-right">

            {/* Label + line */}
           <div className="flex items-center gap-4">
              <span className="text-[15px] font-semibold tracking-widest "
                   style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
                Cloud Services
              </span>
              <span className="flex-1 max-w-[65px] h-px bg-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-[48px] font-semibold text-white leading-tight tracking-tight">
              Scalability and<br />Flexibility for Growth
            </h2>

            {/* Body */}
            <p className="text-[14px] md:text-[16px] text-[#EBEBEB] leading-relaxed">
              We help you harness the full power of cloud computing — delivering
              flexibility, scalability, and cost-efficiency that positions your business for
              sustainable growth.
            </p>

            {/* Feature List */}
         <ul className="flex flex-col mt-2 w-full max-w-lg">
  {INCLUDES.map((item, index) => (
    <li key={item}>
      <div className="flex items-center gap-4 py-3">
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={
            index === 0
              ? { background: "linear-gradient(135deg, #C477EA, #6F54F4)" }
              : { background: "white" }
          }
        />
        <span
          className="text-[16px] md:text-[21px] font-semibold"
          style={
            index === 0
              ? {
                  background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : { color: "#EBEBEB" }
          }
        >
          {item}
        </span>
      </div>
      {index !== INCLUDES.length - 1 && (
        <div className="h-[0.5px] w-full bg-white/20" />
      )}
    </li>
  ))}
</ul>
          </div>

          {/* Right: Image — unchanged */}
          <div className="relative" data-aos="zoom-in" data-aos-duration="1000">
            <div className="h-[280px] sm:h-[360px] md:h-[460px] lg:h-[670px] w-full rounded-2xl bg-[#f1f5f9] relative overflow-hidden">
              <Image
                src={cloud_service}
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

export default SolutionSection;