"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SlideUp, ScaleReveal, CharReveal, SpotlightCard, FloatCard } from "../components/animations";
import { articles } from "../data/articles";

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case "EX Method": return "bg-lime-500";
    case "Diagnostics": return "bg-teal-500";
    case "Data & Evidence": return "bg-blue-500";
    case "AI + HR": return "bg-purple-500";
    case "People Science": return "bg-orange-500";
    case "Transformation": return "bg-pink-500";
    case "Automation": return "bg-cyan-500";
    case "Capability Building": return "bg-indigo-500";
    case "Process Design": return "bg-yellow-500";
    case "Small Business": return "bg-green-500";
    default: return "bg-primary";
  }
};

const categories = [
  "All", "EX Method", "Diagnostics", "Data & Evidence", "AI + HR",
  "People Science", "Transformation", "Automation", "Capability Building",
  "Process Design", "Small Business"
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const featured = filteredArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Hero visual */}
        <SlideUp>
          <div className="w-full h-[320px] bg-[rgba(255,255,255,0.02)] border border-white/5 relative overflow-hidden flex items-center justify-center mb-16">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-64 h-64 rounded-full border border-primary/40 absolute -translate-x-12 translate-y-8" />
              <div className="w-48 h-48 rounded-full border border-primary/20 absolute translate-x-16 -translate-y-4" />
              <div className="w-96 h-96 rounded-full border border-primary/10 absolute" />
            </div>
            <h2 className="relative z-10 font-serif text-3xl md:text-5xl text-white tracking-tight text-center px-6">Perspectives on employee experience</h2>
          </div>

          <div className="mb-16">
            <CharReveal text="PERSPECTIVES" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
            <h1 className="font-serif text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
              Insights
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Ideas worth sitting with. On EX, people science, AI, and the future of work.
            </p>
          </div>
        </SlideUp>

        {/* Filter Bar */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-16" style={{ scrollbarWidth: "none" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 font-mono text-xs tracking-widest uppercase transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-black"
                  : "border border-white/20 text-white/60 hover:text-white hover:border-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground font-mono text-sm">
            No articles in this category yet.
          </div>
        ) : (
          <div className="space-y-8">

            {/* Featured article */}
            {featured && (
              <FloatCard>
                <ScaleReveal>
                  <Link href={`/insights/${featured.slug}`}>
                    <SpotlightCard className="border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] group hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden block">
                      <div className="flex flex-col lg:flex-row">
                        {/* Visual left panel */}
                        <div className="w-full lg:w-1/2 min-h-[280px] bg-[#050505] relative flex flex-col justify-between p-12 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent blur-3xl opacity-50 pointer-events-none" />
                          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl opacity-30 pointer-events-none" />
                          <span className="text-[7rem] font-serif text-white/[0.06] leading-none select-none">{featured.num}</span>
                          <span className={`self-start px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-black ${getCategoryColor(featured.category)}`}>
                            {featured.category}
                          </span>
                        </div>
                        {/* Content right panel */}
                        <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">{featured.readTime} · {featured.date}</span>
                          <h2 className="font-serif text-white mb-6 group-hover:text-primary/90 transition-colors text-3xl md:text-4xl xl:text-5xl leading-tight">
                            {featured.title}
                          </h2>
                          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">{featured.excerpt}</p>
                          <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest uppercase">
                            Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </ScaleReveal>
              </FloatCard>
            )}

            {/* Article grid */}
            {gridArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridArticles.map((article, i) => (
                  <ScaleReveal key={article.slug} delay={i * 0.05} className="h-full">
                    <Link href={`/insights/${article.slug}`} className="block h-full">
                      <SpotlightCard className="border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] group hover:border-primary/30 transition-all duration-500 cursor-pointer h-full flex flex-col relative overflow-hidden">
                        {/* Category colour bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity ${getCategoryColor(article.category)}`} />
                        <div className="p-8 pt-10 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-6">
                            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{article.category}</span>
                            <span className="font-mono text-[10px] tracking-widest text-white/40">{article.readTime}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-primary/90 transition-colors leading-tight flex-grow">
                            {article.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">{article.excerpt}</p>
                          <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mt-auto">
                            Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </SpotlightCard>
                    </Link>
                  </ScaleReveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Subscribe strip */}
        <SlideUp delay={0.2}>
          <div className="mt-32 p-12 border border-[#1a1a1a] bg-[#050505] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-serif text-white mb-2">Want these in your inbox?</h3>
              <p className="text-muted-foreground font-light">Fresh thinking on employee experience — monthly, no filler.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
              <input
                type="email"
                placeholder="Your work email"
                className="bg-transparent border border-white/10 px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary w-full sm:w-80 transition-colors"
              />
              <button className="px-8 py-4 bg-primary text-black font-bold font-mono text-xs tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </SlideUp>

      </div>
    </div>
  );
}
