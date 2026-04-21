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
import serviceimage4 from "../../../public/assets/service4.png";
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
Fortifying Your Digital <br/> Assets with Ironclad <br/> Security  </>
  }
  description="We don't just protect, we make your business 'Compliance-ready' Compliant with ISO 27001 standards, we close security gaps and create a strong defensive layer."
/>
<CorePillar
  label="Core Pillars"
  title={
    <>
      The Protection & <br/> Readiness Layer
  
    </>
  }
  services={[
    {
      icon: icon,
      title: "Adaptive Access Control",
      description: "Right access to the right people – We manage roles and permissions in a way that minimizes internal risks and maintains data privacy.",
    },
    {
      icon: icon1,
      title: "Vulnerability Fortification",
      description: "Through patch management and firewall policies, we fix vulnerabilities before they become an attack, keeping your infrastructure safe from all threats.",
    },
        {
      icon: icon2,
      title: "Business Continuity Assurance",
      description: "No more fear of data loss. Our robust backup and instant recovery setup keeps your business operations seamless and consistent under all circumstances.",
    },
        {
      icon: icon3,
      title: "Regulatory Audit Readiness ",
      description: "Gap analysis and event logging according to ISO/IEC 27001 standards so your system is always compliance-ready and meets global standards.",
    },
  ]}
/>
<ProactiveITSupport
  label="Managed Support"
  title={
    <>
      Fortress-Grade Security & <br />  Global Compliance  
      
    </>
  }
  description={
    <>
 Protecting your digital perimeter with advanced threat defense and  ISO- <br/> aligned compliance frameworks.    </>
  }
  includes={[
    "Identity & Access Control",
    "Vulnerability Patch Management",
    "Disaster Recovery & Backups",
    "Firewall Policy Management",
    "Endpoint Security Basics",
  ]}
  image={serviceimage4}

/>
<Divider/>
<BackBone />
<ServiceCommitment/>
<StrategySection />
<GradientFooter/>
    </main>
  );
}
