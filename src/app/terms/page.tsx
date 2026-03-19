import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Terms of Service | SoftwarePac",
};

export default function TermsPage() {
  return (
    <ComingSoonPage
      title="Terms of Service"
      description="Our terms of service are being updated. Please contact us directly for any legal inquiries."
    />
  );
}
