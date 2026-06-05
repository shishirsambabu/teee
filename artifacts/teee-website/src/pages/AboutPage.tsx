"use client";

import { FadeIn } from "../components/FadeIn";
import { FounderVisual } from "../components/VisualAssets";

export default function AboutPage() {
  return (
    <div className="w-full pt-32 pb-48">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-24">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6 block">WHY EXPERIMENT?</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white">Because instinct isn't enough.</h1>
          </div>
        </FadeIn>

        {/* Section 1: The Practice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">The Practice</h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-8">
            <FadeIn>
              <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                <p>
                  Most employee experience work is built on opinion, politics, and the loudest voice in the room. That's exactly why it fails. We believe how it feels to work somewhere is too important to leave to instinct.
                </p>
                <p>
                  TEEE was built to bring the discipline of experimentation to the most human part of work: observe honestly, map clearly, test small, measure truthfully, and always close the loop.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Section 2: Founder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn>
              <FounderVisual height={400} imageSrc="/founder.jpg" />
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-serif mb-4 text-white">Shishir Babu</h2>
              <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12">HR Leader × AI Builder</p>
              
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                <p>
                  TEEE is led by Shishir Babu — working at the intersection of HR, L&D, and AI. With a career built at the crossroads of people science and practical technology, Shishir founded TEEE to fix the thing most HR work gets wrong: the gap between what organizations measure and what employees actually experience.
                </p>
                <p>
                  The EX Experiment Loop is built on the belief that rigorous method produces better outcomes than good intentions — and that you can only improve what you can honestly see.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Section 3: Recognition */}
        <div className="border-t border-border pt-16">
          <FadeIn>
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-8">Recognition</h2>
            <div className="border border-border p-6 md:p-8 inline-block bg-[#050505] hover:border-primary transition-colors">
              <p className="font-mono text-sm md:text-base tracking-wide text-foreground">
                HR Excellence Award 2026 <span className="text-primary mx-4">|</span> Digital HR Transformation <span className="text-primary mx-4">|</span> Indywood
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
