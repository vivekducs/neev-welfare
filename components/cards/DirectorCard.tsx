import React from "react";
import Image from "next/image";
import { Director } from "@/lib/data";

interface DirectorCardProps {
  director: Director;
}

export function DirectorCard({ director }: DirectorCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col">
      {/* Photo Frame */}
      <div className="relative w-full h-72 sm:h-80 bg-white flex items-end justify-center pt-3 px-3 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={director.image}
            alt={director.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col bg-white">
        <h4 className="text-xl font-extrabold text-[#001c37] text-center font-heading tracking-tight mb-1">
          {director.name}
        </h4>
        <span className="text-xs font-bold text-[#00873e] uppercase tracking-wider text-center block mb-4">
          {director.role}
        </span>

        {/* Bullet Points */}
        <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed flex-1">
          {director.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#001c37] font-extrabold text-sm leading-tight shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
