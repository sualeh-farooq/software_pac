const STEPS = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We evaluate your existing network architecture to identify gaps, bottlenecks, and security vulnerabilities.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our engineers craft a customized network design optimized for performance, security, and future scalability.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We deploy your new infrastructure with minimal disruption, ensuring a smooth transition for your team.",
  },
  {
    number: "04",
    title: "Ongoing Management",
    description:
      "Continuous monitoring, optimization, and support keep your network performing at its best every day.",
  },
];

const NetworkProcessSection = () => {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096image.png] mb-4">
            Network Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#25285e] leading-tight tracking-tight mb-4">
            The Backbone of Your Business
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Your network is the foundation everything else runs on. We design, implement, and manage
            secure, reliable network infrastructures tailored to your specific business needs.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[#E2E8F0] hidden lg:block" />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center gap-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Number circle */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0a1329] border-4 border-[#f1f5f9] shadow-lg">
                <span className="text-xl font-extrabold text-white">{step.number}</span>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full">
                <h3 className="text-lg font-bold text-[#25285e] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkProcessSection;
