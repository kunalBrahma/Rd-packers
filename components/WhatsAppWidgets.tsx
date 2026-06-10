"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Dynamically import FloatingWhatsApp to prevent SSR hydration mismatches
const FloatingWhatsApp = dynamic(
  () => import("react-floating-whatsapp").then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function WhatsAppWidgets() {
  return (
    <>
      {/* 1. Desktop View: Floating WhatsApp Widget */}
      <div className="hidden md:block">
        <FloatingWhatsApp
          phoneNumber="919706290723"
          accountName="RD Packers & Carriers"
          avatar="/whatsapp.jpg"
          statusMessage="Typically replies within minutes"
          chatMessage="Hello! How can we help you with your shifting requirements today? 🤝"
          placeholder="Type a message..."
          notification={true}
          buttonStyle={{
            backgroundColor: "#de0311",
            right: "2rem",
            bottom: "2rem",
          }}
          chatboxStyle={{
            borderRadius: "16px",
          }}
        />
      </div>

      {/* 2. Mobile View: Sticky Bottom Bar (Call & WhatsApp) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-200/80 px-4 py-3.5 z-40 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex items-center gap-3 pb-safe">
        {/* Call Helpline Button */}
        <a
          href="tel:+919435346000"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#de0311] hover:bg-[#de0311]/90 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Phone className="h-4 w-4" />
          <span>Call Helpline</span>
        </a>

        {/* WhatsApp Direct Button */}
        <a
          href="https://wa.me/919706290723"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#212120] hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
        >
          <FaWhatsapp className="h-4.5 w-4.5" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
}
