import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { TeamLead } from "@/lib/data";

interface TeamLeadCardProps {
  lead: TeamLead;
}

export function TeamLeadCard({ lead }: TeamLeadCardProps) {
  return (
    <article className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center">
      {/* Prominent Photo / Avatar Container */}
      <div className="relative w-48 h-56 sm:w-52 sm:h-60 rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 bg-slate-50 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {lead.image ? (
          <div className="relative w-full h-full">
            <Image
              src={lead.image}
              alt={lead.name}
              fill
              sizes="(max-width: 640px) 192px, 208px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority={lead.name.includes("Vivek")}
            />
            {/* Subtle Gradient Vignette at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${lead.gradient || "from-slate-800 to-slate-900"} flex flex-col items-center justify-center p-4 text-white relative`}
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
              <User className="w-7 h-7 text-white/80" />
            </div>
            <span className="font-extrabold text-2xl tracking-wider font-heading mb-1">
              {lead.initials}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">
              Photo Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Name & Designation - Exact Format */}
      <h4 className="text-lg sm:text-xl font-extrabold text-[#001c37] font-heading mb-1.5 tracking-tight">
        {lead.name}
      </h4>
      <span className="text-xs font-bold text-red-600 uppercase tracking-wider leading-relaxed">
        {lead.role}
      </span>
    </article>
  );
}
