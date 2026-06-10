import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative w-full bg-[#4e0c10] pt-28 pb-20 sm:pt-36 sm:pb-24 text-center text-white overflow-hidden">

      {/* 1. Full-bleed Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/image-16.jpeg"
          alt="RD Packers And Carriers Transit Carrier"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-55 select-none pointer-events-none"
        />
        {/* Dark crimson gradient overlay to keep text completely legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4e0c10]/85 via-[#4e0c10]/60 to-[#4e0c10]/85 z-10" />
      </div>

      {/* 2. Top Shape Divider (transitions the preceding light section #ffffff into this dark section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 select-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M1200 120L0 120 0 0z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* 3. Content Container */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">

        {/* Tagline */}
        <span className="text-xs  tracking-widest text-[#de0311] uppercase font-mono mb-4 block animate-pulse">
          Get Started Today
        </span>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl  text-white tracking-tight leading-[1.15] mb-6 max-w-xl font-heading">
          Relocate Without the Stress.
        </h2>

        {/* Description */}
        <p className="text-neutral-300 text-sm sm:text-base mb-10 max-w-lg leading-relaxed">
          Contact our coordinates today for a flat, transparent shifting estimate.
          No hidden fees, no last-minute charges. Just seamless logistics.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base  px-8 py-3.5 bg-[#de0311] text-white hover:bg-[#de0311]/90 rounded-md transition-all duration-300 shadow-sm"
          >
            <span>Book Shifting</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href="tel:+919435346000"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 border border-white/20 hover:border-white text-white rounded-md transition-all duration-300"
          >
            <Phone className="h-4 w-4 text-[#de0311]" />
            <span className=" font-mono text-sm sm:text-base">+91 94353 46000</span>
          </a>
        </div>

        {/* GST & Verification detail */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-neutral-400 font-mono flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center w-full">
          <span>Verified Carrier Partner</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>GSTIN: 18AISPD0403G1ZL</span>
        </div>

      </div>

    </section>
  );
}
