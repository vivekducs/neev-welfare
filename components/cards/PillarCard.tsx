import React from "react";
import {
  GraduationCap,
  HeartPulse,
  Users,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { MissionPillar } from "@/lib/data";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  HeartPulse,
  Users,
  Trees,
};

interface PillarCardProps {
  pillar: MissionPillar;
}

export function PillarCard({ pillar }: PillarCardProps) {
  const IconComponent = PILLAR_ICONS[pillar.iconName] || Users;

  return (
    <div className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#001c37] text-emerald-400 group-hover:bg-[#00873e] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shadow-md">
          <IconComponent className="w-6 h-6" />
        </div>

        <span className="text-[11px] font-bold text-[#00873e] tracking-wider uppercase block mb-1">
          {pillar.tagline}
        </span>

        <h3 className="text-lg font-extrabold text-[#001c37] font-heading mb-2">
          {pillar.title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed">
          {pillar.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-400">Reach / Impact</span>
        <span className="text-xs font-black text-[#00873e] font-heading">
          {pillar.stat}
        </span>
      </div>
    </div>
  );
}
