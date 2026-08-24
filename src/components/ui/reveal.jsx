// eslint-disable-next-line no-unused-vars -- `motion` is used as the <motion.div> JSX member expression below
import { motion } from "motion/react";

export default function Reveal({ children, className, delay = 0, y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}