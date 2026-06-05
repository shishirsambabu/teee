"use client";

import { SlideUp, CharReveal, SpotlightCard } from "../components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeatMapVisual } from "../components/VisualAssets";

export default function TheMethodPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const phases = [
    {
      num: "01",
      title: "HYPOTHESIZE",
      desc: "We define the sponsor, the business outcome to move, the lifecycle stages and personas in scope, and a sharp, testable hypothesis. No vague mandates — just a specific question worth answering.",
      outcome: "A one-page Experiment Charter."
    },
    {
      num: "02",
      title: "OBSERVE",
      desc: "We gather signal from existing data, fresh listening, and behavioral traces — and only trust a finding when at least two independent sources agree. One loud voice cannot skew the picture.",
      outcome: "A tagged evidence library."
    },
    {
      num: "03",
      title: "MAP",
      desc: "We build your Journey × Drivers grid and plot the moments that matter, scored by sentiment, for each persona. The invisible, made visible.",
      outcome: "An EX heat-map that shows exactly where experience breaks down."
    },
    {
      num: "04",
      title: "DIAGNOSE",
      desc: "We calculate the gap between expectation and reality at each moment, weight it by what shapes memory, and root-cause the biggest leaks. Not symptoms — root causes.",
      outcome: "A ranked list of where experience breaks — and why."
    },
    {
      num: "05",
      title: "TEST",
      desc: "We pick a few high-leverage interventions, set baselines, and run them as real experiments — not a 40-point transformation deck that no one implements.",
      outcome: "An intervention portfolio with owners and a kill/scale rule."
    },
    {
      num: "06",
      title: "LOOP",
      desc: "We re-measure, report movement against your outcome metric, and close the loop with your people. Everyone who gave us signal hears back what changed.",
      outcome: "An EX scorecard and a standing rhythm."
    }
  ];

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <SlideUp>
          <div className="mb-32 mt-12">
            <CharReveal text="THE EXPERIMENT" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white">The EX Experiment Loop</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              A scientific method for employee experience. Each stage produces a concrete artifact and enforces a guardrail — so the work is rigorous every single time.
            </p>
          </div>
        </SlideUp>

        <div className="w-full mb-32">
          <HeatMapVisual height={360} caption="Where experience breaks down" />
        </div>

        <div className="max-w-5xl mx-auto relative mb-32" ref={containerRef}>
          {/* Static background line */}
          <div className="absolute left-6 md:left-[3.25rem] top-0 bottom-0 w-[1px] bg-[#1a1a1a]"></div>
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-6 md:left-[3.25rem] top-0 bottom-0 w-[1px] bg-primary origin-top"
            style={{ scaleY }}
          ></motion.div>
          
          <div className="space-y-24 md:space-y-32 py-12">
            {phases.map((phase, index) => (
              <div key={phase.num} className="flex flex-col md:flex-row gap-8 md:gap-16 relative group">
                <div className="bg-background relative z-10 w-12 md:w-24 shrink-0 flex justify-center md:justify-start items-center md:items-start pt-6">
                  {/* Circle marker */}
                  <div className="absolute left-6 md:left-[3.25rem] top-8 w-3 h-3 rounded-full bg-background border-2 border-primary -translate-x-[5.5px] md:-translate-x-[5.5px] group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(110,230,0,0)] group-hover:shadow-[0_0_15px_rgba(110,230,0,0.5)]"></div>
                  <span className="text-2xl md:text-4xl font-mono text-primary/40 group-hover:text-primary transition-colors duration-300 md:ml-12 hidden md:block">{phase.num}</span>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full ml-12 md:ml-0"
                >
                  <SpotlightCard className="bg-[#050505] border border-[#1a1a1a] border-l-primary/30 group-hover:border-l-primary p-8 md:p-12 w-full transition-all duration-500 h-full">
                    <span className="text-xl font-mono text-primary/40 block md:hidden mb-4">{phase.num}</span>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white tracking-wide">{phase.title}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 leading-relaxed group-hover:text-white/80 transition-colors duration-500">{phase.desc}</p>
                    
                    <div className="pt-8 border-t border-[#1a1a1a]">
                      <p className="text-xs font-mono tracking-widest text-primary uppercase mb-3">What you leave with:</p>
                      <p className="text-base text-white/90 font-light">{phase.outcome}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <SlideUp>
          <div className="border-t border-[#1a1a1a] pt-24 text-center mb-16">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-12">Engagement Types</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["EX Diagnostic", "Deep Listening", "Transformation Retainer"].map((type, i) => (
                <Link key={i} href="/how-we-work" className="px-8 py-4 bg-[#050505] border border-[#1a1a1a] text-sm font-mono tracking-widest uppercase text-white hover:border-primary hover:text-primary transition-colors duration-300 cursor-pointer">
                  {type}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center pt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-12 py-5 bg-primary text-black hover:bg-white transition-all duration-500 font-bold text-sm tracking-widest uppercase text-center group">
              Start with an EX Diagnostic <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
