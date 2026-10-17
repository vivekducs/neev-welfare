import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { TeamLead } from "@/lib/data";

interface TeamLeadCardProps {
  lead: TeamLead;
}

export function TeamLeadCard({ lead }: TeamLeadCardProps) {
  return (
    <article className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center">
      {/* Circular Avatar Container with 5 o'clock Star Badge */}
      <div className="relative w-32 h-32 mb-4">
        <div className="w-full h-full rounded-full border-4 border-sky-100 shadow-md overflow-hidden bg-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          {lead.image ? (
            <div className="relative w-full h-full">
              <Image
                src={lead.image}
                alt={lead.name}
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${lead.gradient || "from-slate-800 to-slate-900"} flex items-center justify-center`}
            >
              <span className="text-white font-extrabold text-3xl tracking-wider">
                {lead.initials}
              </span>
            </div>
          )}
        </div>

        {/* 5 o'clock Star Badge */}
        <div
          className="absolute bottom-0.5 right-0.5 w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center border-2 border-white shadow-md z-10"
          title="Core Team Member"
        >
          <Star className="w-3.5 h-3.5 fill-current" />
        </div>
      </div>

      {/* Name & Designation */}
      <h4 className="text-base sm:text-lg font-extrabold text-[#001c37] font-heading mb-1 tracking-tight">
        {lead.name}
      </h4>
      <span className="text-xs font-bold text-red-600 uppercase tracking-wider leading-relaxed">
        {lead.role}
      </span>
    </article>
  );
}
