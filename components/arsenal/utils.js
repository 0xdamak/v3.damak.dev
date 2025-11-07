import * as icons from "../../public/svg/icons";

export const cards = [
  {
    id: "core",
    title: "Core",
    description: "Building blocks of modern web development",
    icon: <icons.XML />,
    color: "#e34f26",
    gradient: "linear-gradient(135deg, #e34f26, #f16529)",
    technologies: [
      { icon: <icons.Html />, text: "HTML5" },
      { icon: <icons.CSS />, text: "CSS3" },
      { icon: <icons.SCSS />, text: "SCSS" },
      {
        icon: <icons.Javascript />,
        text: "JavaScript",
      },
      {
        icon: <icons.Typescript />,
        text: "TypeScript",
      },
    ],
  },

  {
    id: "frameworks-libraries",
    title: "Frameworks & Libraries",
    description: "Modern tools for scalable applications",
    icon: <icons.JSON />,
    color: "#61dafb",
    gradient: "linear-gradient(135deg, #61dafb, #21759b)",
    technologies: [
      { icon: <icons.React />, text: "React" },
      {
        icon: <icons.NextJS />,
        text: "Next.js",
      },
      {
        icon: <icons.Angular />,
        text: "Angular",
      },
      {
        icon: <icons.Vue />,
        text: "Vue.js",
      },
      {
        icon: <icons.ElectronJS />,
        text: "Electron",
      },
      { icon: <icons.Astro />, text: "Astro" },
    ],
  },

  {
    id: "tools-platforms",
    title: "Tools & Platforms",
    description: "Development ecosystem and deployment",
    icon: <icons.Tools />,
    color: "#f05032",
    gradient: "linear-gradient(135deg, #f05032, #ff6b6b)",
    technologies: [
      { icon: <icons.Git />, text: "Git" },
      {
        icon: <icons.Firebase />,
        text: "Firebase",
      },
      { icon: <icons.Vercel />, text: "Vercel" },
      { icon: <icons.Redux />, text: "Redux" },
      {
        icon: <icons.Framer />,
        text: "Framer Motion",
      },
      {
        icon: <icons.Tailwind />,
        text: "Tailwind",
      },
    ],
  },
];

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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
