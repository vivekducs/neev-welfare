"use client";

import React, { useState } from "react";
import { X, Building2, Mail, AlertCircle, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface CsrDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CsrDeckModal({ isOpen, onClose }: CsrDeckModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    workEmail: "",
    phone: "",
    focusInterest: "Rural Education & Digital Classrooms",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = encodeURIComponent(
      `CSR Partnership Dossier Request\n\nCompany / Organization: ${formData.companyName}\nContact Person: ${formData.contactPerson}\nWork Email: ${formData.workEmail}\nPhone: ${formData.phone}\nIntervention Focus: ${formData.focusInterest}`
    );
    const mailtoUrl = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
      `CSR Dossier Request - ${formData.companyName}`
    )}&body=${mailtoBody}`;
    window.open(mailtoUrl, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-csr-title"
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3
              id="modal-csr-title"
              className="text-xl font-extrabold text-[#001c37] font-heading tracking-tight"
            >
              Request CSR Deck
            </h3>
            <p className="text-xs text-slate-500">
              MCA CSR-1 Registered & Schedule VII Compliant
            </p>
          </div>
        </div>

        {/* Honest notice */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-5">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong>Note:</strong> Automated dossier dispatch is not yet integrated. Clicking below will open your email app to request our dossier directly from{" "}
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="font-bold underline text-[#00873e]">
              {SITE_CONFIG.contact.email}
            </a>
            , or call{" "}
            <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`} className="font-bold underline text-[#001c37]">
              {SITE_CONFIG.contact.phoneDisplay}
            </a>
            .
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Organization / Corporate Name *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              placeholder="e.g. Tata Consultancy Services / Infosys"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Contact Person Name *
            </label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) =>
                setFormData({ ...formData, contactPerson: e.target.value })
              }
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-slate-800"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Corporate Email *
              </label>
              <input
                type="email"
                required
                value={formData.workEmail}
                onChange={(e) =>
                  setFormData({ ...formData, workEmail: e.target.value })
                }
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Contact Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-slate-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Preferred Intervention Focus
            </label>
            <select
              value={formData.focusInterest}
              onChange={(e) =>
                setFormData({ ...formData, focusInterest: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-slate-800 bg-white"
            >
              <option value="Rural Education & Digital Classrooms">
                Rural Education & Digital Classrooms
              </option>
              <option value="Women Self-Help Collectives & Livelihoods">
                Women Self-Help Collectives & Livelihoods
              </option>
              <option value="Doorstep Healthcare & Diagnostic Camps">
                Doorstep Healthcare & Diagnostic Camps
              </option>
              <option value="Afforestation & Water Conservation">
                Afforestation & Water Conservation
              </option>
              <option value="Youth Tech & Robotics Skilling">
                Youth Tech & Robotics Skilling
              </option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>OPEN EMAIL APP TO REQUEST DOSSIER</span>
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              Or email directly: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#00873e] font-semibold hover:underline">{SITE_CONFIG.contact.email}</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
