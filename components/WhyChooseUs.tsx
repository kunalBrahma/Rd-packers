"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, FileCheck, Landmark, PackagePlus } from "lucide-react";

const VALUE_PROPS = [
  {
    title: "GST Registered & Certified",
    description: "Fully compliant corporate shifting operations. Verified GSTIN: 18AISPD0403G1ZL.",
    icon: FileCheck,
  },
  {
    title: "100% Insured Shifting",
    description: "Optional comprehensive transit insurance coverage to safeguard your valuables.",
    icon: ShieldCheck,
  },
  {
    title: "Zero Hidden Charges",
    description: "Upfront binding estimates with complete cost breakdowns. No last-minute surprises.",
    icon: Landmark,
  },
  {
    title: "Trained Packing Specialists",
    description: "Multi-layered heavy bubble wrapping, foam sheets, and customized wooden crates.",
    icon: PackagePlus,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#eaeaea] pt-20 pb-28 sm:pt-24 sm:pb-36 relative overflow-hidden border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Large Visual Image */}
          <div className="lg:col-span-5 relative group">
            {/* Visual Frame Background Accent */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#de0311]/20 to-transparent rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            {/* Main Image Container */}
            <div className="relative z-10 aspect-[4/5] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
              <Image
                src="/gallery/image-18.jpeg"
                alt="RD Packers And Carriers Shifting Crew working in unison"
                fill
                sizes="(max-w-7xl) 50vw, 400px"
                className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-102"
              />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-3.5 z-20">
                <div className="flex items-center justify-center h-10 w-10 bg-[#de0311]/10 rounded-full text-[#de0311] flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#212120] tracking-wider">Verified Shifting</h4>
                  <span className="text-[10px] text-neutral-500 font-mono font-medium">1,500+ Safe Relocations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Credential Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
              <span className="text-xs  uppercase tracking-widest text-[#de0311] font-mono">Why Choose Us</span>
            </div>

            {/* Section Header */}
            <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight mb-5">
              Secure Shifting Done Right
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mb-10 leading-relaxed max-w-xl">
              Relocating doesn't have to be stressful. We combine professional, trained loaders, heavy
              bubble-wrapping, and certified logistics processes to guarantee peace of mind.
            </p>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {VALUE_PROPS.map((prop, idx) => {
                const IconComp = prop.icon;
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white border border-neutral-200/60 shadow-sm text-[#de0311] group-hover:bg-[#de0311] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base  text-[#212120] mb-1 group-hover:text-[#de0311] transition-colors duration-300">
                        {prop.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Slanted shape divider (Left-to-Right) transitioning to Process bg-white (#ffffff) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
        >
          <path
            d="M0 0 L1200 120 L0 120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
