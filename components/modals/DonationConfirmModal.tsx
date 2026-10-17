"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

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

export function DonationConfirmModal({
  data,
  onClose,
  onSuccess,
}: DonationConfirmModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!data) return null;

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 1200);
  };

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

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00873e] flex items-center justify-center">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h3
              id="modal-donation-title"
              className="text-xl font-extrabold text-[#001c37] font-heading tracking-tight"
            >
              Confirm Contribution
            </h3>
            <p className="text-xs text-slate-500">
              Tax Exemption under Section 80G
            </p>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5 text-xs text-slate-700 mb-6">
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500">Contribution Amount:</span>
            <strong className="text-base text-[#00873e] font-heading">
              {formatCurrency(data.amount)}
            </strong>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500">Frequency:</span>
            <span className="font-semibold text-slate-800">{data.frequency}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500">Selected Cause:</span>
            <span className="font-semibold text-slate-800 text-right">{data.cause}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500">Donor Name:</span>
            <span className="font-semibold text-slate-800">{data.name}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500">Email Address:</span>
            <span className="font-semibold text-slate-800">{data.email}</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-slate-500">PAN for 80G:</span>
            <span className="font-semibold text-slate-800 uppercase">
              {data.pan || "Not Provided (Standard Receipt)"}
            </span>
          </div>
        </div>

        {/* 80G Notice */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 mb-6">
          <ShieldCheck className="w-4 h-4 text-[#00873e] shrink-0 mt-0.5" />
          <span>
            An official Section 80G tax receipt will be issued to {data.email} upon successful transaction verification.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            disabled={isProcessing}
            onClick={handleConfirm}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isProcessing ? (
              <span>Processing Contribution...</span>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>COMPLETE SECURE CONTRIBUTION</span>
              </>
            )}
          </button>
          <button
            type="button"
            disabled={isProcessing}
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl text-slate-500 hover:text-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Cancel / Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}
