"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface FeatureWithImageProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonClassName?: string;
  imageUrl: string | StaticImageData;
  imageAlt?: string;
  isImageLeft?: boolean;
  backgroundColor?: string;
  reverseOnMobile?: boolean;
}

const FeatureWithImageSection = ({
  title = "Empowering Small Businesses with Honest, Long-Term Funding",
  description = "You deserve more than a one-size-fits-all loan. At Black Flag Funding, we match you with the best offer you qualify for, and help you build toward even better ones in the future.",
  buttonText = " More About Us",
  buttonClassName,
  imageUrl="/assets/herosection2.jpg",
  imageAlt = "Feature Image",
  isImageLeft = false,
  backgroundColor = "bg-slate-50",
  reverseOnMobile = false,
}: FeatureWithImageProps) => {
  const contentOrder = isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row";
  const mobileOrder = reverseOnMobile ? "flex-col-reverse" : "flex-col";

  return (
    <section className={`${backgroundColor} py-16 md:py-24 lg:py-28 relative overflow-hidden`}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10 relative z-10">
        <div className={`flex ${mobileOrder} lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center justify-between`}>
          {/* On mobile: content first (order-1), image second (order-2) so image appears below content */}
          {/* Left Side Content - on mobile appears first (above image) */}
          <div className="flex-1 w-full md:flex-1 flex flex-col gap-7 md:gap-8 order-1" data-aos="fade-right">
            {/* Text Label */}
            <div className="w-fit">
              <span className="inline-block px-6 py-2.5 text-xs md:text-sm font-semibold text-primary bg-primary/5 rounded-full border border-primary/20 hover:bg-primary/15 transition-colors duration-300">
                About us
              </span>
            </div>

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
               <Link href="/about">
                <button
                  className={`
                    group relative px-8 md:px-10 py-3.5 md:py-4 
                    cusor-pointer
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

          {/* Right Side Image - visible on all screens; on mobile shows below content (order-2) */}
          <div className={`flex-1 w-full md:flex-1 relative 
    h-[250px] sm:h-[300px] md:h-[350px] lg:h-[480px] xl:h-[550px] 2xl:h-[600px] group
    order-2 w-full`} data-aos="fade-left"> 
  {/* Image wrapper with enhanced styling */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[20px] md:rounded-[28px] lg:rounded-[32px] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
  
  <Image
    src={imageUrl} 
    alt={imageAlt}
    fill
    className="object-cover rounded-[20px] md:rounded-[28px] lg:rounded-[32px] shadow-2xl group-hover:shadow-primary/30 transition-all duration-500"
    priority 
  />
  
  {/* Floating Stats Box */}
  <div className="absolute -bottom-8 -left-5 sm:-bottom-6 sm:-left-3 md:bottom-4 md:left-4 lg:bottom-6 lg:left-6 z-20 float-animate">
    <div className="bg-white rounded-[12px] md:rounded-[16px] shadow-lg md:shadow-2xl shadow-black/20 p-3 md:p-4 backdrop-blur-xl bg-opacity-98 border border-white/40">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-2">
          <span className="text-lg md:text-base font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$100M+</span>
          <span className="text-xs md:text-sm text-subtext font-semibold">Funded</span>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full opacity-60"></div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg md:text-base font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">95%</span>
          <span className="text-xs md:text-sm text-subtext font-semibold">Approval Rate</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default FeatureWithImageSection;
