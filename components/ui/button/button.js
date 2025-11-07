import * as icons from "../../../public/svg/icons";
import { PuffLoader } from "react-spinners";
import { motion } from "framer-motion";
import Link from "next/link";
import classes from "./button.module.scss";

export function Button({
  href,
  children,
  target,
  variant = "primary",
  className = "",
  onClick,
  loading = false,
  disabled = false,
  type = "button",
  loadingText = "Loading...",
  icon,
}) {
  const buttonClass = `${classes.btn} ${
    variant === "outline" ? classes.outline : ""
  } ${loading || disabled ? classes.disabled : ""} ${className}`;

  const buttonContent = (
    <>
      {loading ? (
        <div className={classes.loadingContent}>
          <PuffLoader color="currentColor" size={20} />
          <span>{loadingText}</span>
        </div>
      ) : (
        <>
          {children}
          {variant === "primary" && !icon && (
            <span className={classes.arrow}>
              <icons.RightArrowCTA />
            </span>
          )}
          {icon && <span className={classes.icon}>{icon}</span>}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <motion.a
          whileHover={{
            scale: loading || disabled ? 1 : 1.01,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: loading || disabled ? 1 : 0.95 }}
          target={target}
          className={buttonClass}
        >
          {buttonContent}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={loading || disabled}
      type={type}
      whileHover={{
        scale: loading || disabled ? 1 : 1.05,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: loading || disabled ? 1 : 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
}
