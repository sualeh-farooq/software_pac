import { Award, ShieldCheck, Focus } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: <Award className="w-7 h-7 text-[#3a4096]" />,
    title: "Deep Expertise",
    description:
      "Our team of certified professionals brings extensive knowledge across a wide range of technologies, industries, and platforms — ensuring you always have the right expertise at hand.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#3a4096]" />,
    title: "Proven Reliability",
    description:
      "We are committed to delivering consistent, high-quality service you can depend on — backed by defined SLAs and a track record of keeping businesses running smoothly.",
  },
  {
    icon: <Focus className="w-7 h-7 text-[#0a1329]" />,
    title: "Your Focus Restored",
    description:
      "With your IT in capable hands, you and your team can redirect energy toward what truly matters — growing your business, serving customers, and pursuing strategic goals.",
  },
];

const WhyPartnerSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] leading-tight tracking-tight mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Choosing the right managed IT partner is one of the most important decisions your
            business will make. Here&apos;s what sets us apart from the rest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={d.title}
              className="group flex flex-col gap-5 rounded-2xl bg-[#F4F7FB] border border-[#E2E8F0] p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] group-hover:bg-[#3a4096] group-hover:border-[#3a4096] transition-all duration-300 shadow-sm">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {d.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#25285e]">{d.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
