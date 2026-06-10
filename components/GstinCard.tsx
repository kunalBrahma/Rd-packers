"use client";

import React, { useState } from "react";
import { Award, Mail, Phone, Copy, Check } from "lucide-react";

export default function GstinCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("18AISPD0403G1ZL");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-md bg-[#fcfcfc] border border-neutral-200/85 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

      {/* Visual Accent Corner Ribbon */}
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-2.5 right-[-24px] bg-[#de0311] text-white text-[9px]  font-mono tracking-widest uppercase py-1 px-8 rotate-45 text-center shadow-sm">
          Verified
        </div>
      </div>

      {/* Card Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center h-10 w-10 bg-[#de0311]/10 rounded-lg text-[#de0311]">
          <Award className="h-5.5 w-5.5" />
        </div>
        <div>
          <h3 className="text-base  text-[#212120] leading-none mb-1">RD Packers And Carriers</h3>
          <span className="text-[10px] text-neutral-400 font-mono tracking-wider">REGISTRATION PROFILE</span>
        </div>
      </div>

      {/* GSTIN Copy Box */}
      <div className="bg-neutral-50 border border-neutral-200/50 rounded-xl p-4.5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px]  text-neutral-400 uppercase tracking-wider font-mono">Official GSTIN</span>
          <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded  font-mono flex items-center gap-1">
            <span className="h-1 w-1 bg-green-500 rounded-full"></span> ACTIVE
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 bg-white border border-neutral-200/40 rounded-lg px-3 py-2">
          <span className="font-mono text-sm sm:text-base  text-[#212120] tracking-wider select-all">
            18AISPD0403G1ZL
          </span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 text-[10px] uppercase  tracking-wider px-2 py-1 rounded transition-all duration-200 cursor-pointer ${copied
              ? "bg-green-600 text-white"
              : "bg-[#de0311] hover:bg-[#de0311]/90 text-white"
              }`}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* Card Contact details list */}
      <div className="space-y-3.5 text-xs text-neutral-500">
        <div className="flex items-center justify-between py-1.5 border-b border-neutral-100">
          <span className="font-medium text-neutral-400">HELPLINE</span>
          <a href="tel:+919435346000" className="font-mono  text-[#212120] hover:text-[#de0311] transition-colors">
            +91 94353 46000
          </a>
        </div>

        <div className="flex items-center justify-between py-1.5 border-b border-neutral-100">
          <span className="font-medium text-neutral-400">EMAIL SUPPORT</span>
          <a href="mailto:andcarriers@gmail.com" className="font-mono  text-[#212120] hover:text-[#de0311] transition-colors">
            andcarriers@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-between py-1.5">
          <span className="font-medium text-neutral-400">OFFICE PHONE</span>
          <a href="tel:03613544262" className="font-mono  text-[#212120] hover:text-[#de0311] transition-colors">
            0361-3544262
          </a>
        </div>
      </div>

    </div>
  );
}
