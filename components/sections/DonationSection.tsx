"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, ShieldCheck, CheckCircle2, Lock, Mail, Phone, FileText, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { DonationConfirmModal, type DonationData } from "@/components/modals/DonationConfirmModal";
import { useToast } from "@/components/ui/Toast";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

const CAUSE_OPTIONS = [
  "Child Welfare & Education",
  "Youth Development & Skills",
  "Women Empowerment",
  "Education & Digital Literacy",
  "Healthcare & Well-Being",
  "Environment & Ecology",
  "Technology & Innovation",
  "General Support & Most Urgent Need",
];

interface DonationSectionProps {
  showTitle?: boolean;
}

export function DonationSection({ showTitle = true }: DonationSectionProps) {
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const causeParam = searchParams.get("cause");
  const initialCause =
    causeParam && CAUSE_OPTIONS.includes(causeParam)
      ? causeParam
      : "General Support & Most Urgent Need";

  const [frequency, setFrequency] = useState<"One-Time" | "Monthly">("One-Time");
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [cause, setCause] = useState<string>(initialCause);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pan, setPan] = useState<string>("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmData, setConfirmData] = useState<DonationData | null>(null);

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      setAmount(num);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Valid email is required for the 80G tax receipt.";
    }

    if (pan.trim()) {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
      if (!panRegex.test(pan.trim())) {
        newErrors.pan = "Valid 10-digit PAN format required (e.g. ABCDE1234F).";
      }
    }

    if (amount < 100) {
      newErrors.amount = "Minimum contribution amount is ₹100.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please review the highlighted fields in the donation form.", "error");
      return;
    }

    setErrors({});
    setConfirmData({
      amount,
      frequency,
      cause,
      name: name.trim(),
      email: email.trim(),
      pan: pan.trim().toUpperCase(),
    });
  };

  const handleSuccess = () => {
    setConfirmData(null);
    showToast(
      `Thank you, ${name}! Your donation of ${formatCurrency(amount)} was successfully processed. Official 80G tax receipt emailed to ${email}.`
    );
    setName("");
    setEmail("");
    setPan("");
    setAmount(1000);
    setCustomAmount("");
  };

  // Estimated tax saving (~30% bracket on 50% exempt amount = 15% effective saving)
  const estimatedTaxSaving = Math.round(amount * 0.15);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100" id="donate-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>100% SECURE & 80G TAX EXEMPT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              Fuel Grassroots Transformation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every rupee is deployed with audited financial accountability to educate rural children, empower women, and protect our environment.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Donation Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Frequency Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Contribution Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setFrequency("One-Time")}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      frequency === "One-Time"
                        ? "bg-white text-[#001c37] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    One-Time Support
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("Monthly")}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      frequency === "Monthly"
                        ? "bg-[#00873e] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Monthly Changemaker ❤️
                  </button>
                </div>
              </div>

              {/* Preset Amounts Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Contribution Amount (INR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PRESET_AMOUNTS.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetSelect(val)}
                      className={`py-3 px-3 rounded-xl border text-sm font-extrabold transition-all cursor-pointer ${
                        amount === val && !customAmount
                          ? "bg-emerald-50 border-[#00873e] text-[#00873e] shadow-sm ring-2 ring-emerald-500/30"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {formatCurrency(val)}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-3">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="100"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="Or enter custom amount (Min. ₹100)"
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-xs text-red-600 font-semibold mt-1">
                      {errors.amount}
                    </p>
                  )}
                </div>

                {/* Tax Benefit Callout */}
                <div className="mt-3 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-900 flex items-center justify-between">
                  <span className="font-medium">
                    Estimated 80G tax benefit on {formatCurrency(amount)}:
                  </span>
                  <span className="font-bold text-[#00873e]">
                    ~{formatCurrency(estimatedTaxSaving)} saved
                  </span>
                </div>
              </div>

              {/* Program Allocation Cause */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Direct My Contribution To
                </label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  {CAUSE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Donor Contact Details */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Donor Information (For 80G Tax Receipt)
                </h4>

                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name (as per PAN Card) *"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.name ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 font-semibold mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address (Receipt recipient) *"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.email ? "border-red-400 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 font-semibold mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      maxLength={10}
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      placeholder="PAN Number (Optional, for 80G)"
                      className={`w-full px-4 py-3 rounded-xl border text-sm uppercase text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.pan ? "border-red-400 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                    {errors.pan && (
                      <p className="text-xs text-red-600 font-semibold mt-1">{errors.pan}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span>
                    CONTRIBUTE {formatCurrency(amount)} ({frequency.toUpperCase()})
                  </span>
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-bit Bank-Grade Encryption • Instant 80G Certificate</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Statutory Credentials & Bank Transfer Support */}
          <div className="lg:col-span-5 space-y-6">
            {/* Statutory Compliance Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00873e] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-[#001c37]">
                    Official Organization Credentials
                  </h3>
                  <p className="text-xs text-slate-500">Government Registered Section 8 NGO</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Legal Entity:</span>
                  <span className="font-bold text-[#001c37] text-right">Section 8 Non-Profit Organization</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">CIN:</span>
                  <span className="font-mono font-bold text-[#001c37]">{SITE_CONFIG.cin}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">NITI Aayog Darpan:</span>
                  <span className="font-mono font-bold text-[#00873e]">{SITE_CONFIG.ngoDarpan}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">80G Approval:</span>
                  <span className="font-mono font-semibold text-slate-800">AABCN7313DF20231</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">12A Registration:</span>
                  <span className="font-mono font-semibold text-slate-800">AABCN7313DE20231</span>
                </div>
              </div>
            </div>

            {/* Direct Bank Wire & NEFT Transfer Desk */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-[#001c37]">
                    Direct NEFT / RTGS Wire Transfers
                  </h4>
                  <p className="text-xs text-slate-500">Corporate & Individual Contributions</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For direct bank wire instructions, CSR grants, or custom donation mandates, please contact our official finance desk:
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[#00873e] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-[#00873e]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* 80G Tax Exemption Highlights */}
            <div className="bg-gradient-to-br from-[#001c37] to-[#0a2540] rounded-3xl p-6 text-white space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>INCOME TAX ACT, 1961</span>
              </span>
              <h4 className="font-heading font-bold text-lg">
                Section 80G Tax Exemption
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Indian tax residents are entitled to claim 50% deduction of their donated amount from taxable income under Section 80G. Official Form 10BE certificate is issued promptly.
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        <DonationConfirmModal
          data={confirmData}
          onClose={() => setConfirmData(null)}
          onSuccess={handleSuccess}
        />
      </div>
    </section>
  );
}
