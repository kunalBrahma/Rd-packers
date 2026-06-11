"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, Eye } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/gallery/image-1.jpeg",
    alt: "Professional packing with bubble wrap and carton boxes",
    category: "Packing",
    title: "Carton Packaging",
    description: "High-grade cardboard boxes packed and labeled for systematic unpacking."
  },
  {
    src: "/gallery/image-2.jpeg",
    alt: "Household item packing and wrapping",
    category: "Packing",
    title: "Bubble Wrap Protection",
    description: "Multi-layer bubble wrap shield for electronics and fragile goods."
  },
  {
    src: "/gallery/image-3.jpeg",
    alt: "Movers loading furniture and household goods into transit truck",
    category: "Loading",
    title: "Heavy Cargo Loading",
    description: "Carefully loading heavy wooden furniture with secure anchoring."
  },
  {
    src: "/gallery/image-4.jpeg",
    alt: "Movers wrapping delicate items",
    category: "Packing",
    title: "Delicate Glass Wrap",
    description: "Cushioning and padding delicate glass shelves and crockery."
  },
  {
    src: "/gallery/image-5.jpeg",
    alt: "Transportation truck parked and ready for transit",
    category: "Transportation",
    title: "Closed Cargo Transit",
    description: "Our weatherproof closed containers keep items dry and secure."
  },
  {
    src: "/gallery/image-6.jpeg",
    alt: "Household shifting items and wardrobe packing",
    category: "Packing",
    title: "Furniture Guarding",
    description: "Securing sofa corners and dining table edges against friction dents."
  },
  {
    src: "/gallery/image-7.jpeg",
    alt: "Loading large household items",
    category: "Loading",
    title: "Sofa Relocation",
    description: "Safely maneuvering large sectionals through tight doorways."
  },
  {
    src: "/gallery/image-8.jpeg",
    alt: "Office items packed and labeled for commercial relocation",
    category: "Office Shifting",
    title: "Office Relocation",
    description: "Labeling files and securing desktop PCs for office setup."
  },
  {
    src: "/gallery/image-9.jpeg",
    alt: "Transit truck loaded with items",
    category: "Transportation",
    title: "Secure Cargo Tie-down",
    description: "Using heavy-duty straps to prevent shifting during transit."
  },
  {
    src: "/gallery/image-10.jpeg",
    alt: "Packing household electronics",
    category: "Packing",
    title: "Electronics Packing",
    description: "Custom boxing and anti-static wrapping for television sets."
  },
  {
    src: "/gallery/image-11.jpeg",
    alt: "Movers unloading items at destination",
    category: "Loading",
    title: "Careful Unloading",
    description: "Movers unloading goods at the destination with complete safety."
  },
  {
    src: "/gallery/image-12.jpeg",
    alt: "Office shifting documents and drawers moving",
    category: "Office Shifting",
    title: "Corporate File Transit",
    description: "Organized carton boxes for archives and project folders."
  },
  {
    src: "/gallery/image-13.jpeg",
    alt: "Wrapping sofas in protective cling wrap",
    category: "Packing",
    title: "Sofa Cling Wrap",
    description: "Dust and moisture-proof plastic wrap layers for fabric sofas."
  },
  {
    src: "/gallery/image-14.jpeg",
    alt: "Movers packing clothes and closets",
    category: "Packing",
    title: "Wardrobe Moving",
    description: "Hanger boxes and soft sheet packing to prevent clothing creases."
  },
  {
    src: "/gallery/image-15.jpeg",
    alt: "Movers loading and securing cargo in a closed truck",
    category: "Loading",
    title: "Truck Loading Optimization",
    description: "Tightly packing cargo to eliminate gaps and restrict movements."
  },
  {
    src: "/gallery/image-16.jpeg",
    alt: "Fleet of transport vehicles",
    category: "Transportation",
    title: "Our Carrier Fleet",
    description: "Well-maintained trucks of various capacities for local & intercity relocations."
  },
  {
    src: "/gallery/vehicle-1.jpg",
    alt: "Preparing Mahindra Bolero SUV for carrier loading",
    category: "Transportation",
    title: "Vehicle Carrier Loading",
    description: "Positioning the customer's SUV safely behind our customized closed-container car carrier truck."
  },
  {
    src: "/gallery/vehicle-2.jpg",
    alt: "Driving Bolero SUV onto container carrier ramp",
    category: "Transportation",
    title: "Safe Carrier Ramp Entry",
    description: "Carefully driving the vehicle onto the heavy-duty loading ramp into the container."
  },
  {
    src: "/gallery/vehicle-3.jpg",
    alt: "Mahindra Bolero secured inside car carrier container",
    category: "Transportation",
    title: "Secured Vehicle Transit",
    description: "Tire-strapped and tightly anchored vehicle inside the container for scratch-free relocation."
  },
  {
    src: "/gallery/warehouse.png",
    alt: "Secure storage and warehousing facility interior",
    category: "Storage",
    title: "Storage & Warehousing",
    description: "Clean, CCTV-monitored, and spacious storage warehouse for short or long-term household/commercial goods storage."
  },
  {
    src: "/gallery/image-18.jpeg",
    alt: "Shifting crew loading truck",
    category: "Loading",
    title: "Relocation Teamwork",
    description: "Professional team working in unison for quick, synchronized moves."
  },
  {
    src: "/gallery/image-19.jpeg",
    alt: "Unpacking household items",
    category: "Loading",
    title: "Unpacking & Setup",
    description: "Reassembling beds and placing furniture in designated spots."
  }
];

