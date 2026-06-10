"use client";

import React from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage?: string;
}

export default function PageHero({ title, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative w-full bg-[#4e0c10] overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 flex items-center">

      {/* 1. Full-bleed Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 select-none pointer-events-none"
          />
          {/* Crimson overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4e0c10]/95 via-[#4e0c10]/80 to-[#4e0c10]/95 z-10" />
        </div>
      )}

      {/* 2. Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full text-center sm:text-left">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white tracking-tight leading-tight mb-4 font-heading">
            {title}
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* 3. Shape Divider (transitioning to body background #ffffff) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 select-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
        >
          <path
            d="M1200 120L0 120 0 0z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}
