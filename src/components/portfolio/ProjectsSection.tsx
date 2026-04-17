import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "AI Sales Agent",
    desc: "Autonomous outbound lead generation system.",
    tag: "Agentic AI",
  },
  {
    title: "Portfolio Builder SaaS",
    desc: "Personal branding platform for creators.",
    tag: "SaaS Product",
  },
  {
    title: "Smart Dashboard",
    desc: "Analytics + automation control center.",
    tag: "Dashboard",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-24">
      <SectionHeading line1="RECENT" line2="PROJECTS" />

      <div className="mt-14 space-y-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex items-center gap-6 p-5 rounded-3xl border border-transparent hover:bg-surface hover:border-border transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative shrink-0 w-32 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-primary/5 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-primary/70">
                  {p.title.charAt(0)}
                </span>
              </div>
              <div className="absolute top-2 left-2 right-2 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-1 text-muted-foreground text-sm">{p.desc}</p>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              className="w-6 h-6 text-primary shrink-0 group-hover:rotate-12 transition-transform"
              strokeWidth={2.5}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
