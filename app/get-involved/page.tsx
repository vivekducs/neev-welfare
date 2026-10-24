import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartHandshake,
  Users,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Building2,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { CsrSection } from "@/components/sections/CsrSection";

export const metadata: Metadata = {
  title: "Get Involved | Volunteer & Corporate CSR Partnerships",
  description:
    "Join Neev Welfare Foundation as a ground volunteer, college intern, or institutional CSR partner. Drive real grassroots transformation in Bundelkhand.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/get-involved/`,
  },
};

const ENGAGEMENT_MODES = [
  {
    icon: Users,
    title: "Field Volunteering",
    tagline: "Be the hands on the ground",
    description:
      "Teach at our rural digital classrooms, assist in health camps, plant native trees, or mentor village artisans.",
  },
  {
    icon: Building2,
    title: "Corporate CSR",
    tagline: "Tax-efficient high impact",
    description:
      "Fund strategic programs with full Section 135 CSR compliance, MCA filings, and detailed social ROI auditing.",
  },
  {
    icon: GraduationCap,
    title: "Youth Fellowships",
    tagline: "Learn grassroots development",
    description:
      "6-week and 12-week field immersion fellowships for university students in community research and tech education.",
  },
  {
    icon: HeartHandshake,
    title: "In-Kind & Payroll Giving",
    tagline: "Collective employee support",
    description:
      "Sponsor laptops, diagnostic equipment, or school supplies through corporate employee matching programs.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 page-entrance">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white py-14 md:py-20 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(0,135,62,0.08),transparent)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#00873e] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#001c37] font-bold">Get Involved</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <HeartHandshake className="w-4 h-4" />
            <span>COMMUNITY COLLABORATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            Be the Catalyst for Grassroots Change
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you are an individual wanting to teach a child, a professional seeking to volunteer, or a corporation fulfilling CSR obligations—there is a place for you in our mission.
          </p>
        </div>
      </section>

      {/* Engagement Channels Grid */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODES.map((mode, idx) => {
              const Icon = mode.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e]/50 hover:bg-emerald-50/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-[#00873e] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-[#00873e] uppercase">
                    {mode.tagline}
                  </span>
                  <h3 className="font-heading font-black text-base text-[#001c37] mt-1 mb-2">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Section with Events and Form */}
      <VolunteerSection showTitle={true} />

      {/* Corporate Social Responsibility (CSR) Section */}
      <CsrSection />
    </div>
  );
}
