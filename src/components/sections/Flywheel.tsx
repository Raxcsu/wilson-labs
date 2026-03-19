import { motion } from "framer-motion";

const nodes = [
  { label: "Marine Sampling", angle: 270 },
  { label: "AI Prediction", angle: 342 },
  { label: "Validation", angle: 54 },
  { label: "Pharma Partnership", angle: 126 },
  { label: "Data Feedback", angle: 198 },
];

export const Flywheel = () => {
  const r = 140;
  const cx = 200;
  const cy = 200;

  return (
    <section className="py-32 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
              Data Flywheel
            </span>
            <h2 className="text-3xl font-light tracking-tight text-foreground">
              Every discovery accelerates the next.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our self-reinforcing loop compounds data advantages: each marine
              sampling campaign enriches AI models, each validation cycle
              sharpens predictions, and each partnership generates new data
              to feed back into the platform.
            </p>
          </div>
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative">
              <svg width="400" height="400" viewBox="0 0 400 400" className="overflow-visible">
                {/* Rotating dashed circle */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="hsl(214,32%,91%)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />

                {/* Connecting lines */}
                {nodes.map((_, i) => {
                  const a1 = (nodes[i].angle * Math.PI) / 180;
                  const a2 = (nodes[(i + 1) % nodes.length].angle * Math.PI) / 180;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={cx + r * Math.cos(a1)}
                      y1={cy + r * Math.sin(a1)}
                      x2={cx + r * Math.cos(a2)}
                      y2={cy + r * Math.sin(a2)}
                      stroke="hsl(199,89%,48%)"
                      strokeWidth="0.5"
                      strokeDasharray="3 3"
                    />
                  );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => {
                  const a = (node.angle * Math.PI) / 180;
                  const nx = cx + r * Math.cos(a);
                  const ny = cy + r * Math.sin(a);
                  return (
                    <g key={i}>
                      <circle cx={nx} cy={ny} r={6} className="fill-background stroke-accent" strokeWidth="1.5" />
                      <text
                        x={nx}
                        y={ny + (node.angle > 90 && node.angle < 270 ? 20 : -14)}
                        textAnchor="middle"
                        className="fill-muted-foreground text-[9px] font-mono uppercase tracking-wider"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}

                {/* Center */}
                <text x={cx} y={cy - 4} textAnchor="middle" className="fill-foreground text-[10px] font-mono uppercase tracking-wider">
                  Data
                </text>
                <text x={cx} y={cy + 8} textAnchor="middle" className="fill-foreground text-[10px] font-mono uppercase tracking-wider">
                  Intelligence
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
