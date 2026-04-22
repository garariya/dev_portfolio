import { motion } from "framer-motion";
import { Code2, Sparkles, ArrowUpRight, Palette } from "lucide-react";

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
  {
    icon: Palette,
    title: "Design",
    desc: "User-focused interfaces, modern visuals, and seamless digital experiences.",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-12 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Ghost Text Background */}
        <div className="absolute -top-10 -left-6 whitespace-nowrap pointer-events-none select-none z-0">
          <span className="text-display text-[15vw] text-ghost">ADITYA PAL</span>
        </div>

        <div className="relative z-10">
          <h1 className="text-display text-[clamp(4.5rem,14vw,12rem)] text-foreground">
            ADITYA
          </h1>
          <div className="flex items-center gap-8">
            <h1 className="text-display text-[clamp(4.5rem,14vw,12rem)] text-primary">
              PAL
            </h1>
            <div className="hidden lg:block h-[3px] flex-1 bg-white/10 translate-y-[2vw]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex items-center gap-6"
      >
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-secondary/50" />
          <div className="w-2 h-2 rounded-full bg-secondary/20" />
        </div>
        <p className="text-[10px] font-black tracking-[0.4em] text-muted-foreground uppercase">
          Product Builder · Problem Solver · AI Systems Creator
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 max-w-2xl text-foreground/80 text-2xl leading-[1.2] font-black uppercase tracking-tight"
      >
        I turn complex problems into scalable <span className="text-primary italic">products</span> using code, design, and intelligent AI systems.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 flex flex-wrap gap-4"
      >
        <a href="#contact" className="btn-neon inline-flex items-center justify-center">Say Hello</a>
        <button className="px-8 py-4 rounded-3xl border border-white/10 font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
          View Projects
        </button>
      </motion.div>

      {/* Feature cards - Compact Bento Style */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
            className="bento-card p-10 group"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <card.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">{card.title}</h3>
            <p className="mt-4 text-muted-foreground font-bold text-sm leading-relaxed max-w-xs">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
