import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";
import ServiceHeroSection from "@/components/service-hero-sec";
import StrategySection from "@/components/strategy-section";
import Divider from "@/components/divider";
import ServiceCommitment from "@/components/service-commitment";
import CorePillar from "@/components/corepillars";
import ProactiveITSupport from "@/components/ProactiveItSupport";
import GradientFooter from "@/components/gradient-footer";
import BackBone from "@/components/backbone";

export const metadata: Metadata = {
  title: "Our Services | SoftwarePac",
  description: "Explore our full range of managed IT, cybersecurity, cloud, and network services.",
};


export default function ServicesPage() {
  return (
  <main className="min-h-screen bg-[#00050F]">
      {/* 1 — Hero */}
   <ServiceHeroSection/>

<CorePillar/>
<ProactiveITSupport/>
<Divider/>
<BackBone/>
<ServiceCommitment/>
<StrategySection />
<GradientFooter/>
    </main>
  );
}
