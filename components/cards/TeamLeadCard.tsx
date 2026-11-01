import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { TeamLead } from "@/lib/data";

interface TeamLeadCardProps {
  lead: TeamLead;
}

export function TeamLeadCard({ lead }: TeamLeadCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full w-full overflow-hidden">
      {/* Subtle Top Hover Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#001c37]/20 to-transparent group-hover:via-red-500 transition-all duration-500" />

      {/* Prominent Photo / Avatar Container */}
      <div className="relative w-48 h-56 sm:w-52 sm:h-60 rounded-2xl overflow-hidden shadow-md shadow-slate-200/60 border-2 border-slate-100 group-hover:border-red-100 bg-slate-50 mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.03]">
        {lead.image ? (
          <div className="relative w-full h-full">
            <Image
              src={lead.image}
              alt={lead.name}
              fill
              sizes="(max-width: 640px) 192px, 208px"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Vignette at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />
            {/* Active Leadership Indicator Dot */}
            <span
              className="absolute top-2.5 right-2.5 z-10 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white shadow-xs"
              title="Verified Leadership Member"
            />
          </div>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${
              lead.gradient || "from-slate-800 to-slate-900"
            } flex flex-col items-center justify-center p-4 text-white relative`}
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
              <User className="w-7 h-7 text-white/80" />
            </div>
            <span className="font-extrabold text-2xl tracking-wider font-heading mb-1">
              {lead.initials || "NW"}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">
              Photo Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h4 className="text-lg sm:text-xl font-black text-[#001c37] font-heading mb-2 tracking-tight group-hover:text-red-700 transition-colors">
        {lead.name}
      </h4>

      {/* Designation / Role Badge */}
      <div className="mt-auto pt-1">
        <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center leading-snug shadow-2xs">
          {lead.role}
        </span>
      </div>

      {/* Institutional Affiliation Tag */}
      <p className="mt-3 text-[11px] text-slate-400 font-medium">
        Neev Welfare Foundation
      </p>
    </article>
  );
}
