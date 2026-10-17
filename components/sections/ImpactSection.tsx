import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, FileCheck } from "lucide-react";
import { IMPACT_STATS } from "@/lib/data";
import { ImpactStatCard } from "@/components/cards/ImpactStatCard";

interface ImpactSectionProps {
  showTitle?: boolean;
}

export function ImpactSection({ showTitle = true }: ImpactSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              Verified Ground-Level Impact
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every initiative is tracked with rigorous key performance indicators, ensuring complete donor transparency and lasting social return on investment.
            </p>
          </div>
        )}

        {/* 8 Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {IMPACT_STATS.map((stat, idx) => (
            <ImpactStatCard key={idx} stat={stat} />
          ))}
        </div>

        {/* Transparency Banner Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#001c37] via-[#0a2540] to-[#001c37] text-white p-8 sm:p-10 shadow-xl border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% INSTITUTIONAL TRANSPARENCY</span>
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading tracking-tight">
                Audited & Governed with Utmost Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Neev Welfare Foundation undergoes mandatory statutory audits and files annual reports with the Ministry of Corporate Affairs. Donors receive instant digital 80G tax certificates for every contribution.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/donate"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>DONATE (80G TAX RELIEF)</span>
              </Link>
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider text-center border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>REQUEST AUDIT REPORTS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
