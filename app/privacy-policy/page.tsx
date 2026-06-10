import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | RD Packers And Carriers",
  description: "Learn how RD Packers And Carriers collects, uses, and protects your shifting and booking data. Fully transparent packers & movers.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-[#fcfcfc] py-28 sm:py-36 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs  text-[#de0311] hover:text-[#de0311]/80 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212120] tracking-tight mb-3 font-heading">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-mono">
            Last Updated: June 10, 2026
          </p>
        </div>

        {/* Intro Highlight Box */}
        <div className="bg-neutral-50 border border-neutral-200/60 p-6 rounded-2xl mb-10 flex gap-4 items-start shadow-sm">
          <div className="flex items-center justify-center h-10 w-10 bg-[#de0311]/10 rounded-full text-[#de0311] flex-shrink-0">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base  text-[#212120] mb-1">Our Commitment to Your Privacy</h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              At RD Packers And Carriers, we treat your shifting requests and personal data with absolute security. We never sell,
              rent, or share your information with third-party advertisers. All collected details are used strictly for
              estimating costs and conducting moving operations.
            </p>
          </div>
        </div>

        {/* Policy Contents */}
        <div className="space-y-8 text-neutral-600 text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">1. Information We Collect</h2>
            <p className="mb-3">
              To provide accurate packers & movers estimates, we collect key information when you fill in our shifting estimator or call our hotlines:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-500 mb-3">
              <li><strong>Contact Details</strong>: Your name, phone number, and email address.</li>
              <li><strong>Shifting Locations</strong>: Origin address (Moving From) and destination address (Moving To).</li>
              <li><strong>Move Preferences</strong>: Shifting service type (e.g. Household, Vehicle) and preferred moving date.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">2. How We Use Your Information</h2>
            <p className="mb-3">
              We use the gathered information to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-500 mb-3">
              <li>Calculate dynamic moving cost ranges.</li>
              <li>Coordinate our vehicle loaders and wrapping crews on shifting day.</li>
              <li>Communicate directly with you regarding booking confirmations and schedule details via Phone or WhatsApp.</li>
              <li>Generate GST compliant billing invoices (GSTIN: 18AISPD0403G1ZL).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">3. Shifting Security & Insurance</h2>
            <p>
              Your security is our primary focus. Shifting details are shared only with the specific loading crew and supervisor assigned to your move. For transit safety, we offer optional comprehensive goods insurance, ensuring protection against any unforeseen damages during vehicle transport.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">4. Cookies & Web Tracking</h2>
            <p>
              Our website uses basic session cookies to optimize loading times and facilitate correct redirect pathways (e.g., our WhatsApp Estimator redirect). We do not run intrusive behavior tracking or sell database details to third-party brokers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-t border-neutral-200 pt-8 mt-10">
            <h2 className="text-lg sm:text-xl  text-[#212120] mb-3 font-heading">5. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy or wish to request the deletion of your moving coordinates, please feel free to reach out to our team:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mail Box */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 bg-neutral-100 rounded-lg text-[#de0311]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase  text-neutral-400 font-mono">Support Email</h4>
                  <a href="mailto:andcarriers@gmail.com" className="text-xs sm:text-sm  text-[#212120] hover:text-[#de0311] transition-colors">
                    andcarriers@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Box */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 bg-neutral-100 rounded-lg text-[#de0311]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase  text-neutral-400 font-mono">Hotline Support</h4>
                  <a href="tel:+919435346000" className="text-xs sm:text-sm  text-[#212120] hover:text-[#de0311] transition-colors font-mono">
                    +91 94353 46000
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
