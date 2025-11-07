import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ScrollRotate } from "react-scroll-rotate";
import { ThemeToggle } from "../ui/toggle-button/theme-toggle";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { navigationLinks } from "./utils";
import * as icons from "../../public/svg/icons";
import classes from "./navigation.module.scss";

export function Navigation() {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleScroll() {
      const sections = navigationLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {width > 640 && (
        <motion.nav
          className={classes.desktopNav}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={classes.navContainer}>
            <motion.div
              className={classes.logoSection}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ScrollRotate method="perc">
                <Link href="/">
                  <a className={classes.logoLink}>
                    <icons.Logo width="35px" fill="var(--accent-color)" />
                  </a>
                </Link>
              </ScrollRotate>
            </motion.div>

            <motion.div
              className={classes.navLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Link href={link.href}>
                    <a
                      className={`${classes.navLink} ${
                        activeSection === link.id ? classes.active : ""
                      }`}
                    >
                      <span className={classes.navIcon}>{link.icon}</span>
                      <span className={classes.navText}>{link.name}</span>
                      {activeSection === link.id && (
                        <motion.div
                          className={classes.navIndicator}
                          layoutId="navIndicator"
                        />
                      )}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={classes.themeToggleSection}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </motion.nav>
      )}

      {width <= 640 && (
        <>
          <motion.header
            className={classes.mobileHeader}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.mobileHeaderContent}>
              <motion.div
                className={classes.mobileLogo}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ScrollRotate method="perc">
                  <Link href="/">
                    <a>
                      <icons.Logo width="28px" fill="var(--accent-color)" />
                    </a>
                  </Link>
                </ScrollRotate>
              </motion.div>

              <motion.button
                className={`${classes.menuToggle} ${
                  isMenuOpen ? classes.open : ""
                }`}
                onClick={toggleMenu}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span></span>
                <span></span>
                <span></span>
              </motion.button>
            </div>
          </motion.header>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className={classes.mobileMenuOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={toggleMenu}
              >
                <motion.div
                  className={classes.mobileMenu}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={classes.mobileMenuHeader}>
                    <h3>Navigation</h3>
                    <button
                      className={classes.closeButton}
                      onClick={toggleMenu}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>

                  <div className={classes.mobileMenuLinks}>
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link href={link.href}>
                          <a
                            className={`${classes.mobileNavLink} ${
                              activeSection === link.id ? classes.active : ""
                            }`}
                            onClick={toggleMenu}
                          >
                            <span className={classes.mobileNavIcon}>
                              {link.icon}
                            </span>
                            <span className={classes.mobileNavText}>
                              {link.name}
                            </span>
                          </a>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className={classes.mobileMenuFooter}>
                    <ThemeToggle />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
