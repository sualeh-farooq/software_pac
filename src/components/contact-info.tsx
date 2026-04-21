"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Cloud Migration",
  "Hybrid & Multi-Cloud Architecture",
  "Cloud Security & Compliance",
  "Cost Optimization",
  "Infrastructure Management",
  "Disaster Recovery",
];

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const inputBase =
    "w-full bg-transparent text-white text-[15px] outline-none placeholder-[#6b6b8a] pb-3 pt-2 transition-all duration-300";

  const lineBase =
    "h-px w-full transition-all duration-500";

  return (
    <section
      className="py-20 md:py-32"
      style={{
        backgroundColor: "#04020f",
        backgroundImage:
          "radial-gradient(ellipse 500px 800px at 0% 50%, #1a1035 0%, rgba(26,16,53,0.5) 45%, transparent 75%)",
      }}
    >
      <div className="mx-auto max-w-[760px] px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-[58px] font-bold text-white leading-tight tracking-tight mb-5">
            Ready to
            <br />
            Optimize?
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#9d9db8] leading-relaxed max-w-md mx-auto">
            Let us know what challenge you&apos;re facing, and our team will be
            there with a tailored solution for you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-0" data-aos="fade-up" data-aos-delay="100">
          {/* Name */}
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={inputBase}
            />
            <div
              className={lineBase}
              style={{
                background:
                  focused === "name"
                    ? "linear-gradient(90deg, #C477EA, #6F54F4)"
                    : "rgba(255,255,255,0.15)",
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={inputBase}
            />
            <div
              className={lineBase}
              style={{
                background:
                  focused === "email"
                    ? "linear-gradient(90deg, #C477EA, #6F54F4)"
                    : "rgba(255,255,255,0.15)",
              }}
            />
          </div>

          {/* Service Type Dropdown */}
          <div className="mb-6 relative">
            <button
              type="button"
              className="w-full flex items-center justify-between pb-3 pt-2 text-[15px] outline-none transition-all duration-300"
              style={{
                color: formData.serviceType ? "white" : "#6b6b8a",
              }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
            >
              <span>{formData.serviceType || "Service Type"}</span>
              {/* Chevron */}
              <svg
                className="transition-transform duration-300"
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#6b6b8a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={lineBase}
              style={{
                background: dropdownOpen
                  ? "linear-gradient(90deg, #C477EA, #6F54F4)"
                  : "rgba(255,255,255,0.15)",
              }}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute z-20 w-full mt-1 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  background: "#0d0a20",
                  border: "1px solid rgba(111,84,244,0.25)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                }}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full text-left px-5 py-3 text-[14px] text-[#ccc] transition-all duration-200 hover:text-white"
                    style={{
                      background:
                        formData.serviceType === option
                          ? "rgba(111,84,244,0.15)"
                          : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(111,84,244,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        formData.serviceType === option
                          ? "rgba(111,84,244,0.15)"
                          : "transparent";
                    }}
                    onClick={() => {
                      setFormData({ ...formData, serviceType: option });
                      setDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="mb-10">
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`${inputBase} resize-none`}
            />
            <div
              className={lineBase}
              style={{
                background:
                  focused === "message"
                    ? "linear-gradient(90deg, #C477EA, #6F54F4)"
                    : "rgba(255,255,255,0.15)",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="relative px-12 py-4 rounded-full text-white font-semibold text-[14px] tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #C477EA 0%, #6F54F4 100%)",
                boxShadow: "0 0 32px rgba(111,84,244,0.35)",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 48px rgba(196,119,234,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 32px rgba(111,84,244,0.35)";
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;