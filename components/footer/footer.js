import * as icons from "../../public/svg/icons";
import { motion } from "framer-motion";
import { SocialIcons } from "../ui/social-icons";
import classes from "./footer.module.scss";
import { navigationLinks } from "../navigation/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={classes.footer}
    >
      <div className={classes.backgroundElements}>
        <div className={classes.gradientOrb1}></div>
        <div className={classes.gradientOrb2}></div>
      </div>

      <div className={classes.container}>
        <motion.div
          className={classes.logoSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={classes.logo}>
            <icons.Logo />
          </div>
          <h3 className={classes.brandName}>Damilola Akinlade</h3>
          <p className={classes.tagline}>
            Software Engineer & Digital Craftsman
          </p>
        </motion.div>

        <div className={classes.footerContent}>
          <motion.div
            className={classes.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className={classes.quickLinks}>
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={classes.socialSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Connect</h4>
            <SocialIcons />
          </motion.div>
        </div>

        <motion.div
          className={classes.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={classes.copyright}>
            <p>&copy; {year} Damilola Akinlade. All rights reserved.</p>
            <p>
              Crafted with <span className={classes.heart}>❤️</span> using
              Next.js & Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
