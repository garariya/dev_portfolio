import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

const stats = [
  { value: "+20", label: "PROJECTS\nCOMPLETED" },
  { value: "+10", label: "HAPPY\nCLIENTS" },
  { value: "+3", label: "YEARS\nEXPERIENCE" },
];

const cards = [
  {
    icon: Code2,
    title: "Development",
    desc: "End-to-end product engineering across web, mobile and APIs.",
  },
  {
    icon: Sparkles,
    title: "AI Automation",
    desc: "Agentic workflows and intelligent systems that scale.",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-display text-[clamp(3.5rem,9vw,8rem)] text-foreground">
          ADITYA
        </h1>
        <h1 className="text-display text-[clamp(3.5rem,9vw,8rem)] text-muted-display">
          PAL
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 text-sm font-bold tracking-[0.3em] text-primary uppercase"
      >
        Full Stack Engineer · Agentic AI Specialist
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed"
      >
        I create fast, elegant, scalable web apps and AI-powered systems
        combining design, engineering and automation.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-14 grid grid-cols-3 gap-6 max-w-2xl"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
              {stat.value}
            </div>
            <div className="mt-2 text-[11px] tracking-[0.15em] text-muted-foreground whitespace-pre-line font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Feature cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-3xl bg-surface border border-border p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
              <card.icon className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {card.desc}
            </p>
            <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
