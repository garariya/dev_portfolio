import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const tools = [
  { name: "Framer", role: "Website Builder", letter: "F" },
  { name: "Figma", role: "Design Tool", letter: "Fi" },
  { name: "React", role: "UI Library", letter: "R" },
  { name: "Next.js", role: "React Framework", letter: "N" },
  { name: "Node.js", role: "Backend Runtime", letter: "No" },
  { name: "Python", role: "AI & Scripting", letter: "Py" },
  { name: "OpenAI", role: "AI Models", letter: "O" },
  { name: "Claude", role: "AI Assistant", letter: "C" },
  { name: "Notion", role: "Productivity Tool", letter: "Nt" },
  { name: "Supabase", role: "Backend Platform", letter: "S" },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16">
      <SectionHeading line1="PREMIUM" line2="TOOLS" />

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 group"
          >
            <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary transition-all duration-500">
              <span className="text-xl font-black text-primary group-hover:text-black transition-colors">{tool.letter}</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-foreground uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="mt-2 text-[10px] font-black tracking-[0.3em] text-muted-foreground uppercase opacity-40 group-hover:opacity-100 transition-opacity">{tool.role}</p>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary shadow-neon" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
