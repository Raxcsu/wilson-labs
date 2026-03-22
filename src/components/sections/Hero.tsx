import { motion } from "framer-motion";

export const Hero = ({ onPartnerClick }: { onPartnerClick?: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Technical grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Platform v1.0 — Marine Multiomics
          </span>
          <h1 className="max-w-4xl mx-auto mb-8 text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground text-balance">
            The ocean is the world's largest{" "}
            <span className="text-accent italic">chemical library.</span>{" "}
            We are its search engine.
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground text-pretty">
            Discovering high-affinity pharmaceutical compounds from coral reef
            ecosystems using AI-driven molecule prediction and synthetic biology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onPartnerClick}
              className="px-8 py-4 text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
            >
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Abstract molecule line */}
      <motion.div
        className="mt-20 w-full max-w-5xl h-32 border-x border-border relative flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg viewBox="0 0 800 60" className="w-full h-16 overflow-visible">
          <line x1="0" y1="30" x2="800" y2="30" stroke="hsl(214,32%,91%)" strokeWidth="1" />
          {[80, 200, 340, 500, 620, 720].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={30} r={4} className="fill-background stroke-accent" strokeWidth="1.5" />
              {i < 5 && (
                <line
                  x1={x + 4}
                  y1={30}
                  x2={[200, 340, 500, 620, 720][i] - 4}
                  y2={30}
                  stroke="hsl(199,89%,48%)"
                  strokeWidth="0.5"
                  strokeDasharray="2 3"
                />
              )}
            </g>
          ))}
          <text x="400" y="55" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            MOLECULAR SCAFFOLD NETWORK
          </text>
        </svg>
      </motion.div>
    </section>
  );
};
