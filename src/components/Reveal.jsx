import { motion } from "framer-motion";

export const FadeUp = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, className }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
    className={className}
  >
    {children}
  </motion.div>
);
