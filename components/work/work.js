import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/section/";
import { ProjectCard } from "../ui/project-card";
import {
  categories,
  filteredProjects,
  containerVariants,
  itemVariants,
} from "./utils";
import classes from "./work.module.scss";

export function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Section
      id="work"
      heading="My Work"
      tagline="Building digital experiences that matter"
      bgText="portfolio"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={classes.container}
      >
        <motion.div variants={itemVariants} className={classes.filterSection}>
          <div className={classes.filters}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`${classes.filterButton} ${
                  activeFilter === category.id ? classes.active : ""
                }`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.label}
                <span className={classes.filterCount}>{category.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className={classes.projectsSection}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className={classes.projectsGrid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects(activeFilter).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  hoveredProject={hoveredProject}
                  onMouseEnter={setHoveredProject}
                  onMouseLeave={setHoveredProject}
                  variant="work"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Section>
  );
}
