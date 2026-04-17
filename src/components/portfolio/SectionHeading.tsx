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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <h2 className="text-display text-[clamp(3rem,7vw,6rem)] text-foreground">
        {line1}
      </h2>
      <h2 className="text-display text-[clamp(3rem,7vw,6rem)] text-muted-display">
        {line2}
      </h2>
      {children}
    </motion.div>
  );
};

export default SectionHeading;
