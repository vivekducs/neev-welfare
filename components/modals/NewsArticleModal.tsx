"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Calendar } from "lucide-react";
import { NewsArticle } from "@/lib/data";

interface NewsArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export function NewsArticleModal({ article, onClose }: NewsArticleModalProps) {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white uppercase bg-[#00873e]">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
          </div>
          <h2
            id="modal-article-title"
            className="text-2xl sm:text-3xl font-extrabold text-[#001c37] font-heading tracking-tight leading-tight"
          >
            {article.title}
          </h2>
        </div>

        <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 my-4 shadow-inner">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>

        <div className="text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line py-2">
          {article.content}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-[#001c37] hover:bg-[#0a2540] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
}
