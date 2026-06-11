"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight, ShieldCheck, Clock, MapPin } from "lucide-react";

const TRUST_STATS = [
  { icon: ShieldCheck, label: "Insured Shifting", value: "100%" },
  { icon: Clock,       label: "Years of Service", value: "10+" },
  { icon: MapPin,      label: "Cities Covered",   value: "50+" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#1a0305] overflow-hidden flex items-center min-h-[92vh]">

      {/* ── Background Image ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-movers.png"
          alt="RD Packers And Carriers professional shifting team loading a truck"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-55 select-none pointer-events-none"
        />
        {/* left-dominant overlay so text reads perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0305]/80 via-[#1a0305]/50 to-[#1a0305]/85 lg:bg-gradient-to-r lg:from-[#1a0305]/90 lg:via-[#1a0305]/55 lg:to-[#1a0305]/10" />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-16 pb-28 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40">
        <div className="max-w-2xl flex flex-col gap-6 animate-fade-in-up">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block h-px w-8 bg-[#de0311]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#de0311] font-mono">
              Trusted Packers &amp; Movers · Guwahati
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] text-white font-bold tracking-tight leading-[1.12]">
            We Move Your World<br />
            <span className="text-[#de0311]">Safely &amp; On Time.</span>
          </h1>

          {/* Sub-text */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg">
            From household relocation to office shifting and vehicle transport —
            RD Packers And Carriers delivers end-to-end moving solutions across
            Guwahati and all of India, with zero hidden charges.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 bg-[#de0311] text-white rounded-lg hover:bg-[#c00210] transition-all duration-300 shadow-lg shadow-[#de0311]/25"
            >
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="tel:+919435346000"
              className="group flex items-center gap-3 text-white hover:text-[#de0311] transition-colors duration-300"
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 group-hover:bg-[#de0311]/15 group-hover:border-[#de0311]/40 transition-all duration-300">
                <Phone className="h-4 w-4 text-[#de0311]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-medium">Call Us Now</span>
                <span className="text-sm font-mono text-white">+91 94353 46000</span>
              </div>
            </a>
          </div>

          {/* ── Trust Strip ───────────────────────────────── */}
          <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm max-w-lg">
            {TRUST_STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 py-4 px-3">
                <Icon className="h-4 w-4 text-[#de0311]" strokeWidth={2} />
                <span className="text-lg font-bold text-white leading-none">{value}</span>
                <span className="text-[10px] text-neutral-400 text-center leading-snug">{label}</span>
              </div>
            ))}
          </div>

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
