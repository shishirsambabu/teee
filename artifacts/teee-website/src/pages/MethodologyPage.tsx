import { SlideUp, CharReveal, SpotlightCard } from "../components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MethodologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const phases = [
    {
      num: "01",
      title: "OBSERVE",
      desc: "We study the environment before recommending anything. This isn't about looking at the official org chart or the documented SOPs. It's about seeing how the work is actually getting done in reality.",
      outcome: "An unvarnished view of operational reality."
    },
    {
      num: "02",
      title: "DIAGNOSE",
      desc: "We identify where friction, inefficiency, and opportunity actually live. We separate symptoms (like 'low engagement') from root causes (like 'broken, repetitive reporting structures').",
      outcome: "A precise identification of systemic bottlenecks."
    },
    {
      num: "03",
      title: "REDESIGN",
      desc: "We reconstruct systems, processes, and experiences with intent. Before any automation is applied, the logic of the workflow must be sound, lean, and humane.",
      outcome: "A modernized, logical operational blueprint."
    },
    {
      num: "04",
      title: "AUTOMATE",
      desc: "We embed intelligence where it creates real leverage. This means deploying targeted AI and automation tools to handle the repetitive, administrative load.",
      outcome: "Seamless execution of high-volume tasks."
    },
    {
      num: "05",
      title: "ENABLE",
      desc: "We train people to use, trust, and improve what's been built. A tool is useless if the team fears it or ignores it. We focus heavily on adoption.",
      outcome: "A confident, capable workforce."
    },
    {
      num: "06",
      title: "SCALE",
      desc: "We document, transfer, and sustain the capability. We don't want you dependent on us forever. We build the systems so you can carry them forward.",
      outcome: "Independent, sustained operational intelligence."
    }
  ];

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <SlideUp>
          <div className="mb-32 mt-12">
            <CharReveal text="OUR FRAMEWORK" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white">How We Work</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              We approach transformation not as an event, but as a deliberate engineering process. This is our proprietary sequence.
            </p>
          </div>
        </SlideUp>

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
          <div className="border-t border-[#1a1a1a] pt-24 text-center">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-12">Engagement Types</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["Advisory", "Workshop", "Embedded Sprint", "Training Program"].map((type, i) => (
                <div key={i} className="px-8 py-4 bg-[#050505] border border-[#1a1a1a] text-sm font-mono tracking-widest uppercase text-white hover:border-primary hover:text-primary transition-colors duration-300 cursor-default">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
