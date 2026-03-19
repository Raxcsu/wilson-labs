import { motion } from "framer-motion";

const team = [
  {
    role: "Founder & CEO",
    name: "Anna Wilson",
    initials: "AW",
    desc: "Pharmacokinetic and pharmacodynamic exploration. Pipeline-to-pharma strategy and industry partnerships.",
    image: "/team/anna.jpg",
    url: "", // TODO: add LinkedIn or personal URL
  },
  {
    role: "Head of AI/ML",
    name: "Oscar Castro",
    initials: "OC",
    desc: "Data compilation, modelling, and AI-driven compound prediction. Building the discovery engine.",
    image: "/team/oscar.jpg",
    url: "", // TODO: add LinkedIn or personal URL
  },
  // { role: "Lead Modeller", name: "Olga Nev", initials: "ON", desc: "Computational chemistry and predictive modelling. Data integration and biosynthetic pathway analysis.", image: "", url: "" },
  // { role: "Synthetic Biology", name: "Tae Seok Moon PhD", initials: "TM", desc: "Coral sampling, genomic analysis, and biomanufacturing. J. Craig Venter Institute.", image: "", url: "" },
];

export const Team = () => {
  return (
    <section id="team" className="py-32 border-t border-border bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="block mb-4 font-mono text-xs text-accent tracking-widest uppercase">
            Leadership
          </span>
          <h2 className="text-3xl font-light tracking-tight text-foreground">
            Built by domain experts.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
          {team.map((member, i) => {
            const content = (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="p-8 bg-background border border-border hover:border-accent/30 transition-colors duration-200"
              >
                {member.image ? (
                  <div className="w-[250px] h-[250px] mb-6 overflow-hidden border border-border">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        target.parentElement!.classList.add("flex", "items-center", "justify-center");
                        const span = document.createElement("span");
                        span.className = "font-mono text-lg text-accent";
                        span.textContent = member.initials;
                        target.parentElement!.appendChild(span);
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-[250px] h-[250px] flex items-center justify-center border border-border mb-6">
                    <span className="font-mono text-lg text-accent">{member.initials}</span>
                  </div>
                )}
                <h3 className="mb-0.5 text-base font-medium text-foreground">{member.name}</h3>
                <span className="block mb-2 font-mono text-[10px] text-accent uppercase tracking-wider">{member.role}</span>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.desc}</p>
              </motion.div>
            );

            if (member.url) {
              return (
                <a key={member.role} href={member.url} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              );
            }

            return content;
          })}
        </div>
      </div>
    </section>
  );
};
