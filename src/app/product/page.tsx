import { Metadata } from "next";

import GradientFooter from "@/components/gradient-footer";
import ProductHeroSection from "@/components/product-hero-section";
import ProblemSolution from "@/components/problem-solution";
import PlatformInAction from "@/components/platform-in-Action";
import ProductCommitment from "@/components/product-commitment";
import ProductPlan from "@/components/product-plan";
import ProductStrategySection from "@/components/product-strategy-section";

export const metadata: Metadata = {
  title: "Our Services | SoftwarePac",
  description: "Explore our full range of managed IT, cybersecurity, cloud, and network services.",
};


export default function ServicesPage() {
  return (
  <main className="min-h-screen bg-[#00050F]">
      {/* 1 — Hero */}
<ProductHeroSection/>

<ProblemSolution />
<ProductStrategySection/>
<PlatformInAction/>
<ProductPlan />
<ProductCommitment/>
<GradientFooter/>
    </main>
  );
}
