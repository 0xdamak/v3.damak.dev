export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

export function cardVariants({ index }) {
  return {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        type: "tween",
        duration: 0.3,
      },
    },
  };
}

export function getStatusColor(status) {
  switch (status) {
    case "Live":
      return "var(--accent-color)";
    case "Beta":
      return "#f39c12";
    case "Development":
      return "#3498db";
    case "Prototype":
      return "#9b59b6";
    default:
      return "var(--text-primary)";
  }
}
