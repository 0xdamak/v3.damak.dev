import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { Button } from "../ui/button";
import { Programmer } from "../../public/svg/images";
import {
  containerVariants,
  itemVariants,
  imageVariants,
  RESUME_LINK,
} from "./utils";
import classes from "./about.module.scss";

export function About() {
  return (
    <Section
      id="about"
      heading="About Me"
      tagline="Get to know me better"
      bgText="about me"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={classes.container}
      >
        <div className={classes.body}>
          <div className={classes.content}>
            <motion.div
              variants={itemVariants}
              className={classes.introduction}
            >
              <motion.p variants={itemVariants} className={classes.description}>
                <span className={classes.greeting}>
                  Hello! I&apos;m{" "}
                  <span className={classes.name}>Damilola Akinlade</span>
                  <motion.span
                    className={classes.wave}
                    animate={{
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    👋
                  </motion.span>
                </span>
                <br />
                I&apos;m a{" "}
                <span className={classes.highlight}>
                  Software Engineer
                </span>{" "}
                based in{" "}
                <span className={classes.location}>Lagos, Nigeria</span>. With
                over 4 years of experience, I specialize in crafting exceptional
                digital experiences that combine beautiful design with robust
                functionality.
              </motion.p>

              <motion.p variants={itemVariants} className={classes.description}>
                My superpower lies in transforming complex ideas into intuitive,
                user-friendly interfaces using modern web technologies. I&apos;m
                particularly passionate about React, Next.js, and creating
                pixel-perfect designs with vanilla CSS and SCSS.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className={classes.actions}>
              <Button
                href={RESUME_LINK}
                target="_blank"
                className={classes.primaryCta}
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className={classes.secondaryCta}
              >
                Let&apos;s Connect
              </Button>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className={classes.imageSection}>
            <div className={classes.imageContainer}>
              <div className={classes.imageBackground} />
              <motion.div
                className={classes.image}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Programmer />
              </motion.div>

              <motion.div
                className={classes.floatingElement1}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💻
              </motion.div>
              <motion.div
                className={classes.floatingElement2}
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                ⚡
              </motion.div>
              <motion.div
                className={classes.floatingElement3}
                animate={{
                  y: [-8, 8, -8],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                🎨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
