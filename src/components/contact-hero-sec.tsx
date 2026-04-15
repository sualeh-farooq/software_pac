"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "../../public/assets/hero-bg.png";
import heroBgLeft from "../../public/assets/hero-bg-left.png";

import logo from "../../public/assets/logo.png";
import ellipseImg from "../../public/assets/Ellipse.png"; 
const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SERVICE", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const STATS = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Coverage" },
  { value: "<1HR", label: "Incident Response" },
  { value: "100%", label: "Ownership of Your IT" },
];
const 
ContactHeroSection = ({
  title = (
    <>
 Let’s Power Your Next <br/> Tech Leap    
      Ex
    </>
  ),

  description = "Whether it's scaling your operations or securing your infrastructure—our expert team is just a message away.",
  badge = "              Managed IT & Network Services",
}) => {  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isDrawerOpen]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false);
  };

  return (
    <section className="relative isolate overflow-hidden w-full min-h-screen text-white flex flex-col">

{/* Background image */}
<div className="absolute inset-0 z-0">
  {/* Hero Image */}

  <Image
    src={heroBg}
    alt=""
    aria-hidden
  
  width={730}
    priority
    className="  ml-auto  md:object-contain object-right"
  />


  {/* Ellipse Overlay (Top Right) */}
  <div className="absolute top-0 right-0 pointer-events-none">
    <Image
      src={ellipseImg}
      alt=""
      className="w-[460px] md:w-[620px] opacity-100"
    />
  </div>

  {/* Gradient overlays */}
  
</div>

      {/* Navbar */}
      <div className="relative z-50 w-[92%] xl:w-[85%] mx-auto pt-6 md:pt-10 xl:pt-12">
        <header
          className="mx-auto w-full rounded-full px-4 py-3 md:px-8 md:py-5 xl:px-4 xl:py-4 "  data-aos="fade-up"
     data-aos-duration="3000"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center justify-between gap-6">

            <Link href="/" className="flex-shrink-0 group">
              <Image
                src={logo}
                alt="Software Pac Logo"
                width={100}
                height={80}
                className="h-[28px] md:h-[35px] xl:h-[40px] w-auto object-contain group-hover:brightness-110 transition"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-10 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white text-[16px] font-semibold tracking-[0.07em] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex flex-shrink-0">
              <button
                onClick={scrollToContact}
                className="inline-flex cursor-pointer items-center justify-center text-white font-bold tracking-[0.05em] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] rounded-full px-5 py-5 text-[15px]"
                style={{
                  background: "linear-gradient(135deg, #C477EA 0%, #6F54F4 100%)",
                  border: "0.5px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 10px 30px rgba(111,84,244,0.4)",
                }}
              >
                SCHEDULE A CONSULTATION
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="xl:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    isDrawerOpen
                      ? i === 0 ? "rotate-45 translate-y-[7px]"
                      : i === 1 ? "opacity-0"
                      : "-rotate-45 -translate-y-[7px]"
                      : ""
                  }`}
                />
              ))}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] xl:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0d0d1a] z-[110] transform transition-transform duration-300 ease-in-out xl:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image loading="eager" src={logo} alt="Software Pac Logo" width={120} height={80} className="h-[28px] w-auto object-contain" />
            <button onClick={() => setIsDrawerOpen(false)} className="p-2 rounded-lg hover:bg-white/10 transition">
              <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsDrawerOpen(false)}
                className="py-3 px-3 text-[13.5px] font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors tracking-[0.07em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-white/10">
            <button
              onClick={scrollToContact}
              className="w-full inline-flex items-center justify-center text-white text-[13px] font-bold tracking-[0.05em] rounded-full px-5 py-3 transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #C477EA 0%, #6F54F4 100%)",
                border: "0.5px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 30px rgba(111,84,244,0.4)",
              }}
            >
              SCHEDULE A CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative  z-10 flex flex-1 flex-col items-center justify-center">
<div className="absolute inset-0 z-0 flex items-end">
  <Image
    src={heroBgLeft}
    alt=""
    aria-hidden
    width={730}
    priority
    className="object-contain object-left"
  />
</div>
        <div className="w-full max-w-[1200px] px-6 pt-10 md:pt-16 xl:pt-20 pb-10 md:pb-16 text-center">

          {/* Badge */}
          <div className="mb-4 mt-4 md:mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3 md:px-5 py-1.5 shadow-sm" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
            <span className="text-[10px] md:text-[12px] font-semibold text-white tracking-[0.1rem] uppercase">
              {badge}

            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(28px,5vw,61px)] w-full font-bold leading-[1.15] tracking-[-0.02em] text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
            {title}
          </h1>

          {/* Description */}
          <p className="text-[13px] md:text-[15px] xl:text-[16px] text-[#EBEBEB] leading-relaxed max-w-[700px] mx-auto mb-6 md:mb-8 mt-4 md:mt-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {description}
          </p>

  
        </div>

      </div>

    </section>
  );
};

export default ContactHeroSection;
