import { Metadata } from "next";
import ServiceHeroSection from "@/components/service-hero-sec";
import CorePillar from "@/components/corepillars";
import icon from "../../../public/assets/cybersecurity-icon.png";
import icon1 from "../../../public/assets/cybersecurity-icon1.png";
import icon2 from "../../../public/assets/cybersecurity-icon2.png";
import icon3 from "../../../public/assets/cybersecurity-icon3.png";
import ProactiveITSupport from "@/components/ProactiveItSupport";
import Divider from "@/components/divider";
import ServiceCommitment from "@/components/service-commitment";
import StrategySection from "@/components/strategy-section";
import GradientFooter from "@/components/gradient-footer";
import serviceimage5 from "../../../public/assets/service5.png";
import BackBone from "@/components/backbone";

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
Scaling Intelligence with  <br/>  AI-Enhanced Operations  </>
  }
  description="We don't just protect, we make your business 'Compliance-ready' Compliant with ISO 27001 standards, we close security gaps and create a strong defensive layer."
/>
<CorePillar
  label="Core Pillars"
  title={
    <>
      The Efficiency<br /> Layer
  
    </>
  }
  services={[
    {
      icon: icon,
      title: "Automated Service Desk",
      description: "Data-based ticket classification that analyzes each issue and routes it to the right expert in seconds to reduce resolution time..",
    },
    {
      icon: icon1,
      title: "24/7 Smart Assistance",
      description: "Intelligent chatbots that instantly solve common technical queries, giving your users instant solutions without human intervention.",
    },
        {
      icon: icon2,
      title: "Noise Reduction & Correlation",
      description: "Identify relevant alerts from thousands of alerts and eliminate redundant notifications so your team can focus only on critical tasks.",
    },
        {
      icon: icon3,
      title: "Self-Learning Knowledge Base",
      description: "Learn from every resolved issue and automatically update documentation for the future, so your troubleshooting data is always up-to-date.",
    },
  ]}
/>
<ProactiveITSupport
  label="Managed Support"
  title={
    <>
    AI-Driven Operational  <br /> Intelligence 
      
    </>
  }
  description={
    <>
 Leveraging realistic AI automation to eliminate manual bottlenecks, <br/> reduce response times, and smarter troubleshooting.   </>
  }
  includes={[
    "AI Ticket Classification & Routing",
    "AI Support Assistant (Chatbot)",
    "Knowledge Base Auto-Generation",
    "Smart Alert Correlation",
    "AI-Assisted Troubleshooting",
  ]}
  image={serviceimage5}
/>
<Divider/>
<BackBone />
<ServiceCommitment/>
<StrategySection />
<GradientFooter/>
    </main>
  );
}
