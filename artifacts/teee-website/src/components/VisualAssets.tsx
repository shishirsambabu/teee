"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HEATMAP_DURATIONS = [2.41, 2.87, 2.13];

const SCATTER_DOTS = Array.from({ length: 40 }, (_, i) => {
  const s = (i * 9301 + 49297) % 233280;
  const s2 = (s * 9301 + 49297) % 233280;
  const s3 = (s2 * 9301 + 49297) % 233280;
  const s4 = (s3 * 9301 + 49297) % 233280;
  const s5 = (s4 * 9301 + 49297) % 233280;
  const rand = (n: number) => n / 233280;
  const isClustered = i < 20;
  return {
    x: isClustered ? 60 + rand(s) * 30 : rand(s) * 90,
    y: isClustered ? 60 + rand(s2) * 30 : rand(s2) * 90,
    size: 3 + rand(s3) * 4,
    opacity: isClustered ? 0.8 : 0.3,
    dur: 2 + rand(s4) * 2,
    delay: rand(s5),
  };
});

export const HeatMapVisual = ({ className = "", height = 320, caption = "Journey × Drivers heat-map" }: { className?: string, height?: number, caption?: string }) => {
  return (
    <div className={`w-full relative flex flex-col items-center justify-center overflow-hidden ${className}`} style={{ height, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col gap-1 sm:gap-2 mb-8">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 sm:gap-2">
            {[...Array(12)].map((_, colIndex) => {
              const intensity = (colIndex + (4 - rowIndex)) / 16;
              const isHighlight = (rowIndex === 1 && colIndex === 7) || (rowIndex === 3 && colIndex === 3) || (rowIndex === 2 && colIndex === 9);
              return (
                <motion.div
                  key={colIndex}
                  animate={isHighlight ? { opacity: [0.4, 1, 0.4] } : {}}
                  transition={{ duration: HEATMAP_DURATIONS[[rowIndex, colIndex].join() === "1,7" ? 0 : [rowIndex, colIndex].join() === "3,3" ? 1 : 2], repeat: Infinity, ease: "easeInOut" }}
                  className="w-4 h-4 sm:w-8 sm:h-8 rounded-[2px]"
                  style={{
                    backgroundColor: isHighlight ? "#6ee600" : `rgba(110, 230, 0, ${intensity * 0.4})`
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <p className="absolute bottom-4 font-mono text-[10px] tracking-widest text-white/30 uppercase text-center w-full">{caption}</p>
    </div>
  );
};

export const PulseWaveVisual = ({ className = "", height = 320, caption = "Triangulated signal" }: { className?: string, height?: number, caption?: string }) => {
  return (
    <div className={`w-full relative flex flex-col items-center justify-center overflow-hidden ${className}`} style={{ height, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col items-center justify-center gap-6 mb-8 w-full max-w-2xl px-4">
        {[
          { label: "Surveys", color: "rgba(110, 230, 0, 0.2)", dur: 3 },
          { label: "Interviews", color: "rgba(110, 230, 0, 0.5)", dur: 4 },
          { label: "Behavioral Traces", color: "rgba(110, 230, 0, 0.8)", dur: 5 }
        ].map((wave, i) => (
          <div key={i} className="w-full flex flex-col gap-2">
            <div className="w-full h-2 rounded-full overflow-hidden relative bg-white/5">
              <motion.div 
                className="absolute inset-0 w-[200%]"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: wave.dur, repeat: Infinity, ease: "linear" }}
                style={{
                  background: `linear-gradient(90deg, transparent, ${wave.color}, transparent, ${wave.color}, transparent)`
                }}
              />
            </div>
            <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">{wave.label}</span>
          </div>
        ))}
      </div>
      <p className="absolute bottom-4 font-mono text-[10px] tracking-widest text-white/30 uppercase text-center w-full">{caption}</p>
    </div>
  );
};

export const ExperimentLoopVisual = ({ className = "", height = 320, caption = "" }: { className?: string, height?: number, caption?: string }) => {
  const nodes = ["Hypothesize", "Observe", "Map", "Diagnose", "Test", "Loop"];
  const nodeNums = ["01", "02", "03", "04", "05", "06"];
  const size = Math.min(height - 20, 280);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.36;
  const COMET_DUR = 9;
  const orbitPath = `M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 1 ${cx - 0.001} ${cy - radius}`;

  // Sequential reveal: each node unlocks as the comet arrives
  const [revealedCount, setRevealedCount] = useState(0);
  const [allRevealed, setAllRevealed] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    nodes.forEach((_, i) => {
      const ms = Math.round((i / nodes.length) * COMET_DUR * 1000);
      timers.push(setTimeout(() => setRevealedCount(i + 1), ms));
    });
    timers.push(setTimeout(() => setAllRevealed(true), COMET_DUR * 1000 + 200));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`w-full relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{ height, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <svg width={size} height={size} style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="cometGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6ee600" stopOpacity="1" />
            <stop offset="60%" stopColor="#6ee600" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6ee600" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="centerGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6ee600" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6ee600" stopOpacity="0" />
          </radialGradient>
          <filter id="nodeglow2" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Outer ambient ring */}
        <circle cx={cx} cy={cy} r={radius + 22} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

        {/* Rotating dashed orbit ring */}
        <motion.circle
          cx={cx} cy={cy} r={radius}
          fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" strokeDasharray="3 7"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        {/* Counter-rotating inner ring */}
        <motion.circle
          cx={cx} cy={cy} r={radius * 0.55}
          fill="none" stroke="rgba(110,230,0,0.06)" strokeWidth="1" strokeDasharray="2 10"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Faint spokes */}
        {nodes.map((_, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          return (
            <line key={i}
              x1={cx} y1={cy}
              x2={cx + Math.cos(angle) * radius} y2={cy + Math.sin(angle) * radius}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1"
            />
          );
        })}

        {/* Comet glow halo */}
        <circle r="18" fill="url(#cometGlow2)" opacity="0.5">
          <animateMotion dur={`${COMET_DUR}s`} repeatCount="indefinite" path={orbitPath} />
        </circle>

        {/* Comet core */}
        <circle r="3.5" fill="#6ee600" filter="url(#nodeglow2)">
          <animateMotion dur={`${COMET_DUR}s`} repeatCount="indefinite" path={orbitPath} />
        </circle>

        {/* Center breathing pulse ring */}
        <motion.circle cx={cx} cy={cy} r={6} fill="none" stroke="rgba(110,230,0,0.5)" strokeWidth="1"
          animate={{ r: [6, 22, 6], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Center orb */}
        <circle cx={cx} cy={cy} r={22} fill="url(#centerGlow2)" opacity="0.15" />
        <motion.circle cx={cx} cy={cy} r={5} fill="rgba(110,230,0,0.8)"
          animate={{ opacity: [0.6, 1, 0.6], r: [4.5, 5.5, 4.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Nodes */}
        {nodes.map((node, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const nx = cx + Math.cos(angle) * radius;
          const ny = cy + Math.sin(angle) * radius;
          const labelR = radius + 30;
          const lx = cx + Math.cos(angle) * labelR;
          const ly = cy + Math.sin(angle) * labelR;
          const isRevealed = i < revealedCount;
          const nodeDelay = (i / nodes.length) * COMET_DUR;

          return (
            <g key={node}>
              {/* Pulse ring — only in steady state */}
              {allRevealed && (
                <motion.circle
                  cx={nx} cy={ny} r={7}
                  fill="none" stroke="rgba(110,230,0,0.6)" strokeWidth="1"
                  animate={{ r: [7, 16, 7], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: COMET_DUR, delay: nodeDelay, repeat: Infinity, ease: "easeOut", times: [0, 0.15, 1] }}
                />
              )}

              {/* Node dot */}
              <motion.circle
                cx={nx} cy={ny} r={5}
                fill={isRevealed ? "rgba(110,230,0,0.2)" : "rgba(255,255,255,0.06)"}
                stroke={isRevealed ? "rgba(110,230,0,0.7)" : "rgba(255,255,255,0.15)"}
                strokeWidth="1"
                filter="url(#nodeglow2)"
                animate={allRevealed ? {
                  fill: ["rgba(110,230,0,0.2)", "rgba(110,230,0,0.85)", "rgba(110,230,0,0.2)"],
                  stroke: ["rgba(110,230,0,0.7)", "rgba(110,230,0,1)", "rgba(110,230,0,0.7)"],
                } : {}}
                transition={{ duration: COMET_DUR, delay: nodeDelay, repeat: Infinity, times: [0, 0.1, 1] }}
              />

              {/* Reveal flash — burst when first unlocked */}
              {isRevealed && !allRevealed && (
                <motion.circle
                  cx={nx} cy={ny} r={5}
                  fill="none" stroke="rgba(110,230,0,0.9)" strokeWidth="1"
                  initial={{ r: 5, opacity: 1 }}
                  animate={{ r: 18, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}

              {/* Label — hidden until comet arrives */}
              <AnimatePresence>
                {isRevealed && (
                  <motion.g
                    key={`label-${node}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Stage number */}
                    <motion.text
                      x={lx}
                      y={ly - 8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="monospace"
                      fontSize="7"
                      letterSpacing="0.08em"
                      fill={allRevealed ? "rgba(110,230,0,0.5)" : "rgba(110,230,0,0.7)"}
                      animate={allRevealed ? {
                        fill: ["rgba(110,230,0,0.5)", "rgba(110,230,0,1)", "rgba(110,230,0,0.5)"],
                      } : {}}
                      transition={{ duration: COMET_DUR, delay: nodeDelay, repeat: Infinity, times: [0, 0.1, 1] }}
                    >
                      {nodeNums[i]}
                    </motion.text>

                    {/* Stage name */}
                    <motion.text
                      x={lx}
                      y={ly + 4}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="monospace"
                      fontSize="8.5"
                      letterSpacing="0.12em"
                      fill={allRevealed ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.7)"}
                      style={{ textTransform: "uppercase" }}
                      animate={allRevealed ? {
                        fill: ["rgba(255,255,255,0.4)", "rgba(110,230,0,0.95)", "rgba(255,255,255,0.4)"],
                      } : {}}
                      transition={{ duration: COMET_DUR, delay: nodeDelay, repeat: Infinity, times: [0, 0.1, 1] }}
                    >
                      {node}
                    </motion.text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}
      </svg>

      {caption && (
        <p className="absolute bottom-4 font-mono text-[10px] tracking-widest text-white/30 uppercase text-center w-full">
          {caption}
        </p>
      )}
    </div>
  );
};

export const ScatterPlotVisual = ({ className = "", height = 320, caption = "Experience gap analysis" }: { className?: string, height?: number, caption?: string }) => {
  return (
    <div className={`w-full relative flex flex-col items-center justify-center overflow-hidden ${className}`} style={{ height, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="relative w-3/4 h-1/2 border-l border-b border-white/20 mb-8">
        {SCATTER_DOTS.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{ left: `${dot.x}%`, bottom: `${dot.y}%`, width: dot.size, height: dot.size, opacity: dot.opacity }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: dot.dur, repeat: Infinity, delay: dot.delay }}
          />
        ))}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/40 tracking-widest uppercase">Expectation</span>
        <span className="absolute left-[-24px] top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[9px] text-white/40 tracking-widest uppercase origin-center">Reality</span>
      </div>
      <p className="absolute bottom-4 font-mono text-[10px] tracking-widest text-white/30 uppercase text-center w-full">{caption}</p>
    </div>
  );
};

export const FounderVisual = ({ className = "", height = 320, caption = "Shishir Babu — Founder", imageSrc = "/founder-award.jpg" }: { className?: string, height?: number, caption?: string, imageSrc?: string }) => {
  return (
    <div className={`w-full relative flex flex-col items-center justify-center overflow-hidden ${className}`} style={{ height, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <motion.div
        className="relative mb-6"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Accent lines */}
        <div className="absolute -left-5 top-1/4 w-4 h-[1px] bg-primary/40" />
        <div className="absolute -right-5 bottom-1/4 w-4 h-[1px] bg-primary/40" />
        {/* Corner accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-primary/40" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-primary/40" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-primary/40" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-primary/40" />
        {/* Photo */}
        <div className="w-[120px] h-[160px] overflow-hidden relative">
          <img
            src={imageSrc}
            alt="Shishir Babu"
            className="w-full h-full object-cover object-top"
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      </motion.div>
      <p className="absolute bottom-4 font-mono text-[10px] tracking-widest text-white/30 uppercase text-center w-full">{caption}</p>
    </div>
  );
};
