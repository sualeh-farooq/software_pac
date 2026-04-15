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
import serviceimage1 from "../../../public/assets/service1.png";

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
    Building the Backbone of  <br />
      High-Performance <br />
 Enterprises    </>
  }
  description="Secure, scalable, and lightning-fast network architectures that keep your business connected at all times. We optimize everything from design to deployment."
/>
<CorePillar
  label="Core Pillars"
  title={
    <>
      The Build & Configure<br /> Layer
  
    </>
  }
  services={[
    {
      icon: icon,
      title: "Strategic Architecture",
      description: "We design custom lane/van and van structures that scale smoothly with your business growth.",
    },
    {
      icon: icon1,
      title: "Advanced Threat Protection",
      description: "With high-end firewalls and secure VPN setups, we protect your network from every external threat.",
    },
        {
      icon: icon2,
      title: "Seamless Wireless & Switching",
      description: "Enterprise-grade Bi-Fi deployment and optimized switching to give you zero-lag and uninterrupted connectivity.",
    },
        {
      icon: icon3,
      title: "Performance Tuning",
      description: "Through instant monitoring and intelligent routing, we eliminate network bottlenecks and maximize bandwidth.",
    },
  ]}
/>
<ProactiveITSupport
  label="Managed Support"
  title={
    <>
      Protecting Your Most <br /> Valuable Assets
      
    </>
  }
  description={
    <>
  Reactive IT support is a thing of the past. We detect and address <br/> potential issues before they impact your business.
    </>
  }
  
  includes={[
    "LAN/WAN & VLAN Architecture",
    "Advanced Firewall Configuration",
    "Secure VPN Solutions",
    "Enterprise Wi-Fi Deployment",
    "Hardware & Device Setup",
  ]}
  image={serviceimage1}

/>
<Divider/>
<NetworkProcessSection />
<ServiceCommitment/>
<StrategySection />
<GradientFooter/>
    </main>
  );
}
