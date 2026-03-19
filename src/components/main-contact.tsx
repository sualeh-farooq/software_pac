"use client";

import React, { useState, useEffect } from 'react';
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

const contactSchema = z.object({
  "first-name": z.string().min(2, "First Name is required"),
  "last-name": z.string().min(2, "Last Name is required"),
  "phone": z.string().min(10, "Phone number is required").regex(phoneRegex, "Please enter a valid phone number"),
  "email": z.string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please enter a valid email address"),
  "note": z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  submitButtonText?: string;
  redirectTo?: string;
  gridCols?: string;
  onSuccess?: () => void;
  buttonClassName?: string;
}

export default function MainContactForm({
  submitButtonText = "Send Message",
  redirectTo = "home",
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
          firstName: data["first-name"],
          lastName: data["last-name"],
          phone: data["phone"],
          email: data["email"],
          note: data["note"],
          formType: "contact",
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6 w-full col-span-1 md:col-span-2">
        <Field label="First Name" id="first-name" error={errors["first-name"]?.message}>
            <input
            {...register("first-name")}
            type="text"
            placeholder="First Name"
            className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3 2xl:py-4 text-base 2xl:text-lg text-white placeholder-subtext focus:outline-none transition-colors ${
                errors["first-name"] ? "border-red-500" : "border-primary/30 focus:border-primary"
            }`}
            />
        </Field>

        <Field label="Last Name" id="last-name" error={errors["last-name"]?.message}>
            <input
            {...register("last-name")}
            type="text"
            placeholder="Last Name"
            className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3 2xl:py-4 text-base 2xl:text-lg text-white placeholder-subtext focus:outline-none transition-colors ${
                errors["last-name"] ? "border-red-500" : "border-primary/30 focus:border-primary"
            }`}
            />
        </Field>
      </div>

      <div className="col-span-1 md:col-span-2">
        <Field label="Phone" id="phone" error={errors["phone"]?.message}>
            <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 123-4567"
            className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3 2xl:py-4 text-base 2xl:text-lg text-white placeholder-subtext focus:outline-none transition-colors ${
                errors["phone"] ? "border-red-500" : "border-primary/30 focus:border-primary"
            }`}
            />
        </Field>
      </div>

      <div className="col-span-1 md:col-span-2">
        <Field label="Email" id="email" error={errors["email"]?.message}>
            <input
            {...register("email")}
            type="email"
            placeholder="email@example.com"
            className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3 2xl:py-4 text-base 2xl:text-lg text-white placeholder-subtext focus:outline-none transition-colors ${
                errors["email"] ? "border-red-500" : "border-primary/30 focus:border-primary"
            }`}
            />
        </Field>
      </div>

      <div className="col-span-1 md:col-span-2">
        <Field label="Note" id="note" error={errors["note"]?.message} isOptional>
            <textarea
            {...register("note")}
            placeholder="Your message..."
            rows={4}
            className={`w-full rounded-[10px] border bg-deep-black/40 backdrop-blur-sm px-6 py-3 2xl:py-4 text-base 2xl:text-lg text-white placeholder-subtext focus:outline-none transition-colors ${
                errors["note"] ? "border-red-500" : "border-primary/30 focus:border-primary"
            }`}
            />
        </Field>
      </div>

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

const Field = ({ label, id, children, error, isOptional }: { label: string; id: string; children: React.ReactNode; error?: string, isOptional?: boolean }) => (
  <div className="block space-y-1 w-full">
    <label htmlFor={id} className="text-base 2xl:text-lg font-semibold text-white inline-block">
      {label} {!isOptional && <span className="text-red-500">*</span>}
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