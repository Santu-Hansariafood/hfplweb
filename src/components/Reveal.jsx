import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Reveal = ({ children, delay = 0, y = 30, className = "", once = true }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealStagger = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px 0px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
