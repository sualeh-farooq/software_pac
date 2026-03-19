import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-white">

            <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 md:py-20 my-10 text-center relative z-10">
                <h1
                    className="text-[100px] md:text-[200px] lg:text-[300px] font-[800] leading-[100%] tracking-tight select-none bg-cover bg-center relative z-0"
                    style={{
                        backgroundImage: "url('/assets/oops.jpg')",
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Poppins'
                    }}
                >
                    Oops!
                </h1>

                {/* Scaled H2 for 836px */}
                <h2 className="mt-6 md:mt-8 text-xl min-[836px]:text-3xl lg:text-[44px] font-semibold text-line-primary tracking-tight">
                    404 - Page not found
                </h2>

                <p className="mt-4 max-w-[90%] min-[836px]:max-w-[750px] text-sm md:text-xl text-heading font-normal">
                    The page you are looking for might have been removed, had it’s name changed or is temporarily unavailable
                </p>

                <Link
                    href="/"
                    className="mt-8 md:mt-10 flex items-center gap-2 text-primary text-base md:text-lg font-normal relative z-20 hover:opacity-80 transition-opacity"
                >
                    <ArrowLeft size={20} strokeWidth={2.5} />
                    Go Back
                </Link>
            </main>

        </div>
    );
}