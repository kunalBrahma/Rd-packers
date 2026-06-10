import React from "react";
import PageHero from "@/components/PageHero";
import ServicesList from "@/components/ServicesList";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Our Services | RD Packers And Carriers",
  description: "Comprehensive packers & movers services in Guwahati and domestic locations. Household, commercial, vehicles, packing, and warehousing. GSTIN: 18AISPD0403G1ZL.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#fcfcfc]">

      {/* 1. Page Hero Header */}
      <PageHero
        title="Our Shifting Services"
        description="Reliable, secure, and professional packers and movers solutions. Fully GST-compliant corporate and household relocations."
        bgImage="/gallery/image-9.jpeg"
      />

      {/* 2. Interactive Services List with Search (Hydrated SSR) */}
      <ServicesList />

      {/* 3. Call To Action Banner (Full SSR) */}
      <CallToAction />

    </div>
  );
}
