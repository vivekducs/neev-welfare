import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Director } from "@/lib/data";

interface DirectorCardProps {
  director: Director;
}

export function DirectorCard({ director }: DirectorCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full w-full">
      {/* Top Brand Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#001c37] via-[#00873e] to-[#001c37]" />

      {/* Photo Frame with Elegant Studio Backdrop */}
      <div className="relative w-full h-80 sm:h-88 bg-gradient-to-b from-slate-100/90 via-slate-50 to-white flex items-end justify-center pt-4 px-4 overflow-hidden border-b border-slate-100">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,135,62,0.06),transparent_70%)] pointer-events-none" />

        {/* Director Portrait Image */}
        <div className="relative w-full h-full">
          <Image
            src={director.image}
            alt={director.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Soft Vignette Fade to Seamlessly Blend into Card Body */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col bg-white">
        <h4 className="text-xl sm:text-2xl font-black text-[#001c37] text-center font-heading tracking-tight mb-2 group-hover:text-[#00873e] transition-colors">
          {director.name}
        </h4>

        {/* Role Pill Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#00873e] border border-emerald-200/80 text-xs font-bold uppercase tracking-wider text-center shadow-xs">
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
