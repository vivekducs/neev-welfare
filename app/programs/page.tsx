import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Users2,
  Stethoscope,
  Leaf,
  Layers,
  HeartHandshake,
  CheckCircle2,
  HandHeart,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { InterventionsGridSection } from "@/components/sections/InterventionsGridSection";

export const metadata: Metadata = {
  title: "Programs & Interventions | Neev Welfare Foundation",
  description:
    "Explore our 8 core grassroots programs spanning Child Education, Women Empowerment, Digital Literacy, Rural Healthcare, and Climate Stewardship across Bundelkhand.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/programs/`,
  },
};

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Grassroots Assessment",
    description:
      "We survey village clusters, identifying precise gaps in school infrastructure, female economic inclusion, and diagnostic access.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "Community Co-Design",
    description:
      "Gram Panchayats, village elders, and women's SHGs co-create every initiative, ensuring local ownership and relevance.",
    icon: Users2,
  },
  {
    step: "03",
    title: "Direct Ground Delivery",
    description:
      "Our field teams directly distribute resources, setup solar smart classes, and run free healthcare camps without middlemen.",
    icon: Stethoscope,
  },
  {
    step: "04",
    title: "Sustainable Handover",
    description:
      "We train local youth and women to maintain community centers, trees, and micro-enterprises for perpetual village self-reliance.",
    icon: Leaf,
  },
];

export default function ProgramsPage() {
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
            <span className="text-[#001c37] font-bold">Programs</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-4 h-4" />
            <span>GROUND-LEVEL TRANSFORMATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            Our Core Programs & Interventions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Delivering measurable, transparent, and sustainable change through targeted programs designed to uplift rural communities across Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Programmatic Impact Grid with Filter */}
      <InterventionsGridSection showTitle={false} />

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
              OUR IMPACT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight mt-1">
              How We Create Sustainable Change
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every initiative follows a proven, 4-step grassroots execution framework that guarantees transparency and long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.step}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e]/50 hover:bg-emerald-50/20 transition-all duration-300 relative group"
                >
                  <div className="text-3xl font-black text-slate-200 group-hover:text-[#00873e]/30 transition-colors mb-3">
                    {m.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-[#00873e] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-base text-[#001c37] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR & Support Banner */}
      <section className="py-12 bg-gradient-to-r from-[#001c37] via-[#0a2540] to-[#001c37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Institutional Alignment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight">
              Looking to fund a high-impact program via CSR?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Neev Welfare Foundation is registered on NGO Darpan ({SITE_CONFIG.ngoDarpan}) with full 80G and 12A tax exemption benefits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00873e] hover:bg-[#006830] text-white text-xs font-bold shadow-lg shadow-emerald-900/40 transition-all hover:scale-105"
            >
              <HandHeart className="w-4 h-4" />
              <span>Donate Now (80G)</span>
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
            >
              <span>Explore CSR Partnerships</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
