"use client";

import GradientButton from "./gradient-button";
import { StatCardData } from "@/types/home.type";
import { HOME_STATS } from "@/constants/home.constants";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface HowItWorkProps {
  title?: string;
  description?: string;
  stats?: StatCardData[];
  showHeading?: boolean;
  subHeading?: string;
}

const HowItWork = ({
  title = "How It Works",
  description = "Our simple 3-step process makes funding easy and stress-free.",
  stats = HOME_STATS,
  showHeading = true,
  subHeading,
}: HowItWorkProps) => {
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
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden">
      <style>{`
        .hiw-card { 
          transition: transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease;
        }
        .hiw-card:hover { transform: translateY(-10px); box-shadow: 0 28px 56px rgba(158,27,32,0.12); }
        .hiw-card:hover .hiw-step-num { color: #9E1B20; }
        .hiw-card:hover .hiw-icon-bg { background: #9E1B20 !important; }
        .hiw-step-num { transition: color 0.35s ease; }
        .hiw-icon-bg { transition: background 0.35s ease; }
        .hiw-fade { opacity:0; transform:translateY(24px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.23,1,0.32,1); }
        .hiw-fade.show { opacity:1; transform:translateY(0); }
        .hiw-line-grow { transform: scaleX(0); transform-origin: left; transition: transform 1s cubic-bezier(0.23,1,0.32,1); }
        .hiw-line-grow.show { transform: scaleX(1); }
        .hiw-bg-stripe {
          background: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 40px,
            rgba(158,27,32,0.018) 40px,
            rgba(158,27,32,0.018) 41px
          );
        }
      `}</style>

      <div className="hiw-bg-stripe absolute inset-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-transparent" />

      <div className="relative mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10">

        {(showHeading || subHeading) && (
          <div className={`hiw-fade mb-16 md:mb-20 ${visible ? "show" : ""}`}>
            {showHeading && (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-6xl md:text-5xl lg:text-6xl font-extrabold text-heading mb-4">
                  {title}
                </h2>
                <p className="text-black/70 text-6xl md:text-4xl sm:text-xl text-center mx-auto">
                  {description}
                </p>
              </div>
            )}
            {subHeading && (
              <p className="mt-6 text-base text-subtext max-w-3xl leading-relaxed">{subHeading}</p>
            )}
          </div>
        )}

        <div className="relative">
          {stats.length > 1 && (
            <div className="hidden lg:block absolute top-[52px] left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-[2px] overflow-hidden">
              <div
                className={`hiw-line-grow h-full bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 ${visible ? "show" : ""}`}
                style={{ transitionDelay: "0.4s" }}
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const renderIcon = () => {
                if (!stat.icon) return null;
                if (typeof stat.icon === "object" && "src" in (stat.icon as object))
                  return <Image src={stat.icon as StaticImageData} alt={stat.label} width={24} height={24} className="object-contain brightness-0 invert" />;
                return stat.icon as ReactNode;
              };

              return (
                <div
                  key={index}
                  className={`hiw-fade hiw-card ${visible ? "show" : ""}`}
                  style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
                >
                  <div className="relative bg-light border border-black/[0.06] rounded-2xl p-8 h-full text-center flex flex-col items-center">
                    <div className="relative z-10 mb-6">
                      <div
                        className="hiw-icon-bg w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white [&_svg]:w-6 [&_svg]:h-6"
                        style={{ background: "#1A1C1F" }}
                      >
                        {stat.icon ? renderIcon() : (
                          <span className="text-xl font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "#9E1B20" }}
                      >
                        <span className="text-white text-[9px] font-semibold leading-none">{index + 1}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-2xl font-bold text-heading leading-tight mb-3">
                        {stat.value}
                      </p>

                      <div className="mx-auto mb-3 w-8 h-[2px] bg-primary/30" />

                      <p className="text-sm text-subtext leading-relaxed">
                        {stat.label}
                      </p>
                    </div>

                    <div className="hiw-step-num mt-5 text-6xl font-black text-heading/[0.04] select-none leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

 
      </div>
    </section>
  );
};

export default HowItWork;