const CATEGORIES = ["All", "Packing", "Loading", "Transportation", "Office Shifting", "Storage"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter items based on active tab
  const filteredImages = GALLERY_IMAGES.filter((img) =>
    activeFilter === "All" ? true : img.category === activeFilter
  );

  // Determine items to display
  // If "All" is active, show only 6 initially unless showAll is toggled
  const displayedImages =
    activeFilter === "All" && !showAll
      ? filteredImages.slice(0, 6)
      : filteredImages;

  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
            <span className="text-xs  uppercase tracking-widest text-[#de0311] font-mono">Real Work Gallery</span>
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight">
            See Our Shifting Gallery
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Real snaps demonstrating our packaging materials, handling standards, and carrier transport methods.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs  uppercase tracking-wider transition-all duration-300 border ${activeFilter === cat
                ? "bg-[#de0311] border-[#de0311] text-white shadow-sm"
                : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedImages.map((item, idx) => (
            <div
              key={item.src}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-neutral-200/40 bg-neutral-100 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              {/* Main Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority={idx < 3}
                loading={idx < 3 ? "eager" : "lazy"}
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#212120]/95 via-[#212120]/30 to-transparent z-10" />

              {/* Float Category Tag */}
              <span className="absolute top-4 left-4 bg-[#de0311] text-white text-[9px]  uppercase tracking-wider px-2.5 py-1 rounded-md z-20 font-mono">
                {item.category}
              </span>

              {/* Hover Zoom Icon (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 border border-white/20">
                <ZoomIn className="h-4 w-4" />
              </div>

              {/* Text Meta overlaid at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 text-white flex flex-col justify-end">
                <h3 className="text-base sm:text-lg  tracking-tight mb-1 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2 max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button (Only active when "All" category is selected and not showing all) */}
        {activeFilter === "All" && filteredImages.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 hover:border-neutral-300 text-xs  uppercase tracking-wider rounded-lg bg-white hover:bg-neutral-50 transition-colors duration-300 text-[#212120]"
            >
              {showAll ? "Show Less" : `Show All Photos (${filteredImages.length})`}
            </button>
          </div>
        )}

      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-10 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Enlarged Shifting Snapshot"
                width={1200}
                height={900}
                className="object-contain max-w-full max-h-full rounded-lg select-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
