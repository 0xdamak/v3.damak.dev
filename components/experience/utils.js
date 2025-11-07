// Import company logos
import Dot from "../../public/images/dot.jpg";
import Oneflare from "../../public/images/oneflare.jpg";
import Blucolar from "../../public/images/blucolar.jpeg";
import Swirge from "../../public/images/swirge.png";
import Reliance from "../../public/images/reliance.jpg";
import Hng from "../../public/images/hng.jpg";

export const experiences = [
  {
    id: "dot",
    company: "Dot",
    position: "Senior Frontend Developer",
    location: "Lagos, Nigeria",
    period: "2023 - Present",
    duration: "2+ years",
    employmentType: "Full-time",
    workType: "Remote",
    logo: Dot,
    color: "#1db954",
    gradient: "linear-gradient(135deg, #1db954, #4ecdc4)",
    achievements: [
      "Spearheaded development of a comprehensive retail health insurance application",
      "Implemented responsive UI components using Next.js and React, serving 10,000+ users",
      "Optimized application performance, reducing load times by 40%",
      "Collaborated with cross-functional teams to deliver pixel-perfect designs",
      "Mentored junior developers and established coding best practices",
    ],
    technologies: ["Next.js", "React", "TypeScript", "SCSS", "REST APIs"],
  },
  {
    id: "oneflare",
    company: "One Flare",
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    period: "2022",
    duration: "2 years",
    employmentType: "Full-time",
    workType: "Remote",
    logo: Oneflare,
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b, #feca57)",
    achievements: [
      "Modernized legacy codebases, improving performance and maintainability",
      "Developed reusable component libraries reducing development time by 30%",
      "Integrated third-party APIs and services for enhanced functionality",
      "Implemented automated testing strategies, reducing bugs by 50%",
      "Collaborated with design teams to create intuitive user experiences",
    ],
    technologies: ["React", "JavaScript", "CSS3", "RESTful APIs", "Git"],
  },
  {
    id: "blucolar",
    company: "BluColar",
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    period: "2022",
    duration: "6 months",
    employmentType: "Contract",
    workType: "Remote",
    logo: Blucolar,
    color: "#4ecdc4",
    gradient: "linear-gradient(135deg, #4ecdc4, #45b7d1)",
    achievements: [
      "Built high-performance web applications for diverse client portfolios",
      "Created responsive, mobile-first interfaces with modern design principles",
      "Participated in full software development lifecycle from conception to deployment",
      "Optimized applications for maximum speed and scalability",
      "Delivered projects on time with 100% client satisfaction rate",
    ],
    technologies: ["React", "JavaScript", "SCSS", "APIs", "Responsive Design"],
  },
  {
    id: "swirge",
    company: "Swirge",
    position: "Frontend Developer",
    location: "Abuja, Nigeria",
    period: "2021",
    duration: "8 months",
    employmentType: "Full-time",
    workType: "Remote",
    logo: Swirge,
    color: "#845ec2",
    gradient: "linear-gradient(135deg, #845ec2, #b39bc8)",
    achievements: [
      "Developed user interfaces for innovative social platform features",
      "Conducted comprehensive testing and quality assurance procedures",
      "Integrated complex third-party services and APIs",
      "Contributed to platform scalability supporting thousands of users",
      "Collaborated with product team to implement user-centric features",
    ],
    technologies: ["React", "JavaScript", "CSS", "API Integration", "Testing"],
  },
  {
    id: "hng",
    company: "HNG Internship",
    position: "Frontend Developer Intern",
    location: "Lagos, Nigeria",
    period: "2021",
    duration: "3 months",
    employmentType: "Internship",
    workType: "Remote",
    logo: Hng,
    color: "#00d2ff",
    gradient: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
    achievements: [
      "Built responsive interfaces for Zuri Chat workspace platform",
      "Developed File Manager plugin with team of 5 developers",
      "Gained experience in collaborative development workflows",
      "Contributed to bug fixes and feature enhancements",
      "Learned industry best practices and modern development tools",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git", "APIs"],
  },
  {
    id: "ris",
    company: "Reliance Infosystems",
    position: "Web Development Intern",
    location: "Lagos, Nigeria",
    period: "2019",
    duration: "6 months",
    employmentType: "Internship",
    workType: "On-site",
    logo: Reliance,
    color: "#f093fb",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    achievements: [
      "Built company websites using WordPress and custom themes",
      "Created engaging UI designs and user experience flows",
      "Designed graphics and social media content for marketing campaigns",
      "Learned fundamentals of web development and design principles",
      "Gained experience in client communication and project management",
    ],
    technologies: ["WordPress", "HTML", "CSS", "UI Design", "Graphics Design"],
  },
];

export const careerHighlights = [
  {
    id: "leadership",
    icon: "🎯",
    title: "Leadership",
    description:
      "Led development teams and mentored junior developers across multiple projects",
  },
  {
    id: "innovation",
    icon: "🚀",
    title: "Innovation",
    description:
      "Introduced modern development practices and improved application performance",
  },
  {
    id: "collaboration",
    icon: "🤝",
    title: "Collaboration",
    description:
      "Successfully worked with cross-functional teams to deliver complex projects",
  },
  {
    id: "growth",
    icon: "📈",
    title: "Growth",
    description:
      "Continuously evolved from intern to senior engineer with proven track record",
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
