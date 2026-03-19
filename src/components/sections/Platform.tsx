import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Marine Biodiversity Sampling", desc: "Non-invasive genomic collection from high-latitude coral hotspots using environmental DNA methods." },
  { id: "02", title: "Coral Bio Data Platform", desc: "Centralized metabolomics database housing thousands of novel scaffolds from reef ecosystems worldwide." },
  { id: "03", title: "AI Drug Discovery Models", desc: "Transformer models trained on a comprehensive dataset of marine-specific protein-ligand interactions for target prediction." },
  { id: "04", title: "Synthetic Biology Manufacturing", desc: "Scalable fermentation protocols replacing traditional marine harvesting for sustainable production." },
  { id: "05", title: "Cutting Edge Technology", desc: "State of the art hybrid methodology that minimises energy and maximises output." },
  { id: "06", title: "Pharma Co-development", desc: "Structured partnerships with pharmaceutical companies to ensure a sustainable pipeline." },
];

export const Platform = () => {
  return (
    <section id="platform" className="py-32 border-t border-border bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
            Our Platform
          </span>
          <h2 className="text-3xl font-light tracking-tight text-foreground">
            A closed-loop discovery engine.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six integrated stages bridge the gap between marine biodiversity and clinical validation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="p-8 bg-background border border-border hover:border-accent/30 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-accent">{step.id}</span>
                <div className="flex-1 h-px bg-border group-hover:bg-accent/30 transition-colors duration-200" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
