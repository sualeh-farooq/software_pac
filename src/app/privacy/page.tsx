import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Privacy Policy | SoftwarePac",
};

export default function PrivacyPage() {
  return (
    <ComingSoonPage
      title="Privacy Policy"
      description="Our full privacy policy is being updated. Please contact us directly for privacy-related inquiries."
    />
  );
}
