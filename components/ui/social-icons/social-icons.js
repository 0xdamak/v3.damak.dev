import * as icons from "../../../public/svg/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import classes from "./social-icons.module.scss";

export const socialLinks = [
  {
    href: "https://github.com/0xdamak",
    icon: <icons.Github />,
    name: "GitHub",
  },

  {
    href: "https://www.linkedin.com/in/0xdamak",
    icon: <icons.Linkedin />,
    name: "LinkedIn",
  },
];

export function SocialIcons({ delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: delay,
      }}
      className={classes["social-icons"]}
    >
      {socialLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <a target="_blank">{link.icon}</a>
        </Link>
      ))}
    </motion.div>
  );
}
