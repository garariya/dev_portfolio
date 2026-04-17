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
    <section id="tools" className="min-h-screen py-24">
      <SectionHeading line1="PREMIUM" line2="TOOLS" />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
              <span className="text-lg font-black text-primary">{tool.letter}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
