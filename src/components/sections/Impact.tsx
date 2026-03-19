import { motion } from "framer-motion";

const pillars = [
  {
    title: "Drug Discovery",
    desc: "Unlocking novel therapeutic compounds from the ocean's unexplored chemical diversity to address unmet medical needs.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.2" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Conservation",
    desc: "Non-invasive eDNA sampling and synthetic biology eliminate the need to harvest wild marine organisms for drug development.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 L28 28 L4 28 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Sustainable Supply",
    desc: "Scalable fermentation-based manufacturing creates reliable, cost-effective supply chains independent of marine harvesting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="0.5" />
        <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export const Impact = () => {
  return (
    <section id="impact" className="py-32 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
            Impact
          </span>
          <h2 className="text-3xl font-light tracking-tight text-foreground">
            Where discovery meets responsibility.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our model proves that pharmaceutical innovation and environmental stewardship are not trade-offs — they are multipliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="group"
            >
              <div className="mb-6 text-accent">{p.icon}</div>
              <h3 className="mb-3 text-xl font-medium text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
