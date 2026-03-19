"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HeroSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isDrawerOpen]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false);
  };

  return (
    <section className="relative z-20 isolate overflow-hidden w-full min-h-screen text-white flex flex-col bg-[#0a1329]">
      {/* Solid dark blue base so hero is always dark (with or without video/image) */}
      <div className="absolute inset-0 z-0 bg-[#0a1329]">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Hero background — modern data center with blue lighting"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Background video — muted autoplay; sits above image so it’s visible */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/assets/videos/banner-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay: reduced opacity so video shows through */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1329]/70 via-[#0a1329]/60 to-[#0a1329]/50" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Navbar ── */}
      <header
        className={`relative z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1329]/95 backdrop-blur-md shadow-lg border-b border-white/10"
            : "border-b border-white/10 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-5 lg:px-10 xl:max-w-[1280px] 2xl:max-w-[1536px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold tracking-wide text-white">
           
            <span className="text-lg font-bold">
              SoftwarePac
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-[15px] transition-colors duration-200 hover:underline underline-offset-4 decoration-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
           
            <button
              onClick={scrollToContact}
              className="rounded-lg bg-[#3a4096] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#2c3071] transition-all duration-200 shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="xl:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isDrawerOpen
                    ? i === 0 ? "rotate-45 translate-y-2" : i === 1 ? "opacity-0" : "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] xl:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0a1329] z-[110] transform transition-transform duration-300 ease-in-out xl:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-white font-bold text-lg">
              SoftwarePac
            </span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsDrawerOpen(false)}
                className="py-3 px-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-white/10 flex flex-col gap-3">
          
            <button
              onClick={scrollToContact}
              className="w-full rounded-lg bg-[#3a4096] text-white px-5 py-3 text-sm font-semibold hover:bg-[#2c3071] transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="800">
            {/* Chip */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-white/80 animate-pulse" />
              <span className="text-sm font-semibold text-white/80 tracking-wide uppercase">
                Managed IT &amp; Network Services
              </span>
            </div>

            {/* Title — all white on dark #0a1329 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
              Empowering Your Business with{" "}
              <span className="text-white">Seamless</span>{" "}
              Technology Solutions
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Your technology should work for you — not the other way around.
              We deliver managed IT and network services that keep your business
              running securely, efficiently, and confidently in an ever-changing
              digital landscape.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <button
                onClick={scrollToContact}
                className="group rounded-lg bg-[#3a4096] text-white px-8 py-4 text-base font-bold hover:bg-[#2c3071] transition-all duration-300 shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
              >
                Schedule a Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M19 12l-6 6M19 12l-6-6" />
                </svg>
              </button>
              <Link
                href="/services"
                className="rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white hover:border-white/70 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Quick Stats */}
            <div
              className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {[
                { value: "99.9%", label: "Uptime Guarantee" },
                { value: "24/7", label: "Support Coverage" },
                { value: "<1hr", label: "Incident Response" },
                { value: "100%", label: "Ownership of Your IT" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</span>
                  <span className="text-sm text-white/60 mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
