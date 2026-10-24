import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Bell, Mail, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { NewsSection } from "@/components/sections/NewsSection";

export const metadata: Metadata = {
  title: "News & Field Updates | Stories of Change",
  description:
    "Read the latest field reports, stories of transformation, digital classroom rollouts, and environmental action from Neev Welfare Foundation.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/news/`,
  },
};

export default function NewsPage() {
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
            <span className="text-[#001c37] font-bold">News & Updates</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Newspaper className="w-4 h-4" />
            <span>COMMUNITY VOICES & GROUND DISPATCHES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            News, Stories & Field Reports
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Witness the real people, courageous women, inspiring children, and green transformations taking shape across our village clusters.
          </p>
        </div>
      </section>

      {/* Main News Section with Filter & Modal Viewer */}
      <NewsSection showTitle={false} />

      {/* Media & Press Contact Box */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
                PRESS & MEDIA INQUIRIES
              </span>
              <h3 className="font-heading font-black text-xl text-[#001c37]">
                Covering grassroots social development?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                Our communications desk provides high-resolution ground photos, case studies, and field visit arrangements for journalists and researchers.
              </p>
            </div>

            <a
              href="mailto:info@neevwelfare.org?subject=Press%20or%20Media%20Inquiry%20-%20Neev%20Welfare"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#001c37] hover:bg-[#0a2540] text-white text-xs font-bold shadow-md transition-all hover:scale-105 shrink-0"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Contact Communications Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
