"use client";

import Link from "next/link";
import { IT_NAV_GROUPS, IT_CONTACT_CARDS, IT_SOCIAL_LINKS } from "@/constants/it-services.constants";

const FooterSection = () => {
  return (
    <footer className="bg-[#0a1329] text-white">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 pt-16 md:pt-20 pb-6 lg:px-10">
        <div className="flex flex-col gap-14">

          {/* Top: Logo + Nav */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">

            {/* Brand */}
            <div className="max-w-sm flex-shrink-0 space-y-5">
              <Link href="/" className="flex items-center gap-3 font-bold text-white">
              
                <span className="text-lg font-bold">
                  SoftwarePac
                </span>
              </Link>

              <p className="text-sm md:text-base text-white/65 leading-relaxed">
                Your dedicated technology partner — delivering proactive managed IT, network infrastructure, cybersecurity, and cloud services so you can focus on what you do best.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {IT_SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 hover:border-[#0a1329] hover:bg-[#0a1329]/20 transition-all duration-200"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav Groups */}
            <div className="flex flex-wrap gap-12 md:gap-16 lg:gap-20 justify-start lg:justify-end">
              {IT_NAV_GROUPS.map((group) => (
                <div key={group.title} className="space-y-4 min-w-[130px]">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">{group.title}</h4>
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 hover:text-white hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Bar */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-around flex-wrap">
              {IT_CONTACT_CARDS.map((card) => (
                <Link
                  key={card.label}
                  href={card.link}
                  className="group flex items-center gap-4 w-full sm:w-auto sm:min-w-[180px]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    {card.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wide">{card.label}</p>
                    <p className="text-sm font-semibold text-white group-hover:text-white transition-colors break-all">{card.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-t border-white/10 pt-6 text-sm text-white/50">
            <p>© {new Date().getFullYear()} SoftwarePac. All Rights Reserved.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
