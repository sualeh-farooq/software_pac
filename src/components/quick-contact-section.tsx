import Image from "next/image";
import { CONTACT_METHODS } from "@/constants/contact.constants";

export default function ContactCards() {

  return (

    <section className="bg-light py-12 md:py-20 ">
      <div className="mx-auto flex flex-col min-[937px]:flex-row items-center justify-center gap-6 max-w-[1300px] px-4">

        {CONTACT_METHODS.map((method, index) => (

          <div
            key={index}
            className="flex flex-col sm:flex-row w-full max-w-[754px] min-[937px]:h-[149px] items-center sm:items-start background rounded-[20px] p-6 min-[937px]:p-[21px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-slate-100"
          >
            <div className="w-[80px] h-[80px] min-[937px]:w-[106px] min-[937px]:h-[106px] shrink-0 bg-icon-secondary rounded-[15px] flex items-center justify-center">
              {/* Icon Div */}
              <div className="relative w-[40px] h-[40px] min-[937px]:w-[50px] min-[937px]:h-[50px]">
                <Image
                  src={method.icon}
                  alt={method.title}
                  fill
                  className="object-contain "
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="mt-4  sm:mt-0 sm:ml-[24px] flex flex-col items-center sm:items-start justify-start h-full pt-1 text-center sm:text-left">
              <span className=" font-semibold text-[20px] md:text-[22px] text-black leading-tight">
                {method.title}
              </span>

              <p className=" font-normal text-[16px] md:text-[18px] text-subtext mt-1">
                {method.description}
              </p>

              <p className=" font-semibold text-[20px] md:text-[22px] text-heading mt-2 sm:mt-auto">
                {method.detail}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>

  );

}