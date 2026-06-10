"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronRight,
  X,
  AlertTriangle,
  Home,
  Briefcase,
  Package,
  Truck,
  Car,
  Warehouse,
  Sparkles,
  ShieldCheck,
  Tag
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Service items matching the user requested lists exactly
const SERVICES_DATA = [
  {
    categoryKey: "household",
    title: "Household Relocation",
    icon: Home,
    description: "Complete home shifting services designed to transport your life safely. From apartments to large villas, we handle your furniture, appliances, and valuables with professional loading and customized transit routes.",
    items: [
      "Home Shifting Services",
      "Local House Shifting",
      "Domestic Relocation",
      "Intercity Relocation",
      "Interstate Relocation",
      "Apartment Moving",
      "Villa and Bungalow Relocation"
    ],
    image: "/gallery/image-6.jpeg",
    whatsappMsg: "Household Relocation Shifting",
  },
  {
    categoryKey: "office",
    title: "Office & Commercial Relocation",
    icon: Briefcase,
    description: "Corporate and commercial relocations with minimal business downtime. We ensure secure packing of electronics, servers, files, and furniture with systematic labeling and unloading.",
    items: [
      "Office Shifting Services",
      "Corporate Relocation",
      "Industrial Equipment Moving",
      "Warehouse Relocation",
      "Shop and Retail Store Shifting"
    ],
    image: "/gallery/image-8.jpeg",
    whatsappMsg: "Office Shifting",
  },
  {
    categoryKey: "packing",
    title: "Packing & Unpacking",
    icon: Package,
    description: "Professional multi-layer packing with high-quality boxes, bubble wrap, foam sheets, and customized wooden crates for fragile glassware, electronics, and valuables.",
    items: [
      "Professional Packing Services",
      "Fragile Item Packing",
      "Furniture Packing",
      "Electronics and Appliance Packing",
      "Unpacking and Setup Services"
    ],
    image: "/gallery/image-2.jpeg",
    whatsappMsg: "Packing & Unpacking Service",
  },
  {
    categoryKey: "loading",
    title: "Loading & Transportation",
    icon: Truck,
    description: "Safe loading and unloading by experienced crews. Heavy handling equipment, FTL (Full Truck Load) container moving, and secure door-to-door delivery.",
    items: [
      "Loading and Unloading Services",
      "Safe Goods Transportation",
      "Full Truck Load (FTL) Moving",
      "Part Load (Shared Load) Moving",
      "Door-to-Door Delivery"
    ],
    image: "/gallery/image-15.jpeg",
    whatsappMsg: "Loading & Transit Booking",
  },
  {
    categoryKey: "vehicle",
    title: "Vehicle Transportation",
    icon: Car,
    description: "Secure carrier transit for cars, bikes, and two-wheelers. We use safe loading ramps, custom wheel-ties, and weather-proof container transit to protect your vehicle.",
    items: [
      "Car Transportation Services",
      "Bike Transportation Services",
      "Two-Wheeler Shifting",
      "Four-Wheeler Relocation"
    ],
    image: "/gallery/image-17.jpeg",
    whatsappMsg: "Vehicle Transport Shifting",
  },
  {
    categoryKey: "storage",
    title: "Storage & Warehousing",
    icon: Warehouse,
    description: "Clean, secure, and climate-controlled storage for short or long terms. Features 24/7 CCTV surveillance, regular inventory checks, and private household item lockers.",
    items: [
      "Household Goods Storage",
      "Short-Term Storage",
      "Long-Term Warehousing",
      "Secure Warehouse Solutions",
      "Climate-Controlled Storage (if available)"
    ],
    image: "/gallery/image-12.jpeg",
    whatsappMsg: "Storage & Warehousing Solution",
  },
  {
    categoryKey: "specialty",
    title: "Specialty Moving Services",
    icon: Sparkles,
    description: "Handling and transportation of heavy, delicate, or high-value specialty items like pianos, security safes, large fine art canvases, and heavy marble items.",
    items: [
      "Furniture Shifting",
      "Piano and Heavy Item Moving",
      "Antique and Artwork Relocation",
      "Pet Relocation Assistance",
      "Plant Shifting Services"
    ],
    image: "/gallery/image-3.jpeg",
    whatsappMsg: "Specialty Shifting Request",
  },
  {
    categoryKey: "added",
    title: "Additional Value-Added Services",
    icon: ShieldCheck,
    description: "End-to-end relocation management features, packing material supplies, installation utilities, and transit insurances for complete convenience.",
    items: [
      "Packing Material Supply",
      "Dismantling and Reassembly of Furniture",
      "AC and Appliance Installation/Uninstallation",
      "Insurance Assistance for Goods in Transit",
      "Real-Time Shipment Tracking",
      "Express and Same-Day Moving Services",
      "End-to-End Relocation Management"
    ],
    image: "/gallery/image-1.jpeg",
    whatsappMsg: "Value-Added Services Booking",
  }
];

