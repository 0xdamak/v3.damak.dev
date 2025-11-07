import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/section/";
import {
  experiences,
  careerHighlights,
  containerVariants,
  itemVariants,
} from "./utils";
import Image from "next/image";
import classes from "./experience.module.scss";

export function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <Section
      id="experience"
      heading="Professional Journey"
      tagline="Building expertise through diverse experiences"
      bgText="experience"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={classes.container}
      >
        <motion.div
          variants={itemVariants}
          className={classes.experienceSection}
        >
          <div className={classes.timeline}>
            <motion.div
              variants={itemVariants}
              className={classes.timelineTrack}
            />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`${classes.timelineItem} ${
                  activeExperience === index ? classes.active : ""
                }`}
                onClick={() => setActiveExperience(index)}
              >
                <div
                  className={classes.timelineMarker}
                  style={{ background: experience.gradient }}
                >
                  <span className={classes.timelineLogo}>
                    <Image src={experience.logo} alt={experience.company} />
                  </span>
                </div>

                <div className={classes.timelineContent}>
                  <div className={classes.timelineHeader}>
                    <div className={classes.timelineTitle}>
                      <h3>{experience.company}</h3>
                      <h4>{experience.position}</h4>
                    </div>
                    <div className={classes.timelineMeta}>
                      <span className={classes.period}>
                        {experience.period}
                      </span>
                      <span className={classes.duration}>
                        {experience.duration}
                      </span>
                      <span className={classes.employmentType}>
                        {experience.employmentType}
                      </span>
                      <span className={classes.workType}>
                        {experience.workType}
                      </span>
                      <span className={classes.location}>
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeExperience === index && (
                      <motion.div
                        key={`details-${experience.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={classes.timelineDetails}
                      >
                        <div className={classes.achievements}>
                          <h5>Key Achievements</h5>
                          <ul>
                            {experience.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className={classes.technologies}>
                          <h5>Technologies Used</h5>
                          <div className={classes.techTags}>
                            {experience.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                className={classes.techTag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={classes.highlightsSection}
        >
          <h3 className={classes.highlightsTitle}>Career Highlights</h3>
          <div className={classes.highlightsGrid}>
            {careerHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                className={classes.highlightCard}
                whileHover={{
                  y: -2,
                  transition: { type: "spring", stiffness: 300, duration: 0.1 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={classes.highlightIcon}>{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
