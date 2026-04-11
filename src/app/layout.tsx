import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";
import AosProvider from "@/components/aos-provider";
import { ToastContainer } from "react-toastify";
import { metaDescription, metaTitle } from "@/constants/metadata.constants";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description:
      metaDescription,
    url: `${process.env.NEXT_PUBLIC_APP_URL}`
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
       
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V9QBL6BZHH');
          `}
        </Script>
      </head>
      <body
        className="antialiased bg-[#00050F]"
        suppressHydrationWarning={true}
      >
        <div className="z-10000 relative">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

          />
        </div>

       
        <AosProvider>
          {children}
          <ScrollToTop />
        </AosProvider>
      </body>
    </html>
  );
}
