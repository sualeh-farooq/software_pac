// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Divider from "./divider";
// import { HOME_PARTNER_BRANDS } from "@/constants/home.constants";

// const ClientsCarousel = ({
//   brands = HOME_PARTNER_BRANDS,
//   className = "",
//   isHeader = true
// }) => {
//   const [isPaused, setIsPaused] = useState(false);

//   if (!brands || brands.length === 0) return null;

//   const paddingClasses = isHeader ? "pt-0 pb-12" : "py-12";

//   return (
//     <section className={`${paddingClasses} ${className}`}>
//       <div className="mx-auto max-w-full overflow-hidden">
//         <div className="flex flex-col gap-6 md:gap-8">
//           <Divider />

//           {/* Clean implementation using global CSS classes */}
//           <div className="relative w-full overflow-hidden flex items-center marquee-mask">
//             <div
//               className={`marquee-track ${isPaused ? "marquee-paused" : ""}`}
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               {[...brands, ...brands, ...brands].map((brand, index) => (
//                 <div
//                   key={`${brand.name}-${index}`}
//                   className="flex items-center justify-center shrink-0 px-8 md:px-16 lg:px-20"
//                 >
//                   <div className="relative h-8 w-28 md:h-14 md:w-40 lg:h-16 lg:w-48">
//                     <Image
//                       src={brand.logo}
//                       alt={`${brand.name} logo`}
//                       fill
//                       className="object-contain"
//                       sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 192px"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Divider />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsCarousel;