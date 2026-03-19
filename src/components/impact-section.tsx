"use client";

import SectionHeading from "./section-heading";
import { StatCardData } from "@/types/home.type";
import { HOME_STATS } from "@/constants/home.constants";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ImpactSectionProps {
  title?: string;
  description?: string;
  stats?: StatCardData[];
  showHeading?: boolean;
  subHeading?: string;
}

const ImpactSection = ({
  title = "Our Impact",
  description = "We help small businesses access the right funding solutions with transparency and expert guidance.",
  stats = HOME_STATS,
  showHeading = true,
  subHeading,
}: ImpactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-24 overflow-hidden">
      <style>{`
        .impact-num-card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 12px 24px rgba(158,27,32,0.1); 
        }
        .impact-num-card:hover .crimson-bar { transform: scaleX(1); }
        .crimson-bar { 
          transform: scaleX(0); 
          transform-origin: left; 
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1); 
        }
        .impact-slide-up { 
          opacity:0; 
          transform:translateY(20px); 
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.23,1,0.32,1); 
        }
        .impact-slide-up.show { 
          opacity:1; 
          transform:translateY(0); 
        }
        .impact-bg-text {
          font-family: 'Display', serif; 
          font-size: clamp(60px,10vw,120px); 
          font-weight:900; 
          color: rgba(158,27,32,0.035); 
          line-height:1; 
          pointer-events:none; 
          user-select:none; 
          white-space:nowrap; 
        }
      `}</style>

      {/* Left crimson strip */}
      <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#9E1B20] via-[#D4434A] to-transparent" />

      <div className="relative mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10">

        {/* Header */}
        {(showHeading || subHeading) && (
          <div className={`impact-slide-up mb-10 ${visible ? "show" : ""}`} style={{ transitionDelay: "0.05s" }} data-aos="fade-up">
            {showHeading && (
              <div className="max-w-2xl text-center mx-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1C1F] mb-4">
                  {title}
                </h2>                <p className="text-black/70 text-base md:text-lg">{description}</p>
              </div>
            )}
            {showHeading && <div className="mt-6 h-px bg-gradient-to-r from-primary/25 via-primary/08 to-transparent" />}
            {subHeading && <p className="mt-4 text-sm text-subtext max-w-3xl leading-relaxed">{subHeading}</p>}
          </div>
        )}

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const renderIcon = () => {
              if (!stat.icon) return null;
              if (typeof stat.icon === "object" && "src" in (stat.icon as object))
                return <Image src={stat.icon as StaticImageData} alt={stat.label} width={18} height={18} className="object-contain" />;
              return stat.icon as ReactNode;
            };

            return (
              <div
                key={index}
                className={`impact-slide-up impact-num-card ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${0.12 + index * 0.08}s` }}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="relative bg-[#F8FAFC] border border-black/[0.06] rounded-xl p-5 h-full overflow-hidden">

                  {/* Hover bottom crimson bar */}
                  <div className="crimson-bar absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#9E1B20] to-[#D4434A]" />

                  {/* Icon */}
                  {stat.icon && (
                    <div className="mb-3 w-8 h-8 rounded-lg bg-[#9E1B20]/[0.08] flex items-center justify-center text-[#9E1B20] [&_svg]:w-4 [&_svg]:h-4">
                      {renderIcon()}
                    </div>
                  )}

                  {/* Value */}
                  <p className="impact-font text-3xl md:text-4xl font-bold text-[#9E1B20] leading-none mb-1">{stat.value}</p>

                  {/* Short line */}
                  <div className="my-2 w-6 h-[1.5px] bg-[#9E1B20]/20" />

                  {/* Label */}
                  <p className="impact-body text-xs md:text-sm text-[#1A1C1F]/55 leading-snug">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
