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
    <section id="thoughts" className="min-h-screen py-24">
      <SectionHeading line1="DESIGN" line2="THOUGHTS" />

      <div className="mt-14 space-y-4">
        {articles.map((a, i) => (
          <motion.a
            key={a.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="block group p-7 rounded-3xl border border-transparent hover:bg-surface hover:border-border transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-foreground max-w-md">
                {a.title}
              </h3>
              <ArrowUpRight
                className="w-5 h-5 text-primary shrink-0 group-hover:rotate-12 transition-transform"
                strokeWidth={2.5}
              />
            </div>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
              {a.desc}
            </p>
            <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground/70">
              <span>{a.date}</span>
              <span>{a.read}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ThoughtsSection;
