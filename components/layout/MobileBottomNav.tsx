"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Users, TrendingUp, Heart } from "lucide-react";

interface TabItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isSpecial?: boolean;
}

const TABS: TabItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Programs", href: "/programs", icon: Sparkles },
  { label: "Donate", href: "/donate", icon: Heart, isSpecial: true },
  { label: "Team", href: "/team", icon: Users },
  { label: "Impact", href: "/impact", icon: TrendingUp },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden safe-area-bottom"
      aria-label="Mobile Bottom App Navigation"
    >
      <div className="grid grid-cols-5 items-center justify-around h-16 max-w-md mx-auto px-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);

          if (tab.isSpecial) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center -mt-5 group focus:outline-none"
                aria-label="Donate Now"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-active:scale-90 ${
                    isActive
                      ? "bg-[#00873e] text-white shadow-emerald-700/40 ring-4 ring-emerald-100"
                      : "bg-gradient-to-tr from-[#00873e] to-[#00b050] text-white shadow-emerald-600/30 ring-4 ring-white"
                  }`}
                >
                  <Icon className="w-5 h-5 fill-current animate-pulse" />
                </div>
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider mt-1 transition-colors ${
                    isActive ? "text-[#00873e]" : "text-slate-700"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-150 group relative focus:outline-none ${
                isActive ? "text-[#00873e]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 group-active:scale-90 ${
                    isActive ? "stroke-[2.5px] scale-110" : "stroke-2"
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00873e] rounded-full" />
                )}
              </div>
              <span
                className={`text-[10px] tracking-tight mt-1 transition-all ${
                  isActive ? "font-bold text-[#00873e]" : "font-medium text-slate-500"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
