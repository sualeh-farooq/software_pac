"use client";

import Image from "next/image";
import icon from "../../public/assets/cybersecurity-icon.png";
import icon1 from "../../public/assets/cybersecurity-icon1.png";
import icon2 from "../../public/assets/cybersecurity-icon2.png";
import icon3 from "../../public/assets/cybersecurity-icon3.png";


const SERVICES = [
  {
    icon: icon,
    title: "Threat Detection",
    description:
      "Advanced tools that identify suspicious activity and potential breaches in real time.",
  },
  {
    icon: icon1,
    title: "Prevention & Hardening",
    description:
      "Firewalls, endpoint protection, and security policies that block threats before penetrating your systems.",
  },
  {
    icon: icon2,
    title: "Rapid Incident Response",
    description:
      "Our team mobilizes immediately to contain, investigate, and remediate threats when an attack occurs.",
  },
  {
    icon: icon3,
    title: "Compliance & Reporting",
    description:
      "Meet industry regulations with clear documentation for audits and governance requirements.",
  },
];

const TABS = ["THREAT DETECTION", "PREVENTION & HARDENING", "COMPLIANCE"];

const CybersecuritySection = () => {
  return (
    <section className="  py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1450px] px-10 lg:px-14">

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">

          {/* Left: Label + Heading + Body */}
          <div data-aos="fade-right">
       <div className="flex items-center gap-4">
              <span className="text-[15px] font-semibold tracking-widest "
                   style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
                CyberSecurity
              </span>
              <span className="flex-1 max-w-[65px] h-px bg-white" />
            </div>
            <h2 className="text-3xl md:text-[45px] mt-4 font-semibold text-white leading-tight tracking-tight mb-5">
              Protecting Your Most<br />Valuable Assets
            </h2>
            <p className="text-[15px] text-[#EBEBEB]  ">
              A reactive security posture is no longer sufficient. We provide <br/>
              comprehensive, multi-layered security solutions to safeguard your data <br/>
              and business continuity.
            </p>
          </div>

          {/* Right: Quote + Tags */}
          <div className="flex flex-col gap-8 ml-0 md:ml-20"  >
            <div className="flex gap-4 items-start pt-12" data-aos="fade-left ">
              <span className="w-[3px] h-19 flex-shrink-0 self-stretch  rounded-full bg-gradient-to-b from-[#C477EA] to-[#6F54F4]"  />
              <p className="text-[16px] text-[#c5cade] leading-relaxed pt-3 " >
                Every solution we architect begins with security as a foundational
                principle — not an afterthought.
              </p>
            </div>

            {/* Pill tabs */}
            <div className="flex flex-wrap gap-2 " data-aos="fade-zoom-in" data-aos-delay="200">
              {TABS.map((tab) => (
                <span
                  key={tab}
                  className="rounded-full border border-[#2a2f4a] bg-transparent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white"
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {SERVICES.map((s, i) => {
    return (
      <div
        key={s.title}
        className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/10"
        data-aos="fade-up"
        data-aos-delay={i * 80}
      >
        <div className="flex flex-col gap-4 rounded-2xl h-full bg-[#11161f] p-7">
          
          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-lg">
            <Image src={s.icon} alt={s.title} width={30} height={30} className="w-7 h-7 object-contain" />
          </div>

          {/* Title */}
          <h3
            className="text-[28px] font-bold leading-snug"
            style={{
              background: "linear-gradient(135deg, #C477EA, #6F54F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {s.title}
          </h3>

          {/* Description */}
          <p className="text-[16px] text-[#FFFF]/80 ">
            {s.description}
          </p>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default CybersecuritySection;