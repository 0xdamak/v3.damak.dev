import { motion } from "framer-motion";
import styles from "./card.module.scss";

export function Card({
  icon,
  title,
  description,
  color,
  gradient,
  technologies = [],
}) {
  return (
    <motion.div
      className={styles.container}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className={styles.header} style={{ background: gradient }}>
        <motion.div
          className={styles.iconContainer}
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className={styles.icon}>{icon}</div>
        </motion.div>

        <div className={styles.headerContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.technologiesSection}>
        <div className={styles.technologiesList}>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.text}
              className={styles.techItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
            >
              <div className={styles.techIcon}>{tech.icon}</div>
              <div className={styles.techContent}>
                <span className={styles.techName}>{tech.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.particles}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            style={{
              backgroundColor: color,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
