import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  FileSpreadsheet,
  Globe,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ImpactSection } from "@/components/sections/ImpactSection";

export const metadata: Metadata = {
  title: "Impact & Milestones | Verified Social Return",
  description:
    "Discover the measurable grassroots impact delivered by Neev Welfare Foundation across 45+ villages in Bundelkhand: 15,000+ lives touched, 2,400+ students educated, and 12,000+ trees planted.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/impact/`,
  },
};

const TIMELINE = [
  {
    year: "2023",
    title: "Foundation & Institutional Setup",
    description:
      "Incorporated as a Section 8 non-profit organization under the Ministry of Corporate Affairs. Secured 12A, 80G tax exemptions and NITI Aayog NGO Darpan registration.",
    achievement: "Headquarters established in Jhansi, UP",
  },
  {
    year: "2024",
    title: "Digital Classrooms & Women Co-ops",
    description:
      "Launched solar-equipped digital literacy labs in 12 government rural primary schools. Incubated the first 3 women-led micro-enterprises for artisanal textile and food processing.",
    achievement: "2,400+ students enrolled in foundational digital learning",
  },
  {
    year: "2025",
    title: "Healthcare Clinics & Bundelkhand Green Drive",
    description:
      "Initiated regular mobile preventive healthcare camps and blood donation drives. Commenced native tree plantation along degraded river catchments with local village guardians.",
    achievement: "8,500+ patients served & 12,000+ saplings planted",
  },
  {
    year: "2026",
    title: "Regional Expansion & Climate Action",
    description:
      "Scaling interventions into 45+ village clusters across southern Uttar Pradesh. Establishing vocational training centers in smart agriculture, solar repair, and digital bookkeeping.",
    achievement: "Targeting 50,000 rural families by 2030",
  },
];

const SDG_GOALS = [
  {
    number: "01",
    title: "No Poverty",
    description: "Equipping rural families with livelihood assets and micro-enterprise capital.",
  },
  {
    number: "03",
    title: "Good Health & Well-being",
    description: "Doorstep preventive diagnosis, free medicines, and maternal healthcare camps.",
  },
  {
    number: "04",
    title: "Quality Education",
    description: "Solar smart classes, digital literacy, and holistic foundational schooling.",
  },
  {
    number: "05",
    title: "Gender Equality",
    description: "Economic empowerment of women through Self-Help Groups and leadership roles.",
  },
  {
    number: "08",
    title: "Decent Work & Growth",
    description: "Vocational skills training for rural youth in emerging technologies.",
  },
  {
    number: "13",
    title: "Climate Action",
    description: "Catchment afforestation, water harvesting, and renewable solar adoption.",
  },
];

export default function ImpactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>MEASURABLE SOCIAL RETURN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001c37] font-heading tracking-tight">
            Verified Ground Impact & Milestones
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparently documenting the transformations taking place across 45+ village clusters in Bundelkhand, Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Main Impact Section with Stats */}
      <ImpactSection showTitle={false} />

      {/* Journey Timeline */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
              OUR EVOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight mt-1">
              Milestones of Lasting Change
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              From an initial volunteer group in Jhansi to a certified Section 8 non-profit organization driving multi-district grassroots development.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-200 ml-4 md:ml-32 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Marker dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-4 border-[#00873e] flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#00873e]" />
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-[#00873e]/50 hover:bg-emerald-50/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black text-white bg-[#001c37]">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-[#00873e] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {item.achievement}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-lg text-[#001c37] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Development Goals Alignment */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00873e]">
              GLOBAL STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight mt-1">
              Aligned with United Nations SDGs
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Our interventions directly contribute to 6 key Sustainable Development Goals to eradicate poverty and build climate resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SDG_GOALS.map((sdg) => (
              <div
                key={sdg.number}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[#001c37] text-white font-black text-sm flex items-center justify-center font-heading">
                    {sdg.number}
                  </span>
                  <h3 className="font-heading font-black text-base text-[#001c37]">
                    {sdg.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-[#001c37] via-[#0a2540] to-[#001c37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight">
              Partner with us to scale this impact across 100 villages
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              100% of your contribution is eligible for 50% tax deduction under Section 80G.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/donate/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00873e] hover:bg-[#006830] text-white text-xs font-bold shadow-lg shadow-emerald-900/40 transition-all hover:scale-105"
            >
              <span>Support a Village Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
