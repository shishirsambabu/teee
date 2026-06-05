"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WordReveal, CharReveal, SlideUp, ScaleReveal, LineReveal, CountUp, MagneticButton, SpotlightCard } from "../components/animations";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { HeatMapVisual, PulseWaveVisual, ExperimentLoopVisual, FounderVisual } from "../components/VisualAssets";

const MarqueeStrip = () => {
  return (
    <div className="w-full border-y border-[#1a1a1a] py-5 overflow-hidden bg-background relative flex flex-col gap-2">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-mono tracking-[0.3em] text-[11px] text-muted-foreground/40 uppercase mx-4">
          EMPLOYEE EXPERIENCE ·· EX DIAGNOSTICS ·· JOURNEY MAPPING ·· EXPERIENCE DESIGN ·· SCIENCE-LED METHOD ·· THE EXPERIMENT LOOP ·· 
          EMPLOYEE EXPERIENCE ·· EX DIAGNOSTICS ·· JOURNEY MAPPING ·· EXPERIENCE DESIGN ·· SCIENCE-LED METHOD ·· THE EXPERIMENT LOOP ··
          EMPLOYEE EXPERIENCE ·· EX DIAGNOSTICS ·· JOURNEY MAPPING ·· EXPERIENCE DESIGN ·· SCIENCE-LED METHOD ·· THE EXPERIMENT LOOP ··
        </span>
      </div>
      <div className="flex whitespace-nowrap animate-marquee-reverse">
        <span className="font-mono tracking-[0.3em] text-[11px] text-muted-foreground/40 uppercase mx-4">
          EMPLOYEE EXPERIENCE ·· EX DIAGNOSTICS ·· JOURNEY MAPPING ·· EXPERIENCE DESIGN ·· SCIENCE-LED METHOD ·· THE EXPERIMENT LOOP ·· 
          EMPLOYEE EXPERIENCE ·· EX DIAGNOSTICS ·· JOURNEY MAPPING ·· EXPERIENCE DESIGN ·· SCIENCE-LED METHOD ·· THE EXPERIMENT LOOP ··
          EMPLOYEE EXPERIENCE ·· EX DIAGNOSTICS ·· JOURNEY MAPPING ·· EXPERIENCE DESIGN ·· SCIENCE-LED METHOD ·· THE EXPERIMENT LOOP ··
        </span>
      </div>
    </div>
  );
};

