"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleOpenMobile = useCallback(() => {
    setIsMobileOpen(true);
  }, []);

  const handleCloseMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (scrollY / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_12px_32px_-8px_rgba(0,28,55,0.1)] border-b border-slate-200/90"
            : "bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,28,55,0.06)] border-b border-slate-200/60"
        }`}
        id="site-header"
      >
        {/* 1. Top Institutional Trust & Statutory Utility Bar */}
        <div
          className={`transition-all duration-300 ease-in-out border-b border-white/10 ${
            isScrolled
              ? "max-h-0 opacity-0 overflow-hidden py-0 border-transparent"
              : "max-h-12 opacity-100 py-1.5 sm:py-2 bg-gradient-to-r from-[#001c37] via-[#082a4d] to-[#001c37] text-white"
          }`}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-tight">
              {/* Left: Trust & Legal Identity */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Section 8 Non-Profit Organization</span>
                </span>
                <span className="text-white/30 hidden xs:inline">•</span>
                <span className="inline-flex items-center gap-1 text-slate-200 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>80G & 12A Certified</span>
                  <span className="hidden md:inline text-white/60">(Tax Relief)</span>
                </span>
              </div>

              {/* Right: Statutory CIN & Darpan ID + Helpline */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="hidden lg:flex items-center gap-3 text-slate-300">
                  <span>
                    CIN:{" "}
                    <strong className="text-emerald-300 font-mono font-semibold">
                      {SITE_CONFIG.cin}
                    </strong>
                  </span>
                  <span className="text-white/30">•</span>
                  <span>
                    Darpan ID:{" "}
                    <strong className="text-emerald-300 font-mono font-semibold">
                      {SITE_CONFIG.ngoDarpan}
                    </strong>
                  </span>
                </div>

                <span className="text-white/30 hidden lg:inline">•</span>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center gap-1.5 font-bold text-white hover:text-emerald-300 transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-full"
                  title="Direct Ground Support & Donor Helpline"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-2 md:gap-4 transition-all duration-300 ${
              isScrolled ? "py-2 sm:py-2.5" : "py-2.5 sm:py-3.5"
            }`}
          >
            {/* Brand Logo & Statutory Subtitle */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-2xl p-1 shrink-0 min-w-0"
              aria-label={`${SITE_CONFIG.name} Home`}
            >
              <div className="relative w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 p-1 shadow-sm border border-slate-200/80 group-hover:border-emerald-400 group-hover:shadow-md group-hover:scale-105 transition-all duration-300 shrink-0 flex items-center justify-center">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="48px"
                  className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] xs:text-sm sm:text-base md:text-lg font-black tracking-tight text-[#001c37] leading-tight font-heading group-hover:text-[#00873e] transition-colors truncate">
                    NEEV WELFARE FOUNDATION
                  </span>
                  <span
                    className="hidden sm:inline-flex items-center text-[#00873e] shrink-0"
                    title="Verified Non-Profit Organization"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100" />
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[8.5px] xs:text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-tight leading-tight mt-0.5 whitespace-nowrap overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <span>
                    CIN: <strong className="text-slate-700 font-semibold">{SITE_CONFIG.cin}</strong>
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="hidden sm:inline">
                    Darpan ID: <strong className="text-slate-700 font-semibold">{SITE_CONFIG.ngoDarpan}</strong>
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links (Modern Segmented Floating Pill) */}
            <nav
              className="hidden lg:flex items-center p-1 rounded-full bg-slate-100/80 border border-slate-200/70 backdrop-blur-sm shadow-xs"
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
                    title={item.label}
                    className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-[13px] font-bold tracking-tight transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? "text-[#00873e] bg-white shadow-sm ring-1 ring-emerald-500/25"
                        : "text-slate-600 hover:text-[#001c37] hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00873e] shrink-0" />
                    )}
                    <span>{item.shortLabel || item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Engaging Donate CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
              {/* Desktop Quick Helpline Icon Link */}
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100/90 text-slate-700 hover:text-[#00873e] hover:bg-emerald-50 border border-slate-200/80 transition-all duration-200 hover:scale-105"
                title={`Call Ground Support: ${SITE_CONFIG.contact.phone}`}
                aria-label="Call Ground Support"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Engaging Magnetic Donate Button */}
              <Link
                href="/donate"
                className="group relative inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-3 xs:px-3.5 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#00873e] via-[#009647] to-[#006830] text-white font-black text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider shadow-md shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 overflow-hidden whitespace-nowrap"
                aria-label="Donate to Neev Welfare Foundation"
              >
                {/* Subtle sheen highlight animation */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-white group-hover:scale-125 transition-transform duration-300 shrink-0" />
                <span className="hidden xs:inline">DONATE NOW</span>
                <span className="xs:hidden">DONATE</span>

                {/* 80G Tax Exemption Micro Pill */}
                <span className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-white/20 text-[9px] font-extrabold text-white tracking-normal border border-white/30 backdrop-blur-xs">
                  80G
                </span>
              </Link>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={handleOpenMobile}
                className="lg:hidden p-1.5 xs:p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                aria-label="Open navigation menu"
                aria-expanded={isMobileOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Dynamic Reading Progress Bar at Bottom of Header */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#001c37] via-[#00873e] to-[#00b050] transition-all duration-150 ease-out z-50 shadow-xs"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={handleCloseMobile}
      />
    </>
  );
}

