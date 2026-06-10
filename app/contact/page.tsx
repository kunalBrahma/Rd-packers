import React from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";
import { Phone, Mail, MapPin, Award, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | RD Packers And Carriers",
  description: "Get in touch with RD Packers And Carriers for premium packers and movers services in Guwahati and pan-India. Request a free quote via our direct WhatsApp form. GSTIN: 18AISPD0403G1ZL.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#fcfcfc] flex flex-col">

      {/* 1. Page Hero Header */}
      <PageHero
        title="Contact Us"
        description="Get in touch with our support crew or request a binding estimate for your upcoming relocation. We reply instantly."
        bgImage="/gallery/image-9.jpeg"
      />

      {/* 2. Contact Details & Form Grid Section */}
      <section className="relative bg-white pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Direct Contact Info (Helpline & Credentials) */}
            <div className="lg:col-span-5 space-y-8">

              {/* Header inside Left Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
                  <span className="text-xs uppercase tracking-widest text-[#de0311] font-mono">Connect With Us</span>
                </div>

                <h2 className="text-3xl sm:text-4xl text-[#212120] tracking-tight leading-tight mb-5">
                  Let's Plan Your Next Move
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                  Have questions about our shifting processes, packing standards, or transit insurance? Reach out to us directly or request an estimate.
                </p>
              </div>

              {/* Redesigned Unified Directory Card */}
              <div className="bg-[#fcfcfc] border border-neutral-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
                  Official Directory
                </h3>

                <div className="space-y-6">
                  {/* Phone Helpline Support */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 text-[#de0311] flex-shrink-0">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-mono mb-0.5">Calling Helpline</span>
                      <a href="tel:+919435346000" className="block text-sm text-[#212120] hover:text-[#de0311] transition-colors font-mono">
                        +91 94353 46000
                      </a>
                      <a href="tel:03613544262" className="block text-xs text-neutral-500 hover:text-[#de0311] transition-colors font-mono mt-0.5">
                        0361-3544262 (Office Line)
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-200/50" />

                  {/* WhatsApp Support */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 text-green-600 flex-shrink-0">
                      <FaWhatsapp className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-mono mb-0.5">WhatsApp Direct</span>
                      <a href="https://wa.me/919706290723" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#212120] hover:text-[#de0311] transition-colors font-mono">
                        +91 97062 90723
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-200/50" />

                  {/* Email Support */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 text-[#de0311] flex-shrink-0">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-mono mb-0.5">Email Support</span>
                      <a href="mailto:andcarriers@gmail.com" className="block text-sm text-[#212120] hover:text-[#de0311] transition-colors font-mono">
                        andcarriers@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-200/50" />

                  {/* Address Location */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 text-[#de0311] flex-shrink-0">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-mono mb-0.5">Office Address</span>
                      <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                        Kerakuchi, Opposite Hockey Stadium, Sarusajai, Guwahati
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-200/50" />

                  {/* Official GSTIN Card Info Board */}
                  <div className="p-4 bg-neutral-50/50 border border-neutral-200/40 rounded-xl flex items-center gap-3">
                    <div className="flex items-center justify-center h-9 w-9 bg-white border border-neutral-200/60 rounded-lg text-[#de0311] flex-shrink-0">
                      <Award className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-[#212120] tracking-wider mb-0.5 uppercase font-medium">GST Registered</span>
                      <span className="text-[10px] text-neutral-500 font-mono select-all">GSTIN: 18AISPD0403G1ZL</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column: Shifting Form */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>

          </div>

        </div>

      </section>

      {/* 3. Call To Action Footer Banner */}
      <CallToAction />

    </div>
  );
}
