import { Metadata } from "next";
import ServiceHeroSection from "@/components/service-hero-sec";
import CorePillar from "@/components/corepillars";
import icon from "../../../public/assets/cybersecurity-icon.png";
import icon1 from "../../../public/assets/cybersecurity-icon1.png";
import icon2 from "../../../public/assets/cybersecurity-icon2.png";
import icon3 from "../../../public/assets/cybersecurity-icon3.png";
import ProactiveITSupport from "@/components/ProactiveItSupport";
import Divider from "@/components/divider";
import NetworkProcessSection from "@/components/network-process-section";
import ServiceCommitment from "@/components/service-commitment";
import StrategySection from "@/components/strategy-section";
import GradientFooter from "@/components/gradient-footer";
import serviceimage2 from "../../../public/assets/service2.png";
export const metadata: Metadata = {
  title: "Our Services | SoftwarePac",
  description: "Explore our full range of managed IT, cybersecurity, cloud, and network services.",
};


export default function ServicesPage() {
  return (
  <main className="min-h-screen bg-[#00050F]">
      {/* 1 — Hero */}
<ServiceHeroSection
  title={
    <>
Proactive Monitoring. <br/> Instant Response. Absolute <br/> Peace of Mind.   </>
  }
  description="We monitor your infrastructure around the clock to resolve issues before they arise. Run your business uninterrupted with 24/7 vigilance and expert incident response."
/>
<CorePillar
  label="Core Pillars"
  title={
    <>
      The Operate & Respond<br /> Layer
  
    </>
  }
  services={[
    {
      icon: icon,
      title: "Continuous Monitoring",
      description: "We monitor the pulse of your systems at all times—whether business hours or 24/7—so that downtime is never a question.",
    },
    {
      icon: icon1,
      title: "Rapid Incident Response",
      description: "Level 1 support that responds immediately to every alert. We troubleshoot issues and handle expert issues as needed.",
    },
        {
      icon: icon2,
      title: "Predictive Health Checks",
      description: "We maintain system health through latency tracking and regular audits so that performance never drops.",
    },
        {
      icon: icon3,
      title: "Actionable Intelligence",
      description: "Monthly reports and transparent ticket tracking give you complete visibility into your infrastructure's performance and uptime.",
    },
  ]}
/>
<ProactiveITSupport
  label="Managed Support"
  title={
    <>
      End-to-End NOC  <br /> Operations & Vigilance
      
    </>
  }
  description={
    <>
 Ensuring 24/7 infrastructure health with proactive monitoring and rapid technical response.    </>
  }
  includes={[
    "Full-Stack Infrastructure Oversight",
    "Intelligent Incident Routing",
    "First-Response Troubleshooting",
    "Proactive Health Governance",
    "Experience & Speed Optimization",
  ]}
    image={serviceimage2}

/>
<Divider/>
<NetworkProcessSection />
<ServiceCommitment/>
<StrategySection />
<GradientFooter/>
    </main>
  );
}
