const STEPS = [
  {
    number: "1",
    title: "Discovery",
    description: "Deep-dive assessment of your current technology environment and business goals.",
  },
  {
    number: "2",
    title: "Strategy Design",
    description: "Building a tailored IT roadmap that prioritizes initiatives for maximum business impact.",
  },
  {
    number: "3",
    title: "Implementation",
    description: "Guided execution of strategic projects with expert oversight and change management.",
  },
  {
    number: "4",
    title: "Measure & Optimize",
    description: "Tracking outcomes and continuously refining the strategy to ensure ongoing ROI.",
  },
];

const StrategySection = () => {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">
          <div data-aos="fade-right">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
              IT Strategy &amp; Consulting
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#25285e] leading-tight tracking-tight">
              Aligning Technology with Your Goals
            </h2>
          </div>
          <div data-aos="fade-left">
            <p className="text-base text-[#64748B] leading-relaxed">
              Technology is only valuable when it drives business outcomes. We partner with you to
              develop a strategic IT roadmap that directly supports your objectives, reduces risk,
              and maximizes return on every technology investment.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-[#3a4096]/20 hidden lg:block" />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center gap-4 group"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {/* Number bubble */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-[#3a4096] shadow-md group-hover:bg-[#3a4096] transition-colors duration-300">
                <span className="text-xl font-extrabold text-[#0a1329] group-hover:text-white transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full">
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

export default StrategySection;
