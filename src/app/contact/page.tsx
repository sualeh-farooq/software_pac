import ContactHeroSection from "@/components/contact-hero-sec";
import ContactInfo from "@/components/contact-info";
import Divider from "@/components/divider";
import GetInTouch from "@/components/get-in-touch";
import GradientFooter from "@/components/gradient-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SoftwarePac",
  description: "Get in touch with our managed IT services team.",
};

export default function ContactPage() {
  return (
<>
<ContactHeroSection/>
<Divider/>
<GetInTouch/>
<ContactInfo/>
<GradientFooter/>
</>
  );
}
