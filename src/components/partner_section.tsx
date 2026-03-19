"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface PartnerSectionProps {
  imageUrl: string | StaticImageData;
}

const PartnerSection = ({
  imageUrl = "/assets/herosection2.jpg",
}: PartnerSectionProps) => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Background gradient (same) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-20 items-center justify-between">

          {/* ================= LEFT CONTENT ( ================= */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Badge */}
            <span className="w-fit px-6 py-2.5 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
              Our Partner
            </span>

            {/* Heading */}
            <h2 className="text-heading text-4xl md:text-5xl font-bold leading-tight">
              Become a Partner. Earn More. <br />
              Empower More.
            </h2>

            {/* Description */}
            <p className="text-subtext text-base md:text-lg max-w-xl leading-relaxed opacity-90">
              Join the Black FLag Funding partner network and unlock new revenue by
              offering real funding solutions your clients actually need.
              Whether you're in finance, consulting, or just well-connected,
              you can start earning while helping businesses access capital
              that drives growth.
            </p>

            {/* Tick List */}
            <div className="flex flex-col gap-5">

              {[
                {
                  title: "Earn Competitive Commissions",
                  desc: "Get paid on every deal you send, with no caps and no guesswork.",
                },
                {
                  title: "Add Value to Your Clients",
                  desc: "Bring funding options that actually work – from lines of credit to SBA and equipment financing.",
                },
                {
                  title: "Expand Your Offerings",
                  desc: "Strengthen your service suite with trusted solutions for business owners in any industry.",
                },
                {
                  title: "Partner with Pros",
                  desc: "Work with a team that closes deals fast, communicates clearly, and supports you every step.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full  bg-gradient-to-t from-primary to-secondary flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-heading">
                      {item.title}
                    </p>
                    <p className="text-subtext text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Button (same style) */}
           <div className="w-fit pt-2">
              <Link href="/partner-with-us">
                <button
                  className={`
                    group relative px-8 md:px-10 py-3.5 md:py-4 
                    bg-gradient-to-t from-primary to-secondary 
                    text-white font-semibold rounded-lg md:rounded-[12px]
                    hover:shadow-xl hover:shadow-primary/40
                    active:scale-95
                    transition-all duration-300 ease-out
                    text-sm md:text-base
                    overflow-hidden
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                   Get Started
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* ================= RIGHT IMAGE (100% SAME DESIGN) ================= */}
          <div className="flex-1 relative h-[300px] md:h-[420px] lg:h-[520px] w-full group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[20px] md:rounded-[28px] lg:rounded-[32px] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            <Image
              src={imageUrl}
              alt="Partner discussion"
              fill
              className="object-cover rounded-[20px] md:rounded-[28px] lg:rounded-[32px] shadow-2xl group-hover:shadow-primary/30 transition-all duration-500"
              priority
            />

       
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerSection;