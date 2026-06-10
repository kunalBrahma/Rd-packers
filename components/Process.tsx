"use client";

import React from "react";
import Image from "next/image";
import { ClipboardList, PackageCheck, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Request Your Quote",
    description: "Submit your shifting details via our quick estimator or call us. We will provide a flat, transparent estimate with no hidden costs.",
    icon: ClipboardList,
    image: "/gallery/image-8.jpeg",
  },
  {
    number: "02",
    title: "Professional Packing",
    description: "Our trained crew arrives at your address with bubble wraps, durable carton boxes, and heavy furniture sheets to secure all items.",
    icon: PackageCheck,
    image: "/gallery/image-13.jpeg",
  },
  {
    number: "03",
    title: "Safe Delivery & Setup",
    description: "Your goods are transported in secure closed trucks, delivered at your destination doorstep, unpacked, and placed exactly where you want.",
    icon: ShieldCheck,
    image: "/gallery/image-15.jpeg",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-white pt-20 pb-28 sm:pt-24 sm:pb-36 relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
            <span className="text-xs  uppercase tracking-widest text-[#de0311] font-mono">Our Process</span>
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight">
            Proven Shifting Process
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We simplify relocation into a seamless, stress-free procedure. Here is how we get you moved safely:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Desktop Connecting Line (Drawn behind icons) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-neutral-200 z-0" />

          {STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">

                {/* Step Icon & Number */}
                <div className="relative mb-6">
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white border border-neutral-200/80 shadow-md group-hover:border-[#de0311] group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-[#de0311]" />
                  </div>
                  {/* Number Badge */}
                  <span className="absolute -top-1 -right-1 flex items-center justify-center h-7 w-7 bg-[#212120] text-white text-[10px]  font-mono rounded-full border border-white">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-lg sm:text-xl  text-[#212120] mb-3 group-hover:text-[#de0311] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm mb-6">
                  {step.description}
                </p>

                {/* Step Image */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm bg-neutral-50 max-w-sm mt-auto">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="320px"
                    className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-103"
                  />
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Slanted shape divider (Right-to-Left) transitioning to Testimonials bg-[#f7dcdc] */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
        >
          <path
            d="M1200 0 L1200 120 L0 120 Z"
            fill="#f7dcdc"
          />
        </svg>
      </div>
    </section>
  );
}
