"use client";

import { useState } from "react";

const IT_CONTACT_FIELDS = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your Name" },
  { id: "company", label: "Company Name", type: "text", placeholder: "Your Company" },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
  { id: "email", label: "Email Address", type: "email", placeholder: "you@company.com" },
] as const;

const IT_SELECT_FIELDS = [
  {
    id: "service",
    label: "Service of Interest",
    options: [
      { value: "", label: "Select a service..." },
      { value: "managed-it", label: "Managed IT Support" },
      { value: "network", label: "Network Infrastructure" },
      { value: "cybersecurity", label: "Cybersecurity" },
      { value: "cloud", label: "Cloud Services" },
      { value: "strategy", label: "" },
      { value: "all", label: "Full Managed IT Package" },
    ],
  },
  {
    id: "employees",
    label: "Company Size",
    options: [
      { value: "", label: "Select company size..." },
      { value: "1-10", label: "1–10 employees" },
      { value: "11-50", label: "11–50 employees" },
      { value: "51-200", label: "51–200 employees" },
      { value: "201-500", label: "201–500 employees" },
      { value: "500+", label: "500+ employees" },
    ],
  },
] as const;

const ITContactSection = () => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0a1329] py-16 md:py-24 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0f172a] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Copy */}
          <div className="flex flex-col gap-8" data-aos="fade-right">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-white/80 mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Our Friendly Team Would Love to Hear From You.
              </h2>
              <p className="text-base text-white/65 leading-relaxed">
                Ready to transform your IT environment? Get a free assessment of your current
                infrastructure or schedule a consultation with one of our experts.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "Free IT Assessment",
                  desc: "No cost, no obligation review of your infrastructure",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Fast Response",
                  desc: "We'll reach out within one business day",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Confidential",
                  desc: "All information shared is kept strictly private",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-white/55 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div data-aos="fade-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 shadow-xl">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                    Thank you for reaching out. One of our IT specialists will contact you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white mb-1">Get Started Today</h3>
                  <p className="text-sm text-white/55 -mt-3 mb-2">Fill out the form and we&apos;ll be in touch shortly.</p>

                  {/* Text fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {IT_CONTACT_FIELDS.map((field) => (
                      <div key={field.id} className="flex flex-col gap-1.5">
                        <label htmlFor={field.id} className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.id] || ""}
                          onChange={handleChange}
                          required
                          className="rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Select fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {IT_SELECT_FIELDS.map((field) => (
                      <div key={field.id} className="flex flex-col gap-1.5">
                        <label htmlFor={field.id} className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <select
                          id={field.id}
                          value={form[field.id] || ""}
                          onChange={handleChange}
                          className="rounded-lg border border-white/15 bg-[#0a1329] px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors"
                        >
                          {field.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                      Tell Us About Your IT Needs (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Briefly describe your current IT challenges or what you're looking for..."
                      value={form["message"] || ""}
                      onChange={handleChange}
                      className="rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full rounded-lg bg-white py-4 text-sm font-bold text-[#0a1329] hover:bg-white/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    Send My Request
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M19 12l-6 6M19 12l-6-6" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITContactSection;
