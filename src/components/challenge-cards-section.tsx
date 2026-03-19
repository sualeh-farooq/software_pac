import { Server, ShieldAlert, Clock } from "lucide-react";

const CHALLENGES = [
  {
    icon: <Server className="w-8 h-8 text-[#3a4096]" />,
    title: "Escalating Demand",
    description:
      "The need for robust, secure, and always-available IT infrastructure continues to grow with every passing year, placing enormous pressure on internal teams.",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-[#0a1329]" />,
    title: "Cybersecurity Threats",
    description:
      "The threat landscape evolves daily. Ransomware, phishing, and data breaches can cripple operations and damage hard-earned reputations in an instant.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#3a4096]" />,
    title: "Cost of Downtime",
    description:
      "Downtime, security breaches, and outdated systems lead to significant financial losses, operational disruption, and erosion of customer trust.",
  },
];

const ChallengeCardsSection = () => {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-12" data-aos="fade-up">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#3a4096] mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#25285e] leading-tight tracking-tight mb-4">
            Keeping Pace in a Digital World
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Businesses today face an ever-increasing demand for robust, secure, and efficient IT
            infrastructure. The rapid evolution of technology creates a constant challenge for
            organizations to stay ahead.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHALLENGES.map((c, i) => (
            <div
              key={c.title}
              className="group rounded-2xl bg-white border border-[#E2E8F0] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Top accent line */}
              <div className="h-1 w-12 rounded-full bg-[#3a4096] mb-6 group-hover:w-full transition-all duration-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f5f9] mb-5">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-[#25285e] mb-3">{c.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeCardsSection;
