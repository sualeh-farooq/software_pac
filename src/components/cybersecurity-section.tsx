"use client";
import Image from "next/image";
import succescard_bg from "../../public/assets/succescard-bg.png"
const STATS = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Coverage" },
  { value: "<1HR", label: "Incident Response" },
  { value: "100%", label: "Ownership of Your IT" },
];const CommitmentSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background video */}

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
          <div className="w-full max-w-[1800px] mt-22 mx-auto px-6 md:px-12 xl:px-16 ">
          <div className="w-full h-px bg-white/30 mb-8 md:mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[clamp(28px,3.5vw,50px)] font-bold text-white leading-none tracking-tight">{s.value}</span>
                <span className="text-[12px] md:text-[15px] text-white/70 font-medium tracking-wide ">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default CommitmentSection;