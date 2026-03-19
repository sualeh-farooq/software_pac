import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Our Services | SoftwarePac",
  description: "Explore our full range of managed IT, cybersecurity, cloud, and network services.",
};

export default function ServicesPage() {
  return (
    <ComingSoonPage
      title="Services Page — Coming Soon"
      description="We're building detailed pages for each of our services. In the meantime, explore everything we offer on our home page."
    />
  );
}
