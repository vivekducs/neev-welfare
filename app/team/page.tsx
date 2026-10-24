import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users2,
  FileCheck,
  Scale,
  Award,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { LeadershipSection } from "@/components/sections/LeadershipSection";

export const metadata: Metadata = {
  title: "Leadership & Governance | Board of Directors & Core Team",
  description:
    "Meet the Board of Directors and Core Leadership Team of Neev Welfare Foundation. Learn about our institutional governance, statutory compliance, and ethical stewardship.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/team/`,
  },
};

const GOVERNANCE_PILLARS = [
  {
    icon: Scale,
    title: "Section 8 Compliance",
    description:
      "Incorporated under Section 8 of the Companies Act, 2013, with no distribution of dividends or profits. 100% of funds support our charitable objects.",
  },
  {
    icon: FileCheck,
    title: "Statutory Audits & Filings",
    description:
      "Annual accounts and activity reports are independently audited by chartered accountants and submitted to MCA and Income Tax Department.",
  },
  {
    icon: ShieldCheck,
    title: "12A & 80G Certified",
    description:
      "Certified under Sections 12A and 80G(5) of the Income Tax Act, 1961, ensuring institutional transparency and statutory compliance.",
  },
  {
    icon: Award,
    title: "Darpan ID Registered",
    description:
      `Registered on the Darpan portal (${SITE_CONFIG.ngoDarpan}), ensuring institutional transparency and eligibility for public-private initiatives.`,
  },
];

export default function TeamPage() {
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
            <span className="text-[#001c37] font-bold">Leadership & Team</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Users2 className="w-4 h-4" />
            <span>EXECUTIVE GOVERNANCE & STEWARDSHIP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            Our Leadership & Team
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guided by experienced professionals, grassroots organizers, and youth leaders committed to social equity, institutional integrity, and transformative impact.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection showTitle={false} />

      {/* Governance & Accountability Framework */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
              TRANSPARENCY & INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight mt-1">
              Institutional Governance Standards
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We adhere to strict fiduciary principles and non-profit governance standards, ensuring every rupee contributed achieves maximum social utility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOVERNANCE_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e]/50 hover:bg-emerald-50/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-[#00873e] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-base text-[#001c37] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join the Team / Volunteer CTA */}
      <section className="py-12 bg-gradient-to-r from-[#001c37] via-[#0a2540] to-[#001c37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <UserPlus className="w-3.5 h-3.5" />
              <span>Join Our Movement</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight">
              Want to work with our field leadership team?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We welcome passionate development professionals, youth fellows, and volunteers to lead initiatives across Bundelkhand.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00873e] hover:bg-[#006830] text-white text-xs font-bold shadow-lg shadow-emerald-900/40 transition-all hover:scale-105"
            >
              <span>Apply as a Volunteer / Fellow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
