import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    role: "Freelance Developer & AI Builder",
    desc: "Building agentic AI workflows and end-to-end SaaS products for startups and creators worldwide.",
    period: "2024 — Present",
  },
  {
    role: "Frontend Designer",
    desc: "Crafted polished interfaces and design systems for early-stage products with a focus on motion and detail.",
    period: "2023 — 2024",
  },
  {
    role: "Learning + Building Systems",
    desc: "Deep-dived into systems design, modern stacks and shipped first production projects.",
    period: "2022 — 2023",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-24">
      <SectionHeading line1="3 YEARS OF" line2="EXPERIENCE" />

      <div className="mt-14 space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-7 rounded-3xl border border-transparent hover:bg-surface hover:border-border transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-foreground">{item.role}</h3>
              <ArrowUpRight
                className="w-5 h-5 text-primary shrink-0 group-hover:rotate-12 transition-transform"
                strokeWidth={2.5}
              />
            </div>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
              {item.desc}
            </p>
            <p className="mt-5 text-sm text-muted-foreground/70 font-medium">
              {item.period}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
