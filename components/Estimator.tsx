"use client";

import React, { useState } from "react";
import { MapPin, Calendar, Truck, User, Phone, Calculator, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Estimator() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: "Household Shifting",
    shiftingType: "Local", // "Local" | "Intercity"
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShiftingTypeChange = (type: "Local" | "Intercity") => {
    setFormData((prev) => ({ ...prev, shiftingType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.from || !formData.to || !formData.date) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Format WhatsApp text message
    const formattedText = encodeURIComponent(
      `*RD Packers And Carriers - Shifting Request*\n` +
      `-------------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service} (${formData.shiftingType})\n` +
      `*Moving From:* ${formData.from}\n` +
      `*Moving To:* ${formData.to}\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `-------------------------------------\n` +
      `_Submitted via website enquiry form._`
    );

    const whatsappUrl = `https://wa.me/919706290723?text=${formattedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-10 sm:-mt-14 lg:-mt-16">
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

        {/* Left Visual Panel: Dynamic Calculator Result */}
        <div className="lg:col-span-4 bg-[#212120] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle design element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#de0311] opacity-[0.06] rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-6 text-neutral-400">
              <Calculator className="h-4 w-4 text-[#de0311]" />
              <span className="text-xs uppercase tracking-wider font-mono">Quick Enquiry</span>
            </div>

            <h2 className="text-xl font-bold text-white leading-snug mb-3">
              Get a Custom Quote in Minutes
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Fill in your details and our team will send you a transparent, itemised quote directly via WhatsApp — no hidden charges, no pressure.
            </p>
          </div>

          {/* Quick Credential Highlights */}
          <div className="mt-6 border-t border-white/10 pt-6 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#de0311] flex-shrink-0" />
              <span className="text-xs text-neutral-300 font-medium">GST Compliant Documentation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#de0311] flex-shrink-0" />
              <span className="text-xs text-neutral-300 font-medium">Experienced Packing Crew</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#de0311] flex-shrink-0" />
              <span className="text-xs text-neutral-300 font-medium">Transit Insurance Support</span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Form Title */}
            <div className="mb-6">
              <h3 className="text-xl  text-[#212120] tracking-tight">Get an Instant Shifting Estimate</h3>
              <p className="text-xs text-neutral-500 mt-1">Fill in the fields below. We will calculate the range and send detailed specs via WhatsApp.</p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs  text-neutral-700">Your Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs  text-neutral-700">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-xs  text-neutral-700">Service Type *</label>
                <div className="relative">
                  <Truck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="Household Shifting">Household Shifting</option>
                    <option value="Office & Commercial Shifting">Office & Commercial Shifting</option>
                    <option value="Packing & Unpacking">Packing & Unpacking</option>
                    <option value="Vehicle Shifting">Vehicle Shifting</option>
                    <option value="Warehousing & Storage">Warehousing & Storage</option>
                  </select>
                  {/* Select custom arrow */}
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shifting Distance Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs  text-neutral-700">Distance *</label>
                <div className="grid grid-cols-2 gap-2 h-[42px]">
                  <button
                    type="button"
                    onClick={() => handleShiftingTypeChange("Local")}
                    className={`text-xs  rounded-lg border transition-all duration-200 flex items-center justify-center ${formData.shiftingType === "Local"
                      ? "bg-[#de0311] border-[#de0311] text-white shadow-sm"
                      : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                      }`}
                  >
                    Local (Within City)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleShiftingTypeChange("Intercity")}
                    className={`text-xs  rounded-lg border transition-all duration-200 flex items-center justify-center ${formData.shiftingType === "Intercity"
                      ? "bg-[#de0311] border-[#de0311] text-white shadow-sm"
                      : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                      }`}
                  >
                    Intercity (Domestic)
                  </button>
                </div>
              </div>

              {/* Moving From */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="from" className="text-xs  text-neutral-700">Moving From *</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    id="from"
                    name="from"
                    type="text"
                    required
                    placeholder="Origin city/area"
                    value={formData.from}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Moving To */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="to" className="text-xs  text-neutral-700">Moving To *</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    id="to"
                    name="to"
                    type="text"
                    required
                    placeholder="Destination city/area"
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Move Date */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label htmlFor="date" className="text-xs  text-neutral-700">Preferred Move Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Submit Action */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#de0311] hover:bg-[#de0311]/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <FaWhatsapp className="h-4.5 w-4.5" />
              <span>Get Detailed Quote via WhatsApp</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
