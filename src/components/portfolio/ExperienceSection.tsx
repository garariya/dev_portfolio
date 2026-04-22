import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <SectionHeading line1="2 YEARS OF" line2="EXPERIENCE" />

      <div className="mt-20 space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bento-card p-10 flex flex-col md:flex-row justify-between gap-8 h-full"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-secondary" />
                <span className="text-[10px] font-black tracking-[0.3em] text-secondary uppercase">
                  {item.period}
                </span>
              </div>
              <h3 className="text-4xl font-black text-foreground uppercase tracking-tight leading-[0.9] group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-bold max-w-xl">
                {item.desc}
              </p>
            </div>
            
            <div className="shrink-0 flex items-start justify-end">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-black transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
