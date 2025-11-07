import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import * as icons from "../../../public/svg/icons";
import classes from "./theme-toggle.module.scss";

export function ThemeToggle({ ...props }) {
  const [theme, setTheme] = useState("dark");

  const darkTheme = {
    "--emphasis": "#ffffff",
    "--border": "#353535",
    "--bg-primary": "#121212",
    "--bg-secondary": "#181818",
    "--bg-tertiary": "#353535",
    "--bg-black": "#000000",
    "--text-white": "#ffffff",
    "--text-primary": "#c4c4c4",
    "--text-secondary": "#9b9b9b",
    "--btn-text-color-hover": "#ffffff",
    " --box-shadow": "1px 1px 6px 0px rgb(0 0 0 / 25%)",
  };

  const lightTheme = {
    "--emphasis": "#404040",
    "--border": "#dddddd",
    "--bg-primary": "#ffffff",
    "--bg-secondary": "#f8f8f8",
    "--bg-tertiary": "#ededed",
    "--bg-black": "#f8f8f8",
    "--text-white": "#444444",
    "--text-primary": "#777777",
    "--text-secondary": "#000000",
    "--btn-text-color-hover": "var(--accent-color)",
    " --box-shadow": "1px 1px 6px 0px rgb(155 155 155 / 25%)",
  };

  const applyTheme = useCallback((nextTheme) => {
    const theme = nextTheme === "dark" ? darkTheme : lightTheme;
    Object.keys(theme).map((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, []);

  const handleTheme = useCallback(
    (mode) => {
      setTheme(mode);
      localStorage.setItem("damak", JSON.stringify({ theme: mode }));
      applyTheme(mode);
    },
    [applyTheme]
  );

  useEffect(() => {
    let user = localStorage.getItem("damak");
    user = JSON.parse(user);
    if (user) handleTheme(user.theme);
  }, [handleTheme]);

  return (
    <motion.div
      className={classes.wrapper}
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {theme === "light" && <icons.Moon onClick={() => handleTheme("dark")} />}
      {theme === "dark" && <icons.Sun onClick={() => handleTheme("light")} />}
    </motion.div>
  );
}
