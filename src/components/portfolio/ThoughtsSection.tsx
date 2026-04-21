import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const articles = [
  {
    title: "How AI Changes Development",
    desc: "From copilots to autonomous agents — a look at what shipping software in 2025 actually feels like.",
    date: "Mar 12, 2025",
    read: "8 min read",
  },
  {
    title: "Building Faster with Framer",
    desc: "Why pairing Framer with a real codebase has become my favorite stack for shipping landing pages in hours.",
    date: "Feb 02, 2025",
    read: "6 min read",
  },
  {
    title: "Why Design Sells Products",
    desc: "Design is not decoration. It is the most leveraged growth channel a young product can invest in.",
    date: "Jan 18, 2025",
    read: "5 min read",
  },
];

const ThoughtsSection = () => {
  return (
    <section id="thoughts" className="py-16">
      <SectionHeading line1="DESIGN" line2="THOUGHTS" />

      <div className="mt-20 space-y-4">
        {articles.map((a, i) => (
          <motion.a
            key={a.title}
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block group bento-card p-10 flex flex-col md:flex-row justify-between gap-12"
          >
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                  {a.date}
                </span>
                <div className="w-8 h-[2px] bg-white/5 group-hover:bg-primary transition-colors" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase opacity-40">
                  {a.read}
                </span>
              </div>
              
              <h3 className="text-4xl font-black text-foreground uppercase tracking-tight leading-[0.9] group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed font-bold max-w-2xl">
                {a.desc}
              </p>
            </div>

            <div className="shrink-0 flex items-start justify-end">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-black transition-colors" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ThoughtsSection;
