import { motion } from "framer-motion";

export const CTA = ({ onPartnerClick }: { onPartnerClick?: () => void }) => {
  return (
    <section id="cta" className="py-32 border-t border-border bg-secondary/30">
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground max-w-3xl mx-auto mb-6 text-balance">
            Accelerating the ocean's therapeutic potential.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            We partner with investors, pharmaceutical companies, research institutions and conservation organisations to advance marine-derived medicines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onPartnerClick}
              className="px-8 py-4 text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
            >
              Partner With Us
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="font-mono text-xs uppercase tracking-wider">Investors</span>
            <span className="w-px h-4 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider">Pharma</span>
            <span className="w-px h-4 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider">Research Institutions</span>
            <span className="w-px h-4 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider">Conservation Organisations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
