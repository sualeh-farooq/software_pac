import { MonitorCheck, Target, Rocket } from "lucide-react";

const SERVICES = [
  {
    icon: <MonitorCheck className="w-8 h-8 text-[#3a4096]" />,
    title: "Proactive Monitoring",
    description:
      "Continuous oversight of your systems to detect anomalies and resolve issues before they escalate into costly outages.",
  },
  {
    icon: <Target className="w-8 h-8 text-[#3a4096]" />,
    title: "Strategic Planning",
    description:
      "We align your IT investments with your business goals, building a technology roadmap that supports sustainable growth.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#0a1329]" />,
    title: "Rapid Response",
    description:
      "When issues arise, our team responds quickly and decisively to minimize disruption and restore normal operations.",
  },
];

const ServicesOverviewSection = () => {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] leading-tight tracking-tight mb-4">
            Comprehensive IT Management
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            We provide end-to-end managed IT and network services designed to optimize your
            technology operations from the ground up.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="group relative flex flex-col gap-5 rounded-2xl bg-white border border-[#E2E8F0] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3a4096] to-[#2c3071] rounded-t-2xl" />

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f5f9] group-hover:bg-[#3a4096] transition-colors duration-300 mt-2">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {svc.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#25285e]">{svc.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">{svc.description}</p>

              {/* Hover arrow */}
              <div className="flex items-center gap-2 text-[#3a4096] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M19 12l-6 6M19 12l-6-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
