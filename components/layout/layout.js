import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "../navigation";
import { Footer } from "../footer";
import { containerVariants, pageTransitionVariants } from "./utils";
import classes from "./layout.module.scss";

export function Layout({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setShowScrollToTop(scrollTop > 800);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={classes.container}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className={classes.scrollProgressContainer}>
        <motion.div
          className={classes.scrollProgress}
          style={{
            scaleX: scrollProgress / 100,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className={classes.backgroundElements}>
        <div className={classes.particles}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={classes.particle}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className={classes.gradientOrbs}>
          <div className={classes.orb1} />
          <div className={classes.orb2} />
          <div className={classes.orb3} />
        </div>
      </div>

      <div className={classes.layoutWrapper}>
        <Navigation />

        <motion.main
          className={classes.mainContent}
          variants={pageTransitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
        <Footer />

        <AnimatePresence>
          {showScrollToTop && (
            <motion.button
              className={classes.scrollToTop}
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            className={classes.pageTransitionOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
