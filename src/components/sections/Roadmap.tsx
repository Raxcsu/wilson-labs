import { motion } from "framer-motion";

const phases = [
  { phase: "Phase 1", title: "Marine Genomic Data Platform", timeline: "2026 – 2027", desc: "eDNA collection infrastructure, metabolomics database, and initial AI model training on proprietary marine datasets." },
  { phase: "Phase 2", title: "AI Discovery Engine", timeline: "2027 – 2028", desc: "Scaled transformer models for compound prediction, automated hit-to-lead optimization, and target deconvolution." },
  { phase: "Phase 3", title: "Synthetic Biology Manufacturing", timeline: "2028 – 2029", desc: "Engineered microbial strains for scalable production of validated marine-derived therapeutic compounds." },
  { phase: "Phase 4", title: "Pharma Partnerships", timeline: "2029+", desc: "IND-enabling studies, co-development agreements, and licensing deals with major pharmaceutical partners." },
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
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[calc(25%-1px)] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-t border-border first:border-t-0"
              >
                <div className="relative">
                  <span className="font-mono text-xs text-accent">{p.phase}</span>
                  <p className="text-sm text-muted-foreground mt-1">{p.timeline}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="mb-2 text-lg font-medium text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
