import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { FOCUS_AREAS } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001c37] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verification & Trust Strip */}
        <div className="bg-[#061527] border border-slate-800 rounded-2xl p-6 mb-12 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00873e]" />
              </div>
              <div>
                <h3 className="text-white font-black text-base sm:text-lg font-heading tracking-tight">
                  NEEV WELFARE FOUNDATION
                </h3>
                <p className="text-xs text-slate-400">
                  Registered Section 8 Nonprofit Organization | Ministry of Corporate Affairs, Govt. of India
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                80G Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                12A Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                CSR-1 Registered
              </span>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="40px"
                  className="object-contain brightness-110"
                />
              </div>
              <div>
                <span className="block text-white font-extrabold text-base tracking-tight font-heading">
                  NEEV WELFARE FOUNDATION
                </span>
                <span className="block text-[10px] text-slate-400 font-semibold tracking-wider mt-0.5">
                  CIN: {SITE_CONFIG.cin}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering rural communities through foundational child education, youth skill certifications, women self-help collectives, doorstep healthcare, and ecological resilience across Bundelkhand.
            </p>
            <div className="pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>DONATE WITH 80G TAX RELIEF</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-heading border-l-2 border-[#00873e] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#00873e]">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-400">›</span>
                  <span>Donate & 80G Receipt</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Areas */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-heading border-l-2 border-[#00873e] pl-2.5">
              Key Programs
            </h4>
            <ul className="space-y-2 text-xs">
              {FOCUS_AREAS.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/programs#${area.id}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span className="text-[#00873e]">›</span>
                    <span className="truncate">{area.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-400">›</span>
                  <span>View All 8 Interventions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-heading border-l-2 border-[#00873e] pl-2.5">
              Contact & Governance
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00873e] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00873e] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00873e] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1">
                <p className="text-[11px] text-slate-500">
                  <strong className="text-slate-400">CIN:</strong> {SITE_CONFIG.cin}
                </p>
                <p className="text-[11px] text-slate-500">
                  <strong className="text-slate-400">NGO Darpan:</strong> {SITE_CONFIG.ngoDarpan}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. A registered Section 8 Non-Profit Organization.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Transparency
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Compliance
            </Link>
            <Link href="/donate" className="hover:text-slate-300 transition-colors">
              80G Exemption
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
