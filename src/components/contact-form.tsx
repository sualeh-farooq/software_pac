"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { CONTACT_FIELDS, CONTACT_SELECT_FIELDS } from '@/constants/home.constants';

declare global {
  interface Window {
    grecaptcha: any;
    grecaptchaReady: Promise<void>;
  }
}

const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[\d\s()+-]{10,}$/;

const contactSchema = z.object({
  "contact-name": z.string().min(2, "Full Name is required"),
  "contact-legal-name": z.string().min(2, "Business Legal Name is required"),
  "contact-phone": z.string().min(10, "Phone number is required").regex(phoneRegex, "Please enter a valid phone number"),
  "contact-email": z.string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please enter a valid email address"),
  "time-in-business": z.string().min(1, "Please select Time in Business"),
  "monthly-revenue": z.string().min(1, "Please select Monthly Revenue"),
  "desired-funding": z.string().min(1, "Please select Desired Funding Amount"),
  "industry": z.string().min(1, "Please select Industry"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  submitButtonText?: string;
  redirectTo?: string;
  gridCols?: string;
  onSuccess?: () => void;
  buttonClassName?: string;
}

export default function  ContactForm({
  submitButtonText = "Send Message",
  redirectTo = "/home",
  gridCols = "grid-cols-1",
  onSuccess,
  buttonClassName,
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name: data["contact-name"],
          legalName: data["contact-legal-name"],
          phone: data["contact-phone"],
          email: data["contact-email"],
          timeInBusiness: data["time-in-business"],
          monthlyRevenue: data["monthly-revenue"],
          desiredFunding: data["desired-funding"],
          industry: data["industry"],
          formType: "funding",
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setStatus("success");
        reset();
     
      } else {
        toast.error("Something went wrong.");
        setStatus("idle");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`w-full grid ${gridCols} gap-x-8 gap-y-4 md:gap-y-6`}>
      {CONTACT_FIELDS.map((field) => (
        <Field key={field.id} label={field.label} id={field.id} error={errors[field.id as keyof ContactFormData]?.message}>
          <input
            {...register(field.id as keyof ContactFormData)}
            type={field.type}
            placeholder={field.placeholder}
            className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3.5 min-h-[44px] 2xl:py-4 text-base 2xl:text-lg text-white placeholder-subtext focus:outline-none transition-colors ${
              errors[field.id as keyof ContactFormData] ? "border-red-500" : "border-primary/30 focus:border-primary"
            }`}
          />
        </Field>
      ))}

      {CONTACT_SELECT_FIELDS.map((field) => (
        <Field key={field.id} label={field.label} id={field.id} error={errors[field.id as keyof ContactFormData]?.message}>
          <div className="relative">
            <select
              {...register(field.id as keyof ContactFormData)}
              className={`w-full appearance-none rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3.5 min-h-[44px] 2xl:py-4 text-base 2xl:text-lg text-white focus:outline-none transition-all cursor-pointer hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors[field.id as keyof ContactFormData] ? "border-red-500" : "border-primary/30"
              }`}
              style={{
                backgroundImage: 'none',
              }}
            >
              {field.options.map((option) => (
                <option 
                  key={option.value} 
                  value={option.value} 
                  className="bg-charcoal text-white py-3 px-4 hover:bg-primary/20 cursor-pointer"
                  style={{
                    backgroundColor: '#1a1a1a',
                    padding: '12px 16px',
                  }}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-white/60 text-sm">▼</span>
          </div>
        </Field>
      ))}

      <div className={`${gridCols.includes("md:grid-cols-2") ? "col-span-1 md:col-span-2" : "w-full"} flex justify-center md:justify-start`}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={
            buttonClassName
              ? `${buttonClassName} ${status === "submitting" ? " opacity-70 cursor-not-allowed" : ""}`
              : `group rounded-[10px] px-6 py-3 flex items-center gap-3 shadow-lg transition duration-400 min-w-[180px] justify-center text-white font-bold bg-linear-to-t from-primary to-secondary ${
                  status === "submitting"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-secondary hover:to-primary hover:shadow-2xl hover:shadow-primary/40"
                }`
          }
        >
          <span className="text-base md:text-xl">
            {status === "submitting" ? "Sending..." :  submitButtonText}
          </span>
          {status === "submitting" ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M19 12L13 18M19 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

const Field = ({ label, id, children, error }: { label: string; id: string; children: React.ReactNode; error?: string }) => (
  <div className="block space-y-1">
    <label htmlFor={id} className="text-base 2xl:text-lg font-semibold text-white inline-block">
      {label} <span className="text-red-500">*</span>
    </label>
    {children}
    {error && <p className="text-red-500 text-xs font-medium mt-1">{error}</p>}
  </div>
);








      // <Field label="Project Type" id="projectType" error={errors.projectType?.message}>
      //   <div className="relative">
      //     {/* <select
      //       {...register("projectType")}
      //       className={`w-full appearance-none rounded-[10px] border bg-white px-6 py-3 2xl:py-4 text-base 2xl:text-lg text-heading focus:outline-none transition-colors ${
      //         errors.projectType ? "border-red-500" : "border-[rgba(45,45,45,0.16)] focus:border-tertiary"
      //       }`}
      //     >
      //       <option value="" disabled>Select a project type</option>
      //       <option value="mvp">MVP / Prototype</option>
      //       <option value="integration">LLM Integration</option>
      //       <option value="custom">Custom Platform</option>
      //     </select> */}
      //     <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-subtext">▼</span>
      //   </div>
      // </Field>