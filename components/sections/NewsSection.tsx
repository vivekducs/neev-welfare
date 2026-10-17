"use client";

import React, { useState } from "react";
import { NEWS_ARTICLES, NewsArticle } from "@/lib/data";
import { NewsCard } from "@/components/cards/NewsCard";
import { NewsArticleModal } from "@/components/modals/NewsArticleModal";

const NEWS_CATEGORIES = ["All", "Education", "Livelihoods", "Environment"];

interface NewsSectionProps {
  showTitle?: boolean;
}

export function NewsSection({ showTitle = true }: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    if (selectedCategory === "All") return true;
    return article.category === selectedCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
              <span>FIELD DISPATCHES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              News, Stories & Ground Updates
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Real stories of dignity, grassroots progress, and community transformation straight from our field centers in Bundelkhand.
            </p>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {NEWS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#001c37] text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onSelect={(art) => setActiveArticle(art)}
            />
          ))}
        </div>

        {/* Article Full View Modal */}
        <NewsArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      </div>
    </section>
  );
}
