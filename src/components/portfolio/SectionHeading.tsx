import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  line1: string;
  line2: string;
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({ line1, line2, className = "", children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      <div className="absolute -left-10 top-0 w-1 h-full bg-primary/20" />
      <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-foreground tracking-tighter">
        {line1}
      </h2>
      <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-outline opacity-30 tracking-tighter">
        {line2}
      </h2>
      {children}
    </motion.div>
  );
};

export default SectionHeading;
