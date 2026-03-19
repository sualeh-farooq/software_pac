"use client";

import Image from "next/image";
import { Lock, Expand, Rocket } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <Lock className="h-5 w-5 text-[#3a4096]" />,
    title: "Security-First Design",
    description:
      "Every solution we architect begins with security as a foundational principle, not an afterthought.",
  },
  {
    icon: <Expand className="h-5 w-5 text-[#3a4096]" />,
    title: "Built to Scale",
    description:
      "Infrastructure designed to expand seamlessly as your team, data, and ambitions grow.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-[#3a4096]" />,
    title: "Future-Ready",
    description:
      "We stay ahead of technology trends so your business is always positioned to leverage what&apos;s next.",
  },
];

const FutureReadySolutionsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center rounded-3xl  bg-white p-6 md:p-8 lg:p-10 ">
          <div data-aos="fade-right">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
              Future-Ready Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#25285e] leading-tight tracking-tight mb-5">
              Secure, Scalable, and Future-Ready IT Solutions
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed mb-8">
              The technology decisions you make today determine your competitive position tomorrow.
              We build IT environments that don&apos;t just meet current needs — they&apos;re architected to
              grow with you, adapt to new technologies, and stand firm against emerging threats.
            </p>

            <div className="space-y-3">
              {HIGHLIGHTS.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#D8E0EF] bg-[#F4F7FB] p-4 md:p-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 90}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <h3 className="text-md md:text-md font-bold text-[#25285e] mb-2">{item.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[460px] lg:min-h-[560px] overflow-hidden rounded-2xl border border-[#E2E8F0]" data-aos="fade-left">
            <Image
              src="/assets/future_proof.jpg"
              alt="Business technology workspace with digital network overlays"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1329]/20 via-transparent to-[#0a1329]/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureReadySolutionsSection;
