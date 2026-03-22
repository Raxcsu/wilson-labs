import { motion } from "framer-motion";

// const phases = [
//   { phase: "Phase 1", title: "Marine Genomic Data Platform", timeline: "2026 – 2027", desc: "eDNA collection infrastructure, metabolomics database, and initial AI model training on proprietary marine datasets." },
//   { phase: "Phase 2", title: "AI Discovery Engine", timeline: "2027 – 2028", desc: "Scaled transformer models for compound prediction, automated hit-to-lead optimization, and target deconvolution." },
//   { phase: "Phase 3", title: "Synthetic Biology Manufacturing", timeline: "2028 – 2029", desc: "Engineered microbial strains for scalable production of validated marine-derived therapeutic compounds." },
//   { phase: "Phase 4", title: "Pharma Partnerships", timeline: "2029+", desc: "IND-enabling studies, co-development agreements, and licensing deals with major pharmaceutical partners." },
// ];

const phases = [
  { 
    phase: "Phase 1", 
    title: "Marine Genomic Data Platform", 
    desc: "eDNA collection infrastructure, metabolomics database, and initial AI model training on proprietary marine datasets.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7" y="7" width="10" height="2" fill="currentColor" opacity="0.3"/>
        <rect x="7" y="11" width="10" height="2" fill="currentColor" opacity="0.3"/>
        <rect x="7" y="15" width="6" height="2" fill="currentColor" opacity="0.3"/>
      </svg>
    )
  },
  { 
    phase: "Phase 2", 
    title: "AI Discovery Engine", 
    desc: "Scaled transformer models for compound prediction, automated hit-to-lead optimization, and target deconvolution.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
        <path d="M12 6V3M12 21v-3M6 12H3M21 12h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    phase: "Phase 3", 
    title: "Synthetic Biology Manufacturing", 
    desc: "Engineered microbial strains for scalable production of validated marine-derived therapeutic compounds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3v6M12 15v6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    phase: "Phase 4", 
    title: "Pharma Partnerships", 
    desc: "IND-enabling studies, co-development agreements, and licensing deals with major pharmaceutical partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

export const Roadmap = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
            Roadmap
          </span>
          <h2 className="text-3xl font-light tracking-tight text-foreground">
            From data to drugs.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical center spine */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {phases.map((p, i) => {
              const isLeft = i % 2 === 0; // Phase 1 and 3 on right side, so we render text in second column
              return (
                <motion.div
                  key={p.phase}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] }}
                  className="relative md:grid md:grid-cols-2 md:items-start"
                >
                  <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">
                    <div className="w-px h-full bg-border" />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-accent" />
                  </div>

                  {isLeft ? (
                    <>
                      <div />
                      <div className="md:col-start-2 md:flex md:justify-start md:pl-8">
                        <div className="w-full md:max-w-[calc(50vw-4rem)] md:text-left">
                          <span className="block font-mono text-xs text-accent uppercase tracking-widest mb-2">
                            {p.phase}
                          </span>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                              {p.icon}
                            </div>
                            <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground md:max-w-[400px]">{p.desc}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:flex md:justify-end md:pr-8">
                        <div className="w-full md:max-w-[400px] md:text-right md:ml-auto">
                          <span className="block font-mono text-xs text-accent uppercase tracking-widest mb-2">
                            {p.phase}
                          </span>
                          <div className="flex items-center justify-end gap-3 mb-2">
                            <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                              {p.icon}
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground md:max-w-[400px] md:ml-auto">{p.desc}</p>
                        </div>
                      </div>
                      <div />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
