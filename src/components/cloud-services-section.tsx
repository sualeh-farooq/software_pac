"use client";

const CARDS = [
  {
    title: "Discovery",
    description:
      "Deep-dive assessment of your current technology environment and business goals.",
  },
  {
    title: "Strategy Design",
    description:
      "Building a tailored IT roadmap that prioritizes initiatives for maximum business impact.",
  },
  {
    title: "Implementation",
    description:
      "Guided execution of strategic projects with expert oversight and change management.",
  },
  {
    title: "Measure & Optimize",
    description:
      "Tracking outcomes and continuously refining the strategy to ensure ongoing ROI.",
  },
];

const CloudServicesSection = () => {
  return (
    <section className="py-16  md:py-24"
      style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 900px 400px at 0% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}>      <div className="mx-auto max-w-[1200px] xl:max-w-[1450px] px-6 lg:px-10">

        {/* Top: Centered heading block */}
        <div className="flex flex-col items-center text-center gap-5 mb-14" data-aos="fade-up">

          {/* Label with lines */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white" />
            <span
              className="text-[15px] font-semibold tracking-widest"
              style={{
                background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IT Strategy &amp; Consulting
            </span>
            <span className="h-px w-12 bg-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight max-w-xl">
            Aligning Technology with Your Goals
          </h2>

          {/* Body */}
          <p className="text-[16px] text-[#FFFF]/80 leading-relaxed max-w-lg">
            Technology is only valuable when it drives business outcomes. We partner with
            you to develop a strategic IT roadmap.
          </p>
        </div>

        {/* 2x2 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {CARDS.map((card, i) => (
    <div
      key={card.title}
      className="rounded-2xl p-[1px] bg-gradient-to-l  from-white/60 to-white/5"
      data-aos="fade-up"
      data-aos-delay={i * 80}
    >
      <div className="rounded-2xl bg-[#11161f] h-full px-6 md:px-18 py-8">
        
        <h3
          className="text-2xl font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #C477EA, #6F54F4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {card.title}
        </h3>

        <p className="text-[15px] text-white leading-relaxed">
          {card.description}
        </p>

      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CloudServicesSection;