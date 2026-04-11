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
const CommitmentStatsSection  = dynamic(() => import("@/components/commitment-stats-section"));
const FutureReadySolutionsSection = dynamic(() => import("@/components/future-ready-solutions-section"));
const SeamlessIntegrationSection = dynamic(() => import("@/components/seamless-integration-section"));
const CTASection              = dynamic(() => import("@/components/cta-section"));
const ITContactSection        = dynamic(() => import("@/components/it-contact-section"));
const FAQSection              = dynamic(() => import("@/components/faq-section"));
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

      {/* 3 — Challenge Cards (escalating demand, cybersecurity, downtime) */}
      <ChallengeCardsSection />

      {/* 4 — Our Solution (split layout with image) */}
      <SolutionSection />

      {/* 5 — Services Overview (3 service pillars) */}
      <CloudServicesSection />
      <WhyPartnerSection />

      {/* 6 — Proactive IT Support (feature list + image) */}
<Divider/>
<CommitmentSection/>

      {/* 7 — Network Infrastructure (4-step process) */}

      {/* 8 — Cybersecurity (dark blue section) */}

      {/* 9 — Cloud Services (capabilities + image) */}

      {/* 10 — IT Strategy & Consulting (4-step process) */}
      <StrategySection />

      {/* 11 — Why Partner With Us */}

      {/* 12 — Commitment Stats (dark blue: 99.9%, 24/7, <1hr) */}

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
