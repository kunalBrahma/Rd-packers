"use client";

import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Household Relocation",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(""); // Clear error when user types
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.movingFrom.trim() || !formData.movingTo.trim() || !formData.moveDate) {
      setError("Please fill in all required fields (*).");
      return;
    }

    // Format WhatsApp message
    const formattedText = encodeURIComponent(
      `*RD Packers And Carriers - Shifting Quote Request*\n` +
      `-------------------------------------\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Service:* ${formData.service}\n` +
      `*Moving From:* ${formData.movingFrom.trim()}\n` +
      `*Moving To:* ${formData.movingTo.trim()}\n` +
      `*Preferred Date:* ${formData.moveDate}\n` +
      `*Message:* ${formData.message.trim() || "N/A"}`
    );

    // Redirect to WhatsApp
    window.open(`https://wa.me/919706290723?text=${formattedText}`, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border border-neutral-200/80 border-t-2 border-t-[#de0311] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h3 className="text-xl font-medium text-[#212120] mb-6 tracking-tight">
        Request Shifting Quote
      </h3>

      {error && (
        <div className="mb-6 p-3 bg-[#de0311]/5 border border-[#de0311]/20 rounded-xl text-[#de0311] text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200"
            required
          />
        </div>

        {/* Service dropdown */}
        <div>
          <label htmlFor="service" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
            Service Required *
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="Household Relocation">Household Relocation</option>
              <option value="Office & Commercial Shifting">Office & Commercial Shifting</option>
              <option value="Packing & Unpacking">Packing & Unpacking</option>
              <option value="Loading & Transit">Loading & Transit</option>
              <option value="Vehicle Shifting">Vehicle Shifting</option>
              <option value="Warehousing & Storage">Warehousing & Storage</option>
              <option value="Specialty Moving">Specialty Moving</option>
              <option value="Other Logistics Assistance">Other Logistics Assistance</option>
            </select>
            {/* Custom select arrow dropdown */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* From / To row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="movingFrom" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
              Moving From *
            </label>
            <input
              type="text"
              id="movingFrom"
              name="movingFrom"
              value={formData.movingFrom}
              onChange={handleChange}
              placeholder="e.g. Guwahati"
              className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="movingTo" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
              Moving To *
            </label>
            <input
              type="text"
              id="movingTo"
              name="movingTo"
              value={formData.movingTo}
              onChange={handleChange}
              placeholder="e.g. Delhi"
              className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200"
              required
            />
          </div>
        </div>

        {/* Move Date */}
        <div>
          <label htmlFor="moveDate" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
            Preferred Move Date *
          </label>
          <input
            type="date"
            id="moveDate"
            name="moveDate"
            value={formData.moveDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200 cursor-pointer"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs  text-neutral-500 uppercase tracking-wider mb-1.5">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="List heavy furniture, special instructions, etc."
            className="w-full px-3.5 py-2.5 bg-white border border-neutral-200/80 rounded-xl text-sm text-[#212120] focus:outline-none focus:border-[#de0311] focus:ring-1 focus:ring-[#de0311]/25 transition-all duration-200 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#de0311] hover:bg-[#de0311]/90 text-white text-xs  uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer mt-2"
        >
          <span>Send Booking via WhatsApp</span>
          <FaWhatsapp className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
