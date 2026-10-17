import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { BOARD_OF_DIRECTORS, CORE_LEADERSHIP_TEAM } from "@/lib/data";
import { DirectorCard } from "@/components/cards/DirectorCard";
import { TeamLeadCard } from "@/components/cards/TeamLeadCard";
import { SITE_CONFIG } from "@/lib/constants";

interface LeadershipSectionProps {
  showTitle?: boolean;
}

export function LeadershipSection({ showTitle = true }: LeadershipSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100" id="leadership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              OUR LEADERSHIP & TEAM
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Guided by dedicated changemakers committed to grassroots transformation, institutional transparency, and sustainable social impact. A Section 8 Nonprofit Organization.
            </p>
          </div>
        )}

        {/* 1. Board of Directors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#001c37] font-heading tracking-tight">
              BOARD OF DIRECTORS
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Executive Leadership, Strategic Governance & Founding Changemakers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BOARD_OF_DIRECTORS.map((director, idx) => (
              <DirectorCard key={idx} director={director} />
            ))}
          </div>
        </div>

        {/* 2. Core Leadership Team */}
        <div className="mt-16">
          {/* Centered Divider with Capsule Pill */}
          <div className="relative flex items-center justify-center my-10">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full text-xs font-black tracking-widest text-white uppercase bg-gradient-to-r from-[#001c37] to-red-600 shadow-md">
                CORE LEADERSHIP TEAM
              </span>
            </div>
          </div>

          {/* Core Leadership Grid: 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_LEADERSHIP_TEAM.map((lead, idx) => (
              <TeamLeadCard key={idx} lead={lead} />
            ))}
          </div>
        </div>

        {/* Governance Trust Strip */}
        <div className="mt-14 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00873e] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-black text-xs text-[#001c37] font-heading tracking-wide">
                {SITE_CONFIG.name.toUpperCase()}
              </span>
              <span className="block text-[11px] text-slate-500">
                Committed to Social Impact | Registered Section 8 Non-Profit Organization
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00873e]" />
              80G Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00873e]" />
              12A Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00873e]" />
              Audited MCA Filings
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
