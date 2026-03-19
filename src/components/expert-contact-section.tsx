"use client";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { Images } from "../../public/Images";
import { LOCATIONS, positions, OFFICES } from "@/constants/contact.constants";
import MainContactForm from "@/components/main-contact";

export default function ExpertContact() {
  return (
    <section className="bg-charcoal relative overflow-hidden py-10 w-full min-h-[1121px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      {/* Background Layers Omited for Brevity - Keep your existing Map and Radial layers here */}

      <div className="w-full max-w-[1728px] mx-auto flex flex-col min-[1231px]:flex-row gap-6 md:gap-10 items-center min-[1231px]:items-start justify-between relative z-10 px-4 md:px-10">
        
     {/* LEFT COLUMN: Info & Locations */}
     <div className="w-full min-[1231px]:w-[45%] max-w-[561px] items-center text-center min-[1031px]:items-start min-[1031px]:text-left min-[1231px]:min-h-[868px] flex flex-col pt-6 md:pt-10 relative">
          <div className="flex flex-col gap-8 min-[1231px]:gap-[67px]">

            <SectionHeading
              title="Let's Connect"
              description="Funding shouldn’t be complicated. Tell us a little about your business, and our team will guide you toward the best next step — with clarity, honesty, and zero pressure."
              className="items-center text-center min-[1031px]:items-start min-[1031px]:text-left"
              lineClassName="mx-auto bg-gradient-to-r from-primary to-secondary min-[1031px]:ml-0"
              titleClassName="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary max-[322px]:text-2xl"
              descriptionClassName="text-slate-50 mb-6 md:mb-10 max-[322px]:text-md"
            />

            {/* <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
              {OFFICES.map((office, index) => (
                <div key={index} className="flex-1">
                  <h4 className=" font-semibold text-center min-[1031px]:text-left text-[18px] md:text-[22px] text-white max-[322px]:text-[16px]">
                    {office.title}
                  </h4>

                  <div className=" font-normal text-center min-[1031px]:text-left text-[14px] md:text-[16px] text-white/70 mt-2 md:mt-4 leading-relaxed max-[322px]:text-[12px]">
                    {office.description && <p className="mb-2">{office.description}</p>}
                    {office.addressLines?.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                    {office.phone && (
                      <a
                        href={`tel:${office.phone}`}
                        className="block mt-2 hover:text-white transition-colors underline min-[1031px]:no-underline hover:underline"
                      >
                        {office.phone}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Locations Grid */}
          {/* <div className="relative mt-[40px] md:mt-[80px] min-[1231px]:mt-[100px] w-full flex flex-row justify-center items-center gap-2 md:gap-7 min-[1231px]:block min-[1231px]:h-[300px]">
            {LOCATIONS.map((loc, index) => (
              <div
                key={loc.country}
                className={`relative static inset-auto flex items-center transition-all duration-300 flex-1 min-[551px]:w-full max-w-[400px] max-[550px]:max-w-[31%] h-[45px] max-[322px]:h-[38px] md:h-[62px] rounded-[8px] md:rounded-[12px] py-1 px-1 md:py-4 md:px-[15px] bg-gray-300 backdrop-blur-md border border-white/10 shadow-lg justify-center z-20 min-[1231px]:absolute min-[1231px]:w-[241px] min-[1231px]:h-[62px] ${positions[index]}`}
              >
                <div className="flex items-center justify-between w-full px-0.5">
                  <div className="flex items-center gap-1 md:gap-3">
                    <div className="relative w-[18px] h-[12px] md:w-[36px] md:h-[24px] shrink-0">
                      <Image src={Images[loc.flagKey as keyof typeof Images] || Images.Error} alt={loc.country} fill className="object-cover rounded-sm" />
                    </div>
                    <p className=" mr-4 font-medium text-heading text-[8px] md:text-[16px] max-[322px]:text-[7px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {loc.country}
                    </p>
                  </div>
                  <div className="relative w-[6px] h-[6px] md:w-[14px] md:h-[14px] shrink-0">
                    <Image src={Images.Error} alt="Red dot" fill className="object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* RIGHT COLUMN: Reusable Form */}
        <div className="w-full min-[1231px]:w-[55%] max-w-[883px] bg-deep-black/40  rounded-[20px] mt-10 min-[1231px]:mt-4 pb-8 md:pb-14 p-6 md:p-12 shadow-2xl flex flex-col items-center shrink-0">
          <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
            <span className="text-primary  font-semibold text-base md:text-lg mb-2">Share Your Business Goals</span>
            <h3 className="text-white  font-bold text-md md:text-3xl leading-tight max-w-[500px]">
             We’d love to learn more about your business and how we can support your growth.
            </h3>
            <div className="w-[80px] md:w-[125px] h-[4px] md:h-[5px] bg-gradient-to-r from-primary to-secondary mt-4 md:mt-6 rounded-full" />
          </div>

          <MainContactForm
            gridCols="grid-cols-1 md:grid-cols-2" 
            submitButtonText="Send Message"
            buttonClassName="w-full max-w-[816px] h-[55px] md:h-[59px] rounded-[10px] text-white font-bold text-[18px] md:text-[20px] shadow-lg transition-all mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary to-secondary hover:brightness-110 cursor-pointer disabled:bg-gray-400"
          />
        </div>
      </div>
    </section>
  );
}
