"use client";

import React from "react";
import { X, AlertCircle, Building2, Mail, Phone, Copy } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

export interface DonationData {
  amount: number;
  frequency: string;
  cause: string;
  name: string;
  email: string;
  pan: string;
}

interface DonationConfirmModalProps {
  data: DonationData | null;
  onClose: () => void;
  onSuccess: () => void;
}

const BANK_DETAILS = {
  accountName: "NEEV WELFARE FOUNDATION",
  accountNumber: "926020050670942",
  ifsc: "UTIB0005348",
  bank: "Axis Bank",
  accountType: "Current Account",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Copy"
      className="ml-2 p-1 rounded-md hover:bg-slate-200 transition-colors text-slate-400 hover:text-slate-700"
    >
      {copied ? (
        <span className="text-[10px] font-bold text-emerald-600">Copied!</span>
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export function DonationConfirmModal({
  data,
  onClose,
}: DonationConfirmModalProps) {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-donation-title"
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

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3
              id="modal-donation-title"
              className="text-xl font-extrabold text-[#001c37] font-heading tracking-tight"
            >
              Online Payment Not Available
            </h3>
            <p className="text-xs text-slate-500">
              Please transfer directly to our bank account
            </p>
          </div>
        </div>

        {/* Notice */}
        <div className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-5">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            Online payment gateway is <strong>not yet integrated</strong> on this website. To donate{" "}
            <strong>{formatCurrency(data.amount)}</strong> for{" "}
            <strong>{data.cause}</strong>, please use the bank details below and
            then contact us with your transaction reference for your 80G receipt.
          </span>
        </div>

        {/* Bank Details Card */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-5 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-[#00873e]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#001c37]">
              Direct Bank Transfer Details
            </span>
          </div>

          {[
            { label: "Account Name", value: BANK_DETAILS.accountName },
            { label: "Account Number", value: BANK_DETAILS.accountNumber },
            { label: "IFSC Code", value: BANK_DETAILS.ifsc },
            { label: "Bank", value: BANK_DETAILS.bank },
            { label: "Account Type", value: BANK_DETAILS.accountType },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between py-1.5 border-b border-slate-200/60 last:border-0"
            >
              <span className="text-xs text-slate-500">{label}:</span>
              <div className="flex items-center">
                <span className="font-mono font-bold text-xs text-[#001c37]">
                  {value}
                </span>
                <CopyButton text={value} />
              </div>
            </div>
          ))}
        </div>

        {/* After Transfer */}
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-xs text-emerald-900 mb-5 space-y-1">
          <p className="font-bold text-emerald-800 mb-1">After transferring, please share:</p>
          <p>• Your name: <strong>{data.name}</strong></p>
          <p>• Transaction reference / UTR number</p>
          {data.pan && <p>• PAN for 80G receipt: <strong>{data.pan}</strong></p>}
          <p>• Cause: <strong>{data.cause}</strong></p>
        </div>

        {/* Contact to inform */}
        <div className="space-y-2 mb-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Share payment details with us at:
          </p>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="flex items-center gap-2 text-sm font-bold text-[#00873e] hover:underline"
          >
            <Mail className="w-4 h-4" />
            {SITE_CONFIG.contact.email}
          </a>
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#00873e] transition-colors"
          >
            <Phone className="w-4 h-4" />
            {SITE_CONFIG.contact.phoneDisplay}
          </a>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-[#001c37] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0a2540] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
