import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Jhansi Head Office & Field Coordination",
  description:
    "Get in touch with Neev Welfare Foundation. Visit our Jhansi registered office, call +91 8756377826, or email info@neevwelfare.org for CSR, donations, and volunteer opportunities.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 page-entrance">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white py-14 md:py-20 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(0,135,62,0.08),transparent)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#00873e] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#001c37] font-bold">Contact Us</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <MapPin className="w-4 h-4" />
            <span>DIRECT ADMINISTRATIVE ACCESS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            Contact Neev Welfare Foundation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reach out directly to our leadership and ground team. We respond to all public inquiries, CSR partnership proposals, and donor requests within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection showTitle={false} />

      {/* Map & Field Visit Guide */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00873e] flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  <span>VISITING OUR HEAD OFFICE</span>
                </span>
                <h3 className="font-heading font-black text-2xl text-[#001c37]">
                  Location & Transportation Access
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our registered office is located at H. No-03, Ward No-01, Village Khajraha, Post Nauta, District Jhansi, Uttar Pradesh, India - 284202.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-600">
                  <p>
                    <strong className="text-[#001c37]">By Train:</strong> 10-15 minutes by auto-rickshaw or cab from Jhansi Junction.
                  </p>
                  <p>
                    <strong className="text-[#001c37]">By Road:</strong> Easily accessible via NH-44 (North-South Corridor) and Kanpur-Jhansi Highway.
                  </p>
                  <p>
                    <strong className="text-[#001c37]">Office Visits:</strong> Donors, CSR teams, and researchers are welcome during normal office hours (Monday–Friday, 9:30 AM to 6:00 PM). Please call ahead for scheduled field tours.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner h-64 sm:h-80 w-full relative bg-slate-100 flex items-center justify-center">
                  <iframe
                    title="Neev Welfare Foundation Jhansi Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115250.77114631317!2d78.50854497673559!3d25.448425712165243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d54972a91f%3A0xb5b796d11f67897c!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
