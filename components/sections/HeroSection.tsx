import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-emerald-100/40 via-sky-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00873e] animate-pulse" />
              <span>REGISTERED SECTION 8 NONPROFIT • 80G CERTIFIED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#001c37] font-heading tracking-tight leading-[1.15]">
              Building Foundations for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00873e] to-[#006830]">
                Rural India’s
              </span>{" "}
              Sustainable Future
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming marginalized villages across Bundelkhand through grassroots education equity, youth skill incubation, women self-help collectives, doorstep preventive healthcare, and climate resilience.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>DONATE WITH 80G TAX RELIEF</span>
              </Link>

              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-slate-200 text-[#001c37] hover:border-[#00873e] hover:text-[#00873e] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Key Trust Metrics Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00873e]" />
                <span className="font-semibold text-slate-800">4,200+ Children</span> Supported
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00873e]" />
                <span className="font-semibold text-slate-800">3,500+ Women</span> Empowered
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00873e]" />
                <span className="font-semibold text-slate-800">100% Tax Deductible</span> (80G)
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative behind glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00873e]/20 via-sky-400/20 to-[#001c37]/20 blur-xl opacity-70" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-96 sm:h-[420px] w-full">
                  <Image
                    src="/images/v26_1649.png"
                    alt="Neev Welfare Rural Community Impact in Bundelkhand"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001c37]/80 via-transparent to-transparent" />

                  {/* Floating Overlay Badge at Bottom */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00873e] flex items-center justify-center font-bold">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-[#001c37] font-heading uppercase tracking-wide">
                            Grassroots Impact
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            Jhansi & Bundelkhand, Uttar Pradesh
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-[#00873e] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        80G Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
