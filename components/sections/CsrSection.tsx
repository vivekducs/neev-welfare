"use client";

import React, { useState } from "react";
import { Building2, ShieldCheck, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { CsrDeckModal } from "@/components/modals/CsrDeckModal";
import { SITE_CONFIG } from "@/lib/constants";

export function CsrSection() {
  const [isCsrModalOpen, setIsCsrModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100" id="csr-partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#061527] via-[#001c37] to-[#0a2540] text-white p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>CORPORATE SOCIAL RESPONSIBILITY (CSR-1)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight leading-tight">
                Partner with Neev for Measurable, Audited CSR Collaborations
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                We design Schedule VII compliant CSR interventions in Bundelkhand with real-time milestone monitoring, quarterly impact reporting, third-party social audits, and dedicated project management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00873e]" />
                  <span>MCA Form CSR-1 Approved (Reg: {SITE_CONFIG.ngoDarpan})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00873e]" />
                  <span>Valid 80G & 12A Tax Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00873e]" />
                  <span>Clean Statutory MCA Financial Filings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00873e]" />
                  <span>Tailored Schedule VII Execution</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <h3 className="font-heading font-black text-lg text-white">
                  Corporate Partnership Deck
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Download our complete programmatic portfolio, case studies, and compliance filings.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsCsrModalOpen(true)}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REQUEST CSR DECK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <CsrDeckModal
          isOpen={isCsrModalOpen}
          onClose={() => setIsCsrModalOpen(false)}
        />
      </div>
    </section>
  );
}
