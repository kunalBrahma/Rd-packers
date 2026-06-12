"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* MAIN NAVBAR WRAPPER — always solid white sticky */}
      <div className="sticky top-0 z-40 w-full bg-[#fcfcfc] shadow-sm border-b border-neutral-200">
        {/* 1. TOP INFORMATION BAR */}
        <div className="w-full text-xs py-2 px-4 sm:px-6 md:px-8 border-b bg-[#212120] border-neutral-800 text-[#fcfcfc] transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Left Info: GST & Trust Indicator */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-mono">
                <Award className="h-3.5 w-3.5 text-[#de0311]" />
                GSTIN: <span className="text-neutral-300">18AISPD0403G1ZL</span>
              </span>
            </div>

            {/* Right Info: Direct Contact Lines */}
            <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-1">
              <a
                href="mailto:andcarriers@gmail.com"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>andcarriers@gmail.com</span>
              </a>
              <a
                href="tel:+919435346000"
                className="flex items-center gap-1.5 text-[#fcfcfc] hover:text-[#de0311] transition-colors font-medium"
              >
                <Phone className="h-3.5 w-3.5 text-[#de0311]" />
                <span>+91 94353 46000</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVIGATION HEADER */}
        <header className="w-full py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="RD Packers And Carriers Logo"
                width={180}
                height={72}
                priority
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading text-lg lg:text-2xl font-bold tracking-tight text-[#212120] group-hover:text-[#de0311] transition-colors duration-300 inline-block leading-tight">
                RD Packers and Carriers
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors py-1.5",
                      isActive
                        ? "text-[#de0311]"
                        : "text-neutral-600 hover:text-[#de0311]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#de0311] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Call To Action */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-sm  px-5 py-2.5 bg-[#de0311] text-white hover:bg-[#de0311]/90 rounded-md transition-all duration-300 shadow-sm"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-[#212120] hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>
      </div>

      {/* 3. MOBILE MENU SLIDEOUT DRAWER */}
      {/* Background Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Content Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-[300px] bg-[#fcfcfc] p-6 shadow-xl transition-transform duration-300 ease-in-out transform md:hidden flex flex-col justify-between",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          {/* Header in Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="RD Packers And Carriers Logo"
                width={140}
                height={56}
                className="h-10 w-auto object-contain"
              />

            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-neutral-100 text-[#212120] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col gap-5 pt-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors py-1",
                    isActive ? "text-[#de0311]" : "text-neutral-600 hover:text-[#de0311]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer actions in Drawer */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col gap-4">
          <div className="text-xs text-neutral-500 font-mono mb-2">
            GSTIN: 18AISPD0403G1ZL
          </div>
          <a
            href="tel:+919435346000"
            className="flex items-center justify-center gap-2 text-sm  px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-[#212120] rounded-md transition-all duration-300"
          >
            <Phone className="h-4 w-4 text-[#de0311]" />
            <span>Call +91 94353 46000</span>
          </a>
        </div>
      </div>
    </>
  );
}
