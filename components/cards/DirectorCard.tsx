import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Director } from "@/lib/data";

interface DirectorCardProps {
  director: Director;
}

export function DirectorCard({ director }: DirectorCardProps) {
  return (
    <article className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,28,55,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,28,55,0.14)] hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col h-full w-full">
      {/* Top Brand Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#001c37] via-[#00873e] to-[#001c37]" />

      {/* Photo Frame with Elegant Studio Backdrop */}
      <div className="relative w-full h-80 sm:h-92 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white flex items-end justify-center pt-4 px-4 overflow-hidden border-b border-slate-100">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,135,62,0.05),transparent_70%)] pointer-events-none" />

        {/* Director Portrait Image */}
        <div className="relative w-full h-full">
          <Image
            src={director.image}
            alt={director.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>

        {/* Soft Vignette Fade */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col bg-white">
        <h4 className="text-xl sm:text-2xl font-black text-[#001c37] text-center font-heading tracking-tight mb-2 group-hover:text-[#00873e] transition-colors duration-300">
          {director.name}
        </h4>

        {/* Role Pill Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-[#00873e] border border-emerald-200/80 text-xs font-bold uppercase tracking-wider text-center shadow-xs group-hover:bg-emerald-100/80 group-hover:border-emerald-300 transition-all duration-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00873e] shrink-0" />
            <span>{director.role}</span>
          </span>
        </div>

        {/* Executive Responsibilities & Bullet Points */}
        <ul className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed flex-1">
          {director.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#00873e] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                ✓
              </span>
              <span className="flex-1">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
