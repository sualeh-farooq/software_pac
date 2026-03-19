"use client";
"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Proactive management — issues resolved before they impact your business",
  "Strategic guidance aligned with your long-term goals",
  "Round-the-clock support from certified professionals",
  "Full ownership of your IT environment from day one",
];

const SolutionSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden" data-aos="fade-right">
            <div className="h-[340px] md:h-[460px] lg:h-[560px] bg-[#f1f5f9] rounded-2xl flex items-center justify-center relative">
              <Image
                src="/assets/tech_team.png"
                alt="Professional IT team collaborating around digital dashboard — add your team collaboration photo here"
                fill
                className="object-cover rounded-2xl"
                // onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              
            </div>
            {/* Floating stat badge */}
            {/* <div className="absolute -bottom-4 -right-4 bg-[#0a1329] text-white rounded-2xl px-5 py-4 shadow-xl hidden md:block">
              <p className="text-2xl font-extrabold text-[#25285e]">99.9%</p>
              <p className="text-xs text-white/70">Uptime Guarantee</p>
            </div> */}
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#25285e]">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#25285e] leading-tight tracking-tight">
              Your Dedicated Managed IT &amp; Network Services Partner
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              We step in as your trusted technology partner — taking full ownership of your IT
              environment so you can focus on what you do best. Our team becomes an extension of
              your business, delivering proactive management, strategic guidance, and
              round-the-clock support.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-[#3a4096] pl-5 py-2 bg-[#f1f5f9] rounded-r-xl">
              <p className="text-base font-semibold text-[#25285e] italic leading-relaxed">
                &ldquo;We don&apos;t just fix problems — we prevent them. Our proactive approach means
                issues are resolved before they ever impact your business operations.&rdquo;
              </p>
            </blockquote>

            {/* Benefit List */}
            <ul className="flex flex-col gap-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25285e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#64748B] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
