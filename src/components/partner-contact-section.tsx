"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    grecaptcha: any;
    grecaptchaReady: Promise<void>;
  }
}

const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[\d\s()+-]{10,}$/;
const websiteRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

const partnerContactSchema = z.object({
  "partner-first-name": z.string().min(2, "First Name is required"),
  "partner-last-name": z.string().min(2, "Last Name is required"),
  "partner-company": z.string().min(2, "Company is required"),
  "partner-email": z.string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please enter a valid email address"),
  "partner-phone": z.string().min(10, "Phone number is required").regex(phoneRegex, "Please enter a valid phone number"),
  "partner-business-phone": z.string().optional().or(z.literal("")),
  "partner-website": z.string().optional().or(z.literal("")),
  "partner-industry": z.string().min(1, "Please select Industry"),
});

type PartnerContactFormData = z.infer<typeof partnerContactSchema>;

interface PartnerContactSectionProps {
  submitButtonText?: string;
  redirectTo?: string;
}

export default function PartnerContactSection({
  submitButtonText = "Submit",
  redirectTo = "/home",
}: PartnerContactSectionProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnerContactFormData>({
    resolver: zodResolver(partnerContactSchema),
  });

  const industries = [
    { value: "consulting", label: "Consulting" },
    { value: "fintech", label: "FinTech" },
    { value: "banking", label: "Banking & Credit Unions" },
    { value: "accounting", label: "Accounting & Tax" },
    { value: "real-estate", label: "Real Estate" },
    { value: "insurance", label: "Insurance" },
    { value: "equipment", label: "Equipment & Logistics" },
    { value: "marketing", label: "Marketing & Agency" },
    { value: "legal", label: "Legal Services" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async (data: PartnerContactFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          firstName: data["partner-first-name"],
          lastName: data["partner-last-name"],
          company: data["partner-company"],
          email: data["partner-email"],
          phone: data["partner-phone"],
          businessPhone: data["partner-business-phone"],
          website: data["partner-website"],
          industry: data["partner-industry"],
          formType: "partner",
        }),
      });

      if (response.ok) {
        toast.success("Partnership inquiry submitted successfully!");
        setStatus("success");
        reset();
       
      } else {
        toast.error("Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      setStatus("idle");
    }
  };

  return (
    <section id="partner-form" className="py-16 md:py-24 bg-charcoal">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10"> 

     <div className="mx-auto max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Fill out a short form to get started. We'll connect, walk you through the process, and set you up with everything you need to succeed.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-deep-black/40 backdrop-blur-xl rounded-[20px] border border-primary/20 p-6 sm:p-8 md:p-10" data-aos="fade-left">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field 
                  label="First Name" 
                  id="partner-first-name" 
                  error={errors["partner-first-name"]?.message}
                >
                  <input
                    {...register("partner-first-name")}
                    type="text"
                    placeholder="John"
                    className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                      errors["partner-first-name"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  />
                </Field>
                <Field 
                  label="Last Name" 
                  id="partner-last-name" 
                  error={errors["partner-last-name"]?.message}
                >
                  <input
                    {...register("partner-last-name")}
                    type="text"
                    placeholder="Doe"
                    className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                      errors["partner-last-name"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  />
                </Field>
              </div>

              {/* Row 2: Company */}
              <Field 
                label="Company" 
                id="partner-company" 
                error={errors["partner-company"]?.message}
              >
                <input
                  {...register("partner-company")}
                  type="text"
                  placeholder="Your Company Name"
                  className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                    errors["partner-company"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                  }`}
                />
              </Field>

              {/* Row 3: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field 
                  label="Email" 
                  id="partner-email" 
                  error={errors["partner-email"]?.message}
                >
                  <input
                    {...register("partner-email")}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                      errors["partner-email"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  />
                </Field>
                <Field 
                  label="Phone" 
                  id="partner-phone" 
                  error={errors["partner-phone"]?.message}
                >
                  <input
                    {...register("partner-phone")}
                    type="tel"
                    placeholder="(555) 123-4567"
                    className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                      errors["partner-phone"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  />
                </Field>
              </div>

              {/* Row 4: Business Phone & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field 
                  label="Business Phone" 
                  id="partner-business-phone" 
                  error={errors["partner-business-phone"]?.message}
                  isOptional
                >
                  <input
                    {...register("partner-business-phone")}
                    type="tel"
                    placeholder="(555) 987-6543"
                    className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                      errors["partner-business-phone"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  />
                </Field>
                <Field 
                  label="Business Website" 
                  id="partner-website" 
                  error={errors["partner-website"]?.message}
                  isOptional
                >
                  <input
                    {...register("partner-website")}
                    type="url"
                    placeholder="https://example.com"
                    className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white placeholder-subtext focus:outline-none transition-colors ${
                      errors["partner-website"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  />
                </Field>
              </div>

              {/* Row 5: Industry */}
              <Field 
                label="Select Industry" 
                id="partner-industry" 
                error={errors["partner-industry"]?.message}
              >
                <div className="relative">
                  <select
                    {...register("partner-industry")}
                    className={`w-full appearance-none rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-4 py-3.5 min-h-[44px] text-base text-white focus:outline-none transition-colors ${
                      errors["partner-industry"] ? "border-red-500" : "border-primary/30 focus:border-primary"
                    }`}
                  >
                    <option value="" disabled>Select an industry</option>
                    {industries.map((option) => (
                      <option key={option.value} value={option.value} className="bg-charcoal text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-subtext">▼</span>
                </div>
              </Field>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full rounded-[10px] px-6 py-3 flex items-center justify-center gap-3 shadow-lg transition duration-400 text-white font-bold bg-linear-to-t from-primary to-secondary ${
                  status === "submitting"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-secondary hover:to-primary hover:shadow-2xl hover:shadow-primary/40"
                }`}
              >
                <span className="text-base md:text-lg">
                  {status === "submitting" ? "Submitting..." :  submitButtonText}
                </span>
                {status === "submitting" ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M19 12L13 18M19 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div> 
      </div>
    </section>
  );
}

const Field = ({ 
  label, 
  id, 
  children, 
  error, 
  isOptional = false 
}: { 
  label: string; 
  id: string; 
  children: React.ReactNode; 
  error?: string;
  isOptional?: boolean;
}) => (
  <div className="block space-y-2">
    <label htmlFor={id} className="text-sm md:text-base font-semibold text-white inline-block">
      {label} {!isOptional && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
  </div>
);
