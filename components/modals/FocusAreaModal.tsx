"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, Sparkles, Heart } from "lucide-react";
import { FocusArea } from "@/lib/data";

interface FocusAreaModalProps {
  area: FocusArea | null;
  onClose: () => void;
}

export function FocusAreaModal({ area, onClose }: FocusAreaModalProps) {
  useEffect(() => {
    if (area) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [area, onClose]);

  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-focus-title"
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-[#00873e] uppercase bg-emerald-50 border border-emerald-200 mb-2">
            {area.badge}
          </span>
          <h2
            id="modal-focus-title"
            className="text-2xl sm:text-3xl font-extrabold text-[#001c37] font-heading tracking-tight"
          >
            {area.title}
          </h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00873e] mt-2 bg-emerald-50 px-3 py-1 rounded-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{area.impactMetric}</span>
          </span>
        </div>

        {/* Media Frame */}
        <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 my-4 shadow-inner">
          <Image
            src={area.image}
            alt={area.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          {area.description}
        </p>

        {/* Highlights List */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#001c37] font-heading mb-3">
            Key Interventions & Scope:
          </h3>
          <ul className="space-y-2.5">
            {area.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-[#00873e] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/donate?cause=${encodeURIComponent(area.causeOption)}`}
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>SUPPORT THIS INITIATIVE (80G TAX EXEMPT)</span>
          </Link>
          <button
            onClick={onClose}
            className="py-3 px-6 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
