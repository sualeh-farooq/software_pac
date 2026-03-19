"use client";

import Image from "next/image";
import { CheckCircle2, Cloud, Sparkles } from "lucide-react";

const CAPABILITIES = [
  "Cloud migration planning and execution",
  "Hybrid and multi-cloud architecture design",
  "Cloud security and compliance management",
  "Cost optimization and right-sizing",
  "Ongoing cloud infrastructure management",
  "Disaster recovery and backup solutions",
];

const CloudServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div
          className="relative rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] p-6 md:p-8 lg:p-10 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)]"
          data-aos="fade-up"
        >
          <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-[#3a4096]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#14B8A6]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096]">
                Cloud Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
                Scalability and Flexibility for Growth
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                The cloud has transformed how businesses operate. We help you harness the full power of
                cloud computing — delivering enhanced flexibility, scalability, and cost-efficiency that
                positions your business for sustainable growth.
              </p>

              <div>
                <p className="text-sm font-bold text-[#25285e] uppercase tracking-wide mb-4">Our Cloud Capabilities</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAPABILITIES.map((item, i) => (
                    <li
                      key={item}
                      className="group rounded-xl border border-[#E2E8F0] bg-white/85 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={i * 60}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0a1329]/5 group-hover:bg-[#0a1329] transition-colors duration-300">
                          <CheckCircle2 className="h-4 w-4 text-[#0a1329] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-sm text-[#64748B] leading-relaxed">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4" data-aos="fade-left">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm min-h-[250px] md:min-h-[320px]">
                <Image
                  src="/assets/cloud_computing.webp"
                  alt="Cloud computing visualization with connected nodes — add your cloud architecture illustration here"
                  fill
                  className="object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1329]/70 via-[#0a1329]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Cloud className="h-4 w-4" />
                    <p className="text-sm font-semibold">Elastic Infrastructure</p>
                  </div>
                  <p className="mt-1 text-xs text-white/80">Scale resources in real time with better control and resilience.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#3a4096]/20 bg-[#f1f5f9] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-[#3a4096]" />
                  <p className="text-sm font-bold text-[#25285e]">Why Cloud?</p>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Cloud solutions reduce capital expenditure, improve collaboration, and allow your
                  business to scale resources up or down instantly — adapting to market demands with
                  agility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudServicesSection;
