import Image from "next/image";
import { Award, ShieldCheck, Focus } from "lucide-react";
import arrowRight from "../../public/assets/arrow-right.png";


const DIFFERENTIATORS = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Direct Communication",
    description: (
      <>
        <span className="text-white font-medium">+123 456 789</span>
        <br />
        <br />
        <span >
          (Business hours support: Mon–Fri)
        </span>
      </>
    ),
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Professional Inquiries",
    description: (
      <>
        <span className="text-white font-medium">
          hello@yourbrand.com
        </span>
        <br />
        <br />
        <span >
          We typically respond within 24 hours.
        </span>
      </>
    ),
  },
  {
    icon: <Focus className="w-7 h-7" />,
    title: "Global Headquarters",
    description: (
      <>
        <span className="text-white font-medium">
          123 Tech Avenue, Business District,
        </span>
      </>
    ),
  },
];


const GetInTouch = () => {
  return (
    <section className="py-16  md:py-24 mt-12">        
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          <div className="lg:w-[500px] flex-shrink-0" data-aos="fade-right">
     

            <h2
              className="text-2xl pt-4 md:text-[45px] font-semibold leading-tight tracking-tight mb-5"
              style={{ color: "#ffffff" }}
            >
         Get in Touch with Our <br/> Experts
            </h2>

            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#EBEBEB] w-full">
Whether you have a technical query or a large-scale project, we are here to provide the guidance you need.            </p>
          </div>

          {/* ── Right: Cards ── */}

<div className="flex-1 flex justify-end mt-6 md:mt-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[780px]">
    {DIFFERENTIATORS.map((d, i) => (
      <div
        key={d.title}
        className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5"
        data-aos="fade-up"
        data-aos-delay={i * 100}
      >
        <div className="flex flex-col justify-between rounded-2xl h-auto md:h-[320px] p-6 md:p-8 bg-[#11161f]">
          <div className="flex flex-col gap-3">
            <h3
              className="text-[20px] md:text-[22px] font-extrabold leading-snug"
              style={{
                background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {d.title}
            </h3>
            <p className="text-[13px] md:text-[15px] text-white">
              {d.description}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-6 group cursor-pointer">
            <span className="text-[15px] font-semibold text-white/80 group-hover:text-white transition">
              Get Started
            </span>
            <Image src={arrowRight} alt="" className="pt-1 ml-2" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;