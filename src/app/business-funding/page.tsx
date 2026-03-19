import { Metadata } from "next";
import ComingSoonPage from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Services | SoftwarePac",
};

export default function BusinessFundingPage() {
  return (
    <ComingSoonPage
      title="This Page Has Moved"
      description="Please visit our home page to learn about our full range of managed IT and network services."
    />
  );
}
