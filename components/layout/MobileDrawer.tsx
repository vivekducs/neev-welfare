"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Heart, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const prevPathnameRef = React.useRef(pathname);

  // Close drawer strictly on route change
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-emerald-50/30">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-2xl bg-white p-1 shadow-sm border border-slate-200/90 shrink-0 flex items-center justify-center">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                fill
                sizes="44px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-[#001c37] font-heading leading-tight">
                  NEEV WELFARE FOUNDATION
                </span>
              </div>
              <div className="text-[9.5px] font-semibold text-slate-500 mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>CIN: {SITE_CONFIG.cin}</span>
              </div>
              <span className="text-[9px] text-slate-400">
                Darpan ID: {SITE_CONFIG.ngoDarpan}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Statutory Trust Ribbon */}
        <div className="px-4 py-2 bg-gradient-to-r from-[#001c37] to-[#0a2f55] text-white text-[10px] font-bold flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Section 8 Non-Profit
          </span>
          <span className="text-white/40">•</span>
          <span className="text-slate-200">80G & 12A Certified</span>
        </div>

        {/* Navigation Links List */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5" aria-label="Mobile Navigation Links">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-tight transition-all ${
                  isActive
                    ? "bg-emerald-50/90 text-[#00873e] shadow-xs border border-emerald-200/80"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#001c37]"
                }`}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#00873e] shadow-xs" />
                ) : (
                  <span className="text-slate-300 text-xs">→</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer Actions & Contact Snapshot */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-3">
          <Link
            href="/donate"
            onClick={onClose}
            className="group relative flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00873e] via-[#009647] to-[#006830] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-emerald-700/25 hover:shadow-lg transition-all overflow-hidden"
          >
            <Heart className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>DONATE NOW (80G TAX BENEFIT)</span>
          </Link>

          <div className="pt-2 text-xs text-slate-600 space-y-2">
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 hover:text-[#00873e] transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#00873e] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">{SITE_CONFIG.contact.phone}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 hover:text-[#00873e] transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#00873e] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-500">
              <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="truncate">Khajraha, Jhansi, UP</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
