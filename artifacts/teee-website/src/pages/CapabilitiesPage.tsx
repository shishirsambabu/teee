import { SlideUp, ScaleReveal, CharReveal, LineReveal, SpotlightCard, TiltCard } from "../components/animations";

export default function CapabilitiesPage() {
  const services = [
    {
      num: "01",
      title: "Employee Experience Consulting",
      desc: "Redesigning how work feels for the people doing it. We identify the friction points, bureaucratic waste, and communication gaps that degrade the daily encounter with work.",
      outcomes: [
        "Measurable reduction in administrative drag",
        "Clearer operational communication and alignment"
      ]
    },
    {
      num: "02",
      title: "HR Transformation Advisory",
      desc: "Strategy and execution for HR functions ready to evolve. We help shift HR from a reactive administrative center to a proactive intelligence engine.",
      outcomes: [
        "Leaner, more effective HR service delivery",
        "Shifted focus toward strategic enablement"
      ]
    },
    {
      num: "03",
      title: "AI for HR",
      desc: "Practical AI integration in talent, ops, and people analytics. We don't deploy AI for the sake of it; we use it to automate the repetitive so humans can focus on the complex.",
      outcomes: [
        "Automated candidate screening and onboarding workflows",
        "Intelligent routing of employee inquiries"
      ]
    },
    {
      num: "04",
      title: "AI for Small Business",
      desc: "Targeted automation for lean teams with big ambitions. Small businesses gain disproportionate leverage from AI when it's applied to their specific operational bottlenecks.",
      outcomes: [
        "Enterprise-grade capabilities at a fraction of the headcount",
        "Dramatically reduced time-to-execution"
      ]
    },
    {
      num: "05",
      title: "Automation Training",
      desc: "Teaching teams to build, use, and trust AI-powered workflows. Capability isn't real until your own people can sustain it without relying on external consultants.",
      outcomes: [
        "Internal fluency with modern automation tools",
        "A culture of continuous process improvement"
      ]
    },
    {
      num: "06",
      title: "Workflow & Process Design",
      desc: "Mapping and rebuilding the operational layer of work. We strip away legacy constraints and design logical, resilient systems of execution.",
      outcomes: [
        "Radically simplified processes",
        "Clear ownership and accountability models"
      ]
    }
  ];

  return (
    <div className="w-full pt-32 pb-48 bg-background min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <SlideUp>
          <div className="mb-32 mt-12">
            <CharReveal text="WHAT WE DO" className="font-mono text-xs tracking-widest text-primary mb-6 block" />
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white">Capabilities</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              We work across six interconnected disciplines. Most engagements combine two or more to drive actual operational change.
            </p>
          </div>
        </SlideUp>

        <div className="flex flex-col">
          <LineReveal className="h-[1px] bg-[#1a1a1a] w-full" />
          {services.map((service, index) => (
            <ScaleReveal key={service.num} delay={index * 0.1}>
              <TiltCard>
                <SpotlightCard className="w-full relative">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 md:py-24 border-b border-[#1a1a1a] group hover:bg-[rgba(255,255,255,0.01)] transition-colors px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    <div className="md:col-span-2 flex items-start">
                      <span className="text-5xl md:text-6xl font-serif text-primary/20 group-hover:text-primary transition-colors duration-500">{service.num}</span>
                    </div>
                    <div className="md:col-span-4">
                      <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white group-hover:translate-x-2 transition-transform duration-500">{service.title}</h2>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 leading-relaxed group-hover:text-white/80 transition-colors duration-500">{service.desc}</p>
                      <div>
                        <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-6">What changes after this:</h3>
                        <ul className="space-y-4">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-4 text-muted-foreground font-light text-base group-hover:text-white/70 transition-colors duration-500">
                              <span className="text-primary mt-1 opacity-50 group-hover:opacity-100">●</span> {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
