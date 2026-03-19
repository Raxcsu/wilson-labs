import { motion } from "framer-motion";

const datasets = [
  {
    id: "01",
    title: "Coral Species Chemical Database",
    metric: "Thousands",
    metricLabel: "Novel Scaffolds",
    desc: "A comprehensive database of chemical fingerprints from hundreds of coral species across Indo-Pacific, Caribbean, and Red Sea ecosystems.",
  },
  {
    id: "02",
    title: "In-Silico Pharmacology Simulations",
    metric: "Millions",
    metricLabel: "Interactions Modeled",
    desc: "Protein-ligand binding predictions validated against experimental assays with high concordance rates.",
  },
  {
    id: "03",
    title: "Geographic Activity Hotspots",
    metric: "Extensive",
    metricLabel: "Mapped Regions",
    desc: "Proprietary geospatial database correlating reef health, species diversity, and bioactive compound density.",
  },
];

export const DataAssets = () => {
  return (
    <section className="py-32 border-t border-border bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
            Proprietary Data
          </span>
          <h2 className="text-3xl font-light tracking-tight text-foreground">
            Datasets that don't exist anywhere else.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three interconnected proprietary datasets form the foundation of our competitive moat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {datasets.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="p-8 bg-background border border-border hover:border-accent/30 transition-colors duration-200"
            >
              <span className="block mb-6 font-mono text-xs text-accent">{d.id}</span>
              <div className="mb-6">
                <span className="block text-3xl font-light text-foreground">{d.metric}</span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{d.metricLabel}</span>
              </div>
              <h3 className="mb-3 text-lg font-medium text-foreground">{d.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
