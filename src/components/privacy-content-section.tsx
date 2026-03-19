import React from "react";
import { BulletItem } from "./bullets-privacy-section";
import GradientButton from "./gradient-button";
import Image, { StaticImageData } from "next/image";

interface PrivacySectionData {
  id: string;
  heading?: string;
  subHeading?: string;
  description?: string | string[];
  buttonText?: string; 
  subSections?: {
    subHeading?: string;
    subDescription?: string|string[];
    featureText?: string;
    bullets?: { content: string;bulletTitle?: string }[];
    shortDescription?:string;
  }[];
  image?: StaticImageData;
}

interface PrivacyContentProps {
  section:PrivacySectionData;
}

export default function PrivacyContent({ section }: PrivacyContentProps) {
  const { heading, subHeading, description, subSections, buttonText, id, image,  } = section;

  return (

    <section className={`max-w-[1728px] mx-auto w-full ${id ? "p-0" : "px-4 sm:px-8 md:px-16 lg:px-24 py-6 md:py-6"} `}>
      <div className="flex flex-col gap-6 w-full">
        
        {/* Header & Description Block */}
        <div className="flex flex-col gap-4">
          <div id={id} className="flex flex-col gap-2">
            {heading && (
              
              <h2 className="text-heading font-bold text-left text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[1.15] tracking-tight">
                {heading}
              </h2>
            )}
            {subHeading && (
             
              <p className=" text-left font-normal text-subtext text-[16px] lg:text-[18px] leading-[1.6]">
                {subHeading}
              </p>
            )}
          </div>

          {description && (
            <div className="flex flex-col gap-4">
              {Array.isArray(description) ? (
                description.map((text, index) => (
                  <p key={index} className=" text-left font-normal text-subtext text-[16px] lg:text-[18px] leading-[1.6]">
                    {text}
                  </p>
                ))
              ) : (
                <p className=" text-left font-normal text-subtext text-[16px] lg:text-[18px] leading-[1.6]">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Sub-Sections Map */}
        {subSections && subSections.length > 0 && (
          <div className="flex flex-col gap-8">
            {subSections.map((sub, index) => (
              <div key={index} className="flex flex-col gap-4">
                {sub.subHeading && <h2 className="text-heading font-semibold text-left text-[18px] md:text-[26px] lg:text-[34px] leading-[1.2] lg:leading-[1.15] tracking-tight">{sub.subHeading}</h2>}
                {Array.isArray(sub.subDescription) ? (
                sub.subDescription.map((text, index) => (
                  <p key={index} className=" text-left font-normal text-subtext text-[16px] lg:text-[18px] leading-[1.6]">
                    {text}
                  </p>
                ))
              ) : (
                <p className=" text-left font-normal text-subtext text-[16px] lg:text-[18px] leading-[1.6]">
                  {sub.subDescription}
                </p>
              )}
                {sub.featureText && (
                  
                  <p className=" text-left font-medium text-heading text-[18px] md:text-[20px] lg:text-[24px] leading-[1.4]">
                    {sub.featureText}
                  </p>
                )}
                
                
                {sub.bullets  && sub.bullets.length > 0 && (
                  <div className="flex flex-col gap-3 ">
                    {sub.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex justify-start">
                        <BulletItem item={bullet} />
                      </div>
                    ))}
                  </div>
                )}
                {sub.shortDescription && <p className={` text-left ${sub.bullets ? "mt-4" : "mt-0" } font-normal text-subtext text-[16px] lg:text-[18px] leading-[1.6]`}>{sub.shortDescription}</p>}
              </div>
            ))}
          </div>
        )}

{section.image && (
  <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] mt-6 md:mt-8 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
    <Image
      src={section.image}
      alt={heading || "Blog Image"}
      fill
      className="object-cover"
      priority
    />
  </div>
)}

        {/* Prop-Driven Gradient Button */}
        {buttonText && (
          <div className="flex justify-start mt-4">
            <GradientButton text={buttonText} />
          </div>
        )}
      </div>
    </section>
  );
}