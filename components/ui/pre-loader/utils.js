export const containerVariants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

export const logoVariants = {
  initial: {
    scale: 0,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

export const pathVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const circleVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
    rotate: -90,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      delay: 0.8,
      ease: "easeInOut",
    },
  },
};

export const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.2,
    },
  },
};

export const progressVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.4,
    },
  },
};
