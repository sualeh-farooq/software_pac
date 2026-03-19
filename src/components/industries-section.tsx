"use client";

import React from "react";
import GradientButton from "./gradient-button";
import SectionHeading from "./section-heading";
import { Industry } from "@/types/home.type";
import { INDUSTRIES } from "@/constants/home.constants";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image"; // Added Image and StaticImageData

interface IndustriesSectionProps {
  title?: string;
  description?: string;
  industries?: Industry[];
  text?: string;
}

const IndustriesSection = ({
  title = "Our Program",
  description = "A Smarter Way to Fund Your Business",
  text = "Most lenders push a single product. We don’t. Black FLag Funding gives you access to 20+ funding programs and builds a long-term plan to help you qualify for better offers over time, all without the bank-runaround.",
  industries = INDUSTRIES,
}: IndustriesSectionProps) => {


  // Helper function to handle both ReactNode and StaticImageData
  const renderIcon = (icon: React.ReactNode | StaticImageData, title: string) => {
    if (!icon) return null;

    // Check if it's an Image Object
    if (typeof icon === "object" && "src" in icon) {
      return (
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      );
    }

    // Otherwise render as ReactNode (SVG/Lucide)
    return icon;
  };

  return (
    <section className="bg-light py-12 sm:py-20">
      <div className="flex flex-col gap-10 xl:gap-18 max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-6 lg:px-10">
        <div className="max-w-[1186px] mx-auto">
          <SectionHeading title={title} description={description} text={text} />
        </div>

        <div className="flex flex-wrap justify-start gap-5">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="w-full xl:w-[calc(33.333%-14px)] xl:max-w-[496px] min-h-[150px] sm:w-[calc(50%-10px)] flex-shrink-0 flex-grow-0 
              rounded-[20px] bg-white border border-transparent 
              hover:border-primary hover:shadow-[0px_4px_16px_rgba(14,139,217,0.1)] 
              transition-all duration-500 p-5 flex flex-col lg:flex-row 
              md:justify-between items-center lg:items-start gap-4 group"
            >
              {/* Icon Container */}
              <span className="flex h-14 w-14 flex-shrink-0 text-icon-primary bg-[#fcf0f0] border border-icon-primary/10 items-center justify-center rounded-2xl overflow-hidden p-3">
                {renderIcon(industry.icon, industry.title)}
              </span>

              <div className="flex flex-col justify-between flex-1 items-center lg:items-start self-stretch">
                <div className="flex flex-col items-center lg:items-start"> {/* Added centering here */}
                  <span className="text-lg font-semibold text-heading text-center lg:text-left">
                    {industry.title}
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-subtext text-center lg:text-left">
                    {industry.description}
                  </p>
                </div>
              
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default IndustriesSection;