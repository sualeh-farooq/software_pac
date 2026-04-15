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
import serviceimage3 from "../../../public/assets/service3.png";

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
Complete Visibility. Total <br/>  Control. No More Blind <br/>  Spots.   </>
  }
  description="We bring your entire IT infrastructure and assets into a single pane of glass. From real-time data to asset tracking, we ensure the visibility of every hardware and software component."
/>
<CorePillar
  label="Core Pillars"
  title={
    <>
      The Data & Visibility<br /> Layer
  
    </>
  }
  services={[
    {
      icon: icon,
      title: "System-Wide Oversight",
      description: "24/7 tracking of hardware, software, and network metrics. We monitor your entire ecosystem to ensure peak performance.",
    },
    {
      icon: icon1,
      title: "Intelligent Inventory Tracking",
      description: "From inventory to usage tracking—you'll know the exact location, status, and health of every piece of equipment. No more lost assets.",
    },
        {
      icon: icon2,
      title: "Smart Threshold Alerting",
      description: "Eliminate alert fatigue. We set customized thresholds that only trigger when action is truly required.",
    },
        {
      icon: icon3,
      title: " Strategic Business Reporting",
      description: "Turn raw data into actionable insights. Our dashboards show you the stats you need to make business decisions, in real-time.",
    },
  ]}
/>
<ProactiveITSupport
  label="Managed Support"
  title={
    <>
    Enterprise Asset <br /> Intelligence & Monitoring  
      
    </>
  }
  description={
    <>
Gain 360-degree visibility across your entire IT landscape with real-time <br/> data tracking and precision reporting.  </>
  }
  includes={[
    "Precision System Monitoring",
    "Smart Asset Inventory",
    "Real-Time Asset Tracking",
    "Intelligent Alert Configuration",
    "Downtime Analysis",
  ]}
      image={serviceimage3}

/>
<Divider/>
<NetworkProcessSection />
<ServiceCommitment/>
<StrategySection />
<GradientFooter/>
    </main>
  );
}
