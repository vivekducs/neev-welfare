"use client";

import React, { useState } from "react";
import { FOCUS_AREAS, FocusArea } from "@/lib/data";
import { InterventionCard } from "@/components/cards/InterventionCard";
import { FocusAreaModal } from "@/components/modals/FocusAreaModal";

const FILTER_TABS = [
  { label: "All Focus Areas", value: "all" },
  { label: "Child Education", value: "children,digital" },
  { label: "Youth & Skills", value: "youth,innovation" },
  { label: "Women & Livelihoods", value: "women" },
  { label: "Health & Wellness", value: "health" },
  { label: "Environment & Green", value: "environment,community" },
];

interface InterventionsGridSectionProps {
  showTitle?: boolean;
}

export function InterventionsGridSection({ showTitle = true }: InterventionsGridSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedArea, setSelectedArea] = useState<FocusArea | null>(null);

  const filteredAreas = FOCUS_AREAS.filter((area) => {
    if (activeFilter === "all") return true;
    const targetCats = activeFilter.split(",");
    return targetCats.includes(area.id) || targetCats.includes(area.category);
  });

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="interventions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
              <span>HOLISTIC INTERVENTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              Our High-Impact Programs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Targeted, ground-level interventions designed to eliminate systemic poverty and build long-term resilience across India.
            </p>
          </div>
        )}

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.value
                  ? "bg-[#001c37] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAreas.map((area) => (
            <InterventionCard
              key={area.id}
              area={area}
              onSelect={(item) => setSelectedArea(item)}
            />
          ))}
        </div>

        {/* Focus Area Detail Modal */}
        <FocusAreaModal
          area={selectedArea}
          onClose={() => setSelectedArea(null)}
        />
      </div>
    </section>
  );
}
