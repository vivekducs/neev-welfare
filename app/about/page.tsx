import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Heart,
  ArrowRight,
  Target,
  Eye,
  Award,
  FileText,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { MISSION_PILLARS, FAQS } from "@/lib/data";
import { PillarCard } from "@/components/cards/PillarCard";

export const metadata: Metadata = {
  title: "About Us | Mission, Governance & 80G Status",
  description:
    "Learn about Neev Welfare Foundation's mission, registered Section 8 status, 80G and 12A tax certifications, and our journey in empowering rural communities across Bundelkhand, Uttar Pradesh.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>INSTITUTIONAL GOVERNANCE • SECTION 8 NONPROFIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            About Neev Welfare Foundation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Founded with the belief that lasting social transformation starts at the foundational grassroots level in rural Bundelkhand.
          </p>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
                OUR ORIGIN & VALUES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight leading-snug">
                Bridging Opportunity Gaps in India’s Most Underserved Heartland
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bundelkhand has historically faced acute semi-arid climatic vulnerability, seasonal water scarcity, and educational disparities. Neev Welfare Foundation was incorporated under Section 8 of the Companies Act, 2013, to establish sustainable, locally owned community institutions.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than offering short-term charity, our approach incubates long-term capacity: modern solar-powered computer labs in village schools, micro-enterprises run by women collectives, doorstep diagnostic clinics, and native afforestation with community guardianship.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-5 h-5 text-[#00873e]" />
                    <h3 className="font-heading font-black text-sm text-[#001c37]">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To empower 50,000 rural families by 2030 through foundational education, economic independence, and environmental stewardship.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-5 h-5 text-[#00873e]" />
                    <h3 className="font-heading font-black text-sm text-[#001c37]">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A self-sustaining rural Bharat where every child learns with 21st-century tools, women lead local economies, and ecosystems thrive.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-96 sm:h-[460px]">
                <Image
                  src="/images/v26_1649.png"
                  alt="Neev Welfare Ground Impact in Jhansi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight">
              Our 4 Pillars of Transformation
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Each pillar forms an interlocking support system that ensures rural families transition from vulnerability to self-reliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSION_PILLARS.map((pillar, idx) => (
              <PillarCard key={idx} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Certifications & Compliance Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
              REGULATORY COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight mt-1">
              Verified Transparency & Tax Deductibility
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Donors and corporate partners trust Neev Welfare Foundation because of our uncompromised regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00873e] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-black text-base text-[#001c37]">
                Section 80G Certification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered under Section 80G of the Income Tax Act, 1961. Official 80G donation receipts are provided for all contributions.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#00873e]">
                Instant Form 10BE Receipt
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-black text-base text-[#001c37]">
                Section 12A Compliance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered under Section 12A, affirming our legal standing as an institution working strictly without profit motive for national public benefit.
              </p>
              <div className="pt-2 text-xs font-semibold text-blue-600">
                100% Tax-Exempt Entity
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-black text-base text-[#001c37]">
                MCA CSR-1 Registration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered on the MCA MCA21 portal (Reg: UP/2022/0329184) to execute corporate CSR programs under Schedule VII of the Companies Act, 2013.
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-800">
                Audited Social Balance Sheets
              </div>
            </div>
          </div>

          {/* Quick FAQ Section */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80">
            <h3 className="text-xl sm:text-2xl font-black text-[#001c37] font-heading mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h4 className="font-heading font-bold text-sm text-[#001c37] mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white p-8 sm:p-12 text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight">
            Be Part of Our Next Chapter
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of changemakers supporting foundational education, healthcare, and livelihoods in Bundelkhand.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="py-3 px-8 rounded-full bg-white text-[#001c37] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 shadow-md transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-red-600 fill-red-600" />
              <span>DONATE WITH 80G BENEFIT</span>
            </Link>
            <Link
              href="/team"
              className="py-3 px-8 rounded-full bg-emerald-800/80 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-all border border-emerald-400/40"
            >
              <span>MEET OUR LEADERSHIP</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
