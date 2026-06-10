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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Handle scroll detection for glassmorphism navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* MAIN NAVBAR WRAPPER (Absolute full-width on Home-unscrolled, sticky elsewhere) */}
      <div
        className={cn(
          "transition-all duration-300",
          isHome && !isScrolled
            ? "absolute top-0 left-0 w-full z-40 bg-transparent border-b border-white/10"
            : "sticky top-0 z-40 w-full bg-[#fcfcfc]/95 backdrop-blur-md shadow-sm border-b border-neutral-200"
        )}
      >
        {/* 1. TOP INFORMATION BAR */}
        <div
          className={cn(
            "w-full text-xs py-2 px-4 sm:px-6 md:px-8 border-b transition-colors duration-300",
            isHome && !isScrolled
              ? "bg-transparent border-white/10 text-neutral-300"
              : "bg-[#212120] border-neutral-800 text-[#fcfcfc]"
          )}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Left Info: GST & Trust Indicator */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-mono">
                <Award className="h-3.5 w-3.5 text-[#de0311]" />
                GSTIN: <span className={isHome && !isScrolled ? "text-neutral-200" : "text-neutral-300 "}>18AISPD0403G1ZL</span>
              </span>
            </div>

            {/* Right Info: Direct Contact Lines */}
            <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-1">
              <a
                href="mailto:andcarriers@gmail.com"
                className={cn(
                  "flex items-center gap-1.5 transition-colors",
                  isHome && !isScrolled ? "text-neutral-400 hover:text-white" : "text-neutral-400 hover:text-white"
                )}
              >
                <Mail className="h-3.5 w-3.5" />
                <span>andcarriers@gmail.com</span>
              </a>
              <a
                href="tel:+919435346000"
                className={cn(
                  "flex items-center gap-1.5 transition-colors font-medium",
                  isHome && !isScrolled ? "text-neutral-300 hover:text-white" : "text-[#fcfcfc] hover:text-[#de0311]"
                )}
              >
                <Phone className="h-3.5 w-3.5 text-[#de0311]" />
                <span>+91 94353 46000</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVIGATION HEADER */}
        <header
          className={cn(
            "w-full transition-all duration-300",
            isHome && !isScrolled ? "py-4" : isScrolled ? "py-3" : "py-4"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center">
              <Image
                src="/logo.svg"
                alt="RD Packers And Carriers Logo"
                width={180}
                height={72}
                priority
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
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
                      isHome && !isScrolled
                        ? isActive
                          ? "bg-white text-[#4e0c10] px-4 py-1.5 rounded-full "
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-[#de0311]"
                          : "text-neutral-600 hover:text-[#de0311]"
                    )}
                  >
                    {item.label}
                    {/* Underline for active page (only in sticky mode) */}
                    {isActive && !(isHome && !isScrolled) && (
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
              className={cn(
                "md:hidden p-2 rounded-md transition-colors focus:outline-none",
                isHome && !isScrolled ? "text-white hover:bg-white/10" : "text-[#212120] hover:bg-neutral-100"
              )}
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
            <div className="flex items-center">
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
