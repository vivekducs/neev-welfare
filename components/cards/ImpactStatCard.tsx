"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Users,
  HeartPulse,
  Laptop,
  Trees,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { ImpactStat } from "@/lib/data";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Briefcase,
  Users,
  HeartPulse,
  Laptop,
  Trees,
  Building2,
  ShieldCheck,
};

interface ImpactStatCardProps {
  stat: ImpactStat;
}

export function ImpactStatCard({ stat }: ImpactStatCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp: number | null = null;
          const duration = 1800; // ms

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Easing out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * stat.value);
            setCount(current);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(stat.value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stat.value]);

  const IconComponent = ICON_MAP[stat.iconName] || Users;

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00873e] group-hover:bg-[#00873e] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="flex items-baseline gap-1 font-heading font-black text-3xl sm:text-4xl text-[#001c37] mb-1">
          <span>{count.toLocaleString("en-IN")}</span>
          <span className="text-[#00873e]">{stat.suffix}</span>
        </div>

        <h3 className="text-base font-bold text-slate-800 font-heading mb-1.5">
          {stat.label}
        </h3>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mt-3">
        {stat.sublabel}
      </p>
    </div>
  );
}
