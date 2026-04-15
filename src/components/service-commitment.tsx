"use client";
import Image from "next/image";
import succescard_bg from "../../public/assets/succescard-bg.png"


;const ServiceCommitment = () => {
  return (
<section className="py-16 md:py-24"
  style={{
    backgroundColor: "#04020f",
    backgroundImage: `
      radial-gradient(ellipse 900px 600px at 0% 0%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%),
      radial-gradient(ellipse 1000px 1000px at 100% 100%, #221a3f 0%, rgba(34,26,63,0.55) 40%, rgba(34,26,63,0.15) 65%, transparent 80%)
    `,
  }}>
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1080px] px-6 lg:px-10">

        {/* Top: Centered heading block */}
        <div className="flex flex-col items-center text-center gap-4 mb-10" data-aos="fade-up">

          {/* Label with lines */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white" />
            <span
              className="text-[15px] font-semibold tracking-widest"
              style={{
                background: "linear-gradient(135deg, #C477EA, #6F54F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
                           Our Commitment

            </span>
            <span className="h-px w-12 bg-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight max-w-lg">
            Your Success is Our Priority
          </h2>

          <p className="text-[16px] text-white/80  ">
            We go beyond ticket resolution and system uptime — we become a genuine <br/>
            strategic partner who understands your business and anticipates your needs.
          </p>
        </div>

        {/* Big Quote Card */}
  <div
  className="relative rounded-2xl overflow-hidden border border-white/30 py-10 flex items-center justify-center"
  style={{ backgroundColor: "#0d121b" }}
  data-aos="fade-up"
  data-aos-delay="100"
>
      <div className="absolute  right-0 w-150 h-90 pointer-events-none">
        <Image src={succescard_bg} alt="" fill className="object-cover object-top" />
      </div>
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
      `,
      backgroundSize: "30px 30px",
      maskImage:
        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,1) 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,1) 100%)",
    }}
  />

  <p className="relative z-10 text-center text-white font-semibold text-xl md:text-2xl lg:text-[42px] leading-snug max-w-4xl">
    We don&apos;t just manage your technology. We take ownership of it —
    treating your systems, your data, and your uptime as if they were our own.
  </p>
</div>

      </div>
    
    </section>
  );
};

export default ServiceCommitment;