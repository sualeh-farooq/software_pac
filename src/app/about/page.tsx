import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "About Us | SoftwarePac",
  description: "Learn about our managed IT and network services company.",
};

export default function AboutPage() {
  return (
    <ComingSoonPage
      title="About Us — Coming Soon"
      description="We're building this page to tell you more about our team, mission, and commitment to your technology success."
    />
  );
}
