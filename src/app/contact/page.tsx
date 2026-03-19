import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Contact Us | SoftwarePac",
  description: "Get in touch with our managed IT services team.",
};

export default function ContactPage() {
  return (
    <ComingSoonPage
      title="Contact Page — Coming Soon"
      description="In the meantime, you can reach us through the contact form on our home page."
    />
  );
}
