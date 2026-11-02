import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { TeamLead } from "@/lib/data";

interface TeamLeadCardProps {
  lead: TeamLead;
}

export function TeamLeadCard({ lead }: TeamLeadCardProps) {
  return (
    <article className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,28,55,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(0,28,55,0.12)] hover:border-red-200/80 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center text-center h-full w-full overflow-hidden">
      {/* Subtle Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#001c37]/15 to-transparent group-hover:via-red-500 transition-all duration-500" />

      {/* Photo / Avatar Container */}
      <div className="relative w-48 h-56 sm:w-52 sm:h-60 rounded-2xl overflow-hidden shadow-md shadow-slate-200/60 border border-slate-200/80 bg-slate-50 mb-5 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:shadow-xl">
        {lead.image ? (
          <div className="relative w-full h-full">
            <Image
              src={lead.image}
              alt={lead.name}
              fill
              sizes="(max-width: 640px) 192px, 208px"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            {/* Subtle Gradient Vignette at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
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
      <h4 className="text-lg sm:text-xl font-extrabold text-[#001c37] font-heading mb-2 tracking-tight group-hover:text-red-600 transition-colors duration-300">
        {lead.name}
      </h4>

      {/* Designation */}
      <div className="mt-auto pt-1">
        <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center leading-snug group-hover:bg-red-100/90 group-hover:border-red-300 transition-all duration-300">
          {lead.role}
        </span>
      </div>
    </article>
  );
}
