interface HeadingProps {
  title?: string;
  description: string;
  text?: string;
  className?: string;
  isLeftAligned?: boolean;
  isWhiteText?: boolean;
  hideLine?: boolean;
  descriptionClassName?: string;
  titleClassName?: string;
  lineClassName?: string;
  marginTop?:string;
}

const SectionHeading = ({
  title,
  description,
  text,
  className = "",
  isLeftAligned = false,
  isWhiteText = false,
  hideLine = false,
  descriptionClassName = "",
  titleClassName = "text-line-primary ",
  // lineClassName="bg-gradient-to-r from-line-primary to-line-secondary",
  marginTop="mt-3"
}: HeadingProps) => {
  return (
    <div
      className={`flex flex-col space-y-3 
        ${isLeftAligned ? "text-left items-start" : "text-center items-center"} 
        ${className}`}
    >
      {/* Optional Title Section */}
      {title && (
        <h2
          className={`text-lg md:text-[22px] font-semibold tracking-tight
            ${isWhiteText
              ? "text-white"
              : titleClassName
            } `}
        >
          {title}
        </h2>
      )}

      {/* Description / Main Heading Text */}
      <span
        className={`block text-xl md:text-[20px] xl:text-[35px] font-extrabold leading-tight tracking-tight 
          ${isWhiteText ? "text-swivu-text-primary" : "text-heading"} 
          ${descriptionClassName}`}
      >
        {description}
      </span>
{/* 
      {!hideLine && (
        <div
          className={`${marginTop} h-1 w-28 rounded-full ${lineClassName} 
            ${isLeftAligned ? "ml-0" : "mx-auto"} 
            `}
        />
      )} */}

      {/* Additional Text Below Description */}
      {text && (
        <p className={`mt-6 text-base md:text-lg max-w-2xl ${
          isWhiteText ? "text-white" : "text-subtext"
        }`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;