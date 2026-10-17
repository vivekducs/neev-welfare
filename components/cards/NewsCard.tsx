"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { NewsArticle } from "@/lib/data";

interface NewsCardProps {
  article: NewsArticle;
  onSelect: (article: NewsArticle) => void;
}

export function NewsCard({ article, onSelect }: NewsCardProps) {
  return (
    <article
      onClick={() => onSelect(article)}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Image frame with category badge */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white uppercase bg-[#00873e] shadow-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#00873e]" />
            <span>{article.date}</span>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-[#001c37] group-hover:text-[#00873e] transition-colors font-heading mb-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-[#00873e] flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>READ FULL STORY</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
