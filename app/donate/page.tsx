import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { DonationSection } from "@/components/sections/DonationSection";

export const metadata: Metadata = {
  title: "Donate Online | 80G Tax-Exempt Contribution",
  description:
    "Support grassroots transformation through Neev Welfare Foundation. Tax Exemption under Section 80G of the Income Tax Act.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/donate/`,
  },
};

const TAX_BENEFITS = [
  {
    title: "80G Tax Exemption",
    desc: "Neev Welfare Foundation is registered under Section 80G of the Income Tax Act, 1961.",
  },
  {
    title: "Instant Digital Receipt",
    desc: "A digitally signed 80G certificate with your PAN details is dispatched to your registered email immediately.",
  },
  {
    title: "100% Cashless Transparency",
    desc: "Donations are recorded transparently and audited in accordance with Section 8 statutory non-profit regulations.",
  },
  {
    title: "Statutory Reporting",
    desc: "Annual Form 10BD is filed directly with the Income Tax Department so your donation reflects in your AIS / Form 26AS.",
  },
];

const DONATION_FAQS = [
  {
    q: "Why is my PAN required for 80G tax exemption?",
    a: "Under the guidelines issued by the Central Board of Direct Taxes (CBDT), all non-profits must report the donor's Permanent Account Number (PAN) in Form 10BD for the official donation certificate to reflect in your Annual Information Statement (AIS).",
  },
  {
    q: "When will I receive my 80G tax exemption certificate?",
    a: "Your formal 80G donation receipt is generated and emailed to you within 24 to 48 hours of payment verification. For monthly recurring donors, a consolidated annual tax certificate is issued at the close of the financial year.",
  },
  {
    q: "Can I donate directly via NEFT, RTGS, or Wire Transfer?",
    a: "Yes. For direct institutional bank transfers, RTGS/NEFT instructions, or corporate CSR donations, please contact our official finance desk at info@neevwelfare.org or +91 8756377826. Our finance team will provide the verified statutory details and issue your 80G tax receipt promptly.",
  },
  {
    q: "Can international donors contribute?",
    a: "Currently, Neev Welfare Foundation accepts donations from Indian bank accounts and Indian donors. For foreign currency or NRI contributions, please contact our administrative desk at info@neevwelfare.org.",
  },
];

export default function DonatePage() {
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
            <span className="text-[#001c37] font-bold">Donate</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>80G TAX-EXEMPT CONTRIBUTIONS • SECTION 8 REGISTERED</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            Support Grassroots Transformation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your generous contribution directly funds rural digital classrooms, women-run micro-enterprises, preventive health camps, and native afforestation across Bundelkhand.
          </p>
        </div>
      </section>

      {/* Tax Benefits Strip */}
      <section className="py-8 bg-emerald-50/40 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TAX_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-emerald-200/60 shadow-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00873e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-black text-xs text-[#001c37]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Donation Portal (Suspense wrapped) */}
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#00873e] border-t-transparent" />
            <p className="mt-2 text-xs text-slate-500 font-bold">
              Loading secure donation portal...
            </p>
          </div>
        }
      >
        <DonationSection showTitle={false} />
      </Suspense>

      {/* FAQs on Donations */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-[#001c37] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>DONOR ASSISTANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight">
              Frequently Asked Questions on Giving
            </h2>
          </div>

          <div className="space-y-4">
            {DONATION_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
              >
                <h3 className="font-heading font-black text-sm sm:text-base text-[#001c37] mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
