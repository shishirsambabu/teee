"use client";

import { SlideUp, ScaleReveal, CharReveal, LineReveal, SpotlightCard, TiltCard } from "../components/animations";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HowWeWorkPage() {
  const engagements = [
    {
      num: "01",
      title: "EX Diagnostic",
      subtitle: "For HR leaders who need clarity fast.",
      desc: "We bring in your existing data, map one key persona, and hand you a heat-map, a prioritized list of leaks, and a scorecard. You'll know exactly where to focus within weeks.",
      outcomes: [
        "A clear picture of your highest-leverage experience gaps.",
        "A prioritized list of what to fix first, with evidence behind it."
      ]
    },
    {
      num: "02",
      title: "Deep Listening",
      subtitle: "For teams ready to hear the full truth.",
      desc: "We add native pulses, journey interviews, and AI sentiment across multiple personas — triangulated so the findings are bulletproof.",
      outcomes: [
        "Multi-persona evidence library.",
        "Bulletproof findings you can take to the board."
      ]
    },
    {
      num: "03",
      title: "Transformation Retainer",
      subtitle: "For organizations committing to change.",
      desc: "The full Loop: interventions tracked, outcomes measured, benchmarks unlocked, and a standing cadence so experience becomes a capability, not a project.",
      outcomes: [
        "Experience becomes a repeatable, measurable capability.",
        "Outcomes tracked over time with a standing rhythm."
      ]
    }
  ];

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <SlideUp>
          <div className="mb-32 mt-12">
            <CharReveal text="ENGAGEMENTS" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white">Start small. Go as deep as you need.</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              We work across three engagement types. Most clients start with a Diagnostic.
            </p>
          </div>
        </SlideUp>

        <div className="flex flex-col mb-32">
          <LineReveal className="h-[1px] bg-[#1a1a1a] w-full" />
          {engagements.map((engagement, index) => (
            <ScaleReveal key={engagement.num} delay={index * 0.1}>
              <TiltCard>
                <SpotlightCard className="w-full relative">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 md:py-24 border-b border-[#1a1a1a] group hover:bg-[rgba(255,255,255,0.01)] transition-colors px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    <div className="md:col-span-2 flex items-start">
                      <span className="text-5xl md:text-6xl font-serif text-primary/20 group-hover:text-primary transition-colors duration-500">{engagement.num}</span>
                    </div>
                    <div className="md:col-span-4">
                      <h2 className="text-3xl md:text-4xl font-serif mb-2 text-white group-hover:translate-x-2 transition-transform duration-500">{engagement.title}</h2>
                      <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">{engagement.subtitle}</p>
                    </div>
                    <div className="md:col-span-6 flex flex-col">
                      <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 leading-relaxed group-hover:text-white/80 transition-colors duration-500 flex-grow">{engagement.desc}</p>
                      <div className="mb-10">
                        <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-6">What changes after this:</h3>
                        <ul className="space-y-4">
                          {engagement.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-4 text-muted-foreground font-light text-base group-hover:text-white/70 transition-colors duration-500">
                              <span className="text-primary mt-1 opacity-50 group-hover:opacity-100">●</span> {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-8 mt-auto border-t border-white/5">
                        <Link href="/contact" className="inline-flex items-center text-sm font-mono tracking-widest text-primary hover:text-white transition-colors group/btn">
                          {engagement.title === "Transformation Retainer" ? "Start a Conversation" : `Book my ${engagement.title}`} <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </ScaleReveal>
          ))}
        </div>

        {/* Why we're different / Trust points */}
        <SlideUp>
          <div className="bg-[#050505] border border-[#1a1a1a] p-12 md:p-20 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <ShieldCheck size={240} />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 max-w-2xl relative z-10">Why we're different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-white flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Anonymity that's real
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-5">
                  We never report a group small enough to identify an individual.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-white flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Consent and privacy first
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-5">
                  Data handled to DPDP and GDPR standards.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-white flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Close-the-loop, always
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-5">
                  Everyone who gives us signal hears back what changed.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-white flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Honest attribution
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-5">
                  We claim what the evidence supports, not inflated ROI.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-12 py-5 bg-primary text-black hover:bg-white transition-all duration-500 font-bold text-sm tracking-widest uppercase text-center group">
              Find the right starting point <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
