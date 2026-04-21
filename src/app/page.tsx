import dynamic from "next/dynamic";
import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import { metaTitle, metaDescription } from "@/constants/metadata.constants";
import { IT_FAQS } from "@/constants/it-services.constants";
import Divider from "@/components/divider";
import CommitmentSection from "@/components/cybersecurity-section";

const ChallengesIntroSection = dynamic(() => import("@/components/challenges-intro-section"));
const ChallengeCardsSection   = dynamic(() => import("@/components/challenge-cards-section"));
const SolutionSection         = dynamic(() => import("@/components/solution-section"));
const ServicesOverviewSection = dynamic(() => import("@/components/services-overview-section"));
const ProactiveSupportSection = dynamic(() => import("@/components/proactive-support-section"));
const NetworkProcessSection   = dynamic(() => import("@/components/network-process-section"));
const CloudServicesSection    = dynamic(() => import("@/components/cloud-services-section"));
const StrategySection         = dynamic(() => import("@/components/strategy-section"));
const WhyPartnerSection       = dynamic(() => import("@/components/why-partner-section"));

const FooterSection           = dynamic(() => import("@/components/footer-section"));

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#00050F]">
      {/* 1 — Hero */}
      
      <HeroSection />

      {/* 2 — Challenges Intro (3 pain points with icons) */}
      <ChallengesIntroSection />
      <ServicesOverviewSection />
      <ProactiveSupportSection />
      <Divider/>
            <NetworkProcessSection />

      <ChallengeCardsSection />

      <SolutionSection />

      <CloudServicesSection />
      <WhyPartnerSection />

<Divider/>
<CommitmentSection/>


      <StrategySection />


      <FooterSection />
    </main>
  );
}
