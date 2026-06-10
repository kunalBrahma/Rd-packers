import React from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import GstinCard from "@/components/GstinCard";
import { ShieldCheck, Clock, Eye, FileText, Award } from "lucide-react";

export const metadata = {
  title: "About Us | RD Packers And Carriers",
  description: "Learn more about RD Packers And Carriers, your trusted Packers & Movers partner in Guwahati and pan-India. Fully GST-compliant corporate & household shifting. GSTIN: 18AISPD0403G1ZL.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#fcfcfc] flex flex-col">

      {/* 1. Page Hero Header */}
      <PageHero
        title="About RD Packers And Carriers"
        description="Your trusted logistics partner for safe, reliable, and stress-free packing and moving services. GST-registered and corporate-ready."
        bgImage="/gallery/image-10.jpeg"
      />

      {/* 2. Our Story Section with bottom slant divider */}
      <section className="relative bg-white pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
                <span className="text-xs uppercase tracking-widest text-[#de0311] font-mono">Our Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight mb-6">
                Dedicated to Safe & Seamless Shifting
              </h2>

              <div className="space-y-6 text-neutral-500 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong className=" text-neutral-800">RD Packers And Carriers</strong>, we understand that relocating is not just about moving boxes—it's about moving lives, dreams, and businesses. Since our inception, we have been committed to delivering logistics services of the highest standard to individuals, families, and corporates.
                </p>
                <p>
                  Based in Guwahati and serving clients across the country, we have built a reputation for excellence in packing, loading, transportation, and setup services. Whether it is a local household shifting or a complex interstate commercial move, we treat every item with the utmost care and professionalism.
                </p>
                <p>
                  Our team consists of highly trained packers and loaders who use multi-layered wrapping, customized wooden crates, and secure transit ties to ensure zero transit damage.
                </p>
              </div>
            </div>

            {/* Right Column: Narrative Image */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#de0311]/10 to-transparent rounded-2xl blur-lg opacity-75 z-0" />

              <div className="relative z-10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
                <Image
                  src="/gallery/image-11.jpeg"
                  alt="RD Packers And Carriers packing specialists preparing items"
                  fill
                  sizes="(max-w-7xl) 40vw, 500px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                />

                {/* Floating Trust Badge */}
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-3 z-20">
                  <div className="flex items-center justify-center h-10 w-10 bg-[#de0311]/10 rounded-full text-[#de0311] flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs  uppercase text-[#212120] tracking-wider">Certified Movers</h4>
                    <span className="text-[10px] text-neutral-500 font-mono">GSTIN: 18AISPD0403G1ZL</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Slanted shape divider (Right-to-Left) transitioning to Core Values bg-[#f4f4f4] */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
          >
            <path
              d="M1200 0 L1200 120 L0 120 Z"
              fill="#f4f4f4"
            />
          </svg>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="relative bg-[#f4f4f4] pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-20">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
              <span className="text-xs uppercase tracking-widest text-[#de0311] font-mono">Our Pillars</span>
              <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight">
              Values That Drive Us
            </h2>
            <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Our operations are guided by a commitment to reliability, integrity, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Value 1: Transparency */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 bg-[#de0311]/10 rounded-xl text-[#de0311] mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">
                100% Transparency
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                No hidden fees, no last-minute surprises. We provide upfront binding estimates and detailed cost breakdowns so you know exactly what to expect.
              </p>
            </div>

            {/* Value 2: Transit Safety */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 bg-[#de0311]/10 rounded-xl text-[#de0311] mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">
                Uncompromising Safety
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                From heavy bubble wrapping to customized wooden crates for fragile glassware and appliances, our multi-layered packing ensures all your goods arrive intact.
              </p>
            </div>

            {/* Value 3: Punctual Dispatch */}
            <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 bg-[#de0311]/10 rounded-xl text-[#de0311] mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">
                Punctual Delivery
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                We plan each route carefully to optimize transit duration, coordinate dispatches with precision, and ensure your shifting is completed strictly on schedule.
              </p>
            </div>

          </div>
        </div>

        {/* Slanted shape divider (Left-to-Right) transitioning to Verification bg-white (#ffffff) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[24px] sm:h-[40px] md:h-[60px]"
          >
            <path
              d="M0 0 L1200 120 L0 120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 4. Redesigned Verification Credentials Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Context & Bullet checklist */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1.5px] w-5 bg-[#de0311]"></span>
                <span className="text-xs uppercase tracking-widest text-[#de0311] font-mono">Verified Credibility</span>
              </div>

              <h2 className="text-3xl sm:text-4xl  text-[#212120] tracking-tight leading-tight mb-6">
                Fully Registered & Corporate Ready
              </h2>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
                RD Packers And Carriers is a fully certified carrier partner. We specialize in corporate and commercial relocations, providing all required transit documents, tax invoices, and legal shifting credentials.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex-shrink-0 text-[#de0311]">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm  text-[#212120]">GST Compliant</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Official tax invoices for easy expense claims.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex-shrink-0 text-[#de0311]">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm  text-[#212120]">E-Way Bill Enabled</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Hassle-free interstate checkpost approvals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex-shrink-0 text-[#de0311]">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm  text-[#212120]">Insurance Assistance</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Partnership with top insurers to protect transit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex-shrink-0 text-[#de0311]">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm  text-[#212120]">Corporate Shifting Docs</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Complete itemized lists & dispatch logs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Digital Certificate Card */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <GstinCard />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Call To Action Footer Banner */}
      <CallToAction />

    </div>
  );
}
