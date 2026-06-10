"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] text-neutral-600 pt-16 pb-24 md:pb-10 border-t border-neutral-200/60 z-30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">

          {/* Column 1 - Brand Info (Spans 4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="RD Packers And Carriers Logo"
                width={140}
                height={56}
                className="h-12 w-auto object-contain select-none"
              />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm mt-2">
              RD Packers And Carriers is your trusted logistics partner for safe, secure, and hassle-free relocation.
              We specialize in home shifting, commercial moving, and vehicle transport.
            </p>
            {/* GST Verification */}
            <div className="flex items-center gap-2 mt-2 bg-white px-3 py-1.5 rounded-lg border border-neutral-200/60 w-fit">
              <ShieldCheck className="h-4 w-4 text-[#de0311]" />
              <span className="text-[10px]  font-mono text-neutral-800">GSTIN: 18AISPD0403G1ZL</span>
            </div>
          </div>

          {/* Column 2 - Services (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-xs  uppercase tracking-wider text-neutral-800 font-mono">Our Services</h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="hover:text-[#de0311] transition-colors">Household Relocation</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#de0311] transition-colors">Office Shifting</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#de0311] transition-colors">Vehicle Transport</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#de0311] transition-colors">Packing & Unpacking</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#de0311] transition-colors">Storage Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-xs  uppercase tracking-wider text-neutral-800 font-mono">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#de0311] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#de0311] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#de0311] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#de0311] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#de0311] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-xs  uppercase tracking-wider text-neutral-800 font-mono">Contact Details</h4>
            <ul className="flex flex-col gap-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#de0311] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500 leading-relaxed">
                  Kerakuchi, Opposite Hockey Stadium, Sarusajai, Guwahati
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#de0311] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+919435346000" className="hover:text-[#de0311] transition-colors font-mono font-medium">
                    +91 94353 46000
                  </a>
                  <a href="tel:03613544262" className="hover:text-[#de0311] transition-colors font-mono text-xs text-neutral-500 mt-0.5">
                    0361-3544262 (Office)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#de0311] flex-shrink-0" />
                <a href="mailto:andcarriers@gmail.com" className="hover:text-[#de0311] transition-colors font-mono">
                  andcarriers@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-300/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-neutral-500 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} RD Packers And Carriers. All Rights Reserved.</span>
          </div>

          {/* Designer Credit */}
          <div className="flex items-center gap-1 text-neutral-500 text-center sm:text-right">
            <span>Designed by</span>
            <a
              href="https://sitemakerlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-neutral-800 hover:text-[#de0311] transition-colors"
            >
              sitemakerlab.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
