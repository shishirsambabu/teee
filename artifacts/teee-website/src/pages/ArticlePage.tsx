"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { SlideUp, ScaleReveal, SpotlightCard } from "../components/animations";
import { getArticleBySlug, articles } from "../data/articles";

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case "EX Method": return "text-lime-400 border-lime-400/30";
    case "Diagnostics": return "text-teal-400 border-teal-400/30";
    case "Data & Evidence": return "text-blue-400 border-blue-400/30";
    case "AI + HR": return "text-purple-400 border-purple-400/30";
    case "People Science": return "text-orange-400 border-orange-400/30";
    case "Transformation": return "text-pink-400 border-pink-400/30";
    case "Automation": return "text-cyan-400 border-cyan-400/30";
    case "Capability Building": return "text-indigo-400 border-indigo-400/30";
    case "Process Design": return "text-yellow-400 border-yellow-400/30";
    case "Small Business": return "text-green-400 border-green-400/30";
    default: return "text-primary border-primary/30";
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const article = getArticleBySlug(slug);
  const [pageUrl, setPageUrl] = useState('');
  useEffect(() => { setPageUrl(window.location.href); }, []);

  if (!article) {
    return (
      <div className="w-full pt-48 pb-48 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="font-mono text-xs tracking-widest text-primary mb-6">404</p>
        <h1 className="text-5xl font-serif text-white mb-8">Article not found.</h1>
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Back to Insights
        </Link>
      </div>
    );
  }

  const currentIndex = articles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const colorClass = getCategoryColor(article.category);

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Back link */}
        <SlideUp>
          <Link href="/insights" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase mb-16 mt-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            All Insights
          </Link>
        </SlideUp>

        {/* Article Header */}
        <div className="max-w-4xl mb-24">
          <SlideUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className={`font-mono text-xs tracking-widest uppercase px-3 py-1 border ${colorClass}`}>
                {article.category}
              </span>
              <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground">
                <Clock size={11} /> {article.readTime}
              </span>
              <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground">
                <Calendar size={11} /> {article.date}
              </span>
            </div>

            <h1 className="font-serif text-white leading-tight mb-10"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {article.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed border-l-2 border-primary pl-6">
              {article.excerpt}
            </p>
          </SlideUp>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#1a1a1a] mb-24" />

        {/* Article Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <SlideUp delay={0.2}>
              <div className="sticky top-32 space-y-8">
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase mb-4">Written by</p>
                  <p className="font-serif text-white text-lg">Shishir Babu</p>
                  <p className="font-mono text-xs tracking-widest text-primary">HR LEADER × AI BUILDER</p>
                </div>
                <div className="border-t border-[#1a1a1a] pt-8">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase mb-4">Share this</p>
                  <div className="space-y-3">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors">
                      LinkedIn →
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(pageUrl)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors">
                      X / Twitter →
                    </a>
                  </div>
                </div>
                <div className="border-t border-[#1a1a1a] pt-8">
                  <Link href="/contact"
                    className="block w-full px-6 py-4 bg-primary text-black font-bold font-mono text-xs tracking-widest uppercase text-center hover:bg-white transition-colors">
                    Book an EX Diagnostic
                  </Link>
                </div>
              </div>
            </SlideUp>
          </aside>

          {/* Body content */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            <SlideUp delay={0.15}>
              <div className="prose prose-invert max-w-none">
                {article.body.map((section, si) => (
                  <div key={si} className="mb-12">
                    {section.heading && (
                      <h2 className="font-serif text-white mb-6"
                        style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}>
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((para, pi) => (
                      <p key={pi} className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </SlideUp>

            {/* CTA block */}
            <SlideUp delay={0.3}>
              <div className="mt-24 p-10 md:p-14 bg-[#050505] border border-[#1a1a1a] hover:border-primary/30 transition-colors">
                <p className="font-mono text-xs tracking-widest text-primary uppercase mb-4">Ready to see it in your organization?</p>
                <h3 className="font-serif text-white text-3xl md:text-4xl mb-6">
                  Let's run the first experiment together.
                </h3>
                <p className="text-muted-foreground font-light mb-10 max-w-xl leading-relaxed">
                  Book a 30-minute call. We'll walk one of your toughest lifecycle moments through the Loop, live — and you'll leave with a real insight, whether or not we work together.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-bold font-mono text-xs tracking-widest uppercase hover:bg-white transition-colors group">
                  Book your EX Diagnostic
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SlideUp>
          </main>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-32 border-t border-[#1a1a1a] pt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevArticle ? (
            <ScaleReveal>
              <Link href={`/insights/${prevArticle.slug}`}>
                <SpotlightCard className="border border-[#1a1a1a] p-8 hover:border-primary/30 transition-colors group cursor-pointer block">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4 flex items-center gap-2">
                    <ArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" /> Previous
                  </p>
                  <h4 className="font-serif text-white text-xl group-hover:text-primary/90 transition-colors leading-tight">
                    {prevArticle.title}
                  </h4>
                </SpotlightCard>
              </Link>
            </ScaleReveal>
          ) : <div />}

          {nextArticle ? (
            <ScaleReveal delay={0.1}>
              <Link href={`/insights/${nextArticle.slug}`}>
                <SpotlightCard className="border border-[#1a1a1a] p-8 hover:border-primary/30 transition-colors group cursor-pointer block text-right">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4 flex items-center justify-end gap-2">
                    Next <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                  <h4 className="font-serif text-white text-xl group-hover:text-primary/90 transition-colors leading-tight">
                    {nextArticle.title}
                  </h4>
                </SpotlightCard>
              </Link>
            </ScaleReveal>
          ) : <div />}
        </div>

      </div>
    </div>
  );
}
