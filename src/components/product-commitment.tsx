import Link from "next/link";



const ProductCommitment = () => {
  return (
<section className="py-16 md:py-24"
 style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 900px 800px at 100% 0%, #221a3f 0%, rgba(34,26,63,0.55) 45%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}
>
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
            Ready to Experience the Future of IT?
          </h2>

          <p className="text-[16px] text-white/80  ">
           Join 500+ global enterprises that have transformed their technical operations. <br/> Setup takes less than 5 minutes.
          </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center text-white font-bold tracking-[0.05em] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] rounded-full px-6 py-3 md:px-8 md:py-6 text-[12px] md:text-[14px]"
              style={{
                background: "linear-gradient(135deg, #C477EA 0%, #6F54F4 100%)",
                border: "0.5px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 30px rgba(111,84,244,0.4)",
              }}
            >
              GET STARTED FOR FREE
            </Link>
       
        </div>



      </div>
    
    </section>
  );
};

export default ProductCommitment;