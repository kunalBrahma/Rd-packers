"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Briefcase, Car, PackageOpen, Database, Truck, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Household Relocation",
    description: "Complete home shifting services designed to transport your life safely. From apartments to large villas, we handle your furniture, appliances, and valuables with professional loading and customized transit routes.",
    items: ["Local Shifting", "Intercity Relocation", "Apartment Moving", "Villa & Bungalow Relocation"],
    icon: Home,
    gridClass: "lg:col-span-2 lg:row-span-2 bg-neutral-50/50 hover:bg-neutral-50",
    bgImage: "/gallery/image-6.jpeg",
  },
  {
    id: 2,
    title: "Office Shifting",
    description: "Corporate and commercial relocations with minimal business downtime.",
    items: ["Office Cabin Moving", "Corporate Setup Transit", "Warehouse Relocation"],
    icon: Briefcase,
    gridClass: "lg:col-span-1 lg:row-span-1 bg-neutral-50/30 hover:bg-neutral-50/50",
    bgImage: "/gallery/image-8.jpeg",
  },
  {
    id: 3,
    title: "Vehicle Transport",
    description: "Secure carrier transit for cars, bikes, and two-wheelers.",
    items: ["Car Transportation", "Bike Shifting", "Four-Wheeler Relocation"],
    icon: Car,
    gridClass: "lg:col-span-1 lg:row-span-1 bg-neutral-50/30 hover:bg-neutral-50/50",
    bgImage: "/gallery/vehicle-2.jpg",
  },
  {
    id: 4,
    title: "Packing & Unpacking",
    description: "Professional multi-layer packing with high-quality boxes and bubble wrap.",
    items: ["Fragile Item Care", "Furniture Wrapping", "Setup Services"],
    icon: PackageOpen,
    gridClass: "lg:col-span-1 lg:row-span-1 bg-neutral-50/30 hover:bg-neutral-50/50",
    bgImage: "/gallery/image-2.jpeg",
  },
  {
    id: 5,
    title: "Storage Solutions",
    description: "Clean, secure, and climate-controlled storage for short or long terms.",
    items: ["Household Storage", "Secure Warehousing", "Short-Term Lockers"],
    icon: Database,
    gridClass: "lg:col-span-1 lg:row-span-1 bg-neutral-50/30 hover:bg-neutral-50/50",
    bgImage: "/gallery/warehouse.png",
  },
  {
    id: 6,
    title: "Loading & Transit",
    description: "Safe loading, FTL (Full Truck Load) moving, and door-to-door delivery.",
    items: ["Full Truck Load (FTL)", "Part Load Shifting", "Door-to-Door Transit"],
    icon: Truck,
    gridClass: "lg:col-span-1 lg:row-span-1 bg-neutral-50/30 hover:bg-neutral-50/50",
    bgImage: "/gallery/image-15.jpeg",
  },
];

export default function ServicesBento() {
  return (
    <section className="w-full bg-white pt-20 pb-28 sm:pt-24 sm:pb-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
            <span className="text-xs  uppercase tracking-widest text-[#de0311] font-mono">Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#212120] tracking-tight leading-tight">
            Comprehensive Relocation Services
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            From professional packing to secure vehicle transportation, we provide end-to-end logistic
            solutions tailored to your specific shifting requirements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[300px]">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.icon;
            const isHousehold = service.id === 1;

            return (
              <div
                key={service.id}
                className={cn(
                  "group relative rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg overflow-hidden",
                  isHousehold
                    ? "lg:col-span-2 lg:row-span-2 bg-neutral-50/50 hover:bg-neutral-50 border-neutral-200/60 hover:border-neutral-300/80"
                    : "lg:col-span-1 lg:row-span-1 bg-neutral-900 border-neutral-800 text-white"
                )}
              >
                {/* Visual background image for standard cards */}
                {!isHousehold && service.bgImage && (
                  <>
                    <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none select-none">
                      <Image
                        src={service.bgImage}
                        alt={service.title}
                        fill
                        sizes="300px"
                        className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    {/* Dark gradient overlay to ensure high contrast text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/85 z-0 pointer-events-none group-hover:via-black/50 group-hover:to-black/75 transition-colors duration-500" />
                  </>
                )}

                {isHousehold ? (
                  /* Special Split Layout for large Household Relocation Card */
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full w-full z-10">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border border-neutral-100 shadow-sm text-[#de0311] mb-4">
                          <IconComponent className="h-5 w-5" />
                        </div>

                        <h3 className="text-lg sm:text-2xl  text-[#212120] mb-2">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-4">
                        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 text-[11px] font-mono text-[#212120]/75">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <span className="h-1 w-1 bg-[#de0311] rounded-full"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs  text-[#de0311] group-hover:translate-x-0.5 transition-transform duration-300"
                        >
                          <span>Request Service</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right side image on desktop */}
                    <div className="hidden lg:block relative h-full w-full rounded-xl overflow-hidden border border-neutral-200/50 bg-neutral-100">
                      <Image
                        src={service.bgImage}
                        alt="Household relocation packaging"
                        fill
                        sizes="400px"
                        className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ) : (
                  /* Standard Card Layout with Dark Contrast Styling */
                  <div className="flex flex-col justify-between h-full w-full z-10">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border border-neutral-100 shadow-sm text-[#de0311]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl text-white mb-2 font-bold drop-shadow-sm">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-md line-clamp-3 drop-shadow-sm">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 text-[11px] font-mono text-neutral-100/90 drop-shadow-sm">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 bg-[#de0311] rounded-full"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs text-white bg-[#de0311] hover:bg-[#c00210] px-4 py-2 rounded-lg transition-all duration-300 font-semibold shadow-sm w-fit"
                      >
                        <span>Request Service</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Slanted shape divider (Right-to-Left) transitioning to WhyChooseUs bg-[#eaeaea] */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
        >
          <path
            d="M1200 0 L1200 120 L0 120 Z"
            fill="#eaeaea"
          />
        </svg>
      </div>
    </section>
  );
}
