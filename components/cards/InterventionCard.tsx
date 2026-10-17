"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { FocusArea } from "@/lib/data";

interface InterventionCardProps {
  area: FocusArea;
  onSelect: (area: FocusArea) => void;
}

export function InterventionCard({ area, onSelect }: InterventionCardProps) {
  return (
    <article
      onClick={() => onSelect(area)}
      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-emerald-500"
    >
      {/* Card Image with subtle zoom on hover */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white uppercase bg-[#001c37]/80 backdrop-blur-md border border-white/20 shadow-sm">
            {area.badge}
          </span>
        </div>

        {/* Impact Metric Floating Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#00873e]/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{area.impactMetric}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-extrabold text-[#001c37] group-hover:text-[#00873e] transition-colors font-heading mb-2">
            {area.title}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {area.description}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-[#00873e] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            <span>EXPLORE DETAILS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-[11px] text-slate-400 font-medium">Click to view</span>
        </div>
      </div>
    </article>
  );
}
