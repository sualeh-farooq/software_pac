import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ViewAllLinkProps {
    label: string;
    href: string;
    onClose: () => void; 
    className?: string;
  }
  
  const ViewAllLink = ({ label, href, onClose, className = "" }: ViewAllLinkProps) => (
    <Link
      href={href}
      onClick={onClose} 
      className={`group inline-flex items-center gap-2 text-white/80 font-medium relative ${className}`}
    >
      <span className="relative">
        {label}
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </span>
      <span className="transition-transform group-hover:translate-x-1">
        <MoveRight size={18} className="text-primary" />
      </span>
    </Link>
  );

export default ViewAllLink;