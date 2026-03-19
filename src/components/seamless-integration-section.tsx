"use client";

import { Search, Cog, LineChart, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: <Search className="h-7 w-7 text-[#25285e]" />,
    label: "Assess",
    detail: "Audit current systems and risk points",
  },
  {
    icon: <Cog className="h-7 w-7 text-[#25285e]" />,
    label: "Deploy",
    detail: "Integrate tooling with minimal disruption",
  },
  {
    icon: <LineChart className="h-7 w-7 text-[#25285e]" />,
    label: "Optimize",
    detail: "Improve uptime, performance, and resilience",
  },
];

const SeamlessIntegrationSection = () => {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div className="rounded-3xl  p-8 md:p-10 lg:p-12 " data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
                Seamless Operations
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#25285e] leading-tight tracking-tight mb-5">
                Seamless Integration, Maximum Uptime
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                We understand that technology disruptions cost your business real money. That&apos;s why
                everything we do is engineered for seamless integration with your existing systems and
                designed to maximize the availability of your critical operations.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.label}
                    className="relative rounded-2xl border border-[#D9E1EF] bg-[#F8FAFC] p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                  >
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-7 w-7 items-center justify-center rounded-full border border-[#CBD5E1] bg-white">
                        <ArrowRight className="h-4 w-4 text-[#4B56C0]" />
                      </div>
                    )}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white">
                        {step.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#25285e] mb-1.5">{step.label}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4">
            <p className="text-base text-[#64748B] leading-relaxed">
              Our integration methodology ensures that onboarding with us requires minimal effort from
              your team while delivering immediate, tangible improvements to IT reliability and
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegrationSection;
