"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight, ShieldCheck, Clock, MapPin } from "lucide-react";

const TRUST_STATS = [
  { icon: ShieldCheck, label: "Insured Shifting", value: "100%" },
  { icon: Clock, label: "Years of Service", value: "10+" },
  { icon: MapPin, label: "Cities Covered", value: "50+" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fcfcfc] overflow-hidden flex items-center min-h-[92vh]">

      {/* ── Background Image ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-movers.png"
          alt="RD Packers And Carriers professional shifting team loading a truck"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-100 select-none pointer-events-none"
        />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-16 pb-28 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40 flex flex-col gap-6 items-start">
        
        {/* Main Glass Content Card */}
        <div className="max-w-xl flex flex-col gap-6 animate-fade-in-up p-8 sm:p-10 rounded-[2rem] border border-white/30 bg-white/35 backdrop-blur-lg shadow-2xl shadow-neutral-900/5">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block h-px w-8 bg-[#de0311]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#de0311] font-mono font-bold">
              Trusted Packers &amp; Movers · Guwahati
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] text-neutral-900 font-extrabold tracking-tight leading-[1.12]">
            We Move Your World<br />
            <span className="text-[#de0311]">Safely &amp; On Time.</span>
          </h1>

          {/* Sub-text */}
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
            From household relocation to office shifting and vehicle transport —
            RD Packers And Carriers delivers end-to-end moving solutions across
            Guwahati and all of India, with zero hidden charges.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 text-sm px-6 py-3.5 bg-[#de0311] text-white rounded-xl hover:bg-[#c00210] transition-all duration-300 shadow-lg shadow-[#de0311]/25 font-semibold"
            >
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="tel:+919435346000"
              className="group flex items-center justify-center sm:justify-start gap-3 text-neutral-800 hover:text-[#de0311] transition-colors duration-300"
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white/80 border border-neutral-200 group-hover:bg-[#de0311]/15 group-hover:border-[#de0311]/40 transition-all duration-300 shadow-sm">
                <Phone className="h-4 w-4 text-[#de0311]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-medium">Call Us Now</span>
                <span className="text-sm font-mono text-neutral-900 font-bold group-hover:text-[#de0311] transition-colors">+91 94353 46000</span>
              </div>
            </a>
          </div>

        </div>

        {/* Separate Stats Glass Card */}
        <div className="w-full max-w-md grid grid-cols-3 divide-x divide-neutral-200/40 border border-white/20 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-lg shadow-xl shadow-neutral-900/5 p-4 animate-fade-in-up">
          {TRUST_STATS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 px-3">
              <Icon className="h-4 w-4 text-[#de0311]" strokeWidth={2} />
              <span className="text-lg font-bold text-neutral-900 leading-none">{value}</span>
              <span className="text-[9px] text-neutral-500 text-center leading-snug font-medium uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom Diagonal Divider ───────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none select-none">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-[32px] sm:h-[48px] md:h-[64px]">
          <path d="M1200 80L0 80 0 0z" fill="#fcfcfc" />
        </svg>
      </div>

    </section>
  );
}
