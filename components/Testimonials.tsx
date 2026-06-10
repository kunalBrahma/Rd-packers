"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";

const REVIEWS = [
  {
    name: "Rajesh Sharma",
    type: "Household Relocation",
    rating: 5,
    text: "RD Packers And Carriers made our home shifting from Guwahati to Jorhat extremely smooth. The packing crew arrived on time and wrapped all fragile items with bubble wrap carefully. Not a single scratch on our furniture. Highly recommended!",
    source: "Google Reviews",
  },
  {
    name: "Vikram Gogoi",
    type: "Office Shifting",
    rating: 5,
    text: "We hired them to shift our design studio office. Minimal disruption, very professional handling of computer desktops, cabinets, and chairs. They completed the loading and setup ahead of schedule.",
    source: "Yelp Reviews",
  },
  {
    name: "Anjali Barua",
    type: "Vehicle Transportation",
    rating: 5,
    text: "Superb car carrier service. My Honda City was transported safely and without any dents. They kept sharing live tracking status. Best customer support experience.",
    source: "Google Reviews",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f7dcdc] pt-20 pb-28 sm:pt-24 sm:pb-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
            <span className="text-xs  uppercase tracking-widest text-[#de0311] font-mono">Testimonials</span>
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
            Real feedback from local and domestic shifting clients who trusted us with their valuable relocations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300"
            >

              {/* Rating & Review */}
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#de0311] text-[#de0311]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div>
                  <h4 className="text-sm  text-[#212120]">{review.name}</h4>
                  <span className="text-[10px] text-neutral-500 font-mono">{review.type}</span>
                </div>

                {/* Source Verification Badge */}
                <div className="flex items-center gap-1 text-[10px]  text-neutral-400 font-mono uppercase tracking-wider">
                  <MessageSquare className="h-3 w-3 text-neutral-400" />
                  <span>{review.source}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Shape divider — full-width diagonal transitioning to Gallery (bg-white) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="block w-full h-[28px] sm:h-[44px] md:h-[64px]"
        >
          <path
            d="M0 80 L1200 0 L1200 80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
