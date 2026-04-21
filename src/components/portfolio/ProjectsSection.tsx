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
    <section id="projects" className="py-16">
      <SectionHeading line1="SELECTED" line2="WORKS" />

      <div className="mt-20 space-y-12">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bento-card p-10 flex flex-col lg:flex-row gap-12"
          >
            {/* Project Image Placeholder / Visual */}
            <div className="relative shrink-0 w-full lg:w-[400px] aspect-[16/10] bg-black/40 rounded-3xl overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-neon opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[120px] font-black text-white/5 group-hover:scale-110 group-hover:text-primary transition-all duration-700">
                  {p.title.charAt(0)}
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="badge-orange">{p.tag}</span>
                  <div className="h-[1px] w-8 bg-white/10" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight leading-[0.9]">
                  {p.title}
                </h3>
                <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-bold max-w-xl">
                  {p.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors">
                  CASE STUDY
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
