import { motion } from "framer-motion";
import classes from "./section.module.scss";

export function Section({ children, id, heading, tagline }) {
  return (
    <section id={id} className={classes.section}>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={classes.heading}
      >
        <h2>{heading}</h2>
        {/* <h3>{tagline}</h3> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className={classes.content}
      >
        {children}
      </motion.div>
    </section>
  );
}
