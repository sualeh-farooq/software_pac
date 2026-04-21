import { MonitorCheck, Target, Rocket } from "lucide-react";
import Image from "next/image";
import card_bg from "../../public/assets/card-bg.png";
import icon from "../../public/assets/sec3-icon.png";
import icon1 from "../../public/assets/sec3-icon1.png";
import icon2 from "../../public/assets/sec3-icon2.png";
const SERVICES = [
  {
    icon:<Image src={icon} alt="" width={56} height={56} className="w-14 h-14 object-contain" />,
    title: "Proactive Monitoring",
    description:
      "Continuous oversight of your systems to detect anomalies and resolve issues before they escalate into costly outages.",
  },
  {
    icon:<Image src={icon1} alt="" width={56} height={56} className="w-14 h-14 object-contain" />,
    title: "Strategic Planning",
    description:
      "We align your IT investments with your business goals, building a technology roadmap that supports sustainable growth.",
  },
  {
    icon:<Image src={icon2} alt="" width={56} height={56} className="w-14 h-14 object-contain" />,
    title: "Rapid Response",
    description:
      "When issues arise, our team responds quickly and decisively to minimize disruption and restore normal operations.",
  },
];


function ServiceCard({ svc }: { svc: any }) {
  return (
<div
  className="p-[1px] rounded-2xl bg-gradient-to-l from-white/60 to-white/5 group"
>
  <div
    className="relative rounded-2xl p-4  h-full overflow-hidden border transition-all duration-300 "
    style={{ backgroundColor: "#0d121b" }}
  >
    {/* Card bg image */}
    <div className="absolute right-0 bottom-0 w-80 h-50 sm:w-20 h-80 md:w-full md:h-120 pointer-events-none opacity-70">
      <Image src={card_bg} alt="" fill className="object-cover object-top" />
    </div>

    {/* Grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 100%)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 p-3 md:p-5 flex flex-col gap-2 md:gap-3">

      {/* Icon */}
      <div className="w-7 h-7 md:w-9 md:h-9 text-purple-400 group-hover:text-white duration-300">
        {svc.icon}
      </div>

      {/* Title */}
      <h3
        className="text-[20px] mt-4 md:mt-2  md:text-2xl lg:text-3xl font-bold pt-2 "
        style={{
          background: "linear-gradient(135deg, #C477EA, #6F54F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {svc.title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed flex-1 pt-1">
        {svc.description}
      </p>

    </div>
  </div>
</div>  );
}


const ServicesOverviewSection = () => {
  return (
    <section
      className="py-14 overflow-hidden relative"
style={{
  backgroundColor: "#04020f",
  backgroundImage:
    "radial-gradient(ellipse 1000px 800px at 100% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
}}
    >
      {/* Bottom-right concentric rings */}
      <div className="pointer-events-none absolute bottom-[-140px] right-[-140px] w-[1200px] h-[1200px] " />
      <div className="pointer-events-none absolute bottom-[-400px] right-[-400px] w-[1200px] h-[1200px] " />
      <div className="pointer-events-none absolute bottom-[-20px] right-[-20px] w-[130px] h-[130px] " />

      <div className="mx-auto max-w-[1500px] xl:max-w-[1650px] relative z-10">
        {/* Tag line */}
         <div className="flex items-center justify-center gap-6 mb-5">
          <span className="w-18 h-px bg-white/80"></span>
          <span className="text-[18px] font-semibold"
                style={{
                  background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
            What We Do
          </span>
          <span className="w-18 h-px bg-white/80"></span>
        </div>


        {/* Heading */}
        <h2 className="text-[25px] md:text-5xl lg:text-[52px] text-center font-semibold text-white leading-tight max-w-[1200px] mt-4 md:mt-2 mx-auto">
          Comprehensive IT Management
        </h2>

        {/* Description */}
        <p className="mt-4 md:mt-4 text-[14px] md:text-[18px] text-center max-w-2xl mx-auto text-[#D4D4D4] leading-relaxed">
          End-to-end managed IT and network services designed to optimize your technology operations from the ground up.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-12 px-4 md:px-0 max-w-[1300px] mx-auto">
          {SERVICES.map((svc, i) => (
            <div key={svc.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <ServiceCard svc={svc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
