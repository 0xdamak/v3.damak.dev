export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "damak.dev@gmail.com",
    href: "mailto:damak.dev@gmail.com",
    description: "Drop me an email anytime",
  },
];
