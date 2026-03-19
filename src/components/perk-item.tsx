import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface PerkItemProps {
  icon: string | StaticImageData | ReactNode;
  text: string;
  description?: string;
}

const PerkItem: React.FC<PerkItemProps> = ({ icon, text, description }) => {
  const isReactElement = React.isValidElement(icon as ReactNode);
  const isImageSource =
    typeof icon === "string" || (!isReactElement && (icon as any)?.src);

  return (
    <div className={`flex ${description ? "items-start" : "items-center"} gap-[33px]`}>
      {/* Icon Box */}
      <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-primary to-secondary p-3">
        {isImageSource ? (
          <Image
            src={icon as string | StaticImageData}
            alt="Benefit icon"
            width={34}
            height={34}
            className="h-[34px] w-[34px]"
          />
        ) : (
          <div className="h-[34px] w-[34px] text-white">
            {icon as ReactNode}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[10px]">
        <p className={`font-semibold text-heading ${description ? "text-xl lg:text-[26px]" : "text-[22px] font-medium text-subtext"}`}>
          {text}
        </p>
      </div>
      {description && (
        <p className="text-base lg:text-lg text-subtext leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default PerkItem;
