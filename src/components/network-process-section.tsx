"use client";
import Image from "next/image";
import backbone_dashes from "../../public/assets/backbone_dashes.png"
const STEPS = [
  {
    number: "01",
    title: "Assessment",
    description:
      "Evaluate existing architecture to identify gaps, bottlenecks, and security vulnerabilities.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Engineers craft a customized network design optimized for performance, security, and scalability.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Deploy new infrastructure with minimal disruption, ensuring a smooth transition for your team.",
  },
  {
    number: "04",
    title: "Management",
    description:
      "Continuous monitoring, optimization, and support keep your network performing at its best.",
  },
];

const NetworkProcessSection = () => {
  return (
    <section className=" py-16 md:py-24 " id="networkinfrastructure"
          style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 900px 900px at 0% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}>
      <div className="mx-autopx] px-6 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-5 mb-16" data-aos="fade-up">
          {/* Label with lines */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white" />
            <span
              className="text-[14px] md:text-[15px] font-semibold tracking-widest"
              style={{
                background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Network Infrastructure
            </span>
            <span className="h-px w-12 bg-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            The Backbone of Your Business
          </h2>

          <p className="text-[15px] text-white leading-relaxed max-w-xl mb-2 md:mb-10">
            Your network is the foundation everything else runs on. We design, implement,
            and manage secure, reliable infrastructures tailored to your needs.
          </p>
        </div>

        {/* Steps */}
        <div className="relative ">


          {/* Background dashes */}
          <div>
            <Image src={backbone_dashes} alt="" className="hidden md:block absolute -top-20 left-1/2 w-[70%] transform -translate-x-1/2 pointer-events-none" />
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative max-w-[1380px] z-10 mx-auto px-5">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center mt-4 h-full"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Number circle */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full mb-[-28px] z-10 relative"
                  style={{
                    background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                  }}
                >
                  <span className="text-base font-extrabold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Gradient Border Wrapper */}
                <div className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5 h-full">

                  {/* Card */}
                  <div className="w-full rounded-2xl bg-[#0e1220] pt-10  pb-6 px-7 text-center h-full flex flex-col justify-center">

                    <h3
                      className="text-[28px] font-bold mb-3"
                      style={{
                        background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[16px] text-[#EBEBEB] ">
                      {step.description}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NetworkProcessSection;