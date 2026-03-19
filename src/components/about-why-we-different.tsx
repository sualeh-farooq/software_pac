"use client";

import SectionHeading from "./section-heading";
import { StatCardData } from "@/types/home.type";
import { WHY_STATS } from "@/constants/home.constants";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface WhyWeDifferentProps {
  title?: string;
  description?: string;
  stats?: StatCardData[];
  showHeading?: boolean;
  subHeading?: string;
}

const WhyWeDifferent = ({
  title = "Why We're Different",
  description = "We don't sell products. We build funding strategies tailored to your business growth.",
  stats = WHY_STATS,
  showHeading = true,
  subHeading,
}: WhyWeDifferentProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
      <style>{`
        .why-card {
          transition: background 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
        }
        .why-card:hover {
          transform: translateX(6px);
          box-shadow: inset 3px 0 0 #9E1B20;
        }
        .why-card:hover .why-icon-wrap {
                                                                                                                               transform: scale(1.1);
        }
        .why-icon-wrap { transition: background 0.3s ease, transform 0.35s ease; }
        .why-fade { opacity:0; transform:translateX(-20px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.23,1,0.32,1); }
        .why-fade.show { opacity:1; transform:translateX(0); }
        .why-heading-fade { opacity:0; transform:translateY(18px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23,1,0.32,1); }
        .why-heading-fade.show { opacity:1; transform:translateY(0); }
        .why-bg-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <div className="why-bg-pattern absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-transparent" />
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(158,27,32,0.12) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10">

        {(showHeading || subHeading) && (
          <div className={`why-heading-fade mb-16 ${visible ? "show" : ""}`} data-aos="fade-up">
            {showHeading && (
              <div className="max-w-2xl text-center mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                  {title}
                </h2>
                <p className="text-white/70 text-base md:text-lg text-center mx-auto">
                  {description}
                </p>
              </div>
            )}
            {subHeading && (
              <p className="mt-6 text-sm md:text-base text-subtext max-w-3xl leading-relaxed">{subHeading}</p>
            )}
            <div className="mt-10 h-px bg-gradient-to-r from-white/10 via-white/05 to-transparent" />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const renderIcon = () => {
              if (!stat.icon) return null;
              if (typeof stat.icon === "object" && "src" in (stat.icon as object))
                return <Image src={stat.icon as StaticImageData} alt={stat.label} width={20} height={20} className="object-contain brightness-0 invert" />;
              return stat.icon as ReactNode;
            };
  
            return (
              <div
                key={index}
                className={`why-fade why-card ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div
                  className="flex items-center gap-5 rounded-xl p-5 cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-4xl font-black text-[#7A1419] select-none w-10 flex-shrink-0 leading-none text-center">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="w-px h-10 bg-white/08 flex-shrink-0" />

                  {stat.icon && (
                    <div
                      className="why-icon-wrap w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-secondary [&_svg]:w-5 [&_svg]:h-5"
                      style={{ background: "#7A1419" }}
                    >
                      {renderIcon()}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-bold text-white leading-tight mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-xs text-subtext leading-snug">
                      {stat.label}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`why-heading-fade mflex justify-center ${visible ? "show" : ""}`}
          style={{ transitionDelay: `${0.1 + stats.length * 0.08 + 0.1}s` }}
        >
    
        </div>
      </div>
    </section>
  );
};

export default WhyWeDifferent;
