import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../toggle-button/theme-toggle";
import {
  containerVariants,
  logoVariants,
  pathVariants,
  circleVariants,
  textVariants,
  progressVariants,
} from "./utils";
import classes from "./pre-loader.module.scss";

export function PreLoader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    const loadingSteps = [
      { progress: 25, text: "Loading assets..." },
      { progress: 50, text: "Setting up portfolio..." },
      { progress: 75, text: "Almost ready..." },
      { progress: 100, text: "Welcome!" },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ display: "none" }}>
        <ThemeToggle />
      </div>

      <motion.div
        className={classes.wrapper}
        variants={containerVariants}
        initial="initial"
        animate="initial"
        exit="exit"
      >
        <div className={classes.backgroundElements}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={classes.floatingElement}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className={classes.content}>
          <motion.div
            className={classes.logoContainer}
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 146.09 146.09"
              className={classes.logo}
            >
              <motion.g
                variants={pathVariants}
                initial="initial"
                animate="animate"
              >
                <motion.path
                  d="M112.37,73.05A38.65,38.65,0,0,0,73.91,34.53H44.21V48.17H73.57v0a24.85,24.85,0,1,1,0,49.69v0H44.21v13.65H73.88A38.65,38.65,0,0,0,112.37,73.05Z"
                  fill="var(--accent-color)"
                />
                <motion.path
                  d="M91.29,73.05c0-9.67-8.4-17.51-18.81-17.62H33.72V90.67H72.49C82.89,90.55,91.29,82.71,91.29,73.05Zm-19,7.2H44.21V65.84H72.27a7.51,7.51,0,0,1,7.78,7.21C80.05,77,76.57,80.25,72.27,80.25Z"
                  fill="var(--accent-color)"
                />
              </motion.g>
              <motion.circle
                variants={circleVariants}
                initial="initial"
                animate="animate"
                fill="none"
                stroke="var(--accent-color)"
                strokeMiterlimit={10}
                strokeWidth={4}
                cx="73.05"
                cy="73.05"
                r="70.55"
                style={{ transformOrigin: "center" }}
              />
            </motion.svg>

            <div className={classes.glowRing}></div>
          </motion.div>

          <motion.div
            className={classes.brandSection}
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className={classes.brandName}>
              <span className={classes.firstName}>Damilola</span>
              <span className={classes.lastName}>Akinlade</span>
            </h1>
            <p className={classes.brandTagline}>Software Engineer</p>
          </motion.div>

          <motion.div
            className={classes.progressSection}
            variants={progressVariants}
            initial="initial"
            animate="animate"
          >
            <div className={classes.loadingText}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={loadingText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {loadingText}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className={classes.progressContainer}>
              <div className={classes.progressTrack}>
                <motion.div
                  className={classes.progressBar}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <div className={classes.progressGlow}></div>
              </div>
            </div>

            <div className={classes.loadingDots}>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={classes.dot}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className={classes.footer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <p>Creating exceptional digital experiences</p>
          </motion.div>
        </div>

        <div className={classes.particles}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={classes.particle}
              animate={{
                y: [-100, -200],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
