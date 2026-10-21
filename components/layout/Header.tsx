"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Heart } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-200/80"
            : "bg-white py-3.5 sm:py-4 border-b border-slate-100"
        }`}
        id="site-header"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl p-1 shrink-0"
              aria-label={`${SITE_CONFIG.name} Home`}
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-sm border border-slate-100 transition-transform group-hover:scale-105 shrink-0 flex items-center justify-center">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs xs:text-sm sm:text-base md:text-lg font-black tracking-tight text-[#001c37] leading-tight font-heading whitespace-nowrap">
                  NEEV WELFARE FOUNDATION
                </span>
                <span className="text-[8.5px] xs:text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-tight leading-tight mt-0.5 whitespace-nowrap">
                  CIN: <strong className="text-slate-700 font-semibold">{SITE_CONFIG.cin}</strong>{" "}
                  <span className="text-slate-300">•</span>{" "}
                  Darpan ID: <strong className="text-slate-700 font-semibold">{SITE_CONFIG.ngoDarpan}</strong>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 flex-wrap justify-center"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] xl:text-sm font-semibold transition-all duration-150 relative whitespace-nowrap ${
                      isActive
                        ? "text-[#00873e] bg-emerald-50/90 font-bold"
                        : "text-slate-600 hover:text-[#001c37] hover:bg-slate-50"
                    }`}
                  >
                    {item.shortLabel || item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#00873e] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Donate Button & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/30 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xs:inline">DONATE NOW</span>
                <span className="xs:hidden">DONATE</span>
              </Link>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileOpen}
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