export default function HomePage() {
  const methodologyRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 80 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 80 });

  const orbLeft = useTransform(springX, [0, 100], ["-10%", "60%"]);
  const orbTop = useTransform(springY, [0, 100], ["-20%", "60%"]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);
  
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />
        
        <motion.div
          className="absolute w-[900px] h-[900px] bg-primary rounded-full blur-[250px] opacity-[0.05] pointer-events-none"
          style={{ left: orbLeft, top: orbTop }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-primary rounded-full blur-[150px] opacity-[0.04] pointer-events-none"
          style={{ 
            left: useTransform(springX, [0, 100], ["20%", "70%"]),
            top: useTransform(springY, [0, 100], ["30%", "80%"]),
          }}
        />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[60%] flex flex-col items-start">
            <div className="mb-8">
              <CharReveal text="EST. 2024 — THE EMPLOYEE EXPERIENCE EXPERIMENT" className="font-mono tracking-[0.3em] text-[10px] text-primary/60" />
            </div>
            
            <LineReveal className="w-12 h-[1px] bg-primary mb-8" delay={0.1} />

            <h1 className="text-display-xl font-serif tracking-tight mb-8">
              <WordReveal text="You can feel something's off." className="text-white block" delay={0.2} />
              <WordReveal text="Now you can see exactly where." className="text-gradient-green italic block" delay={0.5} />
            </h1>
            
            <SlideUp delay={1.2} className="w-full">
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 font-light leading-relaxed">
                TEEE helps HR leaders map, diagnose, and improve how it actually feels to work in their organization — using a rigorous, science-led method, not another survey that disappears into a void.
              </p>
            </SlideUp>
            
            <SlideUp delay={1.4} className="w-full">
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <MagneticButton className="inline-block">
                  <Link href="/contact" className="block px-10 py-5 bg-primary text-black hover:bg-white transition-all duration-500 font-bold text-sm tracking-widest uppercase text-center w-full" data-testid="hero-cta-1">
                    Book an EX Diagnostic
                  </Link>
                </MagneticButton>
                <MagneticButton className="inline-block">
                  <Link href="/the-method" className="block px-10 py-5 border border-white/20 hover:border-white transition-all duration-500 font-mono text-xs tracking-[0.2em] uppercase text-center text-white w-full" data-testid="hero-cta-2">
                    See the method →
                  </Link>
                </MagneticButton>
              </div>
            </SlideUp>
          </div>
          
          <div className="hidden md:flex w-[40%] justify-end items-center pointer-events-none select-none">
             <motion.span 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 0.04, scale: 1 }}
               transition={{ duration: 2, delay: 1 }}
               className="text-[25vw] font-serif text-primary leading-none"
             >
               EX
             </motion.span>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-6 origin-bottom-left -rotate-90 hidden md:block">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 whitespace-nowrap">
            -30.7327° N, 76.7794° E — CHANDIGARH
          </p>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent">
           <motion.div 
             animate={{ y: ["-100%", "200%"] }} 
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="w-full h-1/3 bg-primary"
           />
        </div>
      </section>

      <div className="w-full overflow-hidden bg-black border-y border-[#1a1a1a]">
        <HeatMapVisual height={480} caption="Journey × Drivers — the invisible, made visible" />
      </div>

      <MarqueeStrip />

      {/* SECTION 1: THE PROBLEM */}
      <section className="py-40 relative bg-background overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-48">
            <h2 className="text-display-lg font-serif text-white">
              <WordReveal text="Engagement scores go up." delay={0.1} />
            </h2>
            <h2 className="text-display-lg font-serif italic md:text-right mt-4 md:mt-8">
              <span className="text-gradient-green">
                <WordReveal text="Nothing actually changes." delay={0.8} />
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
             <ScaleReveal delay={0.2} className="group relative pt-8 h-full">
                <div className="section-divider-green absolute top-0 left-0 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <SpotlightCard className="h-full p-8 border border-[#1a1a1a] group-hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-serif text-white mb-4">The Survey Void</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    You run the annual survey. You get a number. Leadership nods. A year later, the same people are quietly checking out — and you find out at the exit interview, when it's already too late.
                  </p>
                </SpotlightCard>
             </ScaleReveal>
             <ScaleReveal delay={0.3} className="group relative pt-8 h-full">
                <div className="section-divider-green absolute top-0 left-0 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <SpotlightCard className="h-full p-8 border border-[#1a1a1a] group-hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-serif text-white mb-4">The Invisible Fragmentation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Employee experience lives in a hundred small moments scattered across the lifecycle — the offer that overpromised, the onboarding week no one owned, the manager 1:1 that never happens. No single dashboard captures it.
                  </p>
                </SpotlightCard>
             </ScaleReveal>
             <ScaleReveal delay={0.4} className="group relative pt-8 h-full">
                <div className="section-divider-green absolute top-0 left-0 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <SpotlightCard className="h-full p-8 border border-[#1a1a1a] group-hover:border-primary/20 transition-colors">
                  <h3 className="text-2xl font-serif text-white mb-4">The Fixability Trap</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    You can't fix what you can't see. So organizations keep treating culture as an art project — instinct-led, evidence-light, and quietly losing the people they most needed to keep.
                  </p>
                </SpotlightCard>
             </ScaleReveal>
          </div>
        </div>
        <div className="absolute right-[-10%] top-[20%] text-[40rem] font-serif text-primary/[0.02] select-none pointer-events-none hidden lg:block leading-none">?</div>
      </section>

      <div className="section-divider w-full" />

      {/* SECTION 2: THE THREE PILLARS (WHAT WE BELIEVE) */}
      <section className="bg-background w-full">
        {[
          { num: "01", title: "Experience is made of moments — and a few of them matter far more than the rest.", desc: "People don't remember the average of their year. They remember the peaks and how things ended. That's the science. We build our whole method around it." },
          { num: "02", title: "We only trust a finding when at least two independent sources agree.", desc: "Existing data. Fresh listening. Behavioral traces. We triangulate before we diagnose — because a single loud voice, or a single survey score, is not evidence." },
          { num: "03", title: "Close the loop. Always.", desc: "Most engagement work asks people for the truth and then goes quiet — which quietly destroys trust. We refuse to. Everyone who gives us signal hears back what changed." }
        ].map((pillar, i) => (
          <div key={i} className="w-full relative overflow-hidden group">
            {i === 1 && (
              <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 py-12 relative z-10">
                <PulseWaveVisual height={240} />
              </div>
            )}
            <div className="py-24 md:py-32 max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
               <div className="w-full md:w-1/3 mb-12 md:mb-0">
                  <motion.div 
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[8rem] md:text-[10rem] font-serif text-primary/10 leading-none group-hover:text-primary/20 transition-colors duration-700"
                  >
                    {pillar.num}
                  </motion.div>
               </div>
               <div className="w-full md:w-2/3 md:pl-12 lg:pl-24">
                  <CharReveal text={`PILLAR ${['ONE', 'TWO', 'THREE'][i]}`} className="font-mono text-xs tracking-widest text-primary mb-6" delay={0.2} />
                  <SlideUp delay={0.3}>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">{pillar.title}</h3>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                      {pillar.desc}
                    </p>
                  </SlideUp>
                  <LineReveal className="h-[1px] bg-primary/30 w-full mt-12 max-w-2xl" delay={0.5} />
               </div>
            </div>
            <div className="section-divider w-full" />
          </div>
        ))}
      </section>

      {/* SECTION 3: THE METHOD TEASER */}
      <section className="py-32 md:py-48 bg-[#050505]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="mb-24">
            <h2 className="text-display-lg font-serif text-white mb-6">
              <WordReveal text="Six stages from 'something feels off'" delay={0} /> <br/>
              <WordReveal text="to 'here's what we fixed.'" delay={0.4} />
            </h2>
            <div className="mt-16 mb-8 w-full">
              <ExperimentLoopVisual height={400} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { num: "01", title: "Hypothesize", desc: "Turn a vague 'fix our culture' into a testable question tied to a real business outcome." },
               { num: "02", title: "Observe", desc: "Gather honest signal from three independent sources, so no single loud voice skews the picture." },
               { num: "03", title: "Map", desc: "Plot the moments that matter onto a Journey × Drivers heat-map — the invisible, made visible." },
               { num: "04", title: "Diagnose", desc: "Find the experience gaps, weight them by what truly shapes memory, and root-cause the leaks." },
               { num: "05", title: "Test", desc: "Run small, measured interventions with owners and baselines — not a 40-point transformation deck." },
               { num: "06", title: "Loop", desc: "Re-measure, report the movement, and close the loop with everyone who spoke up." }
             ].map((service, i) => (
               <ScaleReveal key={i} delay={i * 0.1} className="h-full">
                 <SpotlightCard className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] h-full transition-all duration-500 hover:border-primary/40 group">
                   <div
                     className="flex flex-col p-8 h-full 
                                transition-all duration-700 
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_4px_40px_rgba(0,0,0,0.4)]
                                hover:-translate-y-2
                                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(110,230,0,0.08)]
                                relative overflow-hidden cursor-default"
                   >
                     {/* Top gradient line */}
                     <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     {/* Card number */}
                     <div className="text-5xl font-serif text-white/10 group-hover:text-primary/60 transition-colors duration-500 mb-8 leading-none">
                       {service.num}
                     </div>
                     
                     {/* Title */}
                     <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-white transition-colors">
                       {service.title}
                     </h3>
                     
                     {/* Description */}
                     <p className="text-sm text-muted-foreground font-light leading-relaxed flex-grow">
                       {service.desc}
                     </p>
                   </div>
                 </SpotlightCard>
               </ScaleReveal>
             ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/the-method" className="inline-flex items-center text-sm font-mono tracking-widest text-primary hover:text-white transition-colors group">
              Explore the full method 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* SECTION 4: METHODOLOGY SECTION */}
      <section className="py-32 md:py-48 bg-background" ref={methodologyRef}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <CharReveal text="HOW WE WORK" className="font-mono text-xs tracking-widest text-primary mb-12 block" />
              <div className="space-y-4">
                {['HYPOTHESIZE', 'OBSERVE', 'MAP', 'DIAGNOSE', 'TEST', 'LOOP'].map((phase, i) => (
                  <motion.div 
                    key={i}
                    initial={{ clipPath: "inset(0 100% 0 0)", filter: "brightness(2)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)", filter: "brightness(1)" }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl font-mono tracking-tight text-white flex items-baseline gap-4"
                  >
                    <span className="text-sm text-primary/50 font-sans tracking-normal">0{i+1}</span>
                    <span className="hover:text-primary transition-colors duration-300">{phase}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center border-t border-[#222] lg:border-t-0 pt-12 lg:pt-0 lg:pl-12">
              <SlideUp>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.2] mb-12">
                  "Rigorous. Repeatable. Defensible in front of a board. That's the EX Experiment Loop."
                </h3>
                <Link href="/the-method" className="inline-flex items-center text-sm font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                  See the full loop 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-divider w-full" />

      {/* SECTION 5: CREDIBILITY */}
      <section className="w-full py-16 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-scan pointer-events-none"></div>
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="w-full lg:w-1/2 lg:pr-12">
                <SlideUp>
                  <h4 className="text-3xl md:text-4xl font-serif text-white mb-2">HR Excellence Award 2026</h4>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm font-mono tracking-widest text-muted-foreground">
                    <span>KERALA CHAPTER</span>
                    <span className="hidden sm:block text-primary/30">|</span>
                    <span>INDYWOOD</span>
                  </div>
                </SlideUp>
              </div>
              
              <div className="hidden lg:block w-[1px] h-24 bg-primary/30 shrink-0"></div>
              
              <div className="w-full lg:w-1/2 lg:pl-12 lg:text-right border-t border-[#222] lg:border-0 pt-8 lg:pt-0 flex flex-col items-end">
                 <SlideUp delay={0.2} className="w-full">
                   <FounderVisual height={320} className="mb-8" />
                 </SlideUp>
              </div>
           </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* SECTION 6: WHO IT'S FOR */}
      <section className="bg-[#030303] py-32">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <SlideUp>
            <div className="text-center mb-24">
              <CharReveal text="WHO IT'S FOR" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
              <h2 className="text-4xl md:text-6xl font-serif text-white">Built for HR leaders driving change.</h2>
            </div>
          </SlideUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "CHROs and People Leaders", desc: "Who need to show the board that culture work moves real numbers." },
              { title: "HR Business Partners", desc: "Who feel the problems but lack the evidence to act." },
              { title: "Founders Scaling Fast", desc: "Who can sense their culture stretching and want to get ahead of it." }
            ].map((audience, i) => (
              <ScaleReveal key={i} delay={i * 0.1}>
                <SpotlightCard className="bg-background border border-[#1a1a1a] p-10 h-full">
                  <h3 className="text-2xl font-serif text-white mb-4">{audience.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{audience.desc}</p>
                </SpotlightCard>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* SECTION 7: FINAL CTA */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[15rem] md:text-[25rem] lg:text-[35rem] font-serif text-white/[0.02] tracking-tighter">TEEE</span>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-display-lg font-serif text-white mb-8">
            <WordReveal text="Stop guessing how it feels to work here." />
          </h2>
          <SlideUp delay={0.5}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto">
              Book a 30-minute call. We'll walk one of your toughest lifecycle moments through the Loop, live — so you leave with at least one real insight, whether or not we work together.
            </p>
            <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto">
              <Link href="/contact" className="w-full px-12 py-6 bg-primary text-black font-bold text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_60px_rgba(110,230,0,0.3)] block">
                Book your EX Diagnostic →
              </Link>
              <Link href="/the-method" className="text-sm font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase flex items-center gap-2 group">
                Or see the method first <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
