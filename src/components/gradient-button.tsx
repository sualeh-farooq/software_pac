"use client";
import React from "react";

interface GradientButtonProps {
  text?: string;
  isFullWidth?: boolean;
  btnClass?: string;
  isOutlinedButton?: boolean;
  buttonStyles?: string;
  btnTextClassName?: string;
  scrollToContact?: boolean;
  href?: string;
}

const GradientButton = ({
  text = "Get Started",
  isOutlinedButton = false,
  isFullWidth = false,
  btnClass = "w-max",
  buttonStyles,
  scrollToContact = false,
  href,
}: GradientButtonProps) => {
  const handleClick = () => {
    if (scrollToContact) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    if (href) {
      window.location.href = href;
    }
  };

  const baseClass = buttonStyles
    ? buttonStyles
    : isOutlinedButton
    ? "bg-transparent border-2 border-white hover:bg-white hover:text-[#25285e]"
    : "bg-[#3a4096] hover:bg-[#2c3071]";

  return (
    <button
      onClick={handleClick}
      className={`group shrink-0 ${baseClass} text-white rounded-lg px-6 py-3 flex items-center gap-2.5 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer font-semibold ${
        isFullWidth ? "w-full justify-center" : btnClass
      }`}
    >
      <span className="text-sm md:text-base whitespace-nowrap uppercase tracking-wide">
        {text}
      </span>
      <svg
        className="flex-none transform transition-transform duration-300 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19 12H5M19 12L13 18M19 12L13 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default GradientButton;
