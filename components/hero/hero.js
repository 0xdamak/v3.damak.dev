import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { SocialIcons } from "../ui/social-icons";
import classes from "./hero.module.scss";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    },
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3.5,
      },
    },
  };

  return (
    <header id="home" className={classes.header}>
      <div className={classes.heroContent}>
        <div className={classes.intro}>
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className={classes.name}
          >
            <span className={classes.firstName}>Damak</span>
            <motion.span
              className={classes.dot}
              animate={{
                color: ["#1db954", "#ff6b6b", "#4ecdc4", "#45b7d1", "#1db954"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              .
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={classes.titleSection}
        >
          <motion.div variants={itemVariants} className={classes.tagLine}>
            <h1>
              <span className={classes.highlight}>
                <motion.span
                  className={classes.underline}
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                />
                Software
              </span>{" "}
              <span className={classes.developer}>Engineer</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className={classes.subtitle}>
            <h3>
              Crafting exceptional digital experiences with{" "}
              <span className={classes.tech}>React</span>,{" "}
              <span className={classes.tech}>Next.js</span> &{" "}
              <span className={classes.tech}>modern web technologies</span>
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className={classes.ctaSection}>
            <Button href="#contact" className={classes.primaryCta}>
              Let&apos;s Work Together
            </Button>
            <Button href="#about" variant="outline">
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        <div className={classes.floatingElements}>
          <motion.div
            className={`${classes.floatingElement} ${classes.element1}`}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`${classes.floatingElement} ${classes.element2}`}
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`${classes.floatingElement} ${classes.element3}`}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 4 }}
          className={classes.socialSection}
        >
          <SocialIcons delay={4} />
        </motion.div>
      </div>

      <div className={classes.backgroundElements}>
        <div className={classes.gradient1} />
        <div className={classes.gradient2} />
        <div className={classes.grid} />
      </div>
    </header>
  );
}
