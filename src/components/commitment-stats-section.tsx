"use client";

import { useEffect, useRef, useState } from "react";
import { COMMITMENT_STATS } from "@/constants/it-services.constants";

const CommitmentStatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a1329] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background textures */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0a1329] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-white/80 mb-4">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Your Success is Our Priority
          </h2>
          <blockquote className="text-lg md:text-xl text-white/70 italic leading-relaxed border-l-4 border-[#3a4096] pl-6 text-left mx-auto max-w-2xl">
            &ldquo;We don&apos;t just manage your technology. We take ownership of it — treating
            your systems, your data, and your uptime as if they were our own.&rdquo;
          </blockquote>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMITMENT_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`group rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10 hover:border-[#3a4096]/40 transition-all duration-300 ${
                visible ? "count-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex h-14 w-14 items-center text-white justify-center rounded-xl bg-[#3a4096]/50 group-hover:bg-[#3a4096]/40 transition-colors mx-auto mb-5">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-base font-bold text-white mb-2">{stat.label}</p>
              <p className="text-sm text-white/55 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentStatsSection;
