"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { IT_NAV_GROUPS, IT_CONTACT_CARDS, IT_SOCIAL_LINKS } from "@/constants/it-services.constants";

const NAV_GROUPS = [
  {
    title: "Services",
    links: [
      { label: "Managed IT", href: "#" },
      { label: "Network Infrastructure", href: "#" },
      { label: "Cybersecurity", href: "#" },
      { label: "Cloud Services", href: "#" },
      { label: "IT Consulting", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Schedule a Call", href: "#" },
      { label: "Free Assessment", href: "#" },
      { label: "Support Portal", href: "#" },
      { label: "Partner Program", href: "#" },
    ],
  },
];

const GradientFooter = () => {
  return (
    <footer className="relative text-white overflow-hidden"
          style={{
        backgroundColor: "#04020f",
        backgroundImage:
          "radial-gradient(ellipse 900px 800px at 100% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)",
      }}>

      {/* Top thin divider line */}

      <div className="w-full mt-4   px-8   md:px-12 xl:px-16 md:pb-17">
        <div className="w-[95%] mx-auto h-px bg-white/20 mb-8 md:mb-8" />
        <div className="relative z-10 pt-6 px-4 md:pl-14 md:pr-50 md:px-0">

          {/* Main Row: Logo+desc LEFT, Nav groups RIGHT */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0 mb-12 md:mb-20">

            {/* Left: Logo + Description */}
            <div className=" flex flex-col gap-5">
              <Link href="/">
                <Image
                  src={logo}
                  alt="SoftwarePac"
                  width={220}
                  height={140}
                  className="object-contain"
                />
              </Link>
              <p className="text-[16px] text-white/80  leading-relaxed">
                Your dedicated managed IT &amp; <br /> network services partner. Keeping <br />
                your business secure, efficient, and <br /> confidently running.
              </p>
            </div>

            {/* Right: Nav Groups */}
            <div className="flex flex-wrap gap-10 md:gap-16 lg:gap-34 tems-start">
              {NAV_GROUPS.map((group) => (
                <div key={group.title} className="flex flex-col gap-3 ">
                  <h4
                    className="text-[26px] font-bold"
                    style={{
                      background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-1">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] text-white/85 hover:text-white transition-colors duration-200"
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

          {/* Bottom Bar */}

        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 px-4 md:px-14 pt-6 pb-4 md:pb-0 text-sm text-white/80">
          <p>© {new Date().getFullYear()} SoftwarePac. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>



    </footer>
  );
};

export default GradientFooter;