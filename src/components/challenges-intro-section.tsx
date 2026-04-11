"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import sec2_bg from "../../public/assets/section2-bg.png";
import icon0 from "../../public/assets/card-icon.png";
import icon1 from "../../public/assets/card-icon1.png";
import icon2 from "../../public/assets/card-icon2.png";
import card_bg from "../../public/assets/card-bg.png";
import dottedline from "../../public/assets/section2-dotted-line.png";

/* ── Card ── */
interface CardProps {
  icon: StaticImageData;
  title: string;
  desc: string;
  featured?: boolean;
}
function Card({ icon, title, desc, featured }: CardProps) {
  return (
    <div className="p-[1px] rounded-2xl bg-gradient-to-l from-white/40 to-white/5">
  
  <div
    className="relative text-left rounded-2xl overflow-hidden border border-white/10"
    style={{ backgroundColor: "#0d121b" }}
  >
    {/* Card bg — top right */}
    <div className="absolute right-0 w-80 h-80 pointer-events-none">
      <Image src={card_bg} alt="" fill className="object-cover object-top" />
    </div>

    {/* Grid overlay pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.9) 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.9) 100%)",
      }}
    />

    {/* Card content */}
    <div className="relative z-10 p-6">

      {/* Icon */}
      <div className="mb-5 w-10 h-10">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className="text-[25px] font-bold mb-2"
        style={{
          background: "linear-gradient(135deg, #C477EA, #6F54F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-white/90"> 
        {desc}
      </p>

    </div>
  </div>

</div>
  );
}

/* ── Main Section ── */
export default function ChallengesIntroSection() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden">

      {/* Background image — z-0 */}
      <div
        className="absolute inset-0 top-0 bottom-20 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${sec2_bg.src})` }}
      />

      {/* Dotted line — hidden on mobile, visible md+ */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:flex items-start justify-center mt-[26rem]" data-aos="zoom-out"
     data-aos-duration="1000">
        <Image src={dottedline} alt="" className="w-full " />
      </div>

      {/* Content — above both bg layers */}
      <div className="relative z-20 max-w-[1920px] mx-auto px-6 text-center">

        {/* label */}
            <div className="flex items-center justify-center gap-6 mb-5"  data-aos="fade-up"
    >
          <span className="w-18 h-px bg-white/80"></span>
          <span className="text-[12px] md:text-[18px] font-semibold"
                style={{
                  background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
            The Modern IT Challenge
          </span>
          <span className="w-18 h-px bg-white/80"></span>
        </div>
        {/* heading */}
        <h2 className="text-[28px] md:text-[48px] font-semibold text-white leading-tight max-w-[950px] mt-2 mx-auto"  data-aos="fade-up"
     >
          Navigating the Complexities of Modern Business Technology
        </h2>

        {/* desc */}
        <p className="mt-4 text-[14px] md:text-[16px] max-w-4xl mx-auto text-[#EBEBEB]/80 md:max-w-[45%]"  data-aos="fade-up"
  >
          Today's business environment is defined by rapid technological change,
          rising cybersecurity threats, and the relentless pressure to stay competitive.
          Managing IT infrastructure is no longer just an operational concern — it's a strategic imperative.
        </p>

        {/* connector + cards */}
        <div className="relative mt-16">

   
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16 pt-16 max-w-[1420px] mx-auto">

            <div className="md:mt-52" data-aos="fade-right"
     data-aos-anchor-placement="top-bottom" >
              <Card
                icon={icon1}
                title="Escalating Demand"
                desc="The need for robust, secure infrastructure continues to grow, placing enormous pressure on internal teams."
              />
            </div>

            <div className="md:mt-28" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <Card
                icon={icon0}
                title="Cybersecurity Threats"
                desc="Ransomware, phishing, and data breaches can cripple operations and damage reputations in an instant."
                featured
              />
            </div>

            <div className="md:mt-52" data-aos="fade-left"
     data-aos-anchor-placement="top-bottom">
              <Card
                icon={icon2}
                title="Cost of Downtime"
                desc="Downtime and outdated systems lead to significant financial losses and erosion of customer trust."
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
