"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const INCLUDES = [
  "Real-time performance monitoring and alerting",
  "Scheduled system maintenance and health checks",
  "Automated security patches and updates",
  "Helpdesk support for your entire team",
  "Detailed reporting and IT health dashboards",
];

const ProactiveSupportSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096]">
              Proactive IT Support
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
              Preventing Problems Before They Start
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Reactive IT support is a thing of the past. We implement robust monitoring systems
              that detect and address potential issues before they impact your business — saving
              you time, money, and stress.
            </p>

            {/* Always-on badge */}
            <div className="flex items-center gap-4 rounded-xl bg-[#f1f5f9] border border-[#3a4096]/20 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#3a4096]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  <polyline points="12 6 12 12 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1329]">Always-On Monitoring</p>
                <p className="text-xs text-[#64748B]">24 hours a day · 7 days a week · 365 days a year</p>
              </div>
            </div>

            {/* Includes List */}
            <div>
              <p className="text-sm font-bold text-[#25285e] uppercase tracking-wide mb-4">What&apos;s Included</p>
              <ul className="flex flex-col gap-3">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25285e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#64748B] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative" data-aos="fade-left">
            <div className="h-[340px] md:h-[460px] lg:h-[560px] rounded-2xl bg-[#f1f5f9] relative overflow-hidden">
              <Image
                src="/assets/it_support.webp"
                alt="IT monitoring dashboard showing real-time system health metrics — add your dashboard screenshot here"
                fill
                className="object-cover rounded-2xl"
                // onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              {/* Fallback */}
              
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#3a4096]/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#3B82F6]/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProactiveSupportSection;
