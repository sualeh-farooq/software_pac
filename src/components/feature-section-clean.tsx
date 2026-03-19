"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface FeatureSectionCleanProps {
  label?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonClassName?: string;
  buttonLink?: string;
  imageUrl: string | StaticImageData;
  imageAlt?: string;
  backgroundColor?: string;
  reverseOnMobile?: boolean;
}

const FeatureSectionClean = ({
   label="HeroCredit",
        title="Stop Guessing. Start Building Real Business Credit",
  description = "You deserve more than a one-size-fits-all loan. At Black Flag Funding, we match you with the best offer you qualify for, and help you build toward even better ones in the future.",
  buttonText = "Get Started",
  buttonClassName,
  buttonLink = "/business-funding",
  imageUrl = "/assets/herosection2.jpg",
  imageAlt = "Feature Image",
  backgroundColor = "bg-slate-50",
  reverseOnMobile = false,
}: FeatureSectionCleanProps) => {
  const mobileOrder = reverseOnMobile ? "flex-col-reverse" : "flex-col";

  return (
    <section className={`${backgroundColor} py-16 md:py-24 lg:py-28 relative overflow-hidden`}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10 relative z-10">
        <div className={`flex ${mobileOrder} lg:flex-row gap-8 md:gap-16 lg:gap-20 items-center justify-between`}>
          {/* Left Side Image */}
          <div className="flex-1 relative h-[300px] md:h-[420px] lg:h-[520px] w-full group">
            {/* Image wrapper with enhanced styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[20px] md:rounded-[28px] lg:rounded-[32px] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover rounded-[20px] md:rounded-[28px] lg:rounded-[32px] shadow-2xl group-hover:shadow-primary/30 transition-all duration-500"
              priority
            />
          </div>

          {/* Right Side Content */}
          <div className="flex-1 flex flex-col gap-7 md:gap-8">

            {/* Title */}
            <div>
              <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {title}
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-subtext text-base md:text-lg lg:text-base leading-relaxed max-w-lg opacity-90">
                {description}
              </p>
            </div>

            {/* Button */}
            <div className="w-fit pt-2">
              <Link href={buttonLink}>
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
                    ${buttonClassName}
                  `}
                >
              
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {buttonText}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionClean;
