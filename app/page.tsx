import React from "react";
import Hero from "@/components/Hero";
import Estimator from "@/components/Estimator";
import ServicesBento from "@/components/ServicesBento";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Best Packers & Movers in Guwahati | RD Packers And Carriers",
  description: "RD Packers And Carriers offers professional, secure, and affordable packers and movers services in Guwahati and pan-India. Get a free shifting quote via WhatsApp.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Structured Data for MovingCompany */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            "name": "RD Packers And Carriers",
            "image": "https://rdpackers.in/logo.svg",
            "@id": "https://rdpackers.in/#movingcompany",
            "url": "https://rdpackers.in",
            "telephone": "+91-9435346000",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kerakuchi, Opposite Hockey Stadium, Sarusajai",
              "addressLocality": "Guwahati",
              "addressRegion": "Assam",
              "postalCode": "781040",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.1158,
              "longitude": 91.7712
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://wa.me/919706290723"
            ]
          })
        }}
      />
      
      {/* 1. Hero Section (with full-bleed background and dark red tint) */}
      <Hero />
      
      {/* 2. Floating Estimator Form Widget */}
      <Estimator />

      {/* 3. Services Bento Grid Section */}
      <ServicesBento />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Relocation Shifting Process Section */}
      <Process />

      {/* 5. Client Testimonials & Reviews Grid */}
      <Testimonials />

      {/* 6. Team Shifting Gallery Grid (Movers photo showcase) */}
      <Gallery />

      {/* 7. Call To Action Banner (with top slanted shape divider) */}
      <CallToAction />

    </div>
  );
}
