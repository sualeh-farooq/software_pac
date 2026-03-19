import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Partner With Us | SoftwarePac",
};

export default function PartnerWithUsPage() {
  return (
    <ComingSoonPage
      title="Partner Program — Coming Soon"
      description="We're building our partner program page. Contact us from the home page to learn about partnership opportunities."
    />
  );
}
