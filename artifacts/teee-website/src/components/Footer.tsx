import Link from "next/link";

export const Footer = () => (
  <footer className="bg-black border-t border-[#111] pt-24 pb-0 relative overflow-hidden">
    <div className="max-w-[90rem] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="lg:col-span-2">
          <img src="/teee-logo.jpg" alt="TEEE" className="h-10 w-auto mb-8" />
          <p className="text-muted-foreground font-light text-base max-w-sm leading-relaxed mb-8">
            Employee experience, run like an experiment.
          </p>
          <p className="font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            Led by Shishir Babu · HR Leader × AI Builder
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8">Navigate</h4>
          <ul className="space-y-5">
            {[["The Method", "/the-method"], ["Platform", "/platform"], ["How We Work", "/how-we-work"], ["About", "/about"], ["Insights", "/insights"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-muted-foreground hover:text-primary transition-colors font-light text-sm group flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8">Legal</h4>
          <ul className="space-y-5">
            {[["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms"]].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-16 pt-8 border-t border-[#111]">
            <p className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
              HR Excellence Award 2026<br/>Digital HR Transformation<br/>Indywood
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#111] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
          © 2025 TEEE — The Employee Experience Experiment
        </p>
        <p className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
          All Rights Reserved
        </p>
      </div>
    </div>
    
    <div className="w-full overflow-hidden mt-4 select-none pointer-events-none">
      <p 
        className="font-serif text-white/[0.04] leading-none whitespace-nowrap"
        style={{ fontSize: "clamp(80px, 15vw, 220px)", letterSpacing: "-0.04em" }}
      >
        teee.
      </p>
    </div>
  </footer>
);
