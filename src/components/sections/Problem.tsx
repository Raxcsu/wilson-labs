import { motion } from "framer-motion";

const problems = [
  {
    id: "01",
    title: "Trace Concentrations",
    desc: "Marine organisms produce bioactive compounds at parts-per-billion levels, making isolation extraordinarily difficult with traditional methods.",
  },
  {
    id: "02",
    title: "Supply Chain Collapse",
    desc: "Harvesting wild marine organisms is environmentally destructive, legally restricted, and impossible to scale for clinical trials.",
  },
  {
    id: "03",
    title: "96% Failure Rate",
    desc: "Drug discovery pipelines lose most candidates in preclinical stages due to poor target validation and incomplete chemical space exploration.",
  },
  {
    id: "04",
    title: "Sustainability Gap",
    desc: "Current marine bioprospecting methods threaten the very ecosystems that produce these invaluable therapeutic molecules.",
  },
];

export const Problem = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
              The Challenge
            </span>
            <h2 className="text-3xl font-light tracking-tight text-foreground">
              Marine drug discovery is broken.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The ocean contains an estimated 2.2 million marine species. Less
              than 0.01% have been screened for pharmaceutical potential.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="p-8 border border-border hover:border-accent/30 transition-colors duration-200"
              >
                <span className="block mb-4 font-mono text-xs text-accent">{p.id}</span>
                <h3 className="mb-3 text-lg font-medium text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
