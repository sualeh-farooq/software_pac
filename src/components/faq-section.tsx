"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import GradientButton from "./gradient-button";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { Images } from "../../public/Images";
import { FAQItem } from "@/types/home.type";
import { HOME_FAQS } from "@/constants/home.constants";


interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
  ctaText?: string;

}

const FAQSection = ({
  faqs = HOME_FAQS,
  title = "Frequently Asked Questions About Business Funding",
  description = "Clear answers to the most common questions business owners ask before getting funded.",
}: FAQSectionProps) => {

  const [activeId, setActiveId] = useState<number>(faqs[0]?.id);
  const [ansBoxHeight, setAnsBoxHeight] = useState(0);
  const ansRef = useRef<HTMLDivElement>(null);

  const activeFaq = useMemo(() =>
    faqs?.find((faq) => faq.id === activeId) ?? faqs[0],
    [faqs, activeId]);

  const activeIndex = useMemo(() =>
    faqs?.findIndex((faq) => faq.id === activeId),
    [faqs, activeId]);

  const BUTTON_HEIGHT = 92;
  const GAP = 20;

  const totalListHeight = useMemo(() => {
    return faqs?.length * BUTTON_HEIGHT + (faqs.length - 1) * GAP;
  }, [faqs.length]);

  useEffect(() => {
    if (ansRef.current) {
      setAnsBoxHeight(ansRef.current.offsetHeight);
    }
  }, [activeId]);

  const offsetTop = useMemo(() => {
    const desiredTop = activeIndex * (BUTTON_HEIGHT + GAP);
    const maxTop = totalListHeight - ansBoxHeight;
    return Math.max(0, Math.min(desiredTop, maxTop));
  }, [activeIndex, totalListHeight, ansBoxHeight]);

  const handleToggle = (id: number) => {
    setActiveId(id);
  };

  // If no FAQs are provided, return null or a fallback
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10">
        <div className="flex flex-col gap-10 2xl:gap-20 items-center">

          <div className="max-w-[1186px] mx-auto">
            <SectionHeading
              title={title}
              description={description}
            />
          </div>

          {/* Mobile Accordion Layout */}
          <div className="flex flex-col gap-5 lg:hidden w-full">
            {faqs.map((faq) => {
              const isActive = faq.id === activeId;
              return (
                <div key={faq.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleToggle(faq.id)}
                    className={`relative flex items-center gap-2 px-5 py-6 rounded-t-[16px] border transition-all duration-300 text-left shadow-[0_4px_16px_0_rgba(14,139,217,0.10)] w-full ${isActive
                        ? "bg-white border-primary border-b-0 rounded-b-none"
                        : "bg-white border-slate-200 rounded-b-[16px]"
                      }`}
                  >
                    <div className="shrink-0 w-6 h-6">
                      <Image src={Images.ICFAQStars} alt="icon" width={24} height={24} />
                    </div>
                    <p className="text-lg md:text-lg 2xl:text-[22px] leading-tight font-medium text-heading flex-1">
                      {faq.question}
                    </p>
                    <div className={`shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="bg-white border border-primary border-t-0 rounded-b-[16px] px-6 py-6 shadow-[0px_4px_16px_rgba(14,139,217,0.1)]">
                      <p className="text-base 2xl:text-[22px] text-subtext leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative w-full max-w-[1528px]">
            <div className="hidden lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-start relative">

              {/* Left Side - Questions */}
              <div className="flex flex-col gap-5">
                {faqs.map((faq) => {
                  const isActive = faq.id === activeId;
                  return (
                    <div key={faq.id} className="relative">
                      {isActive && (
                        <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-12 h-px z-30">
                          <div className="h-px w-full bg-primary"></div>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => handleToggle(faq.id)}
                        className={`relative flex items-center gap-4 px-6 rounded-[16px] border transition-all duration-300 text-left shadow-[0_4px_16px_0_rgba(14,139,217,0.10)] w-full cursor-pointer h-[92px] ${isActive ? "bg-white border-primary" : "bg-white border-slate-200 hover:border-primary/40"
                          }`}
                      >
                        {/* <div className="shrink-0 w-6 h-6">
                          <Image src={Images.ICFAQStars} alt="check" width={24} height={24} />
                        </div> */}
                        <p className="text-base 2xl:text-[20px] leading-tight font-medium text-heading line-clamp-2">
                          {faq.question}
                        </p>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Right Side - Answer */}
              <div
                className="relative"
                style={{ height: `${totalListHeight}px` }}
              >
                <div
                  ref={ansRef}
                  className="absolute left-0 right-0 transition-all duration-500 ease-in-out"
                  style={{ top: `${offsetTop}px` }}
                >
                  <div className="bg-white border border-primary rounded-[16px] px-8 py-10 w-full shadow-[0px_8px_24px_rgba(14,139,217,0.08)]">
                    <div key={activeId} className="animate-in fade-in duration-500">
                      <p className="text-base md:text-lg 2xl:text-[22px] text-subtext leading-relaxed">
                        {activeFaq?.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

     
        </div>
      </div>
    </section>
  );
};

export default FAQSection;