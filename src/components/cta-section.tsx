"use client";

import { Phone, ClipboardList, Handshake } from "lucide-react";

const CTA_CARDS = [
  {
    icon: <Phone className="w-7 h-7 text-[#3a4096]" />,
    title: "Schedule a Consultation",
    description:
      "Talk to one of our experts and discover how we can transform your IT environment.",
    action: "Book Now",
    id: "contact",
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-[#0a1329]" />,
    title: "Request an Assessment",
    description:
      "Get a comprehensive review of your current IT infrastructure at no cost or obligation.",
    action: "Get Started",
    id: "contact",
  },
  {
    icon: <Handshake className="w-7 h-7 text-[#3a4096]" />,
    title: "Become a Partner",
    description:
      "Join the growing number of businesses that trust us with their most critical technology.",
    action: "Learn More",
    id: "contact",
  },
];

const CTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Radial background tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f1f5f9] rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B] leading-tight tracking-tight mb-5">
            Let&apos;s Build a Stronger, More Resilient Business Together.
          </h2>
          <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
            Your business deserves technology that works tirelessly behind the scenes. The question
            isn&apos;t whether you can afford managed IT services — it&apos;s whether you can afford not to
            have them.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CTA_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="group flex flex-col gap-5 rounded-2xl border border-[#E2E8F0] bg-[#F4F7FB] p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f5f9] group-hover:bg-[#3a4096] transition-colors duration-300">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#25285e]">{card.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">{card.description}</p>
              <button
                onClick={() => scrollTo(card.id)}
                className="group/btn flex items-center gap-2 text-sm font-bold text-[#3a4096] hover:gap-3 transition-all duration-200"
              >
                {card.action}
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M19 12l-6 6M19 12l-6-6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
