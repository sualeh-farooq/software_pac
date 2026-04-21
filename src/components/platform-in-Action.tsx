"use client";

import Image from "next/image";
import merge_unified from "../../public/assets/merge-unified.png";
import merge_agent from "../../public/assets/merge-agent-handler.png";
import merge_gateway from "../../public/assets/merge-gateway.png";

const DEFAULT_SERVICES = [
  {
    icon: merge_unified,
    title: (
      <>
        Total Infrastructure Visibility
      </>
    ),
    description:
      "Gain a 360-degree view of your entire IT estate. From cloud instances to on-premise hardware, our real-time monitoring dashboard ensures you never miss a beat. Track health metrics, identify bottlenecks, and maintain peak performance with ease.",
    bullet_description: "Feature Highlights:\n- Live Metric Streaming\n- Resource Utilization Alerts\n- Multi-Cloud Support",
  },
  {
    icon: merge_agent,
    title: (
      <>
        Zero-Touch Intelligent Workflows
      </>
    ),
    bullet_description: "Feature Highlights:\n- Conditional Logic Routing \n- API-Driven Integrations\n- One-Click Remediation",
    description:
      "Eliminate manual errors and reclaim your time. Use our drag-and-drop automation builder to handle repetitive service requests, ticket routing, and system updates. Let the platform handle the routine so your team can focus on the mission-critical.",
  },
  {
    icon: merge_gateway,
    title: (
      <>
        Hardened Infrastructure Defense
      </>
    ),
    bullet_description: "Feature Highlights:\n- ISO 27001 Alignment\n- Endpoint Protection Basics\n- Real-Time Compliance Audits",
    description:
      "Security isn't an afterthought—it's built into the core. Implement automated patch management, manage granular access controls, and maintain a constant security baseline. Our proactive shield detects threats before they can impact your business.",
  },
  {
    icon: merge_agent,
    title: (
      <>
        Audit-Ready Strategic Insights
      </>
    ),
    bullet_description: "Feature Highlights:\n- Automated PDF Exporting\n- Historical Trend Analysis\n- Custom KPI Dashboards",
    description:
      "Turn raw data into executive-level intelligence. Generate comprehensive monthly reports that highlight uptime, incident trends, and resource optimization. Be ready for any audit with detailed logs and transparent performance metrics.",
  },
];

function renderBulletDescription(text: string) {
  const lines = text.split("\n");
  const heading = lines[0];
  const bullets = lines.slice(1).filter((l) => l.startsWith("- "));

  return (
    <div className="mt-2">
      <p className="text-[14px] sm:text-[15px] font-semibold text-white/90 mb-2">{heading}</p>
      <ul className="list-disc pl-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-[14px] sm:text-[15px] text-white/80">
            {b.replace(/^- /, "")}
          </li>
        ))}
      </ul>
    </div>
  );
}

const PlatformInAction = ({
  title = (
    <>
      Experience the Platform in Action
    </>
  ),
  description = "Explore our core modules designed to bring speed, clarity, and security to your operations.",
  services = DEFAULT_SERVICES,
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-24"          style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 900px 1200px at 100% 0%, #221a3f 0%, rgba(34,26,63,0.55) 45%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}>
      <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/80 max-w-xl">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5 w-full"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex flex-col rounded-2xl bg-[#11161f] p-5 sm:p-6 md:p-8 w-full h-full">

                {/* Title */}
                <h3
                  className="text-[20px] sm:text-[22px] md:text-[25px] font-bold leading-snug"
                  style={{
                    background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-white/80 pt-3 sm:pt-4">
                  {s.description}
                </p>

                {/* Bullets */}
                {s.bullet_description && renderBulletDescription(s.bullet_description)}

                {/* Image */}
                <div className="flex justify-center mt-4 sm:mt-5">
                  <Image
                    src={s.icon}
                    alt=""
                    width={350}
                    height={350}
                    className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[310px] lg:max-w-[350px] h-auto object-contain"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformInAction;