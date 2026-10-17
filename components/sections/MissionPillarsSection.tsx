import React from "react";
import { MISSION_PILLARS } from "@/lib/data";
import { PillarCard } from "@/components/cards/PillarCard";

export function MissionPillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100" id="mission-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
            <span>CORE TRANSFORMATION ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
            Four Pillars of Sustainable Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our multi-pronged grassroots framework addresses root causes of rural underdevelopment, ensuring dignity, health, and economic self-sufficiency for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_PILLARS.map((pillar, idx) => (
            <PillarCard key={idx} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
