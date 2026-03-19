"use client";
import Image, { StaticImageData } from "next/image";
import SectionHeading from "./section-heading";
import ContactForm from "@/components/contact-form";

interface ContactSectionProps {
  title?: string;
  description?: string;
  titleClassName?: string;
  lineClassName?: string;
  submitButtonText?: string;
}

const ContactSection = ({
  title = "Our friendly team would love to hear from you.",
  description = "Let’s Get You Funded",
  titleClassName,
  lineClassName,
  submitButtonText = "Submit",
}: ContactSectionProps) => {
  return (
    <section id="contact" className="bg-charcoal py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Subtle background gradient with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10">
        <div className="max-w-[1186px] mx-auto mb-16 md:mb-20" data-aos="fade-up">
          <SectionHeading
            lineClassName={lineClassName}
            titleClassName={titleClassName}
            title={title}
            description={description}
            text="Clear answers to the questions founders and tech leaders ask most"
            isWhiteText={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-10 lg:pr-8" data-aos="fade-right">
            {/* Main Heading Card */}
            <div className="space-y-5">
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                See What You Qualify For - Without the Stress
              </h3>
              <p className="text-base md:text-lg text-subtext leading-relaxed max-w-xl opacity-95">
                Finding the right business loan shouldn't feel like a mystery. We'll help you quickly identify what you qualify for and match you with the program that best fits your needs without impacting your credit.
              </p>
            </div>

            {/* Requirements Card */}
            <div className="bg-deep-black/40 backdrop-blur-sm rounded-[20px] border border-primary/20 p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">✓</span>
                Minimum Requirements
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-sm">•</span>
                  </span>
                  <span className="text-base text-subtext leading-relaxed">Business must operate in the U.S.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-sm">•</span>
                  </span>
                  <span className="text-base text-subtext leading-relaxed">Business bank account required for most programs</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-sm">•</span>
                  </span>
                  <span className="text-base text-subtext leading-relaxed">No open bankruptcies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col" data-aos="fade-left">
            <div className="bg-deep-black/40 backdrop-blur-sm rounded-[20px] border border-primary/20 p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/40">
              <div className="mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Started Today</h4>
                <p className="text-sm md:text-base text-subtext">Fill out the form below and our team will guide you through the process.</p>
              </div>
              <div className="border-t border-primary/20 pt-8">
                <ContactForm submitButtonText={submitButtonText} gridCols="grid-cols-1 md:grid-cols-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;