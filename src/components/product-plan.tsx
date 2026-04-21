"use client";


import Link from "next/link";
const DEFAULT_SERVICES = [
  {
    title: (
      <>
        Starter <br />
        (The Foundation)
      </>
    ),
    description:
      "Essential visibility and monitoring for small teams looking to stabilize their IT environment.",
    features: [
      "Link 3 production Linked Accounts for free",
      "Pay $650/month for up to 10 total production Linked Accounts. $65 per Linked Account after.",
      "Contact us for volume discounts",
    ],
    footer: "Basic functionality included",
  },
  {
    title: (
      <>
        Pro <br />
        (The Accelerator)
      </>
    ),
    description:
      "Advanced automation and deeper insights for growing enterprises scaling their digital operations.",
    features: [
      "Access custom fields",
      "60 day access to developer sandboxes for third-party platforms",
      "Access to go-live support packages",
    ],
    footer: "The best fit for most companies",
  },
  {
    title: (
      <>
        Ultimate <br />
        (The Powerhouse)
      </>
    ),
    description:
      "Full-scale 24/7 NOC support and global compliance for organizations requiring maximum resilience.",
    features: [
      "Enterprise security features like Audit Trail",
      "Dedicated account manager with shared Slack channel",
      "Unlimited access to sandboxes",
    ],
    footer: "High-touch service for large firms",
  },
];

const ProductPlan = ({
  title = (
    <>
     Flexible Plans for Every Stage of <br />Growth
  
    </>
  ),

  services = DEFAULT_SERVICES,
}) => {
  return (
    <section
      className="py-16 md:py-24"
       style={{
    backgroundColor: "#04020f",
    backgroundImage:
      "radial-gradient(ellipse 900px 1200px at 100% 100%, #221a3f 0%, rgba(34,26,63,0.55) 45%, rgba(34,26,63,0.15) 65%, transparent 80%)",
  }}
 
    >
      <div className="mx-auto max-w-[1200px] xl:max-w-[1450px] px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">

      

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>
        
        </div>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center h-full mx-auto">
  {services.map((s, i) => (
    <div
      key={i}
      className="rounded-2xl p-[1px] bg-gradient-to-l from-white/60 to-white/5"
      data-aos="fade-up"
      data-aos-delay={i * 80}
    >
            <div className="flex flex-col rounded-2xl h-[580px] w-full max-w-[370px] md:max-w-[420px] bg-[#11161f] p-8">
        {/* Title */}
        <h3
          className="text-[28px] font-bold leading-snug"
          style={{
            background: "linear-gradient(135deg, #C477EA, #6F54F4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-[14px] text-white/80 pt-4">{s.description}</p>

        {/* Button */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center mt-4 text-white font-bold tracking-[0.05em] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] rounded-full px-2 py-3 md:px-12 md:py-6 text-[12px] md:text-[14px]"
            style={{
              background: "linear-gradient(135deg, #C477EA 0%, #6F54F4 100%)",
              border: "0.5px solid rgba(255,255,255,0.2)",
              boxShadow: "0 10px 30px rgba(111,84,244,0.4)",
            }}
          >
            GET A DEMO
          </Link>
        </div>

        {/* Dashed Divider */}
        <div
          className="my-6"
          style={{
            borderTop: "2px dashed white/90",
          }}
        />

        {/* Feature List */}
        <ul className="flex flex-col gap-3">
          {s.features.map((feature, fi) => (
            <li key={fi} className="flex items-start gap-3">
              {/* Purple Checkbox */}
              <span
                className="mt-[2px] flex-shrink-0 w-[18px] h-[18px] rounded-[4px] flex items-center justify-center"
                style={{
                  border: "1px solid white",
                }}
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[13px] text-white/90 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Footer Tagline */}
        <p className="mt-auto pt-8 text-[13px] italic text-white/40 text-center">
          {s.footer}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default ProductPlan;