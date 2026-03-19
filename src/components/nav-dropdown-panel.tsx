"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ViewAllLink from "./view-all-nav-links";

export interface ServiceItem {
  name: string;
  href?: string;
}

export interface RatingBadge {
  name: string;
  logo: string;
  reviews?: string;
  rating?: string;
  status?: string;
}

export interface NavSectionData {
  id: string;
  navLabel: string;
  title: string;
  description: string;
  listTitle: string;
  items: ServiceItem[];
}

export interface NavDropdownPanelProps {
  sections: NavSectionData[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onNavClick: (sectionId: string) => void;
  ratingBadges?: RatingBadge[];
  isOpen: boolean;
  onClose: () => void;
}

const NavDropdownPanel = ({
  sections,
  activeSection,
  ratingBadges = [],
  isOpen,
  onClose,
}: NavDropdownPanelProps) => {
  const pathname = usePathname();

  const currentSection = sections.find((s) => s.id === activeSection) || sections[0];
  const items = currentSection?.items || [];

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* --- MOBILE VIEW --- */}
      <div 
        className={`xl:hidden fixed inset-x-0 top-0 z-40 w-full bg-dark transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-[80px] pb-10 px-6 max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-white">{currentSection?.title}</h2>
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href || "#"}
                  onClick={onClose}
                  className={`text-lg ${pathname === item.href ? "text-primary" : "text-white/80"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div
        className={`hidden xl:block fixed left-0 right-0 top-0 z-40 w-full transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="backdrop-blur-[10px] bg-dark/50 border-b border-white/10 shadow-2xl overflow-hidden">
          <div className="max-w-[1200px] mt-[calc(60px+1.5rem)] xl:max-w-[1280px] 2xl:max-w-[1536px] h-[450px] mx-auto px-6 lg:px-10 py-6 lg:py-8">
            <div className="flex gap-12 xl:gap-16 mt-6 w-full">
              
              {/* Left Column */}
              <div className={`flex w-[40%] flex-col gap-6 transition-opacity duration-300 delay-75 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-3xl xl:text-[36px] font-semibold text-white leading-tight">
                  {currentSection?.title}
                </h2>
                <p className="text-base text-white/70 leading-relaxed">
                  {currentSection?.description}
                </p>

                {ratingBadges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ratingBadges.map((badge, index) => (
                      <div key={index} className="bg-white rounded-md shadow-sm px-2 py-1.5 flex items-center gap-2">
                        <Image src={badge.logo} alt={badge.name} width={20} height={20} className="h-4 w-auto object-contain" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-semibold text-heading">{badge.name}</span>
                          {badge.reviews && <span className="text-[6px] text-subtext">{badge.reviews}</span>}
                        </div>
                        <span className="text-[9px] font-semibold text-badge-label">{badge.rating || badge.status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Vertical Divider */}
              <div className="w-px bg-gradient-to-b from-swivu-text-primary/20 via-swivu-text-primary/10 to-transparent self-stretch" />

              {/* Right Column */}
              <div className={`flex w-[60%] flex-col gap-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                <div className="columns-2 gap-x-12 xl:gap-x-16 pt-4">
                  {items.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={index}
                        href={item.href || "#"}
                        onClick={onClose}
                        className={`block w-max 2xl:w-full text-lg transition-all duration-200 mb-4 break-inside-avoid 
                          ${isOpen ? "opacity-100" : "opacity-0"}
                          ${isActive ? "text-primary font-medium" : "text-white/80"} 
                          hover:text-primary`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Desktop View All Link */}
                {currentSection?.id === "blog" && (
                  <div className="mt-6 border-t border-swivu-text-primary/10 pt-6 flex justify-end"> 
                    <ViewAllLink 
                       label="View All Blogs" 
                       href="/blog" 
                       onClose={onClose} 
                    />
                  </div>
                )}

                 {/* Desktop View All Link */}
                 {currentSection?.id === "case-studies" && (
                  <div className="mt-6 border-t border-swivu-text-primary/10 pt-6 flex justify-end"> 
                    <ViewAllLink 
                       label="View All Case Studies" 
                       href="/case-study" 
                       onClose={onClose} 
                    />
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDropdownPanel;