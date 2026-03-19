"use client";

import Image from "next/image";
import { ShieldCheck, Eye, Lock, FileText } from "lucide-react";

const SECURITY_PILLARS = [
  {
    icon: <Eye className="w-6 h-6 text-white" />,
    title: "Threat Detection",
    description:
      "Advanced tools that identify suspicious activity and potential breaches in real time.",
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: "Prevention & Hardening",
    description:
      "Firewalls, endpoint protection, and security policies that block threats before they penetrate your systems.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Rapid Incident Response",
    description:
      "When an attack occurs, our team mobilizes immediately to contain, investigate, and remediate the threat.",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Compliance & Reporting",
    description:
      "We help you meet industry regulations and provide clear documentation for audits and governance requirements.",
  },
];

const CybersecuritySection = () => {
  return (
    <section className="bg-[#0a1329] py-16 md:py-24 relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-55 pointer-events-none"
        aria-hidden
      >
        <source src="/assets/videos/clients-banner.mp4" type="video/mp4" />
      </video>
      {/* Navy tint overlay (slightly reduced so video is visible) */}
      <div className="absolute inset-0 bg-[#0a1329]/58 pointer-events-none" />
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0a1329] rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14B8A6] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div
          className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-[2px] p-6 md:p-8 lg:p-10 shadow-[0_25px_80px_-45px_rgba(2,6,23,0.9)]"
          data-aos="fade-up"
        >
          <div className="mb-8 md:mb-10">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-white/80 mb-4">
              Cybersecurity
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Protecting Your Most Valuable Assets
            </h2>
            <p className="max-w-3xl text-base text-white/65 leading-relaxed">
              In an era of escalating cyber threats, a reactive security posture is no longer
              sufficient. We provide comprehensive, multi-layered security solutions to safeguard
              your data, systems, and business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECURITY_PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-white/15 bg-white/5 p-5 md:p-6 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a1329]/35 group-hover:bg-[#0a1329] transition-colors duration-300 mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4" data-aos="fade-left">
              <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden border border-white/15 bg-[#0d1c35]">
                <Image
                  src="/assets/cybersecurity.jpg"
                  alt="Digital shield with circuit-board pattern — add your cybersecurity illustration here"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1329]/85 via-[#0a1329]/45 to-transparent" />

                <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">Security First</p>
                  <p className="text-xs text-white/75">Built into every solution</p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-white/70">Threat Visibility</p>
                    <p className="text-sm font-semibold text-white">24/7 Monitoring Coverage</p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-white/70">Response Posture</p>
                    <p className="text-sm font-semibold text-white">Rapid Containment & Remediation</p>
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

export default CybersecuritySection;
