"use client";

import { SlideUp, CharReveal, SpotlightCard, ScaleReveal } from "../components/animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PulseWaveVisual, ScatterPlotVisual } from "../components/VisualAssets";

export default function PlatformPage() {
  const features = [
    {
      title: "Listen",
      desc: "Import existing engagement-survey and HRIS data. Build native pulses from a moments-that-matter question bank. Capture journey interviews with AI-assisted sentiment tagging. One unified evidence library, triangulated for confidence."
    },
    {
      title: "Map & Diagnose",
      desc: "Interactive Journey × Drivers heat-maps, per persona. Automatic experience-gap calculation. AI narratives that explain the 'why' behind every leak. Prioritized, peak-end-weighted list of what to fix first."
    },
    {
      title: "Act & Prove",
      desc: "Intervention portfolio scored on impact, effort, and reversibility. Owners, baselines, and status tracking. Boardroom scorecard tracking movement over time. Export straight to a presentation-ready readout."
    },
    {
      title: "Built-in Trust",
      desc: "Enforced anonymity thresholds, consent capture, and audit logging. Each client's data fully isolated. We never report a group small enough to identify an individual. Data handled to DPDP and GDPR standards."
    }
  ];

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <SlideUp>
          <div className="mb-32 mt-12">
            <CharReveal text="THE PLATFORM" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white">Your organization's experience, in one living picture.</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              Everything the method produces, in a secure workspace built for HR leaders and their teams.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {features.map((feature, index) => (
            <ScaleReveal key={index} delay={index * 0.1} className="h-full">
              <SpotlightCard className="bg-[#050505] border border-[#1a1a1a] h-full p-10 md:p-14 hover:border-primary/30 transition-colors duration-500 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">{feature.title}</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 flex-grow">
                  {feature.desc}
                </p>
                {feature.title === "Listen" && <div className="mt-auto"><PulseWaveVisual height={240} caption="Unified evidence library" /></div>}
                {feature.title === "Map & Diagnose" && <div className="mt-auto"><ScatterPlotVisual height={320} caption="Experience gap analysis — expectation vs. reality" /></div>}
              </SpotlightCard>
            </ScaleReveal>
          ))}
        </div>

        <SlideUp>
          <div className="flex justify-center border-t border-[#1a1a1a] pt-24">
            <Link href="/contact" className="inline-flex items-center justify-center px-12 py-5 bg-primary text-black hover:bg-white transition-all duration-500 font-bold text-sm tracking-widest uppercase text-center group">
              See it on your data <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
