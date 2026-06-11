"use client";

import React from "react";

interface Client {
  name: string;
  logo: React.ReactNode;
}

const CLIENTS: Client[] = [
  {
    name: "State Bank of India (SBI)",
    logo: <img src="/logos/sbi.svg" alt="SBI Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none" />
  },
  {
    name: "HDFC Bank",
    logo: <img src="/logos/hdfc.svg" alt="HDFC Bank Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none" />
  },
  {
    name: "Axis Bank",
    logo: <img src="/logos/axis.svg" alt="Axis Bank Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none" />
  },
  {
    name: "Tata Group",
    logo: <img src="/logos/tata.svg" alt="Tata Group Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none" />
  },
  {
    name: "Bharti Airtel",
    logo: <img src="/logos/airtel.svg" alt="Bharti Airtel Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none" />
  },
  {
    name: "Mahindra & Mahindra",
    logo: <img src="/logos/mahindra.svg" alt="Mahindra & Mahindra Logo" className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none" />
  },
  {
    name: "LIC of India",
    logo: (
      <svg viewBox="0 0 100 100" className="h-10 sm:h-12 w-10 sm:w-12 text-[#00529b]">
        <circle cx="50" cy="50" r="42" fill="currentColor" />
        <path d="M 50 25 C 50 25, 42 35, 42 45 C 42 55, 50 65, 50 65 C 50 65, 58 55, 58 45 C 58 35, 50 25, 50 25 Z" fill="#ffd200" />
        <path d="M 50 32 C 52 35, 55 38, 55 42 C 55 46, 52 48, 50 48 C 48 48, 45 46, 45 42 C 45 38, 48 35, 50 32 Z" fill="#e31e24" />
        <path d="M 28 65 C 38 60, 44 65, 50 72 C 56 65, 62 60, 72 65" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "MRF",
    logo: (
      <svg viewBox="0 0 130 90" className="h-8 sm:h-10 w-12 sm:w-14 text-[#d31f26]" fill="currentColor">
        <g transform="skewX(-15)">
          <path d="M 10 20 L 25 20 L 32 40 L 39 20 L 54 20 L 54 70 L 42 70 L 42 38 L 35 55 L 29 55 L 22 38 L 22 70 L 10 70 Z" />
          <path d="M 60 20 L 85 20 C 93 20, 97 24, 97 31 C 97 38, 93 41, 88 42 L 98 70 L 84 70 L 75 45 L 72 45 L 72 70 L 60 70 Z M 72 30 L 72 37 L 82 37 C 84 37, 85 36, 85 34 C 85 32, 84 30, 82 30 Z" />
          <path d="M 103 20 L 125 20 L 125 30 L 115 30 L 115 40 L 123 40 L 123 50 L 115 50 L 115 70 L 103 70 Z" />
        </g>
      </svg>
    )
  },
  {
    name: "SBI Life Insurance",
    logo: (
      <svg viewBox="0 0 100 100" className="h-10 sm:h-12 w-10 sm:w-12 text-[#0066B3]">
        <path d="M 30 20 A 20 20 0 1 0 30 60 A 20 20 0 1 0 30 20 Z M 30 33 A 7 7 0 1 1 30 47 A 7 7 0 1 1 30 33 Z M 26 40 L 34 40 L 34 60 L 26 60 Z" fill="currentColor" fillRule="evenodd" />
        <path d="M 68 22 C 68 22, 85 32, 85 50 C 85 68, 68 78, 68 78 C 68 78, 51 68, 51 50 C 51 32, 68 22, 68 22 Z" fill="#8CC63F" opacity="0.85" />
        <path d="M 68 31 C 76 40, 76 58, 68 67 C 60 58, 60 40, 68 31 Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "Punjab National Bank (PNB)",
    logo: (
      <svg viewBox="0 0 100 100" className="h-10 sm:h-12 w-10 sm:w-12 text-[#A20F24]">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
        <circle cx="50" cy="50" r="22" fill="#F8B12C" />
        <path d="M 44 38 L 58 38 C 62 38, 65 41, 65 45 C 65 49, 62 52, 58 52 L 48 52 L 48 65 L 44 65 Z M 48 42 L 48 48 L 57 48 C 59 48, 61 47, 61 45 C 61 43, 59 42, 57 42 Z" fill="#A20F24" />
      </svg>
    )
  },
  {
    name: "UCO Bank",
    logo: (
      <svg viewBox="0 0 100 100" className="h-10 sm:h-12 w-10 sm:w-12 text-[#0072BC]">
        <rect x="10" y="10" width="80" height="80" rx="4" fill="currentColor" />
        <path d="M 50 22 L 50 42 L 30 42 L 30 58 L 50 58 L 50 78 L 66 78 L 66 58 L 70 58 L 70 42 L 66 42 L 66 22 Z" fill="#FFCC00" />
        <rect x="50" y="42" width="16" height="16" fill="#0072BC" />
      </svg>
    )
  },
  {
    name: "Oil India Limited",
    logo: (
      <svg viewBox="0 0 100 100" className="h-10 sm:h-12 w-10 sm:w-12 text-[#005B30]">
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="8" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 6" />
        <path d="M 50 30 C 50 30, 62 48, 62 56 C 62 64, 50 72, 50 72 C 50 72, 38 64, 38 56 C 38 48, 50 30, 50 30 Z" fill="#FFCC00" />
      </svg>
    )
  },
  {
    name: "NHPC Limited",
    logo: (
      <svg viewBox="0 0 100 100" className="h-10 sm:h-12 w-10 sm:w-12 text-[#008A4B]">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M 22 45 C 30 35, 40 55, 50 45 C 60 35, 70 55, 78 45" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M 22 60 C 30 50, 40 70, 50 60 C 60 50, 70 70, 78 60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M 50 20 L 50 30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function Clients() {
  // Quadruple the array to ensure seamless infinite looping with large spacing on ultra-wide screens
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="w-full bg-[#fcfcfc] py-10 sm:py-12 relative overflow-hidden border-b border-neutral-200/40">
      {/* Inline styles for custom infinite scrolling marquee and performance will-change */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-25%, 0, 0);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
          will-change: transform;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#de0311] font-mono font-bold block mb-1">
          Corporate Clients
        </span>
        <h2 className="text-lg sm:text-xl text-[#212120] tracking-tight">
          Trusted by India's Leading Corporations &amp; Banks
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
        {/* Left Side Gradient Blur Fading */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fcfcfc] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Strip */}
        <div className="marquee-container flex items-center gap-14 sm:gap-20">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-default w-32 sm:w-36 text-center"
            >
              {/* Logo Symbol Container (standardized dimensions to keep logo sizes exact) */}
              <div className="h-10 sm:h-12 w-full flex items-center justify-center">
                {client.logo}
              </div>

              {/* Client Text Label (placed below) */}
              <span className="text-[10px] sm:text-xs  text-neutral-600 hover:text-[#212120] transition-colors duration-300 select-none leading-tight tracking-tight mt-1 h-8 flex items-start justify-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side Gradient Blur Fading */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fcfcfc] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