const CATEGORY_TABS = [
  { key: "all", label: "All Services" },
  { key: "household", label: "Household Shifting" },
  { key: "office", label: "Office & Corporate" },
  { key: "packing", label: "Packing" },
  { key: "loading", label: "Loading & Transit" },
  { key: "vehicle", label: "Vehicle Carrier" },
  { key: "storage", label: "Warehousing" },
  { key: "specialty", label: "Specialty Moving" },
  { key: "added", label: "Value-Added" }
];

const POPULAR_SEARCHES = [
  "Local House Shifting",
  "Office Shifting",
  "Car Transportation",
  "Piano and Heavy Item",
  "Fragile Item Packing",
  "Goods Storage",
  "Insurance Assistance",
  "Dismantling and Reassembly",
  "Pet Relocation"
];

const TAB_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  all: Tag,
  household: Home,
  office: Briefcase,
  packing: Package,
  loading: Truck,
  vehicle: Car,
  storage: Warehouse,
  specialty: Sparkles,
  added: ShieldCheck
};

export default function ServicesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const handlePopularSearchClick = (tag: string) => {
    setSearchQuery(tag);
    setActiveCategory("all"); // Search globally when a specific tag is requested
  };

  // Dynamic count calculation based on current search query for category badges
  const getCategoryCount = (catKey: string) => {
    return SERVICES_DATA.filter((s) => {
      const query = searchQuery.toLowerCase().trim();
      let matchesSearch = true;
      if (query) {
        const titleMatch = s.title.toLowerCase().includes(query);
        const descMatch = s.description.toLowerCase().includes(query);
        const itemsMatch = s.items.some((item) =>
          item.toLowerCase().includes(query)
        );
        matchesSearch = titleMatch || descMatch || itemsMatch;
      }
      return matchesSearch && (catKey === "all" || s.categoryKey === catKey);
    }).length;
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    // 1. Filter by category tab
    if (activeCategory !== "all" && service.categoryKey !== activeCategory) {
      return false;
    }

    // 2. Filter by search query text
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const titleMatch = service.title.toLowerCase().includes(query);
    const descMatch = service.description.toLowerCase().includes(query);
    const itemsMatch = service.items.some((item) =>
      item.toLowerCase().includes(query)
    );

    return titleMatch || descMatch || itemsMatch;
  });

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
            <span className="text-xs  uppercase tracking-widest text-[#de0311] font-mono">Service Directory</span>
            <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight">
            Comprehensive Relocation Solutions
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We provide end-to-end shifting services tailored to your specific logistics needs. Type in the bar below to search quickly.
          </p>
        </div>

        {/* Live Search Input Bar */}
        <div className="max-w-xl mx-auto mb-6 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search shifting services... (e.g. Piano, Car, Insurance)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-neutral-50 border border-neutral-200/80 rounded-2xl text-sm sm:text-base text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white focus:shadow-md transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#de0311] transition-colors p-1"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            )}
          </div>
        </div>

        {/* Popular Searches Chips */}
        <div className="max-w-xl mx-auto mb-10 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
            <Tag className="h-3 w-3 text-[#de0311]" /> Popular Searches:
          </span>
          {POPULAR_SEARCHES.map((term, i) => (
            <button
              key={i}
              onClick={() => handlePopularSearchClick(term)}
              className="text-[11px] font-medium px-2.5 py-1 bg-neutral-100 hover:bg-[#de0311]/5 hover:text-[#de0311] border border-neutral-200/50 hover:border-[#de0311]/30 text-neutral-600 rounded-lg transition-all duration-200 cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto px-4">
          {CATEGORY_TABS.map((tab) => {
            const count = getCategoryCount(tab.key);
            const isActive = activeCategory === tab.key;
            const IconComponent = TAB_ICONS[tab.key] || Tag;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs  uppercase tracking-wider transition-all duration-300 border cursor-pointer whitespace-nowrap ${isActive
                  ? "bg-[#de0311]/5 border-[#de0311] text-[#de0311] shadow-sm "
                  : "bg-white hover:bg-neutral-50 border-neutral-200/80 text-neutral-600 hover:text-[#212120]"
                  }`}
              >
                <IconComponent className={`h-3.5 w-3.5 transition-colors duration-300 ${isActive ? "text-[#de0311]" : "text-neutral-400 group-hover:text-neutral-500"}`} />
                <span>{tab.label}</span>
                <span
                  className={`inline-flex items-center justify-center text-[10px] px-1.5 py-0.5 rounded-md font-mono  transition-colors duration-300 ${isActive ? "bg-[#de0311]/15 text-[#de0311]" : "bg-neutral-100 text-neutral-500"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid Container */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const formattedMsg = encodeURIComponent(
                `*RD Packers And Carriers - Service Booking*\n` +
                `-------------------------------------\n` +
                `*Requested Service:* ${service.whatsappMsg}\n` +
                `Please provide estimate and availability detail.`
              );
              const whatsappUrl = `https://wa.me/919706290723?text=${formattedMsg}`;
              const IconComponent = service.icon;

              const isQueryActive = searchQuery.trim().length > 0;
              const hasDirectSearchMatch =
                isQueryActive &&
                (service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  service.description.toLowerCase().includes(searchQuery.toLowerCase()));

              return (
                <div
                  key={idx}
                  className={`group bg-[#fcfcfc] rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${hasDirectSearchMatch
                    ? "border-[#de0311]/70 shadow-md bg-white ring-1 ring-[#de0311]/15 scale-[1.01]"
                    : "border-neutral-200/60 hover:border-neutral-300 hover:shadow-md"
                    }`}
                >
                  <div>
                    {/* Visual Card Image Header with Floating Icon Badge */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100 mb-5 border border-neutral-200/30">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-w-7xl) 33vw, 400px"
                          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-103"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4e0c10]/20 to-[#de0311]/5 flex items-center justify-center">
                          <IconComponent className="h-12 w-12 text-[#de0311]/30" />
                        </div>
                      )}

                      {/* Floating Category Icon Badge for instant recognition */}
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-neutral-200/50 p-2 rounded-xl shadow-sm text-[#de0311] z-10 flex items-center justify-center">
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Content Header - Title & Icon */}
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <div className="flex-shrink-0 mt-1 p-1.5 rounded-lg bg-[#de0311]/10 text-[#de0311] group-hover:bg-[#de0311] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl  text-[#212120] mb-2 font-heading group-hover:text-[#de0311] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-5">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Sub-services tags list with dynamic matching highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.items.map((item, itemIdx) => {
                        const matchesQuery =
                          isQueryActive &&
                          item.toLowerCase().includes(searchQuery.toLowerCase().trim());
                        return (
                          <span
                            key={itemIdx}
                            className={`transition-all duration-200 text-[10px]  px-2.5 py-1 rounded-md font-mono ${matchesQuery
                              ? "bg-[#de0311]/10 border border-[#de0311]/40 text-[#de0311]  scale-[1.03] shadow-sm"
                              : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
                              }`}
                          >
                            {item}
                          </span>
                        );
                      })}
                    </div>

                    {/* Book Now Button Redirecting to WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#de0311] hover:bg-[#de0311]/90 text-white text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span>Book Service</span>
                      <FaWhatsapp className="h-4 w-4" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="text-center py-12 max-w-md mx-auto">
            <div className="flex items-center justify-center h-12 w-12 bg-neutral-100 rounded-full text-neutral-400 mx-auto mb-4 border border-neutral-200">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h3 className="text-base sm:text-lg  text-[#212120] mb-1">No Shifting Services Found</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mb-6">
              We couldn't find any services matching "{searchQuery}". Try typing in general tags like "Household" or "Vehicle".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="inline-flex items-center justify-center px-4 py-2 border border-neutral-200 hover:border-neutral-300 text-xs  uppercase tracking-wider rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 text-[#212120]"
            >
              Clear Search Query
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
